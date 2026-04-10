import { Chalet } from "@/hooks/useSupabase";

export const MOCK_CHALETS: Chalet[] = [
  // --- SAUDI ARABIA (KSA) ---
  {
    id: "chalet_sa_001",
    name: "منتجع وفيلات ريكسوس أبحر جدة",
    country_code: "SA",
    city: "جدة",
    address: "أبحر الجنوبية، جدة",
    default_price: 2500,
    images: ["/assets/og/og-alrajhi.jpg"], // Reusing high-quality cityscapes/architecture assets
    provider_id: null,
    verified: true,
    amenities: ["مسبح خاص", "إطلالة بحرية", "نظام شامل كلياً", "ألعاب أطفال"],
    capacity: 8,
  },
  {
    id: "chalet_sa_002",
    name: "فندق باب سمحان، الدرعية",
    country_code: "SA",
    city: "الرياض",
    address: "منطقة الدرعية التاريخية",
    default_price: 3200,
    images: ["/assets/hero-bank-riyadh.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["عمارة نجدية", "ساحات تراثية", "خدمات فاخرة", "مطاعم عالمية"],
    capacity: 4,
  },
  {
    id: "chalet_sa_003",
    name: "فندق كمبينسكي العثمان الخبر",
    country_code: "SA",
    city: "الخبر",
    address: "طريق الملك سعود، الخبر",
    default_price: 1800,
    images: ["/assets/hero-riyadh-night-1.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["إطلالة بانورامية", "سبا فاخر", "مطعم إيطالي", "مسبح داخلي"],
    capacity: 6,
  },
  // --- UNITED ARAB EMIRATES (UAE) ---
  {
    id: "chalet_ae_001",
    name: "ون آند أونلي رويال ميراج دبي",
    country_code: "AE",
    city: "دبي",
    address: "شارع الملك سلمان بن عبد العزيز آل سعود",
    default_price: 4500,
    images: ["/assets/hero-bank-dubai.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["شاطئ خاص", "حدائق غناء", "مسبح لا نهائي", "خدمة Butler"],
    capacity: 6,
  },
  {
    id: "chalet_ae_002",
    name: "شاليهات المبزرة الخضراء العين",
    country_code: "AE",
    city: "أبوظبي",
    address: "منطقة المبزرة الخضراء، جبل حفيت",
    default_price: 1200,
    images: ["/assets/hero-dubai-night-1.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["ينابيع مياه كبريتية", "إطلالة جبلية", "مناطق خضراء", "خصوصية تامة"],
    capacity: 10,
  },
  {
    id: "chalet_ae_003",
    name: "ريتز كارلتون رأس الخيمة، صحراء الوادي",
    country_code: "AE",
    city: "رأس الخيمة",
    address: "محمية الوادي الطبيعية",
    default_price: 3800,
    images: ["/assets/hero-dubai-night-2.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["فيلات خيام", "مسبح خاص", "مشاهدة غزلان", "رماية وصيد صقور"],
    capacity: 4,
  },
  // --- KUWAIT ---
  {
    id: "chalet_kw_001",
    name: "منتجع الخيران البحري",
    country_code: "KW",
    city: "الخيران",
    address: "مدينة صباح الأحمد البحرية",
    default_price: 1500,
    images: ["/assets/hero-kuwait-hero.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["إطلالة بحرية", "مسبح خاص", "مرسى قوارب", "مطاعم مجهزة"],
    capacity: 12,
  },
  {
    id: "chalet_kw_002",
    name: "منتجع أويا بنيدر",
    country_code: "KW",
    city: "بنيدر",
    address: "طريق 267، بنيدر",
    default_price: 2200,
    images: ["/assets/og/og-knet.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["تصميم يوناني", "شاطئ خاص", "شاليهات عصرية", "خصوصية عالية"],
    capacity: 8,
  },
  // --- QATAR ---
  {
    id: "chalet_qa_001",
    name: "منتجع جزيرة البنانا الدوحة",
    country_code: "QA",
    city: "الدوحة",
    address: "جزيرة البنانا، قبالة كورنيش الدوحة",
    default_price: 3500,
    images: ["/assets/hero-qatar-hero.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["فيلات فوق الماء", "سبا فاخر", "شاطئ ذهبي", "سينما خاصة"],
    capacity: 6,
  },
  {
    id: "chalet_qa_002",
    name: "منتجع وفيلات هيلتون شاطئ سلوى",
    country_code: "QA",
    city: "أبو سمرة",
    address: "طريق سلوى، مخرج 84",
    default_price: 2800,
    images: ["/assets/og/og-qnb.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["أكبر حديقة مائية", "مسبح خاص", "شاطئ ممتد", "مطاعم متنوعة"],
    capacity: 10,
  },
  // --- BAHRAIN ---
  {
    id: "chalet_bh_001",
    name: "منتجع جزر حوار من مانتيس",
    country_code: "BH",
    city: "جزر حوار",
    address: "جنوب البحرين، جزيرة حوار",
    default_price: 2100,
    images: ["/assets/og/og-benefitpay.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["فيلات صديقة للبيئة", "محمية طبيعية", "فيلات فوق الماء", "رياضات مائية"],
    capacity: 4,
  },
  {
    id: "chalet_bh_002",
    name: "فندق ومنتجع ذا آرت جزر أمواج",
    country_code: "BH",
    city: "جزر أمواج",
    address: "لاغون أمواج، المنامة",
    default_price: 1600,
    images: ["/assets/hero-riyadh-night-2.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["شاطئ خاص", "حديقة مائية للأطفال", "إطلالة بحرية", "نادي صحي"],
    capacity: 6,
  },
  // --- OMAN ---
  {
    id: "chalet_om_001",
    name: "منتجع أنانتارا الجبل الأخضر",
    country_code: "OM",
    city: "الجبل الأخضر",
    address: "نيابة الجبل الأخضر، نزوى",
    default_price: 2400,
    images: ["/assets/hero-omanpost.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["مسبح حافة الهاوية", "إطلالة جبلية", "طقس معتدل صيفاً", "رحلات تسلق"],
    capacity: 4,
  },
  {
    id: "chalet_om_002",
    name: "منتجع البليد صلالة بإدارة أنانتارا",
    country_code: "OM",
    city: "صلالة",
    address: "الحافة، صلالة",
    default_price: 1900,
    images: ["/assets/og/og-bankmuscat.jpg"],
    provider_id: null,
    verified: true,
    amenities: ["فيلات بمسبح خاص", "بين البحر والبحيرة", "تصميم قلاع عُمانية", "سبا تايلاندي"],
    capacity: 6,
  },
];

export const getChaletsByCountry = (countryCode: string): Chalet[] => {
  return MOCK_CHALETS.filter((chalet) => chalet.country_code === countryCode);
};

export const getChaletById = (id: string): Chalet | undefined => {
  return MOCK_CHALETS.find((chalet) => chalet.id === id);
};

export const initializeMockChalets = () => {
  if (typeof window !== 'undefined') {
    MOCK_CHALETS.forEach((chalet) => {
      const key = `local_chalets_${chalet.id}`;
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(chalet));
      }
    });
  }
};
