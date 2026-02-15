// Mock recipe data
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  cookingTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
  videoUrl?: string;
  tips: string[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Nasi Goreng Spesial',
    description: 'Nasi goreng lezat dengan bumbu rahasia yang cocok untuk dijual',
    image: 'https://images.unsplash.com/photo-1642653585455-d0be84e20271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjByaWNlJTIwcGxhdGV8ZW58MXx8fHwxNzcxMDU3ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Makanan Utama',
    difficulty: 'Mudah',
    cookingTime: '30 menit',
    servings: 4,
    ingredients: [
      '4 piring nasi putih',
      '3 siung bawang putih, cincang',
      '5 siung bawang merah, iris tipis',
      '2 butir telur',
      '100 gram ayam, potong dadu',
      '3 sdm kecap manis',
      '2 sdm saus tiram',
      'Garam dan merica secukupnya',
      'Minyak goreng',
      'Daun bawang, iris tipis'
    ],
    steps: [
      'Panaskan minyak, tumis bawang putih dan bawang merah hingga harum',
      'Masukkan ayam, masak hingga berubah warna',
      'Sisihkan tumisan ke pinggir, masukkan telur dan orak-arik',
      'Masukkan nasi putih, aduk rata dengan bumbu',
      'Tambahkan kecap manis dan saus tiram',
      'Beri garam dan merica, aduk hingga semua tercampur rata',
      'Tambahkan daun bawang, aduk sebentar',
      'Angkat dan sajikan dengan kerupuk dan acar'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tips: [
      'Gunakan nasi yang sudah dingin agar tidak lembek',
      'Panaskan wajan dengan api besar untuk hasil yang lebih harum',
      'Bisa ditambahkan udang atau bakso sesuai selera'
    ]
  },
  {
    id: '2',
    title: 'Ayam Goreng Kremes',
    description: 'Ayam goreng dengan kremesan renyah, cocok untuk jualan',
    image: 'https://images.unsplash.com/photo-1744968048879-2c79641429e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwZnJpZWQlMjBjaGlja2VuJTIwY3Jpc3B5fGVufDF8fHx8MTc3MTA1Nzg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Makanan Utama',
    difficulty: 'Sedang',
    cookingTime: '45 menit',
    servings: 6,
    ingredients: [
      '1 kg ayam, potong sesuai selera',
      '5 siung bawang putih',
      '3 cm kunyit',
      '2 cm jahe',
      '1 sdt ketumbar',
      'Garam secukupnya',
      '400 ml air',
      'Minyak untuk menggoreng',
      'Tepung bumbu siap pakai'
    ],
    steps: [
      'Haluskan bawang putih, kunyit, jahe, ketumbar, dan garam',
      'Rebus ayam dengan bumbu halus dan air hingga empuk dan bumbu meresap',
      'Angkat ayam, tiriskan (sisakan kaldu)',
      'Panaskan minyak banyak, goreng ayam hingga kuning kecoklatan',
      'Untuk kremesan: campur sisa kaldu dengan tepung bumbu',
      'Siramkan adonan kremesan ke minyak panas dengan sendok',
      'Goreng hingga kremesan renyah',
      'Sajikan ayam dengan taburan kremesan'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tips: [
      'Ungkep ayam hingga benar-benar empuk agar bumbu meresap',
      'Goreng ayam dengan api sedang agar matang sempurna',
      'Kremesan bisa dibuat lebih banyak untuk stok'
    ]
  },
  {
    id: '3',
    title: 'Kue Lumpur Kentang',
    description: 'Kue basah lembut dan manis, favorit untuk jualan arisan',
    image: 'https://images.unsplash.com/photo-1715758622182-157127b3f5ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBjYWtlfGVufDF8fHx8MTc3MTA1Nzg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Kue & Camilan',
    difficulty: 'Sedang',
    cookingTime: '60 menit',
    servings: 20,
    ingredients: [
      '250 gram kentang, kukus dan haluskan',
      '200 gram gula pasir',
      '6 butir telur',
      '100 gram tepung terigu',
      '100 ml santan kental',
      '1 sdt vanili',
      '50 gram mentega, lelehkan',
      'Kismis untuk topping'
    ],
    steps: [
      'Kocok telur dan gula hingga mengembang dan putih',
      'Masukkan kentang halus, aduk rata',
      'Tambahkan tepung terigu sedikit demi sedikit sambil diaduk',
      'Masukkan santan, vanili, dan mentega leleh, aduk rata',
      'Tuang adonan ke dalam cetakan kue lumpur yang sudah diolesi mentega',
      'Beri topping kismis di atasnya',
      'Panggang dengan suhu 180°C selama 30-35 menit',
      'Angkat dan dinginkan'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tips: [
      'Pastikan kentang benar-benar halus tanpa gumpalan',
      'Jangan overmix adonan agar kue tetap lembut',
      'Tes kematangan dengan tusuk gigi, jika bersih berarti sudah matang'
    ]
  },
  {
    id: '4',
    title: 'Sayur Asem Jakarta',
    description: 'Sayur asem segar khas Jakarta yang mudah dibuat',
    image: 'https://images.unsplash.com/photo-1707271914006-627b89038143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdmVnZXRhYmxlJTIwc291cHxlbnwxfHx8fDE3NzEwNTc4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sayur & Sup',
    difficulty: 'Mudah',
    cookingTime: '40 menit',
    servings: 6,
    ingredients: [
      '1 liter air',
      '100 gram kacang panjang, potong 3 cm',
      '100 gram labu siam, potong kotak',
      '2 buah jagung manis, potong',
      '50 gram kacang tanah',
      '3 sdm asam jawa',
      '2 sdm gula merah',
      'Garam secukupnya',
      'Daun salam dan lengkuas'
    ],
    steps: [
      'Rebus air bersama daun salam dan lengkuas',
      'Masukkan kacang tanah, masak hingga setengah empuk',
      'Tambahkan jagung dan labu siam',
      'Masukkan larutan asam jawa dan gula merah',
      'Beri garam secukupnya',
      'Terakhir masukkan kacang panjang',
      'Masak hingga semua sayuran matang',
      'Koreksi rasa dan sajikan hangat'
    ],
    tips: [
      'Asam jawa bisa diganti dengan belimbing wuluh untuk rasa lebih segar',
      'Bisa ditambahkan melinjo atau nangka muda',
      'Sajikan dengan sambal dan kerupuk'
    ]
  },
  {
    id: '5',
    title: 'Risoles Mayonaise',
    description: 'Risoles isi ragout ayam dengan mayonaise yang gurih',
    image: 'https://images.unsplash.com/photo-1695712576568-be85f78a4881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwc3ByaW5nJTIwcm9sbHMlMjBmcmllZHxlbnwxfHx8fDE3NzEwNTc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Kue & Camilan',
    difficulty: 'Sulit',
    cookingTime: '90 menit',
    servings: 25,
    ingredients: [
      'Kulit: 250g tepung, 2 telur, 500ml susu cair, garam',
      'Isi: 300g dada ayam cincang',
      '2 sdm tepung terigu',
      '250 ml susu cair',
      '1 wortel, potong dadu kecil',
      '100g buncis, iris kecil',
      '3 sdm mayonaise',
      'Bawang bombay, cincang',
      'Tepung roti dan telur untuk coating'
    ],
    steps: [
      'Buat kulit: campur tepung, telur, susu cair dan garam, saring',
      'Buat dadar tipis di teflon, sisihkan',
      'Tumis bawang bombay, masukkan ayam hingga matang',
      'Taburi tepung terigu, aduk rata',
      'Tuang susu cair sedikit-sedikit sambil diaduk',
      'Masukkan wortel dan buncis, masak hingga kental',
      'Tambahkan mayonaise, aduk rata, dinginkan',
      'Bungkus isi dengan kulit risoles',
      'Celup ke kocokan telur, gulingkan di tepung roti',
      'Goreng hingga kuning keemasan'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tips: [
      'Pastikan isian benar-benar dingin sebelum dibungkus',
      'Gunakan api kecil saat membuat kulit agar tidak gosong',
      'Risoles bisa disimpan di freezer sebelum digoreng'
    ]
  },
  {
    id: '6',
    title: 'Es Cendol Durian',
    description: 'Minuman segar cendol dengan topping durian',
    image: 'https://images.unsplash.com/photo-1758250967379-e041e6207190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwY2VuZG9sJTIwZGVzc2VydHxlbnwxfHx8fDE3NzEwNTc4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Minuman',
    difficulty: 'Mudah',
    cookingTime: '30 menit',
    servings: 4,
    ingredients: [
      '200 gram cendol siap pakai',
      '200 ml santan kental',
      '150 gram gula merah, sisir',
      '200 gram daging durian',
      'Es batu secukupnya',
      '100 ml air untuk gula merah'
    ],
    steps: [
      'Masak gula merah dengan air hingga larut, saring, dinginkan',
      'Rebus santan dengan sedikit garam hingga mendidih, dinginkan',
      'Siapkan gelas saji',
      'Masukkan cendol secukupnya',
      'Tuang sirup gula merah',
      'Tambahkan es batu',
      'Tuang santan',
      'Beri topping daging durian di atasnya',
      'Sajikan segera'
    ],
    tips: [
      'Durian bisa diganti dengan nangka atau alpukat',
      'Santan harus benar-benar dingin agar lebih segar',
      'Bisa ditambahkan mutiara atau kolang kaling'
    ]
  }
];

export const categories = [
  'Semua',
  'Makanan Utama',
  'Sayur & Sup',
  'Kue & Camilan',
  'Minuman'
];