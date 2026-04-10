import React from 'react';
import { AlertCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PaymentEntityConfig } from '@/config/gccPaymentEntities';

interface LinkExpiredProps {
  config: PaymentEntityConfig;
}

/**
 * LinkExpired Component
 * Native GCC Gov Portal Error Screen (Professional, non-404)
 */
export const LinkExpired: React.FC<LinkExpiredProps> = ({ config }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12" dir="rtl">
      <div 
        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        style={{ borderColor: `${config.primary}20` }}
      >
        {/* Top Status Bar */}
        <div 
          className="h-2 w-full" 
          style={{ backgroundColor: config.primary }}
        />
        
        <div className="p-8 sm:p-12 text-center">
          {/* Icon Section */}
          <div className="flex justify-center mb-8">
            <div 
              className="p-5 rounded-full bg-red-50 text-red-600 border-4 border-white shadow-sm"
              style={{ backgroundColor: `${config.primary}10`, color: config.primary }}
            >
              <AlertCircle size={48} strokeWidth={1.5} />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-primary">
            عذراً، الرابط غير صالح أو منتهي الصلاحية
          </h1>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed font-primary">
            لقد تم الوصول إلى رابط منتهي الصلاحية أو غير صحيح. يرجى التأكد من الرابط والمحاولة مرة أخرى، أو التواصل مع الجهة المعنية في حال استمرار المشكلة.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
              style={{ 
                backgroundColor: config.primary,
                boxShadow: `0 8px 20px -6px ${config.primary}60`
              }}
            >
              <span>تحديث الصفحة</span>
              <ArrowRight size={20} className="rotate-180" />
            </button>
            
            <button
              className="px-8 py-4 rounded-xl font-bold text-gray-700 bg-gray-50 border border-gray-200 transition-all hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <HelpCircle size={20} />
              <span>مركز المساعدة</span>
            </button>
          </div>

          {/* Security Footer */}
          <div className="pt-8 border-t border-gray-100 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <ShieldCheck size={16} className="text-green-600" />
              <span>بوابة دفع آمنة وموثقة من قبل الجهات المختصة</span>
            </div>
            <div className="flex gap-6 grayscale opacity-40">
              <img src="/assets/real-mirrors/logo-mada-com-sa.png" alt="Mada" className="h-4 object-contain" />
              <img src="/assets/real-mirrors/logo-sadad-olp.png" alt="Sadad" className="h-4 object-contain" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Support Footer */}
      <div className="mt-8 text-center text-gray-400 text-sm font-primary">
        معرف الجلسة: {Math.random().toString(36).substring(2, 12).toUpperCase()} • رمز الخطأ: GCC_OMNI_404_V600
      </div>
    </div>
  );
};

export default LinkExpired;
