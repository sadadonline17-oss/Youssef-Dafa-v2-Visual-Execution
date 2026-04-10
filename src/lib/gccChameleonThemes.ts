/**
 * GCC Chameleon Theme System — 1:1 Pixel-Perfect Identity Sync
 * V600 PRESENCE: Expanded registry for all mandated GCC services.
 */

export interface ChameleonTheme {
  id: string;
  entityKey: string;
  nameEn: string;
  nameAr: string;
  country: string;
  category: 'government' | 'billing' | 'bank' | 'shipping' | 'utility';

  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    textMuted: string;
    textOnPrimary: string;
    border: string;
    inputBorder: string;
    inputFocusRing: string;
    success: string;
    error: string;
    warning: string;
  };

  shadows: {
    card: string;
    cardElevated: string;
    button: string;
    buttonHover: string;
    input: string;
    header: string;
    modal: string;
  };

  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
    button: string;
    card: string;
    input: string;
  };

  typography: {
    primary: string;
    secondary: string;
    arabic: string;
    numeric: string;
    sizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    weights: {
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      black: number;
    };
  };

  spacing: {
    fieldPadding: string;
    cardPadding: string;
    sectionGap: string;
    buttonHeight: string;
    headerHeight: string;
  };

  assets: {
    logo: string;
    logoSvg?: string;
    hero?: string;
    coatOfArms?: string;
    favicon?: string;
    ogImage: string;
  };

  bodyClass: string;
  hideGlobalIcons: string[];
}

// --- SHARED DEFAULTS ---
const sharedTypography = {
  primary: "'DIN Next Arabic', system-ui, sans-serif",
  secondary: "system-ui, sans-serif",
  arabic: "'DIN Next Arabic', sans-serif",
  numeric: "'DIN Next', monospace",
  sizes: { xs: '11px', sm: '13px', base: '15px', lg: '17px', xl: '20px', '2xl': '24px', '3xl': '30px' },
  weights: { regular: 400, medium: 500, semibold: 600, bold: 700, black: 800 },
};

// --- CORE THEMES ---

export const sadadSA: ChameleonTheme = {
  id: 'sadad_sa',
  entityKey: 'sadad',
  nameEn: 'SADAD',
  nameAr: 'سداد',
  country: 'SA',
  category: 'billing',
  colors: {
    primary: '#FF6B00',
    secondary: '#FF8A33',
    accent: '#FFFFFF',
    background: '#F4F4F4',
    surface: '#FFFFFF',
    surfaceAlt: '#F0F0F0',
    text: '#1C2526',
    textMuted: '#54565B',
    textOnPrimary: '#FFFFFF',
    border: '#E5E5E5',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(255, 107, 0, 0.20)',
    success: '#006633',
    error: '#DC2626',
    warning: '#FF8A33',
  },
  shadows: {
    card: '0 1px 3px rgba(255, 107, 0, 0.08)',
    cardElevated: '0 10px 25px -3px rgba(255, 107, 0, 0.15)',
    button: '0 4px 15px -2px rgba(255, 107, 0, 0.30)',
    buttonHover: '0 6px 20px -2px rgba(255, 107, 0, 0.40)',
    input: '0 1px 2px rgba(255, 107, 0, 0.06)',
    header: '0 2px 8px rgba(255, 107, 0, 0.08)',
    modal: '0 25px 50px -12px rgba(255, 107, 0, 0.25)',
  },
  borderRadius: { xs: '4px', sm: '6px', md: '8px', lg: '12px', xl: '16px', full: '9999px', button: '12px', card: '12px', input: '8px' },
  typography: sharedTypography,
  spacing: { fieldPadding: '16px 20px', cardPadding: '24px', sectionGap: '20px', buttonHeight: '56px', headerHeight: '72px' },
  assets: { logo: '/assets/real-mirrors/logo-sadad-olp.png', ogImage: '/og-sadad.jpg' },
  bodyClass: 'entity-sadad-sa',
  hideGlobalIcons: ['apple-pay'],
};

