import React from 'react';
import { cn } from "@/lib/utils";
import { PaymentEntityConfig } from "@/config/gccPaymentEntities";

interface MirrorLayoutProps {
  config: PaymentEntityConfig;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  bgType?: 'security_grid' | 'glassmorphism' | 'pulse' | 'mesh';
}

/**
 * 1. NAFATH (KSA Identity) - 1:1 Mirror
 */
export const NafathMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#010B13] text-white font-sans flex flex-col items-center justify-center p-4 sm:p-6 text-right relative overflow-hidden" dir="rtl">
    <div className="absolute inset-0 z-0 opacity-15 pointer-events-none grayscale" 
         style={{ backgroundImage: `url('/assets/real-mirrors/bg-security-grid.jpg')`, backgroundSize: 'cover' }} />
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#006C35]/10 to-transparent pointer-events-none" />

    <div className="w-full max-w-lg z-10 space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="relative h-48 sm:h-56 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
        <img src="/assets/real-mirrors/hero-riyadh-futuristic.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Vision 2030" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010B13] via-[#010B13]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center space-y-3">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white p-2 rounded-2xl shadow-xl">
             <img src="/assets/real-mirrors/logo-nafath-alt.png" alt="Nafath" className="w-full h-full object-contain" />
          </div>
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-white font-heading">نفاذ | NAFATH</h1>
            <p className="text-[9px] sm:text-[10px] uppercase font-bold text-[#006C35] tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-md inline-block">National Unified Access</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title || 'بوابة النفاذ الوطني'}</h2>
          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#006C35] animate-pulse" />
            اتصال حكومي آمن وموثوق
          </div>
        </div>
        <div className="bg-[#0F172A]/80 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-2">
          {children}
        </div>
      </div>
    </div>
  </div>
);

/**
 * 2. UAE DIRHAM (Digital Dubai) - 1:1 Mirror
 */
export const UAEDirhamMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col items-center py-8 sm:py-12 px-4 relative overflow-hidden" dir="rtl">
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
         style={{ backgroundImage: `url('/assets/real-mirrors/bg-glassmorphism-mesh.jpg')`, backgroundSize: 'cover' }} />
    
    <div className="w-full max-w-xl z-10 space-y-8 sm:space-y-10">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <img src="/assets/sovereign-mirrors/logo-digitaldubai-ae.png" alt="Digital Dubai" className="h-12 sm:h-16 object-contain" />
          <div className="w-px h-8 sm:h-10 bg-slate-300" />
          <img src="/assets/sovereign-mirrors/coa-uae.svg" alt="UAE Coat of Arms" className="h-12 sm:h-16 object-contain" />
        </div>
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#0054A6] mb-2 font-heading">بوابة الدرهم الرقمي</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">Digital Dubai Payment Gateway | حكومة دبي الذكية</p>
        </div>
      </div>

      <div className="relative mx-2">
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#0054A6]/10 to-[#00D1FF]/10 rounded-[3rem] blur-2xl opacity-50" />
        <div className="relative bg-white/70 border border-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 backdrop-blur-3xl shadow-2xl overflow-hidden">
           {children}
        </div>
      </div>
    </div>
  </div>
);

/**
 * 3. SAHEL (Kuwait) - 1:1 Mirror
 */
export const SahelMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#0F1212] font-sans flex flex-col items-center justify-center p-4 sm:p-6" dir="rtl">
    <div className="w-full max-w-lg z-10">
      <div className="bg-[#1C2526] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-white/5 relative overflow-hidden mx-2">
        <div className="flex justify-between items-center mb-8">
           <img src="/assets/sovereign-mirrors/logo-sahel-kw.png" alt="Sahel" className="h-10 sm:h-12 object-contain" />
           <div className="text-left" dir="ltr">
              <p className="text-[9px] sm:text-[10px] font-black text-[#FFCC00] uppercase">Official App</p>
              <p className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-widest">Kuwait Gov</p>
           </div>
        </div>
        {children}
      </div>
    </div>
  </div>
);

/**
 * 4. SPL (Saudi Post) - 1:1 Mirror
 */
export const SPLMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#FDFDFD] font-sans flex flex-col items-center py-8 sm:py-10 px-4" dir="rtl">
    <div className="w-full max-w-xl space-y-6 sm:space-y-8">
      <div className="flex items-center justify-between border-b pb-4">
         <img src="/assets/real-mirrors/logo-spl-com-sa.png" alt="SPL" className="h-8 sm:h-12 object-contain" />
         <div className="text-right">
            <p className="text-[10px] font-black text-[#002D72] uppercase">Secure Delivery</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase">KSA National Post</p>
         </div>
      </div>
      <div className="bg-white border border-slate-100 rounded-[2rem] p-6 sm:p-10 shadow-xl relative mx-2">
         {children}
      </div>
    </div>
  </div>
);

/**
 * 5. SADAD OLP (Saudi Billing) - 1:1 Mirror
 */
export const SadadMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#FDFDFD] font-sans flex flex-col items-center py-8 sm:py-10 px-4" dir="rtl">
    <div className="w-full max-w-xl space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <img src="/assets/sovereign-mirrors/logo-sadad-olp.png" alt="SADAD OLP" className="h-16 sm:h-20 object-contain" />
        <div className="px-4">
          <h1 className="text-xl sm:text-2xl font-black text-[#FF6B00] tracking-tighter font-heading">نظام سداد | SADAD</h1>
          <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">National Billing Platform</p>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-[0_30px_60px_-15px_rgba(255,107,0,0.1)] relative mx-2">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6B00] text-white px-4 sm:px-6 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
          Official Biller Verified
        </div>
        {children}
      </div>
    </div>
  </div>
);

/**
 * 6. KNET (Kuwait) - 1:1 Mirror
 */
export const KnetMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config }) => (
  <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col items-center justify-center p-4 sm:p-6" dir="rtl">
    <div className="w-full max-w-md z-10 mx-2">
      <div className="bg-white border border-slate-200 rounded-[2rem] sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
        <img src="/assets/real-mirrors/logo-knet-com-kw.png" className="h-10 sm:h-12 object-contain mx-auto mb-8" alt="KNET" />
        {children}
      </div>
    </div>
  </div>
);
