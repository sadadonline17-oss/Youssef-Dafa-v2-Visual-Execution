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
      <div className="relative h-56 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
        <img src="/assets/real-mirrors/hero-riyadh-futuristic.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Vision 2030" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010B13] via-[#010B13]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center space-y-3">
          <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-xl">
             <img src="/assets/real-mirrors/logo-nafath-alt.png" alt="Nafath" className="w-full h-full object-contain" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-black tracking-tighter text-white font-heading">نفاذ | NAFATH</h1>
            <p className="text-[10px] uppercase font-bold text-[#006C35] tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-md inline-block">National Unified Access</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">{title || 'بوابة النفاذ الوطني'}</h2>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#006C35] animate-pulse" />
            اتصال حكومي آمن وموثوق
          </div>
        </div>
        <div className="bg-[#0F172A]/80 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
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
  <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col items-center py-12 px-4 relative overflow-hidden" dir="rtl">
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
         style={{ backgroundImage: `url('/assets/real-mirrors/bg-glassmorphism-mesh.jpg')`, backgroundSize: 'cover' }} />
    
    <div className="w-full max-w-2xl z-10 space-y-10">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center gap-6">
          <img src="/assets/sovereign-mirrors/logo-digitaldubai-ae.png" alt="Digital Dubai" className="h-16 object-contain" />
          <div className="w-px h-10 bg-slate-300" />
          <img src="/assets/sovereign-mirrors/coa-uae.svg" alt="UAE Coat of Arms" className="h-16 object-contain" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tight text-[#0054A6] mb-2 font-heading">بوابة الدرهم الرقمي</h1>
          <p className="text-slate-500 font-medium">Digital Dubai Payment Gateway | حكومة دبي الذكية</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#0054A6]/10 to-[#00D1FF]/10 rounded-[3rem] blur-2xl opacity-50" />
        <div className="relative bg-white/70 border border-white rounded-[2.5rem] p-10 backdrop-blur-3xl shadow-2xl overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-5">
              <img src="/assets/sovereign-mirrors/symbol-aed.svg" className="w-40" alt="AED Symbol" />
           </div>
           {children}
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 py-6 opacity-60">
        <img src="/assets/sovereign-mirrors/symbol-aed.svg" className="h-8 grayscale brightness-0" alt="UAE Dirham" />
        <div className="text-right">
          <p className="text-[10px] font-black text-[#0054A6] uppercase">Ministry of Finance</p>
          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Digital Economy Strategy 2026</p>
        </div>
      </div>
    </div>
  </div>
);

/**
 * 3. KUWAIT SAHEL - 1:1 Mirror
 */
export const SahelMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-slate-50 font-sans flex flex-col" dir="rtl">
    <header className="bg-[#0057B8] text-white px-6 py-6 shadow-xl">
      <div className="max-w-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/sovereign-mirrors/logo-sahel.png" className="h-14 w-14 rounded-2xl bg-white p-2 shadow-lg" alt="Sahel" />
          <div>
            <h1 className="text-2xl font-black tracking-tight leading-none font-heading">تطبيق سهل</h1>
            <p className="text-sm font-bold text-white/80 uppercase tracking-wider">Kuwait Gov Services</p>
          </div>
        </div>
        <img src="/assets/sovereign-mirrors/coa-kuwait.svg" className="h-14 object-contain brightness-0 invert" alt="Kuwait Coat of Arms" />
      </div>
    </header>

    <main className="flex-1 max-w-xl mx-auto w-full px-6 py-10 space-y-8">
      <div className="bg-white border-b-8 border-[#0057B8] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#0057B8]/5 rounded-br-full -ml-8 -mt-8" />
        <div className="relative">
          <h2 className="text-2xl font-black text-[#0057B8] mb-6 border-r-4 border-[#0057B8] pr-4">{title || 'إجراء دفع حكومي'}</h2>
          {children}
        </div>
      </div>
    </main>
  </div>
);

/**
 * 4. SPL (Saudi Post) - 1:1 Mirror
 */
export const SPLMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-white font-sans flex flex-col text-right" dir="rtl">
    <header className="bg-[#002D72] px-6 py-6">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <img src="/assets/sovereign-mirrors/logo-spl-com-sa.png" alt="SPL" className="h-10 object-contain brightness-0 invert" />
        <div className="flex items-center gap-4">
           <div className="text-left" dir="ltr">
             <p className="text-[10px] font-black text-[#27D87E] uppercase tracking-tighter leading-none">SPL Digital Gateway</p>
             <p className="text-[12px] font-black text-white uppercase tracking-widest mt-1">Sovereign Logistics</p>
           </div>
           <img src="/assets/sovereign-mirrors/coa-saudi.svg" className="h-10 object-contain brightness-0 invert" alt="KSA Coat of Arms" />
        </div>
      </div>
    </header>

    <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
      <div className="space-y-10">
        <div className="border-r-8 border-[#27D87E] pr-6">
          <h1 className="text-3xl font-black text-[#002D72] uppercase tracking-tighter">{title || 'سداد الرسوم البريدية'}</h1>
          <p className="text-sm font-bold text-slate-400 mt-2">Saudi Post - Official Transaction Management</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-[2rem] p-10 border border-slate-100 shadow-xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#002D72] to-[#27D87E]" />
           {children}
        </div>
      </div>
    </main>
  </div>
);

/**
 * 5. SADAD OLP (Saudi Billing) - 1:1 Mirror
 */
export const SadadMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#FDFDFD] font-sans flex flex-col items-center py-10 px-4" dir="rtl">
    <div className="w-full max-w-xl space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <img src="/assets/sovereign-mirrors/logo-sadad-olp.png" alt="SADAD OLP" className="h-20 object-contain" />
        <div>
          <h1 className="text-2xl font-black text-[#FF6B00] tracking-tighter font-heading">نظام سداد | SADAD</h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">National Billing Platform</p>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 shadow-[0_30px_60px_-15px_rgba(255,107,0,0.1)] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6B00] text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
          Official Biller Verified
        </div>
        {children}
      </div>

      <div className="flex justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
        <img src="/assets/real-mirrors/logo-mada-com-sa.png" className="h-6 object-contain" alt="mada" />
        <img src="/assets/sovereign-mirrors/coa-saudi.svg" className="h-6 object-contain" alt="KSA" />
      </div>
    </div>
  </div>
);

/**
 * Legacy Components (Re-exported for continuity)
 */
export const KnetMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config }) => (
  <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col items-center justify-center p-6" dir="rtl">
    <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl">
      <img src="/assets/real-mirrors/logo-knet-com-kw.png" className="h-12 object-contain mx-auto mb-8" alt="KNET" />
      {children}
    </div>
  </div>
);
