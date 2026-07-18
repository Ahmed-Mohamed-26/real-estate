const PROPERTIES = [
  {
    id: 1,
    badge: 'للبيع',
    title: 'فيلا فاخرة في التجمع الخامس',
    location: 'القاهرة، التجمع الخامس',
    city: 'القاهرة',
    type: 'فيلا',
    purpose: 'بيع',
    price: 12500000,
    priceLabel: '12,500,000 ج.م',
    area: 450,
    beds: 5,
    baths: 4,
    garages: 2,
    image: 'assets/images/product/prod1/main.avif',
    gallery: [

          'assets/images/product/prod1/gallery1.avif',
      'assets/images/product/prod1/gallery2.avif',
      'assets/images/product/prod1/gallery3.avif',
      'assets/images/product/prod1/gallery4.avif'
    ],
    featured: true,
    desc: 'فيلا مستقلة بتشطيب فاخر، حديقة خاصة، حمام سباحة، واجهات زجاجية عصرية ومساحات استقبال واسعة مناسبة للعائلات.'
  },
  {
    id: 2,
    badge: 'للبيع',
    title: 'شقة فاخرة في الشيخ زايد',
    location: 'الجيزة، الشيخ زايد',
    city: 'الجيزة',
    type: 'شقة',
    purpose: 'بيع',
    price: 4750000,
    priceLabel: '4,750,000 ج.م',
    area: 180,
    beds: 3,
    baths: 2,
    garages: 1,
     image: 'assets/images/product/prod2/main.avif',
    gallery: [
      'assets/images/product/prod2/main.avif',
      'assets/images/product/prod2/gallery1.avif',
      'assets/images/product/prod2/gallery2.avif',
      'assets/images/product/prod2/gallery1.avif',
   
    ],
    featured: true,
    desc: 'شقة بتقسيم ممتاز، ريسبشن كبير، مطبخ أمريكي، إضاءة طبيعية وتشطيب مودرن داخل كمبوند هادئ.'
  },
  {
    id: 3,
    badge: 'للبيع',
    title: 'شقة في كمبوند B8',
    location: 'القاهرة، مدينتي',
    city: 'القاهرة',
    type: 'شقة',
    purpose: 'بيع',
    price: 3250000,
    priceLabel: '3,250,000 ج.م',
    area: 150,
    beds: 3,
    baths: 2,
    garages: 1,
    image: 'assets/images/product/prod3/main.avif',
    gallery: [
      'assets/images/product/prod3/main.avif',
      'assets/images/product/prod3/gallery1.avif',
      'assets/images/product/prod3/gallery2.avif',
      'assets/images/product/prod3/gallery3.avif'
    ],
    featured: true,
    desc: 'وحدة سكنية داخل كمبوند متكامل الخدمات بالقرب من مناطق تجارية ومدارس ومسارات مشاة.'
  },
  {
    id: 4,
    badge: 'للبيع',
    title: 'فيلا في الساحل الشمالي',
    location: 'الساحل الشمالي، سيدي عبد الرحمن',
    city: 'الساحل الشمالي',
    type: 'فيلا',
    purpose: 'بيع',
    price: 10800000,
    priceLabel: '10,800,000 ج.م',
    area: 320,
    beds: 4,
    baths: 4,
    garages: 2,
image: 'assets/images/product/prod4/main.avif',
    gallery: [
 
       'assets/images/product/prod4/main.avif',
      'assets/images/product/prod4/gallery1.avif',
      'assets/images/product/prod4/gallery2.avif',
      'assets/images/product/prod4/gallery3.avif'
    ],
    featured: true,
    desc: 'فيلا مصيفية بإطلالة مفتوحة، حمام سباحة، تراس كبير وموقع قريب من البحر والخدمات.'
  },
  {
    id: 5,
    badge: 'للإيجار',
    title: 'شقة مفروشة في المعادي',
    location: 'القاهرة، المعادي',
    city: 'القاهرة',
    type: 'شقة',
    purpose: 'إيجار',
    price: 25000,
    priceLabel: '25,000 ج.م / شهريًا',
    area: 140,
    beds: 2,
    baths: 2,
    garages: 1,
image: 'assets/images/product/prod5/main.avif',
    gallery: [
      'assets/images/product/prod5/main.avif',
      'assets/images/product/prod5/gallery1.avif',
      'assets/images/product/prod5/gallery2.avif',
      'assets/images/product/prod5/gallery3.avif'
    ],
    featured: true,
    desc: 'شقة مفروشة بالكامل بتصميم هادئ وقريبة من المطاعم والخدمات، مناسبة للإقامة الطويلة.'
  },
  {
    id: 6,
    badge: 'للإيجار',
    title: 'مكتب إداري في العاصمة',
    location: 'العاصمة الإدارية',
    city: 'العاصمة الإدارية',
    type: 'مكتب',
    purpose: 'إيجار',
    price: 30000,
    priceLabel: '30,000 ج.م / شهريًا',
    area: 90,
    beds: 0,
    baths: 1,
    garages: 1,
    image: 'assets/images/product/prod6/main.avif',
    gallery: [
      'assets/images/product/prod6/main.avif',
      'assets/images/product/prod6/gallery1.avif',
      'assets/images/product/prod6/gallery2.avif',
      'assets/images/product/prod6/gallery3.avif'
    ],
    featured: true,
    desc: 'مكتب إداري مجهز داخل مبنى أعمال حديث مع أمن ومصاعد وموقف سيارات وموقع مميز.'
  },
  {
    id: 7,
    badge: 'للبيع',
    title: 'تاون هاوس في زايد الجديدة',
    location: 'الجيزة، زايد الجديدة',
    city: 'الجيزة',
    type: 'تاون هاوس',
    purpose: 'بيع',
    price: 6900000,
    priceLabel: '6,900,000 ج.م',
    area: 230,
    beds: 4,
    baths: 3,
    garages: 2,
    image: 'assets/images/product/prod7/main.avif',
    gallery: [
      'assets/images/product/prod7/main.avif',
      'assets/images/product/prod7/gallery1.avif',
      'assets/images/product/prod7/gallery2.avif',
      'assets/images/product/prod7/gallery3.avif'
    ],
    featured: false,
    desc: 'تاون هاوس بتصميم عملي، حديقة أمامية وخلفية، غرف نوم ماستر ومساحات تخزين ممتازة.'
  },
  {
    id: 8,
    badge: 'للبيع',
    title: 'بنتهاوس بإطلالة مفتوحة',
    location: 'القاهرة، القاهرة الجديدة',
    city: 'القاهرة',
    type: 'بنتهاوس',
    purpose: 'بيع',
    price: 8350000,
    priceLabel: '8,350,000 ج.م',
    area: 260,
    beds: 3,
    baths: 3,
    garages: 2,
    image: 'assets/images/product/prod8/main.avif',
    gallery: [
      'assets/images/product/prod8/main.avif',
      'assets/images/product/prod8/main.avif',
      'assets/images/product/prod8/gallery1.avif',
      'assets/images/product/prod8/gallery2.avif',
    ],
    featured: false,
    desc: 'بنتهاوس بتراس واسع وإطلالة مفتوحة، مناسب لمحبي المساحات الخارجية والخصوصية.'
  },
  {
    id: 9,
    badge: 'للإيجار',
    title: 'شاليه مفروش في العين السخنة',
    location: 'العين السخنة، الجلالة',
    city: 'العين السخنة',
    type: 'شاليه',
    purpose: 'إيجار',
    price: 4500,
    priceLabel: '4,500 ج.م / يوم',
    area: 115,
    beds: 2,
    baths: 2,
    garages: 1,
    image: 'assets/images/product/prod9/main.avif',
    gallery: [
      'assets/images/product/prod9/main.avif',
      'assets/images/product/prod9/gallery1.avif',
      'assets/images/product/prod9/gallery2.avif',
      'assets/images/product/prod9/gallery3.avif'
    ],
    featured: false,
    desc: 'شاليه مفروش بالكامل بإطلالة جميلة وقريب من الشاطئ، مناسب للعطلات القصيرة.'
  },
  {
    id: 10,
    badge: 'للبيع',
    title: 'دوبلكس في أكتوبر',
    location: 'الجيزة، 6 أكتوبر',
    city: 'الجيزة',
    type: 'دوبلكس',
    purpose: 'بيع',
    price: 5600000,
    priceLabel: '5,600,000 ج.م',
    area: 240,
    beds: 4,
    baths: 3,
    garages: 1,
    image: 'assets/images/product/prod10/main.avif',
    gallery: [
      'assets/images/product/prod10/main.avif',
      'assets/images/product/prod10/gallery1.avif',
      'assets/images/product/prod10/gallery2.avif',
      'assets/images/product/prod10/gallery3.avif'
    ],
    featured: false,
    desc: 'دوبلكس بتوزيع داخلي ممتاز وسلالم داخلية فاخرة ومساحات عائلية كبيرة.'
  },
  {
    id: 11,
    badge: 'للبيع',
    title: 'استوديو فندقي في الجونة',
    location: 'البحر الأحمر، الجونة',
    city: 'البحر الأحمر',
    type: 'استوديو',
    purpose: 'بيع',
    price: 2450000,
    priceLabel: '2,450,000 ج.م',
    area: 62,
    beds: 1,
    baths: 1,
    garages: 0,
    image: 'assets/images/product/prod11/main.avif',
    gallery: [
      'assets/images/product/prod11/main.avif',
      'assets/images/product/prod11/gallery1.avif',
      'assets/images/product/prod11/gallery2.avif',
      'assets/images/product/prod11/gallery3.avif'
    ],
    featured: false,
    desc: 'استوديو فندقي مناسب للاستثمار والإيجار السياحي، تشطيب فاخر وإدارة فندقية.'
  },
  {
    id: 12,
    badge: 'للبيع',
    title: 'قصر عصري بحديقة خاصة',
    location: 'القاهرة، القطامية',
    city: 'القاهرة',
    type: 'فيلا',
    purpose: 'بيع',
    price: 23500000,
    priceLabel: '23,500,000 ج.م',
    area: 780,
    beds: 6,
    baths: 6,
    garages: 3,
    image: 'assets/images/product/prod12/main.avif',
    gallery: [
      'assets/images/product/prod12/main.avif',
      'assets/images/product/prod12/gallery1.avif',
      'assets/images/product/prod12/gallery2.avif',
      'assets/images/product/prod12/gallery3.avif'
    ],
    featured: false,
    desc: 'قصر عصري بواجهات راقية وحديقة كبيرة وحمام سباحة داخلي وخارجي وغرف خدمات.'
  }
];

