import { resolveChameleonTheme, ChameleonTheme, gccChameleonThemes } from '@/lib/gccChameleonThemes';

export type EntityId = 
  | 'SADAD' 
  | 'NAFATH' 
  | 'KNET' 
  | 'ARAMEX' 
  | 'UAE_PASS' 
  | 'BENEFIT' 
  | 'MAAL' 
  | 'JAYWAN' 
  | 'DIRHAM' 
  | 'SPL' 
  | 'SAHEL' 
  | 'DUBAI_PAY' 
  | 'STC_PAY' 
  | 'MADA' 
  | 'ALRAJHI' 
  | 'SNB' 
  | 'DHL' 
  | 'SMSA' 
  | 'FEDEX'
  | 'SA_NAFATH'
  | 'AE_UAE_PASS'
  | 'KW_SAHEL'
  | 'SA_SADAD'
  | 'KW_KNET'
  | 'BH_BENEFIT_PAY'
  | 'AE_DIRHAM_DUBAI_PAY'
  | 'ARAMEX_GLOBAL'
  | 'DHL_EXPRESS'
  | 'SA_SPL'
  | 'SA_SMSA'
  | 'UAE_DIRHAM'
  | 'DEFAULT';

export interface PaymentEntityConfig {
  id: EntityId;
  name: string;
  nameAr: string;
  primary: string;
  accent: string;
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  font: string;
  logo: string;

  // Button specific
  btnRadius: string;
  btnHeight: string;
  btnShadow: string;
  btnTextWeight: string;

  // Input specific
  inputRadius: string;
  inputBorder: string;
  inputFocusRing: string;
  inputPadding: string;

  cardRadius: string;
  headerHeight: string;
  showShipment?: boolean;
}

