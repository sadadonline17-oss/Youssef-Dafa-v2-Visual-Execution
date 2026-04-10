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
 * 1. NAFATH (KSA Identity) - 2026 Official Mirror
 */
export const NafathMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title, bgType = 'security_grid' }) => (
  <div className="min-h-screen bg-[#010B13] text-white font-sans flex flex-col items-center justify-center p-4 sm:p-6 text-right relative overflow-hidden" dir="rtl">
    {/* Real 2026 Background Texture */}
    {bgType === 'security_grid' && (
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none grayscale" 
           style={{ backgroundImage: `url('/assets/real-mirrors/bg-security-grid.jpg')`, backgroundSize: 'cover' }} />
    )}
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#006C35]/10 to-transparent pointer-events-none" />

    <div className="w-full max-w-lg z-10 space-y-8 animate-in fade-in zoom-in-95 duration-500">
      {/* 2026 Futuristic Header */}
      <div className="relative h-56 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
        <img src="/assets/real-mirrors/hero-riyadh-futuristic.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Vision 2030" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010B13] via-[#010B13]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center space-y-3">
          <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-xl">
             <img src="/assets/real-mirrors/logo-nafath.png" alt="Nafath" className="w-full h-full object-contain" />
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

      <div className="flex justify-center items-center gap-8 pt-4 opacity-60">
        <img src="/assets/mirrors/gov-sa-vision.png" className="h-10 grayscale brightness-200" alt="Vision 2030" />
        <div className="w-px h-8 bg-white/10" />
        <div className="text-right">
          <p className="text-[9px] font-bold text-slate-500 uppercase">Powered by</p>
          <p className="text-[10px] font-black text-white">Digital Gov Authority</p>
        </div>
      </div>
    </div>
  </div>
);

/**
 * 2. DUBAI PAY (UAE) - 2026 Glassmorphism Official Mirror
 */
export const DubaiPayMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col items-center py-12 px-4 relative overflow-hidden" dir="rtl">
    {/* 2026 UAE Mesh Gradient */}
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
         style={{ backgroundImage: `url('/assets/real-mirrors/bg-glassmorphism-mesh.jpg')`, backgroundSize: 'cover' }} />
    
    <div className="w-full max-w-2xl z-10 space-y-10">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center gap-6">
          <img src="/assets/real-mirrors/logo-uaepass-ae.png" alt="UAE Pass" className="h-12 object-contain" />
          <div className="w-px h-10 bg-slate-300" />
          <img src="/assets/real-mirrors/logo-dubaipay.png" alt="Dubai Pay" className="h-12 object-contain" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tight text-[#2B59FF] mb-2 font-heading">دبي باي | DubaiPay</h1>
          <p className="text-slate-500 font-medium">Digital payment platform for all Dubai Government services</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#2B59FF]/10 to-[#00D1FF]/10 rounded-[3rem] blur-2xl opacity-50" />
        <div className="relative bg-white/70 border border-white/40 rounded-[2.5rem] p-10 backdrop-blur-3xl shadow-2xl overflow-hidden">
          {/* Glass Gloss Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl -mr-32 -mt-32 rounded-full" />
          <div className="relative z-10">{children}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 opacity-30 px-8 grayscale pointer-events-none">
        <img src="/assets/real-mirrors/logo-dubai-gov.png" className="h-12 object-contain" />
        <img src="/assets/real-mirrors/logo-smart-dubai.png" className="h-12 object-contain" />
        <img src="/assets/real-mirrors/logo-uae-pass-footer.png" className="h-12 object-contain" />
      </div>
    </div>
  </div>
);

/**
 * 3. KNET / SAHL (Kuwait) - 2026 Hybrid Mirror
 */
export const KnetMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config }) => (
  <div className="min-h-screen bg-[#F0F4F8] font-sans flex flex-col" dir="rtl">
    <header className="bg-white border-b-8 border-[#FFD200] px-6 py-6 shadow-xl relative z-20">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src="/assets/real-mirrors/logo-knet-com-kw.png" alt="KNET" className="h-14 object-contain" />
          <div className="w-px h-10 bg-slate-200 hidden sm:block" />
          <img src="/assets/real-mirrors/logo-e-gov-kw.png" alt="Sahl" className="h-12 object-contain hidden sm:block" />
        </div>
        <div className="text-left border-l-4 border-[#003366] pl-4" dir="ltr">
          <p className="text-xs font-black text-[#003366] uppercase tracking-tighter leading-tight">Shared Electronic</p>
          <p className="text-xs font-black text-[#003366] uppercase tracking-tighter">Banking Services</p>
        </div>
      </div>
    </header>

    <main className="flex-1 container max-w-3xl mx-auto px-4 py-12 relative">
      {/* Liquid Security Grid Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" 
           style={{ backgroundImage: `url('/assets/real-mirrors/bg-security-grid.jpg')`, backgroundSize: '300px' }} />

      <div className="relative z-10">
        <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,51,102,0.3)] border border-slate-200 overflow-hidden">
          <div className="bg-[#003366] px-8 py-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FFD200] animate-pulse" />
              <span className="font-black text-sm uppercase tracking-wider font-heading">Payment Gateway | بوابة الدفع</span>
            </div>
            <span className="text-[10px] opacity-80 uppercase font-black tracking-widest border border-white/20 px-2 py-1 rounded">256-bit AES Encryption</span>
          </div>
          <div className="p-8 sm:p-12 space-y-8">
            {children}
          </div>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="/assets/real-mirrors/logo-cbk-kw.png" className="h-14 grayscale" alt="CBK" />
          <img src="/assets/real-mirrors/knet-pci.png" className="h-10" alt="PCI" />
          <img src="/assets/real-mirrors/knet-visa.png" className="h-10" alt="Visa" />
          <img src="/assets/real-mirrors/knet-master.png" className="h-10" alt="Mastercard" />
        </div>
      </div>
    </main>
    
    <footer className="py-10 text-center bg-white border-t border-slate-200">
      <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
        © 2026 KNET - Electronic Government Official Gateway
      </p>
    </footer>
  </div>
);
