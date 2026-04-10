import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import { getEntityVisualSpec } from '../lib/entityVisualSpecs';

interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  entityId?: string;
}

export const DynamicMetaTags: React.FC<MetaProps> = ({ 
  title: propTitle, 
  description: propDescription, 
  image: propImage,
  entityId: propEntityId 
}) => {
  const location = useLocation();
  const params = useParams();
  const [meta, setMeta] = useState({
    title: propTitle || 'Secure GCC Payment Gateway',
    description: propDescription || 'Unified secure payment system for GCC banking and logistics.',
    image: propImage || '/assets/og/og-default.jpg',
    url: window.location.href
  });

  useEffect(() => {
    // Detect entity from URL if not provided
    const urlParams = new URLSearchParams(location.search);
    const detectedId = propEntityId || 
                      params.id || 
                      urlParams.get('entity') || 
                      urlParams.get('company') || 
                      urlParams.get('service');

    if (detectedId) {
      const spec = getEntityVisualSpec(detectedId);
      if (spec) {
        const entityName = spec.entityNameAr || spec.entityNameEn;
        const newTitle = propTitle || `نظام الدفع الآمن - ${entityName}`;
        
        // Official-style descriptions based on category
        let categoryDesc = '';
        if (spec.category === 'bank') {
          categoryDesc = `بوابة الدفع الإلكترونية الرسمية لعملاء ${entityName}. دفع سريع وآمن لجميع العمليات البنكية.`;
        } else if (spec.category === 'shipping') {
          categoryDesc = `سداد رسوم الشحن والخدمات اللوجستية لشركة ${entityName}. تتبع شحنتك وادفع بأمان.`;
        } else if (spec.category === 'government') {
          categoryDesc = `المنصة الموحدة لخدمات ${entityName}. إنجاز المعاملات الحكومية والدفع الإلكتروني الموثوق.`;
        } else {
          categoryDesc = `نظام الدفع الموحد لخدمات ${entityName}. أمان وحماية لجميع تعاملاتك المالية.`;
        }

        const newDesc = propDescription || categoryDesc;
        const newImage = propImage || spec.assets.ogImage || `/assets/og/og-${detectedId}.jpg`;

        setMeta({
          title: newTitle,
          description: newDesc,
          image: newImage,
          url: window.location.href
        });
      }
    }
  }, [location, params, propTitle, propDescription, propImage, propEntityId]);

  // Ensure image URL is absolute for OG tags
  const absoluteImageUrl = meta.image.startsWith('http') 
    ? meta.image 
    : `${window.location.origin}/${meta.image.replace(/^\//, '')}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={absoluteImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={absoluteImageUrl} />
    </Helmet>
  );
};