const baseEntities: Partial<Record<EntityId, PaymentEntityConfig>> = {
  SADAD: {
    id: 'SADAD',
    name: 'SADAD',
    nameAr: 'سداد',
    primary: '#FF6B00',
    accent: '#FF8A33',
    bg: '#F4F4F4',
    surface: '#FFFFFF',
    text: '#1C2526',
    textMuted: '#54565B',
    font: "'DIN Next Arabic Medium', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-sadad-olp.png',
    btnRadius: '12px',
    btnHeight: '56px',
    btnShadow: '0 4px 15px -2px rgb(255 107 0 / 0.30)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgb(255 107 0 / 0.20)',
    inputPadding: '16px 20px',
    cardRadius: '12px',
    headerHeight: '72px',
  },
  NAFATH: {
    id: 'NAFATH',
    name: 'Nafath',
    nameAr: 'نفاذ',
    primary: '#006C35',
    accent: '#00A650',
    bg: '#F8FAF7',
    surface: '#FFFFFF',
    text: '#1C2526',
    textMuted: '#4A4A4A',
    font: "'Taysir Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-nafath-alt.png',
    btnRadius: '8px',
    btnHeight: '52px',
    btnShadow: '0 3px 12px -2px rgb(0 108 53 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgb(0 108 53 / 0.20)',
    inputPadding: '16px 20px',
    cardRadius: '12px',
    headerHeight: '68px',
  },
  KNET: {
    id: 'KNET',
    name: 'KNET',
    nameAr: 'كي نت',
    primary: '#005696',
    accent: '#0078C2',
    bg: '#F5F7FA',
    surface: '#FFFFFF',
    text: '#1C2526',
    textMuted: '#4A4A4A',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-knet-com-kw.png',
    btnRadius: '6px',
    btnHeight: '54px',
    btnShadow: '0 4px 14px -2px rgb(0 86 150 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgb(0 86 150 / 0.20)',
    inputPadding: '16px 20px',
    cardRadius: '10px',
    headerHeight: '70px',
  },
  ARAMEX: {
    id: 'ARAMEX',
    name: 'Aramex',
    nameAr: 'أرامكس',
    primary: '#ED1C24',
    accent: '#1C2526',
    bg: '#FFFFFF',
    surface: '#FAFAFA',
    text: '#1C2526',
    textMuted: '#555555',
    font: "system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-aramex.png',
    btnRadius: '8px',
    btnHeight: '56px',
    btnShadow: '0 4px 16px -2px rgb(237 28 36 / 0.28)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#E5E7EB',
    inputFocusRing: 'rgb(237 28 36 / 0.18)',
    inputPadding: '16px 20px',
    cardRadius: '12px',
    headerHeight: '64px',
    showShipment: true,
  },
  SPL: {
    id: 'SPL',
    name: 'SPL',
    nameAr: 'البريد السعودي | SPL',
    primary: '#002D72',
    accent: '#27D87E',
    bg: '#F8FAFC',
    surface: '#FFFFFF',
    text: '#002D72',
    textMuted: '#6B7280',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-spl-com-sa.png',
    btnRadius: '12px',
    btnHeight: '56px',
    btnShadow: '0 4px 14px -2px rgb(0 45 114 / 0.25)',
    btnTextWeight: '700',
    inputRadius: '12px',
    inputBorder: '#E6E9EF',
    inputFocusRing: 'rgb(0 45 114 / 0.15)',
    inputPadding: '16px 20px',
    cardRadius: '16px',
    headerHeight: '68px',
  },
  SAHEL: {
    id: 'SAHEL',
    name: 'Sahel',
    nameAr: 'تطبيق سهل',
    primary: '#0057B8',
    accent: '#00A3E0',
    bg: '#F5FAF8',
    surface: '#FFFFFF',
    text: '#0057B8',
    textMuted: '#4A5568',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/sovereign-mirrors/logo-sahel.png',
    btnRadius: '10px',
    btnHeight: '54px',
    btnShadow: '0 4px 14px -2px rgb(0 87 184 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgb(0 87 184 / 0.20)',
    inputPadding: '14px 16px',
    cardRadius: '12px',
    headerHeight: '64px',
  },
  DUBAI_PAY: {
    id: 'DUBAI_PAY',
    name: 'DubaiPay',
    nameAr: 'دبي باي',
    primary: '#0054A6',
    accent: '#00D1FF',
    bg: '#F8FAFC',
    surface: '#FFFFFF',
    text: '#0054A6',
    textMuted: '#64748B',
    font: "'Dubai Font', system-ui, sans-serif",
    logo: '/assets/sovereign-mirrors/logo-digitaldubai-ae.png',
    btnRadius: '12px',
    btnHeight: '56px',
    btnShadow: '0 4px 14px -2px rgb(0 84 166 / 0.25)',
    btnTextWeight: '700',
    inputRadius: '12px',
    inputBorder: '#E2E8F0',
    inputFocusRing: 'rgb(0 84 166 / 0.15)',
    inputPadding: '18px 22px',
    cardRadius: '20px',
    headerHeight: '72px',
  },
  STC_PAY: {
    id: 'STC_PAY',
    name: 'STC Pay',
    nameAr: 'إس تي سي باي',
    primary: '#4F008C',
    accent: '#FF0000',
    bg: '#FFFFFF',
    surface: '#FAF5FF',
    text: '#1A1A1A',
    textMuted: '#6B7280',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-stcpay-com-sa.png',
    btnRadius: '12px',
    btnHeight: '54px',
    btnShadow: '0 4px 14px -2px rgb(79 0 140 / 0.28)',
    btnTextWeight: '600',
    inputRadius: '10px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(79, 0, 140, 0.20)',
    inputPadding: '14px 16px',
    cardRadius: '16px',
    headerHeight: '64px',
  },
  MADA: {
    id: 'MADA',
    name: 'mada',
    nameAr: 'مدى',
    primary: '#004B87',
    accent: '#00A651',
    bg: '#FFFFFF',
    surface: '#F5F8FC',
    text: '#1A1A1A',
    textMuted: '#6B7280',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-mada-com-sa.png',
    btnRadius: '10px',
    btnHeight: '52px',
    btnShadow: '0 4px 14px -2px rgb(0 75 135 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(0, 75, 135, 0.20)',
    inputPadding: '14px 16px',
    cardRadius: '12px',
    headerHeight: '64px',
  },
  ALRAJHI: {
    id: 'ALRAJHI',
    name: 'Al Rajhi Bank',
    nameAr: 'مصرف الراجحي',
    primary: '#006C35',
    accent: '#D4AF37',
    bg: '#FFFFFF',
    surface: '#F5FAF7',
    text: '#1A1A1A',
    textMuted: '#4A5568',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-alrajhi.png',
    btnRadius: '12px',
    btnHeight: '56px',
    btnShadow: '0 4px 14px -2px rgb(0 108 53 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '10px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(0, 108, 53, 0.20)',
    inputPadding: '16px 18px',
    cardRadius: '16px',
    headerHeight: '72px',
  },
  SNB: {
    id: 'SNB',
    name: 'Saudi National Bank',
    nameAr: 'البنك الأهلي السعودي',
    primary: '#034638',
    accent: '#84bd00',
    bg: '#FFFFFF',
    surface: '#F5FAF7',
    text: '#1A1A1A',
    textMuted: '#4A5568',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-snb.png',
    btnRadius: '12px',
    btnHeight: '56px',
    btnShadow: '0 4px 14px -2px rgb(3 70 56 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '10px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(3, 70, 56, 0.20)',
    inputPadding: '16px 18px',
    cardRadius: '16px',
    headerHeight: '72px',
  },
  DHL: {
    id: 'DHL',
    name: 'DHL Express',
    nameAr: 'دي اتش ال إكسبريس',
    primary: '#D40511',
    accent: '#FFCC00',
    bg: '#FFFFFF',
    surface: '#FFCC00',
    text: '#1C2526',
    textMuted: '#757575',
    font: "system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-dhl.png',
    btnRadius: '0px',
    btnHeight: '56px',
    btnShadow: 'none',
    btnTextWeight: '900',
    inputRadius: '0px',
    inputBorder: '#E5E7EB',
    inputFocusRing: 'rgba(212, 5, 17, 0.1)',
    inputPadding: '16px 20px',
    cardRadius: '0px',
    headerHeight: '64px',
    showShipment: true,
  },
  SMSA: {
    id: 'SMSA',
    name: 'SMSA Express',
    nameAr: 'سمسا إكسبريس',
    primary: '#0054A6',
    accent: '#FFCC00',
    bg: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#1C2526',
    textMuted: '#6B7280',
    font: "system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-smsaexpress.png',
    btnRadius: '8px',
    btnHeight: '54px',
    btnShadow: '0 4px 14px -2px rgb(0 84 166 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(0, 84, 166, 0.20)',
    inputPadding: '16px 20px',
    cardRadius: '12px',
    headerHeight: '68px',
    showShipment: true,
  },
  FEDEX: {
    id: 'FEDEX',
    name: 'FedEx',
    nameAr: 'فيديكس',
    primary: '#4D148C',
    accent: '#FF6200',
    bg: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#4D148C',
    textMuted: '#6B7280',
    font: "system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-fedex.png',
    btnRadius: '4px',
    btnHeight: '54px',
    btnShadow: '0 4px 14px -2px rgb(77 20 140 / 0.25)',
    btnTextWeight: '700',
    inputRadius: '4px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(77, 20, 140, 0.20)',
    inputPadding: '16px 20px',
    cardRadius: '8px',
    headerHeight: '68px',
    showShipment: true,
  },
  UAE_PASS: {
    id: 'UAE_PASS',
    name: 'UAE Pass',
    nameAr: 'UAE Pass',
    primary: '#1A1A1A',
    accent: '#C19B64',
    bg: '#FAF9F6',
    surface: '#FFFFFF',
    text: '#1A1A1A',
    textMuted: '#555555',
    font: "'Dubai Font', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-uaepass-ae.png',
    btnRadius: '20px',
    btnHeight: '56px',
    btnShadow: '0 4px 18px -2px rgb(193 155 100 / 0.22)',
    btnTextWeight: '600',
    inputRadius: '12px',
    inputBorder: '#E5E7EB',
    inputFocusRing: 'rgb(193 155 100 / 0.20)',
    inputPadding: '18px 22px',
    cardRadius: '16px',
    headerHeight: '72px',
  },
  BENEFIT: {
    id: 'BENEFIT',
    name: 'BENEFIT',
    nameAr: 'بنفت',
    primary: '#CE1126',
    accent: '#D32027',
    bg: '#FFFFFF',
    surface: '#F9F9F9',
    text: '#1C2526',
    textMuted: '#555555',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-benefit-bh.png',
    btnRadius: '8px',
    btnHeight: '52px',
    btnShadow: '0 4px 14px -2px rgb(206 17 38 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgb(206 17 38 / 0.20)',
    inputPadding: '16px 20px',
    cardRadius: '12px',
    headerHeight: '68px',
  },
  MAAL: {
    id: 'MAAL',
    name: 'Maal',
    nameAr: 'مال',
    primary: '#D0032C',
    accent: '#009A44',
    bg: '#FFFFFF',
    surface: '#F8F8F8',
    text: '#1C2526',
    textMuted: '#555555',
    font: "'DIN Next Arabic', system-ui, sans-serif",
    logo: '/assets/real-mirrors/logo-asyad-om.png',
    btnRadius: '10px',
    btnHeight: '54px',
    btnShadow: '0 4px 14px -2px rgb(208 3 44 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgb(208 3 44 / 0.20)',
    inputPadding: '16px 20px',
    cardRadius: '12px',
    headerHeight: '68px',
  },
  JAYWAN: {
    id: 'JAYWAN',
    name: 'Jaywan',
    nameAr: 'جيوان',
    primary: '#CE1126',
    accent: '#00732F',
    bg: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1C2526',
    textMuted: '#555555',
    font: "'Dubai Font', system-ui, sans-serif",
    logo: '/gov-jaywan.png',
    btnRadius: '10px',
    btnHeight: '54px',
    btnShadow: '0 4px 14px -2px rgb(206 17 38 / 0.25)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgb(206 17 38 / 0.20)',
    inputPadding: '16px 20px',
    cardRadius: '12px',
    headerHeight: '68px',
  },
  DIRHAM: {
    id: 'DIRHAM',
    name: 'eDirham',
    nameAr: 'الدرهم الإلكتروني',
    primary: '#CE1126',
    accent: '#00732F',
    bg: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1C2526',
    textMuted: '#555555',
    font: "'Dubai Font', system-ui, sans-serif",
    logo: '/assets/sovereign-mirrors/logo-digitaldubai-ae.png',
    btnRadius: '12px',
    btnHeight: '56px',
    btnShadow: '0 4px 14px -2px rgb(0 84 166 / 0.25)',
    btnTextWeight: '700',
    inputRadius: '12px',
    inputBorder: '#E2E8F0',
    inputFocusRing: 'rgb(0 84 166 / 0.15)',
    inputPadding: '18px 22px',
    cardRadius: '20px',
    headerHeight: '72px',
  },
  DEFAULT: {
    id: 'DEFAULT',
    name: 'Payment',
    nameAr: 'الدفع',
    primary: '#006C35',
    accent: '#00A650',
    bg: '#F8F9FA',
    surface: '#FFFFFF',
    text: '#1C2526',
    textMuted: '#6B6B6B',
    font: "system-ui, sans-serif",
    logo: '/assets/entities/default/logo.svg',
    btnRadius: '10px',
    btnHeight: '54px',
    btnShadow: '0 4px 12px -2px rgb(0 0 0 / 0.12)',
    btnTextWeight: '600',
    inputRadius: '8px',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgb(0 108 53 / 0.15)',
    inputPadding: '16px 20px',
    cardRadius: '12px',
    headerHeight: '68px',
  },
};

