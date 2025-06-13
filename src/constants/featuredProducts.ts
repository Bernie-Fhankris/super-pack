import bubbleBening from '../assets/bubble-wrap-bening125cm.webp';
import bubbleHitam from '../assets/bubble-wrap-hitam125cm.webp';
import bubbleAntiStatic from '../assets/bubble-wrap-anti-static125cm.webp';

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  featured?: boolean;
}

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'bubble-7',
    name: 'Bubble Wrap Bening 125cm',
    description: 'Bubble wrap bening lebar 125cm, ideal untuk pengemasan barang besar dan volume tinggi.',
    imageUrl: bubbleBening,
    category: 'Bubble Wrap Bening',
    featured: true
  },
  {
    id: 'bubble-8',
    name: 'Bubble Wrap Hitam 125cm',
    description: 'Bubble wrap hitam lebar 125cm, privasi dan perlindungan maksimal untuk barang besar.',
    imageUrl: bubbleHitam,
    category: 'Bubble Wrap Hitam',
    featured: true
  },
  {
    id: 'bubble-3',
    name: 'Bubble Wrap Premium',
    description: 'Bubble wrap premium dengan ketebalan ekstra untuk pengiriman berat dan perlindungan maksimal.',
    imageUrl: bubbleAntiStatic,
    category: 'Grade Bubble Wrap',
    featured: true
  },
];

export const ALL_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  {
    id: 'bubble-1',
    name: 'Bubble Wrap Bening 30cm',
    description: 'Bubble wrap bening lebar 30cm, cocok untuk pengemasan barang kecil dan aksesoris.',
    imageUrl: bubbleBening,
    category: 'Bubble Wrap Bening'
  },
  {
    id: 'bubble-4',
    name: 'Bubble Wrap Bening 60cm',
    description: 'Bubble wrap bening lebar 60cm, solusi ekonomis untuk pengemasan menengah.',
    imageUrl: bubbleBening,
    category: 'Bubble Wrap Bening'
  },
  {
    id: 'bubble-2',
    name: 'Bubble Wrap Hitam 30cm',
    description: 'Bubble wrap hitam lebar 30cm, perlindungan privasi untuk barang kecil dan aksesoris.',
    imageUrl: bubbleHitam,
    category: 'Bubble Wrap Hitam'
  },
  {
    id: 'bubble-5',
    name: 'Bubble Wrap Hitam 60cm',
    description: 'Bubble wrap hitam lebar 60cm, perlindungan privasi untuk pengemasan menengah.',
    imageUrl: bubbleHitam,
    category: 'Bubble Wrap Hitam'
  },
  {
    id: 'bubble-6',
    name: 'Bubble Wrap Standard',
    description: 'Bubble wrap standard untuk kebutuhan pengemasan ringan dan harga ekonomis.',
    imageUrl: bubbleAntiStatic,
    category: 'Grade Bubble Wrap'
  },
  {
    id: 'bubble-9',
    name: 'Bubble Wrap Economy',
    description: 'Bubble wrap economy, solusi paling hemat untuk pengemasan volume besar dengan budget terbatas.',
    imageUrl: bubbleAntiStatic,
    category: 'Grade Bubble Wrap'
  },
  {
    id: 'coming-soon-1',
    name: 'Produk Lakban',
    description: 'Produk Lakban Akan Segera Hadir',
    imageUrl: bubbleAntiStatic,
    category: 'Coming Soon'
  },
];