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
    company: 'PT Vivo Mobile Indonesia',
    role: 'Procurement Staff',
    quote: 'Kami rutin menggunakan bubble wrap dari Super Pack untuk pengemasan produk dan komponen internal. Kualitasnya konsisten, pengiriman cepat, dan layanan responsif.',
    rating: 5,
    imageUrl: "/Budi S.webp",
  },
  {
    id: 'testimonial-2',
    name: 'Anita W.',
    company: 'PT Astra Honda Motor',
    role: 'Logistics & Supply Coordinator',
    quote: 'Kami butuh kemasan yang presisi untuk suku cadang otomotif. Produk dari Super Pack terbukti handal—melindungi barang dalam perjalanan, minim komplain, dan selalu tersedia.',
    rating: 5,
    imageUrl: "/Anita W.webp",
  },
  {
    id: 'testimonial-3',
    name: 'Hendra G.',
    company: 'Surya Group Holding Company',
    role: 'Head of Packaging & Distribution',
    quote: 'Kami mengandalkan bubble wrap dari Super Pack untuk menjaga produk tetap rapi dan aman selama proses distribusi. Kualitasnya selalu konsisten dan memuaskan.',
    rating: 4,
    imageUrl: "/Hendra G.webp",
  },
  {
    id: 'testimonial-4',
    name: 'Siti R.',
    company: 'Jet Commerce Indonesia',
    role: 'Fulfillment Coordinator',
    quote: 'Kami sempat memesan bubble wrap dari Super Pack untuk kebutuhan packing harian. Produk yang kami terima berkualitas, tidak mudah sobek.',
    rating: 5,
    imageUrl: "/Siti R.webp",
  },
  {
    id: 'testimonial-5',
    name: 'Denny P.',
    company: 'Ciputra Infrastructure Division',
    role: 'Site Operations Supervisor',
    quote: 'Kami pernah menggunakan bubble wrap dari Super Pack untuk proyek pengecoran jalan sebagai pelindung cetakan sementara.',
    rating: 4,
    imageUrl: "/Denny P.webp",
  },
];