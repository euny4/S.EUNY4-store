const products = [
  {
    id: 1,
    name: "فستان أنيق",
    category: "نساء",
    price: 149,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    description: "فستان أنيق مناسب للمناسبات والأنشطة الرسمية، مصنوع من قماش ناعم ومريح.",
    colors: ["أسود", "بيج", "وردي"]
  },
  {
    id: 2,
    name: "حقيبة جلدية",
    category: "حقائب",
    price: 220,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    description: "حقيبة فاخرة بلمسة أنيقة وعصرية، مناسبة للارتداء اليومي وغير الرسمي.",
    colors: ["أسود", "بني"]
  },
  {
    id: 3,
    name: "حذاء رياضي",
    category: "أحذية",
    price: 189,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    description: "حذاء رياضي مريح ومناسب للأنشطة اليومية والرحلات.",
    colors: ["أبيض", "أسود"]
  },
  {
    id: 4,
    name: "قميص رجالي",
    category: "رجال",
    price: 99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
    description: "قميص رجالي أنيق بمظهر عصري ومريح في ارتدائه.",
    colors: ["أزرق", "أسود", "رمادي"]
  },
  {
    id: 5,
    name: "ملابس أطفال",
    category: "أطفال",
    price: 89,
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80",
    rating: 4.5,
    description: "مجموعة أطفال ناعمة ومريحة مناسبة للاستخدام اليومي.",
    colors: ["أزرق", "وردي"]
  },
  {
    id: 6,
    name: "مجموعة عناية",
    category: "تجميل",
    price: 120,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    description: "مجموعة للعناية بالبشرة والجمال مع مكونات مختارة بعناية.",
    colors: ["وردي", "ذهبي"]
  },
  {
    id: 7,
    name: "سماعات لاسلكية",
    category: "إلكترونيات",
    price: 299,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    description: "سماعات لاسلكية ذات صوت واضح ومريح مع بطارية طويلة.",
    colors: ["أسود", "أبيض"]
  },
  {
    id: 8,
    name: "ساعة يد أنيقة",
    category: "إكسسوارات",
    price: 390,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    description: "ساعة يد فاخرة بإطلالة أنيقة ومناسبة للاستعمال اليومي.",
    colors: ["فضي", "ذهبي"]
  },
  {
    id: 9,
    name: "بدلة أنيقة",
    category: "رجال",
    price: 260,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    description: "بدلة رجالية أنيقة تناسب المناسبات الرسمية والمهنية.",
    colors: ["أسود", "رمادي"]
  },
  {
    id: 10,
    name: "مكياج فاخر",
    category: "تجميل",
    price: 140,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
    description: "مجموعة مكياج فاخرة تضيف لمسة أنيقة وجميلة.",
    colors: ["روز", "بيج"]
  },
  {
    id: 11,
    name: "حقيبة ظهر",
    category: "حقائب",
    price: 210,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    description: "حقيبة ظهر عملية ومريحة للحركة اليومية.",
    colors: ["أسود", "أزرق"]
  },
  {
    id: 12,
    name: "حذاء أنثوي",
    category: "نساء",
    price: 175,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    description: "حذاء أنثوي أنيق ومريح مع لمسة عصرية.",
    colors: ["أسود", "وردي"]
  }
];

window.products = products;