const HERO_SLIDES = [
  {
    title: 'نحو تجربة عقارية استثنائية',
    text: 'نساعدك في العثور على العقار المثالي الذي يلبي احتياجاتك ويحقق أحلامك.',
    image: 'assets/images/header/slide1.avif'
  },
  {
    title: 'عقارات مختارة بعناية',
    text: 'فلل وشقق ومكاتب بأفضل المواقع وبصور واقعية وتجربة بحث سهلة.',
    image: 'assets/images/header/slide2.avif'
  },
  {
    title: 'خدمة حقيقية من أول رسالة',
    text: 'تواصل مباشر عبر واتساب أو اتصال، وفريقنا جاهز يرشح لك الأنسب.',
    image: 'assets/images/header/slide3.avif'
  }
];


// Added new dummy products
products.push({ id: 1001, name: 'منتج 1', price: '179$', image: 'assets/images/product1.jpg' });
products.push({ id: 1002, name: 'منتج 2', price: '417$', image: 'assets/images/product2.jpg' });
products.push({ id: 1003, name: 'منتج 3', price: '203$', image: 'assets/images/product3.jpg' });
products.push({ id: 1004, name: 'منتج 4', price: '552$', image: 'assets/images/product4.jpg' });
products.push({ id: 1005, name: 'منتج 5', price: '930$', image: 'assets/images/product5.jpg' });


// Added new property images from uploaded image
products.push({ id: 2001, name: 'عقار 1', price: '10231438$', image: 'assets/images/property1.jpg' });
products.push({ id: 2002, name: 'عقار 2', price: '5597585$', image: 'assets/images/property2.jpg' });
products.push({ id: 2003, name: 'عقار 3', price: '4695064$', image: 'assets/images/property3.jpg' });
products.push({ id: 2004, name: 'عقار 4', price: '4693003$', image: 'assets/images/property4.jpg' });
products.push({ id: 2005, name: 'عقار 5', price: '11716133$', image: 'assets/images/property5.jpg' });
products.push({ id: 2006, name: 'عقار 6', price: '4568955$', image: 'assets/images/property6.jpg' });
