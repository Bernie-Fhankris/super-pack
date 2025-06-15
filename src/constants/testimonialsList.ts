export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Budi S.',
    company: 'Santoso Bakery',
    role: 'CEO',
    quote: 'Kemasan dari Super Pack bikin produk saya kelihatan lebih rapi dan profesional. Banyak pelanggan juga bilang packing-nya bagus dan aman sampai tujuan.',
    rating: 5,
    imageUrl: "/Budi S.webp",
  },
  {
    id: 'testimonial-2',
    name: 'Anita W.',
    company: 'Glow Cosmetics',
    role: 'Marketing Director',
    quote: 'Saya butuh bubble wrap yang kuat tapi tetap ringan. Dari beberapa vendor yang saya coba, Super Pack salah satu yang paling konsisten kualitasnya.',
    rating: 5,
    imageUrl: "/Anita W.webp",
  },
  {
    id: 'testimonial-3',
    name: 'Hendra G.',
    company: 'Organic Tea Co.',
    role: 'Founder',
    quote: 'Senang akhirnya bisa nemu supplier kemasan yang juga peduli lingkungan. Produknya bagus, dan saya nggak khawatir soal bahan yang dipakai.',
    rating: 4,
    imageUrl: "/Hendra G.webp",
  },
  {
    id: 'testimonial-4',
    name: 'Siti R.',
    company: 'Batik Heritage',
    role: 'Owner',
    quote: 'Saya pakai untuk produk handmade yang dikirim ke luar kota. So far nggak pernah ada keluhan soal kerusakan, dan respon dari timnya juga cepat.',
    rating: 5,
    imageUrl: "/Siti R.webp",
  },
  {
    id: 'testimonial-5',
    name: 'Denny P.',
    company: 'Fresh Farm',
    role: 'Operations Manager',
    quote: 'Untuk produk makanan, saya butuh bubble wrap yang aman dan nggak bau plastik. Super Pack kasih solusi yang cocok banget, dan harganya juga masih masuk akal.',
    rating: 4,
    imageUrl: "/Denny P.webp",
  },
];