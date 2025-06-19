const bubbleBening125 = "/Bubble-Wrap-Bening-125cm.webp";
const bubbleBening60  = "/Bubble-Wrap-Bening-60cm.webp";
const bubbleBening30  = "/Bubble-Wrap-Bening-30cm.webp";

const bubbleHitam125 = "/Bubble-Wrap-Hitam-125cm.webp";
const bubbleHitam60  = "/Bubble-Wrap-Hitam-60cm.webp";
const bubbleHitam30  = "/Bubble-Wrap-Hitam-30cm.webp";

const bubblePremium  = "/Bubble-Wrap-Premium.webp";
const bubbleStandard = "/Bubble-Wrap-Standard.webp";
const bubbleEconomy  = "/Bubble-Wrap-Economy.webp";

const comingSoonLakban = "/Coming-Soon-Lakban.webp";

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  category: string;
  featured?: boolean;
  price?: number;
}

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'bubble-7',
    name: 'Bubble Wrap Bening 125cm',
    description: 'Lebar ekstra untuk barang besar seperti furnitur, barang ekspor, atau kemasan massal.',
    imageUrl: bubbleBening125,
    imageAlt: "Bubble wrap roll Super Pack untuk kemasan anti benturan",
    category: 'Bubble Wrap Bening',
    featured: true,
    price: 120000
  },
  {
    id: 'bubble-8',
    name: 'Bubble Wrap Hitam 125cm',
    description: 'Rekomendasi untuk logistik industri dan kebutuhan packing berat.',
    imageUrl: bubbleHitam125,
    category: 'Bubble Wrap Hitam',
    featured: true,
    price: 120000
  },
  {
    id: 'bubble-3',
    name: 'Bubble Wrap Premium',
    description: 'Cocok untuk perangkat elektronik: motherboard, hard disk, atau sensor. Melindungi dari listrik statis.',
    imageUrl: bubblePremium,
    category: 'Grade Bubble Wrap',
    featured: true
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  {
    id: 'bubble-4',
    name: 'Bubble Wrap Bening 60cm',
    description: 'Pilihan ekonomis untuk pengemasan menengah seperti kosmetik, alat rumah tangga.',
    imageUrl: bubbleBening60,
    category: 'Bubble Wrap Bening',
    price: 60000
  },
  {
    id: 'bubble-1',
    name: 'Bubble Wrap Bening 30cm',
    description: 'Ukuran kecil ideal untuk aksesoris, barang ringan, atau produk e-commerce.',
    imageUrl: bubbleBening30,
    category: 'Bubble Wrap Bening',
    price: 30000
  },
  {
    id: 'bubble-5',
    name: 'Bubble Wrap Hitam 60cm',
    description: 'Menjaga keamanan paket ukuran sedang, tidak mudah terlihat dari luar.',
    imageUrl: bubbleHitam60,
    category: 'Bubble Wrap Hitam'
  },
  {
    id: 'bubble-2',
    name: 'Bubble Wrap Hitam 30cm',
    description: 'Ideal untuk produk kecil dan sensitif seperti gadget atau barang koleksi.',
    imageUrl: bubbleHitam30,
    category: 'Bubble Wrap Hitam'
  },
  {
    id: 'bubble-6',
    name: 'Bubble Wrap Standard',
    description: 'Solusi serbaguna dengan harga terjangkau untuk pengemasan ringan hingga sedang.',
    imageUrl: bubbleStandard,
    category: 'Grade Bubble Wrap'
  },
  {
    id: 'bubble-9',
    name: 'Bubble Wrap Economy',
    description: 'Pilihan paling hemat untuk kebutuhan volume besar. Cocok untuk ekspedisi dan gudang.',
    imageUrl: bubbleEconomy,
    category: 'Grade Bubble Wrap'
  },
  {
    id: 'coming-soon-1',
    name: 'Produk Lakban Super Pack (Segera Hadir)',
    description: 'Produk lakban berkualitas tinggi dari Super Pack akan segera tersedia — solusi ideal untuk pengemasan kardus, ekspedisi, dan logistik Anda. Tersedia dalam berbagai warna dan ketebalan. 🚚 Stok akan segera hadir di gudang kami. Hubungi tim kami untuk daftar tunggu atau informasi lebih lanjut.',
    imageUrl: comingSoonLakban,
    category: 'Coming Soon',
    price: 0
  },
];