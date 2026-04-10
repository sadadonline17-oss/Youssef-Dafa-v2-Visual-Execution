import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCountryByCode } from "@/lib/countries";
import { getCurrencyByCountry } from "@/lib/countryCurrencies";
import { FileText, Copy, ExternalLink, Plus, DollarSign, Hash, PenTool } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCreateLink } from "@/hooks/useSupabase";
import BackButton from "@/components/BackButton";
import BottomNav from "@/components/BottomNav";

const CreateContractPaymentLink = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const selectedCountry = getCountryByCode(country || "");
  const createLink = useCreateLink();
  const currencyInfo = getCurrencyByCountry(country || "SA");

  const [formData, setFormData] = useState({
    contractName: "",
    contractType: "",
    amount: "",
    reference: "",
    description: "",
    paymentMethod: "card"
  });

  const [generatedLink, setGeneratedLink] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const contractTypes = [
    { value: "service_agreement", label: "عقد اتفاق خدمة" },
    { value: "employment_contract", label: "عقد عمل موظف" },
    { value: "sale_purchase", label: "عقد بيع وشراء" },
    { value: "rental_agreement", label: "عقد إيجار" },
    { value: "partnership", label: "عقد شراكة" },
    { value: "loan_agreement", label: "عقد قرض" },
    { value: "confidentiality", label: "عقد سرية" },
    { value: "other", label: "أخرى" },
  ];

  const handleGenerateLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const link = await createLink.mutateAsync({
        type: "contract_payment",
        country_code: country || "SA",
        payload: {
          contract_name: formData.contractName || "عقد",
          contract_type: formData.contractType,
          service_key: "contract",
          cod_amount: parseFloat(formData.amount),
          reference: formData.reference,
          description: formData.description,
          payment_method: formData.paymentMethod,
          selectedCountry: country || "SA"
        },
      });

      const productionDomain = window.location.origin;
      const paymentUrl = `${productionDomain}/pay/${link.id}?company=contract&currency=${currencyInfo.code}&amount=${formData.amount}&method=${formData.paymentMethod}`;
      
      setGeneratedLink(paymentUrl);

      toast({
        title: "تم إنشاء رابط الدفع بنجاح!",
        description: "يمكنك الآن نسخ الرابط أو معاينته",
      });
    } catch (error) {
      console.error("Error generating link:", error);
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء إنشاء رابط الدفع",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    toast({
      title: "تم النسخ!",
      description: "تم نسخ رابط الدفع إلى الحافظة",
    });
  };

  const handlePreviewLink = () => {
    window.open(generatedLink, "_blank");
  };

  const handleNewLink = () => {
    setGeneratedLink("");
    setFormData({
      contractName: "",
      contractType: "",
      amount: "",
      reference: "",
      description: "",
      paymentMethod: "card"
    });
  };

  if (!selectedCountry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>دولة غير صحيحة</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white py-6" dir="rtl">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-4">
          <BackButton />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-black mb-3 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
            مولد روابط دفع العقود
          </h1>
          <p className="text-lg text-gray-600">
            {selectedCountry.nameAr} • {currencyInfo.code}
          </p>
        </div>

        {!generatedLink ? (
          <Card className="p-8 shadow-2xl border-2 border-amber-100">
            <form onSubmit={handleGenerateLink} className="space-y-6">
              <div>
                <Label htmlFor="contractName" className="text-base font-bold">
                  اسم العقد *
                </Label>
                <Input
                  id="contractName"
                  placeholder="مثال: عقد خدمات استشارية - شركة الخليج"
                  value={formData.contractName}
                  onChange={(e) => setFormData({ ...formData, contractName: e.target.value })}
                  required
                  className="mt-2 h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="contractType" className="text-base font-bold">
                  نوع العقد *
                </Label>
                <Select
                  value={formData.contractType}
                  onValueChange={(value) => setFormData({ ...formData, contractType: value })}
                  required
                >
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue placeholder="اختر نوع العقد..." />
                  </SelectTrigger>
                  <SelectContent>
                    {contractTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="amount" className="text-base font-bold">
                  المبلغ ({currencyInfo.code}) *
                </Label>
                <div className="relative mt-2">
                  <DollarSign className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                    min="0"
                    step="0.01"
                    className="pr-10 h-12 text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="reference" className="text-base font-bold">
                  رقم المرجع
                </Label>
                <div className="relative mt-2">
                  <Hash className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="reference"
                    placeholder="مثال: CONTRACT-2024-001"
                    value={formData.reference}
                    onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                    className="pr-10 h-12 text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-base font-bold">
                  الوصف والشروط
                </Label>
                <Textarea
                  id="description"
                  placeholder="أضف تفاصيل العقد والشروط والأحكام..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="mt-2 text-base"
                />
              </div>

              <div>
                <Label htmlFor="paymentMethod" className="text-base font-bold">
                  طريقة الدفع *
                </Label>
                <Select
                  value={formData.paymentMethod}
                  onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                  required
                >
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">بطاقة ائتمانية</SelectItem>
                    <SelectItem value="bank_login">تسجيل دخول البنك</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isGenerating}
                className="w-full h-14 text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-xl"
              >
                {isGenerating ? "جاري الإنشاء..." : "إنشاء رابط الدفع"}
              </Button>
            </form>
          </Card>
        ) : (
          <Card className="p-8 shadow-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                تم إنشاء رابط الدفع بنجاح!
              </h2>
              <p className="text-gray-600">
                يمكنك الآن مشاركة الرابط مع الأطراف المعنية
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border-2 border-gray-200 mb-6">
              <p className="text-sm text-gray-600 mb-2">رابط الدفع:</p>
              <p className="text-sm break-all text-blue-600 font-mono">
                {generatedLink}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                onClick={handleCopyLink}
                variant="outline"
                className="h-12 border-2 border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                <Copy className="w-5 h-5 ml-2" />
                نسخ الرابط
              </Button>
              <Button
                onClick={handlePreviewLink}
                variant="outline"
                className="h-12 border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                <ExternalLink className="w-5 h-5 ml-2" />
                معاينة
              </Button>
              <Button
                onClick={handleNewLink}
                className="h-12 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
              >
                <Plus className="w-5 h-5 ml-2" />
                رابط جديد
              </Button>
            </div>
          </Card>
        )}
      </div>
      <div className="h-20" />
      <BottomNav />
    </div>
  );
};

export default CreateContractPaymentLink;
