import { 
  ChameleonTheme, 
  gccChameleonThemes 
} from "./gccChameleonThemes";

/**
 * GLOBAL REAL ASSET MAPPING
 * Redirects all generic placeholder paths to the high-fidelity 2026 GCC assets.
 */

// 1. KSA Entities (Riyadh Cinematic Theme)
const ksaRealAssets = {
  logo: '/assets/real-mirrors/logo-iam-gov-sa.png',
  hero: '/assets/real-mirrors/hero-riyadh-futuristic.jpg',
  ogImage: '/assets/real-mirrors/hero-city-riyadh.jpg'
};

// 2. UAE Entities (Dubai Glassmorphism Theme)
const uaeRealAssets = {
  logo: '/assets/real-mirrors/logo-uaepass-ae.png',
  hero: '/assets/real-mirrors/hero-dubai-future.jpg',
  ogImage: '/assets/real-mirrors/hero-city-dubai.jpg'
};

// 3. Kuwait Entities (KNET 2.0 Theme)
const kwRealAssets = {
  logo: '/assets/real-mirrors/logo-knet-com-kw.png',
  hero: '/assets/real-mirrors/bg-security-grid.jpg',
  ogImage: '/assets/real-mirrors/hero-cityscape-night.jpg'
};

/**
 * Applying Global Mirror Overrides
 */
export const applyGlobalRealAssets = () => {
  // Saudi Arabia
  if (gccChameleonThemes['sadad']) {
    gccChameleonThemes['sadad'].assets.logo = ksaRealAssets.logo;
    gccChameleonThemes['sadad'].assets.hero = ksaRealAssets.hero;
  }
  if (gccChameleonThemes['nafath']) {
    gccChameleonThemes['nafath'].assets.logo = '/assets/real-mirrors/logo-nafath-alt.png';
    gccChameleonThemes['nafath'].assets.hero = ksaRealAssets.hero;
  }
  if (gccChameleonThemes['stcpay']) {
    gccChameleonThemes['stcpay'].assets.logo = '/assets/real-mirrors/logo-stcpay-com-sa.png';
    gccChameleonThemes['stcpay'].assets.hero = ksaRealAssets.hero;
  }
  if (gccChameleonThemes['mada']) {
    gccChameleonThemes['mada'].assets.logo = '/assets/real-mirrors/logo-mada-com-sa.png';
  }

  // UAE
  if (gccChameleonThemes['uaepass']) {
    gccChameleonThemes['uaepass'].assets.logo = uaeRealAssets.logo;
    gccChameleonThemes['uaepass'].assets.hero = uaeRealAssets.hero;
  }
  if (gccChameleonThemes['dubaipay']) {
    gccChameleonThemes['dubaipay'].assets.logo = '/assets/real-mirrors/logo-dubaipay-dubai-ae.png';
    gccChameleonThemes['dubaipay'].assets.hero = uaeRealAssets.hero;
  }

  // Kuwait
  if (gccChameleonThemes['knet']) {
    gccChameleonThemes['knet'].assets.logo = kwRealAssets.logo;
    gccChameleonThemes['knet'].assets.hero = kwRealAssets.hero;
  }

  // Bahrain / Qatar / Oman
  if (gccChameleonThemes['benefit']) gccChameleonThemes['benefit'].assets.logo = '/assets/real-mirrors/logo-benefit-bh.png';
  if (gccChameleonThemes['hukoomi']) gccChameleonThemes['hukoomi'].assets.logo = '/assets/real-mirrors/logo-hukoomi-gov-qa.png';
  if (gccChameleonThemes['asyad']) gccChameleonThemes['asyad'].assets.logo = '/assets/real-mirrors/logo-asyad-om.png';

  // Shipping Clones
  if (gccChameleonThemes['aramex']) {
    gccChameleonThemes['aramex'].assets.logo = '/assets/real-mirrors/logo-aramex.png';
    gccChameleonThemes['aramex'].assets.hero = '/assets/real-mirrors/hero-logistics-van.jpg';
  }
  if (gccChameleonThemes['dhl']) {
    gccChameleonThemes['dhl'].assets.logo = '/assets/real-mirrors/logo-dhl.png';
    gccChameleonThemes['dhl'].assets.hero = '/assets/real-mirrors/bg-security-grid.jpg';
  }
};