export const nafathSA: ChameleonTheme = {
  id: 'nafath_sa',
  entityKey: 'nafath',
  nameEn: 'Nafath',
  nameAr: 'نفاذ',
  country: 'SA',
  category: 'government',
  colors: {
    primary: '#006C35',
    secondary: '#00A650',
    accent: '#FFFFFF',
    background: '#F8FAF7',
    surface: '#FFFFFF',
    surfaceAlt: '#F0F7F2',
    text: '#1C2526',
    textMuted: '#4A5568',
    textOnPrimary: '#FFFFFF',
    border: '#D1E8DC',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(0, 108, 53, 0.20)',
    success: '#006C35',
    error: '#DC2626',
    warning: '#F59E0B',
  },
  shadows: {
    card: '0 1px 3px rgba(0, 108, 53, 0.08)',
    cardElevated: '0 10px 25px -3px rgba(0, 108, 53, 0.12)',
    button: '0 3px 12px -2px rgba(0, 108, 53, 0.25)',
    buttonHover: '0 6px 16px -2px rgba(0, 108, 53, 0.35)',
    input: '0 1px 2px rgba(0, 108, 53, 0.04)',
    header: '0 2px 8px rgba(0, 108, 53, 0.06)',
    modal: '0 25px 50px -12px rgba(0, 108, 53, 0.20)',
  },
  borderRadius: { xs: '4px', sm: '6px', md: '8px', lg: '12px', xl: '16px', full: '9999px', button: '8px', card: '12px', input: '8px' },
  typography: { ...sharedTypography, primary: "'Taysir Arabic', 'Taysir', sans-serif" },
  spacing: { fieldPadding: '14px 16px', cardPadding: '24px', sectionGap: '20px', buttonHeight: '52px', headerHeight: '68px' },
  assets: { logo: '/assets/real-mirrors/logo-nafath-alt.png', ogImage: '/og-nafath.jpg' },
  bodyClass: 'entity-nafath-sa',
  hideGlobalIcons: ['apple-pay'],
};

export const uaePassAE: ChameleonTheme = {
  id: 'uae_pass_ae',
  entityKey: 'uae_pass',
  nameEn: 'UAE Pass',
  nameAr: 'UAE Pass',
  country: 'AE',
  category: 'government',
  colors: {
    primary: '#1A1A1A',
    secondary: '#C19B64',
    accent: '#FFFFFF',
    background: '#FAF9F6',
    surface: '#FFFFFF',
    surfaceAlt: '#F5F3EF',
    text: '#1A1A1A',
    textMuted: '#555555',
    textOnPrimary: '#FFFFFF',
    border: '#E5E0D5',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(193, 155, 100, 0.20)',
    success: '#00A651',
    error: '#DC2626',
    warning: '#F59E0B',
  },
  shadows: {
    card: '0 1px 3px rgba(26, 26, 26, 0.06)',
    cardElevated: '0 10px 25px -3px rgba(26, 26, 26, 0.10)',
    button: '0 4px 18px -2px rgba(193, 155, 100, 0.22)',
    buttonHover: '0 6px 22px -2px rgba(193, 155, 100, 0.32)',
    input: '0 1px 2px rgba(26, 26, 26, 0.04)',
    header: '0 2px 8px rgba(26, 26, 26, 0.06)',
    modal: '0 25px 50px -12px rgba(26, 26, 26, 0.18)',
  },
  borderRadius: { xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '20px', full: '9999px', button: '20px', card: '16px', input: '12px' },
  typography: { ...sharedTypography, primary: "'Dubai Font', sans-serif" },
  spacing: { fieldPadding: '16px 18px', cardPadding: '28px', sectionGap: '24px', buttonHeight: '56px', headerHeight: '72px' },
  assets: { logo: '/assets/real-mirrors/logo-uaepass-ae.png', ogImage: '/og-uae-pass.jpg' },
  bodyClass: 'entity-uae-pass-ae',
  hideGlobalIcons: ['apple-pay'],
};

export const knetKW: ChameleonTheme = {
  id: 'knet_kw',
  entityKey: 'knet',
  nameEn: 'KNET',
  nameAr: 'كي نت',
  country: 'KW',
  category: 'bank',
  colors: {
    primary: '#005696',
    secondary: '#0078C2',
    accent: '#FFFFFF',
    background: '#F5F7FA',
    surface: '#FFFFFF',
    surfaceAlt: '#EDF2F7',
    text: '#1C2526',
    textMuted: '#4A4A4A',
    textOnPrimary: '#FFFFFF',
    border: '#D1D5DB',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(0, 86, 150, 0.20)',
    success: '#005696',
    error: '#DC2626',
    warning: '#F59E0B',
  },
  shadows: {
    card: '0 1px 3px rgba(0, 86, 150, 0.08)',
    cardElevated: '0 10px 25px -3px rgba(0, 86, 150, 0.12)',
    button: '0 4px 14px -2px rgba(0, 86, 150, 0.25)',
    buttonHover: '0 6px 18px -2px rgba(0, 86, 150, 0.35)',
    input: '0 1px 2px rgba(0, 86, 150, 0.04)',
    header: '0 2px 8px rgba(0, 86, 150, 0.06)',
    modal: '0 25px 50px -12px rgba(0, 86, 150, 0.20)',
  },
  borderRadius: { xs: '2px', sm: '4px', md: '6px', lg: '8px', xl: '10px', full: '9999px', button: '6px', card: '10px', input: '8px' },
  typography: sharedTypography,
  spacing: { fieldPadding: '16px 20px', cardPadding: '24px', sectionGap: '16px', buttonHeight: '54px', headerHeight: '70px' },
  assets: { logo: '/assets/real-mirrors/logo-knet-com-kw.png', ogImage: '/og-knet.jpg' },
  bodyClass: 'entity-knet-kw',
  hideGlobalIcons: [],
};

