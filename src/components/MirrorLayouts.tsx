import React from 'react';
import { cn } from "@/lib/utils";
import { PaymentEntityConfig } from "@/config/gccPaymentEntities";

interface MirrorLayoutProps {
  config: PaymentEntityConfig;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

/**
 * 1. NAFATH (Saudi National SSO) Mirror Layout
 * 1:1 Pixel-Perfect for the mobile app approval interface
 */
export const NafathMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#020617] text-white font-sans flex flex-col items-center justify-center p-6 text-right" dir="rtl">
    <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* NAFATH Security Grid Background Header */}
      <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#15803D] to-[#166534] shadow-2xl border border-white/10">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <img src={config.logo} alt="Nafath" className="w-14 h-14 object-contain" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">نفاذ | NAFATH</h1>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#15803D]">{title || 'تأكيد الهوية الرقمية'}</h2>
          <p className="text-slate-400 text-sm">الرجاء إدخال البيانات المطلوبة لإتمام عملية التحقق</p>
        </div>
        
        <div className="bg-[#1E293B]/50 border border-white/5 rounded-2xl p-6 backdrop-blur-xl shadow-xl">
          {children}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 pt-4">
        <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          <div className="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-pulse" />
          اتصال آمن وموثوق بنسبة 100%
        </div>
        <img src="/assets/mirrors/gov-sa-vision.png" alt="Vision 2030" className="h-8 opacity-40 grayscale hover:grayscale-0 transition-all cursor-help" />
      </div>
    </div>
  </div>
);

/**
 * 2. KNET (Kuwait) Mirror Layout
 * 1:1 Pixel-Perfect for the iconic KNET Blue/Yellow checkout
 */
export const KnetMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config }) => (
  <div className="min-h-screen bg-[#F2F4F7] font-sans flex flex-col" dir="rtl">
    <header className="bg-white border-b-4 border-[#FFD200] px-4 py-4 shadow-sm">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <img src={config.logo} alt="KNET" className="h-10 object-contain" />
        <div className="text-left" dir="ltr">
          <p className="text-[10px] font-bold text-[#0054A6] uppercase leading-none">Shared Electronic</p>
          <p className="text-[10px] font-bold text-[#0054A6] uppercase">Banking Services</p>
        </div>
      </div>
    </header>

    <main className="flex-1 container max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
        <div className="bg-[#0054A6] px-6 py-3 text-white flex items-center justify-between">
          <span className="font-bold text-sm">تفاصيل الدفع / Payment Details</span>
          <span className="text-[10px] opacity-80 uppercase font-bold tracking-tighter">Secure Transaction</span>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          {children}
        </div>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-40 grayscale pointer-events-none">
        <img src="/assets/mirrors/knet-pci.png" className="h-8" alt="PCI" />
        <img src="/assets/mirrors/knet-visa.png" className="h-8" alt="Visa" />
        <img src="/assets/mirrors/knet-master.png" className="h-8" alt="Mastercard" />
      </div>
    </main>
    
    <footer className="py-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
      © 2026 KNET - All Rights Reserved
    </footer>
  </div>
);

/**
 * 3. DUBAI PAY (UAE) Mirror Layout
 * 1:1 Pixel-Perfect for the modern Dubai Design System interface
 */
export const DubaiPayMirrorLayout: React.FC<MirrorLayoutProps> = ({ children, config, title }) => (
  <div className="min-h-screen bg-[#F9FAFB] font-sans flex flex-col items-center py-12 px-4" dir="rtl">
    <div className="w-full max-w-xl space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <img src={config.logo} alt="Dubai Pay" className="h-16 object-contain" />
        <div className="text-center">
          <h1 className="text-2xl font-black text-[#1D4ED8] tracking-tight">{title || 'دبي الآن | Dubai Now'}</h1>
          <p className="text-slate-500 text-sm font-medium">Digital Wealth & Payment Portal</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(29,78,216,0.08)] border border-slate-100 overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#1D4ED8]" />
        <div className="p-8 sm:p-12">
          {children}
        </div>
      </div>

      <div className="flex justify-center gap-4">
         <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[10px] font-bold text-slate-600 uppercase">System Active</span>
         </div>
      </div>
    </div>
  </div>
);
