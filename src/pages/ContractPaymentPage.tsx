import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileText, CreditCard, Building2, User, Phone, Hash, ArrowLeft, Calendar } from "lucide-react";
import BrandedTopBar from "@/components/BrandedTopBar";
import BrandedCarousel from "@/components/BrandedCarousel";
import PaymentMetaTags from "@/components/PaymentMetaTags";
import { getServiceBranding } from "@/lib/serviceLogos";
import { useAutoApplyIdentity } from "@/hooks/useAutoApplyIdentity";

const ContractPaymentPage = () => {
  const navigate = useNavigate();
  const { entity, identity } = useAutoApplyIdentity();
  
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [contractType, setContractType] = useState("");
  const [contractNumber, setContractNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const serviceKey = "contracts";
  const branding = getServiceBranding(serviceKey);

  const contractTypes = [
    { id: "rental", nameAr: "عقد إيجار", nameEn: "Rental Contract" },
    { id: "employment", nameAr: "عقد عمل", nameEn: "Employment Contract" },
    { id: "service", nameAr: "عقد خدمات", nameEn: "Service Contract" },
    { id: "partnership", nameAr: "عقد شراكة", nameEn: "Partnership Contract" },
    { id: "purchase", nameAr: "عقد بيع", nameEn: "Purchase Contract" },
    { id: "maintenance", nameAr: "عقد صيانة", nameEn: "Maintenance Contract" },
    { id: "consulting", nameAr: "عقد استشاري", nameEn: "Consulting Contract" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
  };

  return (
    <>
      <PaymentMetaTags
        serviceName="دفع العقود"
        serviceKey={serviceKey}
        amount={amount ? `${amount} ريال` : ""}
        title="دفع العقود - سداد عقود رسمية"
        description="ادفع مستحقات العقود الرسمية بسهولة وأمان"
      />

      <BrandedTopBar 
        serviceKey={serviceKey}
        serviceName="دفع العقود"
        showBackButton={true}
        showCarousel={false}
      />

      <BrandedCarousel serviceKey={serviceKey} className="mb-0" />

      <div 
        className="min-h-screen py-6 sm:py-8" 
        dir="rtl"
        style={{
          background: identity ? `linear-gradient(135deg, ${identity.colors.background}, ${identity.colors.secondary}15)` : `linear-gradient(135deg, #E6E6FF, #0000CD15)`,
          fontFamily: identity?.fonts[0] || 'Cairo, Tajawal, sans-serif'
        }}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto">
            <Card 
              className="p-4 sm:p-8 shadow-2xl border-t-4 relative overflow-hidden" 
              style={{ 
                borderTopColor: identity?.colors.primary || '#000080',
                boxShadow: '0 20px 60px -15px rgba(0, 0, 128, 0.3)',
                borderRadius: '16px',
                background: '#FFFFFF'
              }}
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${identity?.colors.primary || '#000080'}, ${identity?.colors.secondary || '#0000CD'})`
                }}
              />

              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div>
                    <h1 
                      className="text-xl sm:text-3xl font-bold mb-1"
                      style={{ 
                        color: identity?.colors.primary || '#000080',
                        fontFamily: identity?.fonts[0] || 'Cairo, Tajawal, sans-serif'
                      }}
                    >
                      دفع العقود الرسمية
                    </h1>
                    <p className="text-sm text-muted-foreground">سداد مستحقات العقود بأمان</p>
                  </div>

                  <div
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${identity?.colors.primary || '#000080'}, ${identity?.colors.secondary || '#0000CD'})`,
                    }}
                  >
                    <FileText className="w-7 h-7 sm:w-10 sm:h-10 style={{ color: primaryColor }}" />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <Label className="mb-2 text-sm font-bold flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      نوع العقد *
                    </Label>
                    <Select value={contractType} onValueChange={setContractType}>
                      <SelectTrigger className="h-12 border-2">
                        <SelectValue placeholder="اختر نوع العقد" />
                      </SelectTrigger>
                      <SelectContent>
                        {contractTypes.map((contract) => (
                          <SelectItem key={contract.id} value={contract.id}>
                            {contract.nameAr}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="mb-2 text-sm font-bold flex items-center gap-2">
                      <Hash className="w-4 h-4" />
                      رقم العقد *
                    </Label>
                    <Input
                      value={contractNumber}
                      onChange={(e) => setContractNumber(e.target.value)}
                      placeholder="أدخل رقم العقد"
                      className="h-12 border-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="mb-2 text-sm font-bold flex items-center gap-2">
                      <User className="w-4 h-4" />
                      الاسم الكامل *
                    </Label>
                    <Input
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="أدخل اسمك الكامل"
                      className="h-12 border-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="mb-2 text-sm font-bold flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      رقم الجوال *
                    </Label>
                    <Input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className="h-12 border-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="mb-2 text-sm font-bold flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      تاريخ الاستحقاق *
                    </Label>
                    <Input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      className="h-12 border-2"
                      required
                    />
                  </div>

                  <div>
                    <Label className="mb-2 text-sm font-bold flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      المبلغ المستحق *
                    </Label>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="أدخل المبلغ"
                      className="h-12 border-2"
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>

                  <div>
                    <Label className="mb-2 text-sm font-bold">ملاحظات (اختياري)</Label>
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="أضف أي ملاحظات إضافية"
                      className="min-h-[80px] border-2"
                    />
                  </div>
                </div>

                <div 
                  className="p-4 rounded-xl mb-6"
                  style={{
                    background: `${identity?.colors.primary || '#000080'}10`,
                    border: `1px solid ${identity?.colors.primary || '#000080'}30`
                  }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>نوع العقد</span>
                      <span className="font-semibold">
                        {contractType ? contractTypes.find(c => c.id === contractType)?.nameAr : '---'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>رقم العقد</span>
                      <span className="font-semibold">{contractNumber || '---'}</span>
                    </div>
                    <div className="h-px bg-border my-2" />
                    <div className="flex items-center justify-between">
                      <span className="font-bold">المبلغ الإجمالي</span>
                      <span 
                        className="text-2xl font-bold"
                        style={{ color: identity?.colors.primary || '#000080' }}
                      >
                        {amount ? `${amount} ريال` : '---'}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-7 style={{ color: primaryColor }} font-bold shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${identity?.colors.primary || '#000080'}, ${identity?.colors.secondary || '#0000CD'})`,
                    fontFamily: identity?.fonts[0] || 'Cairo, Tajawal, sans-serif'
                  }}
                  disabled={!customerName || !customerPhone || !contractType || !contractNumber || !amount || !dueDate}
                >
                  <span className="ml-2">التالي - إتمام السداد</span>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  🔒 جميع المعاملات مشفرة وآمنة ومطابقة للأنظمة
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContractPaymentPage;