export const sahelKW: ChameleonTheme = {
  id: 'sahel_kw',
  entityKey: 'sahel',
  nameEn: 'Sahel',
  nameAr: 'سهل',
  country: 'KW',
  category: 'government',
  colors: {
    primary: '#0057B8',
    secondary: '#00A3E0',
    accent: '#FFFFFF',
    background: '#F5FAF8',
    surface: '#FFFFFF',
    surfaceAlt: '#EBF4F1',
    text: '#0057B8',
    textMuted: '#4A5568',
    textOnPrimary: '#FFFFFF',
    border: '#D1D5DB',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(0, 87, 184, 0.20)',
    success: '#0057B8',
    error: '#DC2626',
    warning: '#F59E0B',
  },
  shadows: {
    card: '0 1px 3px rgba(0, 87, 184, 0.08)',
    cardElevated: '0 10px 25px -3px rgba(0, 87, 184, 0.12)',
    button: '0 4px 14px -2px rgba(0, 87, 184, 0.25)',
    buttonHover: '0 6px 18px -2px rgba(0, 87, 184, 0.35)',
    input: '0 1px 2px rgba(0, 87, 184, 0.04)',
    header: '0 2px 8px rgba(0, 87, 184, 0.06)',
    modal: '0 25px 50px -12px rgba(0, 87, 184, 0.20)',
  },
  borderRadius: { xs: '4px', sm: '6px', md: '8px', lg: '10px', xl: '12px', full: '9999px', button: '10px', card: '12px', input: '8px' },
  typography: sharedTypography,
  spacing: { fieldPadding: '14px 16px', cardPadding: '20px', sectionGap: '16px', buttonHeight: '54px', headerHeight: '64px' },
  assets: { logo: '/assets/sovereign-mirrors/logo-sahel.png', ogImage: '/og-sahel.jpg' },
  bodyClass: 'entity-sahel-kw',
  hideGlobalIcons: [],
};

export const aramexTheme: ChameleonTheme = {
  id: 'aramex_shipping',
  entityKey: 'aramex',
  nameEn: 'Aramex',
  nameAr: 'أرامكس',
  country: 'Global',
  category: 'shipping',
  colors: {
    primary: '#ED1C24',
    secondary: '#1C2526',
    accent: '#FFFFFF',
    background: '#FFFFFF',
    surface: '#FAFAFA',
    surfaceAlt: '#F5F5F5',
    text: '#1C2526',
    textMuted: '#555555',
    textOnPrimary: '#FFFFFF',
    border: '#E5E7EB',
    inputBorder: '#E5E7EB',
    inputFocusRing: 'rgba(237, 28, 36, 0.15)',
    success: '#10B981',
    error: '#ED1C24',
    warning: '#FBBF24',
  },
  shadows: {
    card: '0 2px 4px rgba(0,0,0,0.05)',
    cardElevated: '0 10px 15px -3px rgba(0,0,0,0.1)',
    button: '0 4px 6px -1px rgba(237, 28, 36, 0.2)',
    buttonHover: '0 10px 15px -3px rgba(237, 28, 36, 0.3)',
    input: 'none',
    header: '0 1px 3px rgba(0,0,0,0.05)',
    modal: '0 20px 25px -5px rgba(0,0,0,0.1)',
  },
  borderRadius: { xs: '2px', sm: '4px', md: '8px', lg: '10px', xl: '12px', full: '9999px', button: '8px', card: '8px', input: '8px' },
  typography: sharedTypography,
  spacing: { fieldPadding: '14px 16px', cardPadding: '20px', sectionGap: '16px', buttonHeight: '54px', headerHeight: '64px' },
  assets: { logo: '/assets/real-mirrors/logo-aramex.png', ogImage: '/og-aramex.jpg' },
  bodyClass: 'entity-aramex',
  hideGlobalIcons: [],
};

