export interface Chalet {
  id: string;
  nameAr: string;
  nameEn: string;
  locationAr: string;
  locationEn: string;
  image: string;
  price: string;
  currency: string;
  country: string;
  rating: number;
}

export const mockChalets: Chalet[] = [
  // SAUDI ARABIA (KSA) - Real 2026 Locations
  {
    id: "ksa-1",
    nameAr: "منتجع ريكسوس أبحر جدة",
    nameEn: "Rixos Obhur Jeddah Resort",
    locationAr: "أبحر الشمالية، جدة",
    locationEn: "North Obhur, Jeddah",
    image: "/assets/sovereign-mirrors/chalet-riyadh-1.jpg",
    price: "2,450",
    currency: "SAR",
    country: "SA",
    rating: 4.9
  },
  {
    id: "ksa-2",
    nameAr: "فندق باب سمحان، الدرعية",
    nameEn: "Bab Samhan Hotel, Diriyah",
    locationAr: "وادي حنيفة، الرياض",
    locationEn: "Wadi Hanifah, Riyadh",
    image: "/assets/real-mirrors/hero-riyadh-futuristic.jpg",
    price: "3,100",
    currency: "SAR",
    country: "SA",
    rating: 5.0
  },
  // UAE - Real 2026 Locations
  {
    id: "uae-1",
    nameAr: "منتجع وان آند أونلي رويال ميراج",
    nameEn: "One&Only Royal Mirage Dubai",
    locationAr: "الصفوح، دبي",
    locationEn: "Al Sufouh, Dubai",
    image: "/assets/sovereign-mirrors/chalet-dubai-1.jpg",
    price: "4,200",
    currency: "AED",
    country: "AE",
    rating: 4.9
  },
  {
    id: "uae-2",
    nameAr: "فلل نخلة جميرا الفاخرة",
    nameEn: "Palm Jumeirah Luxury Villas",
    locationAr: "نخلة جميرا، دبي",
    locationEn: "Palm Jumeirah, Dubai",
    image: "/assets/real-mirrors/hero-dubai-future.jpg",
    price: "5,800",
    currency: "AED",
    country: "AE",
    rating: 4.8
  },
  // KUWAIT (KW) - Real 2026 Locations
  {
    id: "kw-1",
    nameAr: "شاليهات الخيران مارينا",
    nameEn: "Al Khiran Marina Chalets",
    locationAr: "مدينة صباح الأحمد البحرية",
    locationEn: "Sabah Al Ahmad Sea City",
    image: "/assets/sovereign-mirrors/chalet-kuwait-1.jpg",
    price: "180",
    currency: "KWD",
    country: "KW",
    rating: 4.7
  },
  // QATAR (QA)
  {
    id: "qa-1",
    nameAr: "منتجع جزيرة البنانا الدوحة",
    nameEn: "Banana Island Resort Doha",
    locationAr: "جزيرة البنانا، الدوحة",
    locationEn: "Banana Island, Doha",
    image: "/assets/real-mirrors/bg-glassmorphism-mesh.jpg",
    price: "2,150",
    currency: "QAR",
    country: "QA",
    rating: 4.9
  },
  // BAHRAIN (BH)
  {
    id: "bh-1",
    nameAr: "منتجع جرافيتي ووترفرونت",
    nameEn: "Gravity Waterfront Resort",
    locationAr: "جزر أمواج، البحرين",
    locationEn: "Amwaj Islands, Bahrain",
    image: "/assets/sovereign-mirrors/chalet-bahrain-1.jpg",
    price: "145",
    currency: "BHD",
    country: "BH",
    rating: 4.8
  },
  // OMAN (OM)
  {
    id: "om-1",
    nameAr: "منتجع شاطئ السيفة",
    nameEn: "Sifah Beach Resort",
    locationAr: "مسقط، عمان",
    locationEn: "Muscat, Oman",
    image: "/assets/sovereign-mirrors/chalet-muscat-1.jpg",
    price: "120",
    currency: "OMR",
    country: "OM",
    rating: 4.6
  }
];

export const initializeMockChalets = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('gcc_chalets_v300', JSON.stringify(mockChalets));
  }
};

export const getChaletsByCountry = (country: string): Chalet[] => {
  return mockChalets.filter(c => c.country === country);
};
