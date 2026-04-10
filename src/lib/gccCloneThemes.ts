import { 
  ChameleonTheme, 
  gccChameleonThemes 
} from "./gccChameleonThemes";

/**
 * 2026 OFFICIAL ARAMEX DEEP CLONE THEME
 */
export const aramexTheme: ChameleonTheme = {
  id: 'aramex_global_v2026',
  entityKey: 'aramex',
  nameEn: 'Aramex',
  nameAr: 'أرامكس',
  country: 'Global',
  category: 'shipping',
  colors: {
    primary: '#E31837', // Aramex Red
    secondary: '#1C2526', // Aramex Dark Gray
    accent: '#E31837',
    background: '#F4F4F4', // Mobile app background
    surface: '#FFFFFF',
    surfaceAlt: '#FDFDFD',
    text: '#1C2526',
    textMuted: '#6B7280',
    textOnPrimary: '#FFFFFF',
    border: '#E5E7EB',
    inputBorder: '#D1D5DB',
    inputFocusRing: 'rgba(227, 24, 55, 0.15)',
    success: '#10B981',
    error: '#E31837',
    warning: '#F59E0B',
  },
  typography: {
    fontFamily: 'var(--font-roboto)', // Aramex standard fallback
    headingWeight: '700',
    bodyWeight: '400',
    letterSpacing: '-0.01em',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  borderRadius: {
    button: '4px', // Aramex buttons are slightly rounded
    card: '8px',
    input: '4px',
  },
  assets: {
    logo: '/assets/real-mirrors/logo-aramex-com.png',
    ogImage: '/assets/og/og-aramex.jpg',
    hero: '/assets/real-mirrors/hero-aramex-van.jpg',
  },
  bodyClass: 'entity-aramex-clone',
  hideGlobalIcons: []
};

/**
 * 2026 OFFICIAL DHL EXPRESS DEEP CLONE THEME
 */
export const dhlTheme: ChameleonTheme = {
  id: 'dhl_express_v2026',
  entityKey: 'dhl',
  nameEn: 'DHL Express',
  nameAr: 'دي اتش ال إكسبريس',
  country: 'Global',
  category: 'shipping',
  colors: {
    primary: '#D40511', // DHL Red
    secondary: '#FFCC00', // DHL Yellow
    accent: '#D40511',
    background: '#FFFFFF',
    surface: '#FFCC00', // DHL Yellow headers
    surfaceAlt: '#FFF9E5',
    text: '#1C2526',
    textMuted: '#757575',
    textOnPrimary: '#FFFFFF',
    border: '#FFCC00',
    inputBorder: '#E5E7EB',
    inputFocusRing: 'rgba(212, 5, 17, 0.1)',
    success: '#007D32',
    error: '#D40511',
    warning: '#FFCC00',
  },
  typography: {
    fontFamily: 'var(--font-roboto-condensed)', // Replicating 'Delivery' font
    headingWeight: '900',
    bodyWeight: '500',
    letterSpacing: '-0.02em',
  },
  shadows: {
    sm: 'none',
    md: 'none', // DHL uses flat design with borders
    lg: 'none',
  },
  borderRadius: {
    button: '0px', // DHL buttons are sharp/square
    card: '0px',
    input: '0px',
  },
  assets: {
    logo: '/assets/real-mirrors/logo-dhl-com.png',
    ogImage: '/assets/og/og-dhl.jpg',
    hero: '/assets/real-mirrors/bg-tech-circuit.jpg',
  },
  bodyClass: 'entity-dhl-clone',
  hideGlobalIcons: []
};

// Register in themes
export const registerCloneThemes = () => {
  gccChameleonThemes['aramex'] = aramexTheme;
  gccChameleonThemes['dhl'] = dhlTheme;
};