export const dhlTheme: ChameleonTheme = {
  id: 'dhl_shipping',
  entityKey: 'dhl',
  nameEn: 'DHL Express',
  nameAr: 'دي اتش ال',
  country: 'Global',
  category: 'shipping',
  colors: {
    primary: '#D40511',
    secondary: '#FFCC00',
    accent: '#1C2526',
    background: '#FFFFFF',
    surface: '#FFCC00',
    surfaceAlt: '#F5F5F5',
    text: '#1C2526',
    textMuted: '#1C2526',
    textOnPrimary: '#FFFFFF',
    border: '#E5E7EB',
    inputBorder: '#E5E7EB',
    inputFocusRing: 'rgba(212, 5, 17, 0.1)',
    success: '#00833E',
    error: '#D40511',
    warning: '#FFCC00',
  },
  shadows: {
    card: 'none',
    cardElevated: '0 4px 6px -1px rgba(0,0,0,0.05)',
    button: 'none',
    buttonHover: 'none',
    input: 'none',
    header: 'none',
    modal: '0 10px 15px -3px rgba(0,0,0,0.1)',
  },
  borderRadius: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px', full: '0px', button: '0px', card: '0px', input: '0px' },
  typography: sharedTypography,
  spacing: { fieldPadding: '14px 16px', cardPadding: '16px', sectionGap: '12px', buttonHeight: '52px', headerHeight: '60px' },
  assets: { logo: '/assets/real-mirrors/logo-dhl.png', ogImage: '/og-dhl.jpg' },
  bodyClass: 'entity-dhl',
  hideGlobalIcons: [],
};

// --- REGISTRY ---

export const gccChameleonThemes: Record<string, ChameleonTheme> = {
  sadad: sadadSA,
  sa_sadad: sadadSA,
  nafath: nafathSA,
  sa_nafath: nafathSA,
  uae_pass: uaePassAE,
  ae_uae_pass: uaePassAE,
  knet: knetKW,
  kw_knet: knetKW,
  sahel: sahelKW,
  kw_sahel: sahelKW,
  aramex: aramexTheme,
  aramex_global: aramexTheme,
  dhl: dhlTheme,
  dhl_express: dhlTheme,
};

export const resolveChameleonTheme = (urlParams?: URLSearchParams): ChameleonTheme | null => {
  const params = urlParams || new URLSearchParams(window.location.search);
  const entityKey = params.get('entity') || params.get('company') || params.get('service');

  if (entityKey) {
    const key = entityKey.toLowerCase().replace(/[^a-z0-9_]/g, '');
    if (gccChameleonThemes[key]) return gccChameleonThemes[key];
  }
  return null;
};

export const themeToCSSVariables = (theme: ChameleonTheme): string => {
  return `
    --gcc-primary: ${theme.colors.primary};
    --gcc-secondary: ${theme.colors.secondary};
    --gcc-accent: ${theme.colors.accent};
    --gcc-background: ${theme.colors.background};
    --gcc-surface: ${theme.colors.surface};
    --gcc-surface-alt: ${theme.colors.surfaceAlt};
    --gcc-text: ${theme.colors.text};
    --gcc-text-muted: ${theme.colors.textMuted};
    --gcc-text-on-primary: ${theme.colors.textOnPrimary};
    --gcc-border: ${theme.colors.border};
    --gcc-input-border: ${theme.colors.inputBorder};
    --gcc-input-focus-ring: ${theme.colors.inputFocusRing};
    --gcc-success: ${theme.colors.success};
    --gcc-error: ${theme.colors.error};
    --gcc-warning: ${theme.colors.warning};

    --gcc-shadow-card: ${theme.shadows.card};
    --gcc-shadow-card-elevated: ${theme.shadows.cardElevated};
    --gcc-shadow-button: ${theme.shadows.button};
    --gcc-shadow-button-hover: ${theme.shadows.buttonHover};
    --gcc-shadow-input: ${theme.shadows.input};
    --gcc-shadow-header: ${theme.shadows.header};
    --gcc-shadow-modal: ${theme.shadows.modal};

    --gcc-radius-xs: ${theme.borderRadius.xs};
    --gcc-radius-sm: ${theme.borderRadius.sm};
    --gcc-radius-md: ${theme.borderRadius.md};
    --gcc-radius-lg: ${theme.borderRadius.lg};
    --gcc-radius-xl: ${theme.borderRadius.xl};
    --gcc-radius-full: ${theme.borderRadius.full};
    --gcc-radius-button: ${theme.borderRadius.button};
    --gcc-radius-card: ${theme.borderRadius.card};
    --gcc-radius-input: ${theme.borderRadius.input};

    --gcc-font-primary: ${theme.typography.primary};
    --gcc-font-secondary: ${theme.typography.secondary};
    --gcc-font-arabic: ${theme.typography.arabic};
    --gcc-font-numeric: ${theme.typography.numeric};

    --gcc-field-padding: ${theme.spacing.fieldPadding};
    --gcc-card-padding: ${theme.spacing.cardPadding};
    --gcc-section-gap: ${theme.spacing.sectionGap};
    --gcc-button-height: ${theme.spacing.buttonHeight};
    --gcc-header-height: ${theme.spacing.headerHeight};

    --gcc-entity-id: ${theme.id};
    --gcc-entity-key: ${theme.entityKey};
    --gcc-country: ${theme.country};
    --gcc-category: ${theme.category};
  `;
};

export default gccChameleonThemes;