export const paymentEntities: Record<EntityId, PaymentEntityConfig> = {
  ...(baseEntities as Record<EntityId, PaymentEntityConfig>),
  SA_NAFATH: baseEntities.NAFATH!,
  AE_UAE_PASS: baseEntities.UAE_PASS!,
  KW_SAHEL: baseEntities.SAHEL!,
  SA_SADAD: baseEntities.SADAD!,
  KW_KNET: baseEntities.KNET!,
  BH_BENEFIT_PAY: baseEntities.BENEFIT!,
  AE_DIRHAM_DUBAI_PAY: baseEntities.DUBAI_PAY!,
  ARAMEX_GLOBAL: baseEntities.ARAMEX!,
  DHL_EXPRESS: baseEntities.DHL!,
  SA_SPL: baseEntities.SPL!,
  SA_SMSA: baseEntities.SMSA!,
  UAE_DIRHAM: baseEntities.DUBAI_PAY!,
};

/**
 * Convert a ChameleonTheme to PaymentEntityConfig for use with ThemedButton/Card/Header
 */
const chameleonToEntityConfig = (theme: ChameleonTheme): PaymentEntityConfig => ({
  id: theme.entityKey.toUpperCase().replace(/[^A-Z0-9_]/g, '') as EntityId,
  name: theme.nameEn,
  nameAr: theme.nameAr,
  primary: theme.colors.primary,
  accent: theme.colors.secondary,
  bg: theme.colors.background,
  surface: theme.colors.surface,
  text: theme.colors.text,
  textMuted: theme.colors.textMuted,
  font: theme.typography.arabic,
  logo: theme.assets.logo,
  btnRadius: theme.borderRadius.button,
  btnHeight: theme.spacing.buttonHeight,
  btnShadow: theme.shadows.button,
  btnTextWeight: String(theme.typography.weights.semibold),
  inputRadius: theme.borderRadius.input,
  inputBorder: theme.colors.inputBorder,
  inputFocusRing: theme.colors.inputFocusRing,
  inputPadding: theme.spacing.fieldPadding,
  cardRadius: theme.borderRadius.card,
  headerHeight: theme.spacing.headerHeight,
});

