import { PaymentEntityConfig } from "./gccPaymentEntities";

export interface GovernmentService {
  id: string;
  nameAr: string;
  nameEn: string;
  country: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  bgType: 'security_grid' | 'glassmorphism' | 'pulse' | 'mesh';
  heroImage: string;
  fontFamily: string;
}

export const governmentServices: GovernmentService[] = [
  {
    id: 'sa_nafath',
    nameAr: 'نفاذ | الهوية الرقمية',
    nameEn: 'NAFATH | National Identity',
    country: 'SA',
    logo: '/assets/real-mirrors/logo-nafath.png',
    primaryColor: '#006C35',
    secondaryColor: '#007CC2',
    bgType: 'security_grid',
    heroImage: '/assets/real-mirrors/hero-riyadh-futuristic.jpg',
    fontFamily: 'var(--font-din-next)'
  },
  {
    id: 'ae_dubaipay',
    nameAr: 'دبي باي | حكومة دبي',
    nameEn: 'DubaiPay | Digital Dubai',
    country: 'AE',
    logo: '/assets/real-mirrors/logo-uaepass-ae.png',
    primaryColor: '#2B59FF',
    secondaryColor: '#00D1FF',
    bgType: 'glassmorphism',
    heroImage: '/assets/real-mirrors/hero-dubai-future.jpg',
    fontFamily: 'var(--font-dubai)'
  },
  {
    id: 'kw_knet',
    nameAr: 'كي نت | المدفوعات الحكومية',
    nameEn: 'KNET | Gov Payments',
    country: 'KW',
    logo: '/assets/real-mirrors/logo-knet-com-kw.png',
    primaryColor: '#003366',
    secondaryColor: '#FFD200',
    bgType: 'mesh',
    heroImage: '/assets/real-mirrors/bg-security-grid.jpg',
    fontFamily: 'var(--font-taysir)'
  },
  {
    id: 'qa_hukoomi',
    nameAr: 'حكومي | قطر',
    nameEn: 'Hukoomi | Qatar',
    country: 'QA',
    logo: '/assets/real-mirrors/logo-hukoomi-gov-qa.png',
    primaryColor: '#8D1535',
    secondaryColor: '#FDFDFD',
    bgType: 'security_grid',
    heroImage: '/assets/real-mirrors/bg-glassmorphism-mesh.jpg',
    fontFamily: 'var(--font-din-next)'
  },
  {
    id: 'bh_benefit',
    nameAr: 'بنفت بي | البحرين',
    nameEn: 'BenefitPay | Bahrain',
    country: 'BH',
    logo: '/assets/real-mirrors/logo-benefitpay-com-bh.png',
    primaryColor: '#ED1C24',
    secondaryColor: '#FFFFFF',
    bgType: 'pulse',
    heroImage: '/assets/real-mirrors/bg-security-grid.jpg',
    fontFamily: 'var(--font-din-next)'
  },
  {
    id: 'om_asyad',
    nameAr: 'أسيد | بريد عمان',
    nameEn: 'Asyad | Oman Post',
    country: 'OM',
    logo: '/assets/real-mirrors/logo-asyad-om.png',
    primaryColor: '#1A2B49',
    secondaryColor: '#F26522',
    bgType: 'mesh',
    heroImage: '/assets/real-mirrors/bg-glassmorphism-mesh.jpg',
    fontFamily: 'var(--font-dubai)'
  }
];

export const getGovernmentServicesByCountry = (country: string): GovernmentService[] => {
  return governmentServices.filter(s => s.country === country);
};

export const getGovernmentServiceByKey = (key: string): GovernmentService | undefined => {
  return resolveGovService(key);
};

export const resolveGovService = (key: string): GovernmentService | undefined => {
  const normalized = key.toLowerCase();
  return governmentServices.find(s => 
    normalized.includes(s.id) || 
    normalized.includes(s.country.toLowerCase()) ||
    normalized.includes(s.nameEn.toLowerCase())
  );
};
