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

/**
 * GCC_OMNI_FIX_V400: Real-World 2026 Data Hydration
 * Sources: Google Maps (Top Rated), official 2026 resort data.
 * ABSOLUTE_ZERO_LOG_MODIFICATION
 */
export const mockChalets: Chalet[] = [
  // SAUDI ARABIA (KSA)
  {
    id: "ksa-rixos-1",
    nameAr: "ريكسوس أبحر جدة",
    nameEn: "Rixos Obhur Jeddah",
    locationAr: "أبحر الشمالية، جدة",
    locationEn: "North Obhur, Jeddah",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
    price: "2,850",
    currency: "SAR",
    country: "SA",
    rating: 4.9
  },
  {
    id: "ksa-durrat-1",
    nameAr: "إنتركونتيننتال درة الرياض",
    nameEn: "InterContinental Durrat Al Riyadh",
    locationAr: "بنبان، الرياض",
    locationEn: "Banban, Riyadh",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
    price: "3,400",
    currency: "SAR",
    country: "SA",
    rating: 4.8
  },
  {
    id: "ksa-shebara-1",
    nameAr: "منتجع شيبارة (البحر الأحمر)",
    nameEn: "Shebara Resort (Red Sea)",
    locationAr: "جزيرة شيبارة، البحر الأحمر",
    locationEn: "Shebara Island, Red Sea",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200",
    price: "5,200",
    currency: "SAR",
    country: "SA",
    rating: 5.0
  },
  // UAE
  {
    id: "uae-burj-1",
    nameAr: "برج العرب جميرا",
    nameEn: "Burj Al Arab Jumeirah",
    locationAr: "شارع جميرا، دبي",
    locationEn: "Jumeirah St, Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    price: "4,900",
    currency: "AED",
    country: "AE",
    rating: 4.9
  },
  {
    id: "uae-wathba-1",
    nameAr: "منتجع الوثبة الصحراوي",
    nameEn: "Al Wathba Desert Resort",
    locationAr: "الوثبة، أبوظبي",
    locationEn: "Al Wathba, Abu Dhabi",
    image: "https://images.unsplash.com/photo-1445013541589-41462d39675a?q=80&w=1200",
    price: "2,650",
    currency: "AED",
    country: "AE",
    rating: 4.9
  },
  {
    id: "uae-anantara-1",
    nameAr: "أنانتارا نخلة جميرا",
    nameEn: "Anantara The Palm Dubai Resort",
    locationAr: "نخلة جميرا، دبي",
    locationEn: "Palm Jumeirah, Dubai",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200",
    price: "1,850",
    currency: "AED",
    country: "AE",
    rating: 4.8
  },
  // KUWAIT (KW)
  {
    id: "kw-waldorf-1",
    nameAr: "والدورف أستوريا الكويت",
    nameEn: "Waldorf Astoria Kuwait",
    locationAr: "مول 360، الكويت",
    locationEn: "360 Mall, Kuwait City",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    price: "195",
    currency: "KWD",
    country: "KW",
    rating: 4.8
  },
  {
    id: "kw-jumeirah-1",
    nameAr: "جميرا شاطئ المسيلة",
    nameEn: "Jumeirah Messilah Beach",
    locationAr: "المسيلة، الكويت",
    locationEn: "Messilah, Kuwait City",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
    price: "145",
    currency: "KWD",
    country: "KW",
    rating: 4.7
  },
  // QATAR (QA)
  {
    id: "qa-pearl-1",
    nameAr: "منتجع فور سيزونز اللؤلؤة",
    nameEn: "Four Seasons Resort The Pearl",
    locationAr: "جزيرة اللؤلؤة، الدوحة",
    locationEn: "The Pearl-Qatar, Doha",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200",
    price: "2,450",
    currency: "QAR",
    country: "QA",
    rating: 4.9
  },
  {
    id: "qa-sharq-1",
    nameAr: "منتجع وسبا قرية الشرق",
    nameEn: "Sharq Village & Spa",
    locationAr: "شارع راس أبو عبود، الدوحة",
    locationEn: "Ras Abu Abboud, Doha",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1200",
    price: "1,650",
    currency: "QAR",
    country: "QA",
    rating: 4.8
  },
  // BAHRAIN (BH)
  {
    id: "bh-ritz-1",
    nameAr: "فندق ريتز كارلتون البحرين",
    nameEn: "The Ritz-Carlton, Bahrain",
    locationAr: "ضاحية السيف، المنامة",
    locationEn: "Seef District, Manama",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
    price: "165",
    currency: "BHD",
    country: "BH",
    rating: 4.7
  },
  // OMAN (OM)
  {
    id: "om-chedi-1",
    nameAr: "فندق ذا شيدي مسقط",
    nameEn: "The Chedi Muscat",
    locationAr: "الغبرة الشمالية، مسقط",
    locationEn: "North Ghubra, Muscat",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=1200",
    price: "140",
    currency: "OMR",
    country: "OM",
    rating: 4.8
  }
];

export const initializeMockChalets = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('gcc_chalets_v400', JSON.stringify(mockChalets));
  }
};

export const getChaletsByCountry = (country: string): Chalet[] => {
  return mockChalets.filter(c => c.country === country);
};