export const resolveEntity = (companyKey?: string): PaymentEntityConfig => {
  if (!companyKey) return paymentEntities.DEFAULT;

  const key = companyKey.toLowerCase().replace(/[^a-z0-9_]/g, '');

  // 1. Direct match in logic config
  if (paymentEntities[key.toUpperCase() as EntityId]) {
    return paymentEntities[key.toUpperCase() as EntityId];
  }

  // 2. Chameleon V50
  const chameleonTheme = gccChameleonThemes[key];
  if (chameleonTheme) {
    return chameleonToEntityConfig(chameleonTheme);
  }

  // 3. Logic-based partial matching & Aliases
  if (key.includes('sadad') || key.includes('sa_sadad')) return paymentEntities.SADAD;
  if (key.includes('nafath') || key.includes('iam') || key.includes('sa_nafath')) return paymentEntities.NAFATH;
  if (key.includes('knet') || key.includes('kw_knet')) return paymentEntities.KNET;
  if (key.includes('aramex') || key.includes('aramex_global')) return paymentEntities.ARAMEX;
  if (key.includes('spl') || key.includes('post') || key.includes('sa_spl')) return paymentEntities.SPL;
  if (key.includes('sahel') || key.includes('kw_sahel')) return paymentEntities.SAHEL;
  if (key.includes('dubai') || key.includes('ae_dirham')) return paymentEntities.DUBAI_PAY;
  if (key.includes('stc')) return paymentEntities.STC_PAY;
  if (key.includes('mada')) return paymentEntities.MADA;
  if (key.includes('alrajhi')) return paymentEntities.ALRAJHI;
  if (key.includes('alahli') || key.includes('snb')) return paymentEntities.SNB;
  if (key.includes('dhl') || key.includes('dhl_express')) return paymentEntities.DHL;
  if (key.includes('smsa') || key.includes('sa_smsa')) return paymentEntities.SMSA;
  if (key.includes('fedex')) return paymentEntities.FEDEX;
  if (key.includes('uae') || key.includes('gov_ae') || key.includes('uae_pass')) return paymentEntities.UAE_PASS;
  if (key.includes('benefit') || key.includes('gov_bh')) return paymentEntities.BENEFIT;
  if (key.includes('maal') || key.includes('gov_om')) return paymentEntities.MAAL;
  if (key.includes('jaywan') || key.includes('dirham')) return paymentEntities.JAYWAN;

  return paymentEntities.DEFAULT;
};
