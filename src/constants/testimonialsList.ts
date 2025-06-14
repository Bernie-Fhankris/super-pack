const placeholderImage = "/logo-original.png";

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
    name: 'Budi Santoso',
    company: 'Santoso Bakery',
    role: 'CEO',
    quote: 'Super Pack telah menjadi mitra kami selama 3 tahun terakhir. Kemasan premium mereka sangat meningkatkan citra brand kami dan pelanggan selalu memberikan feedback positif tentang packaging kami.',
    rating: 5,
    imageUrl: placeholderImage,
  },
  {
    id: 'testimonial-2',
    name: 'Anita Wijaya',
    company: 'Glow Cosmetics',
    role: 'Marketing Director',
    quote: 'Kualitas kemasan dari Super Pack selalu konsisten dan pengiriman selalu tepat waktu. Fleksibilitas mereka dalam menyesuaikan desain sesuai kebutuhan kami sangat membantu bisnis kami.',
    rating: 5,
    imageUrl: placeholderImage,
  },
  {
    id: 'testimonial-3',
    name: 'Hendra Gunawan',
    company: 'Organic Tea Co.',
    role: 'Founder',
    quote: 'Sebagai bisnis yang fokus pada keberlanjutan, kami sangat mengapresiasi komitmen Super Pack pada kemasan ramah lingkungan. Kualitas tetap premium dengan dampak lingkungan yang minimal.',
    rating: 4,
    imageUrl: placeholderImage,
  },
  {
    id: 'testimonial-4',
    name: 'Siti Rahayu',
    company: 'Batik Heritage',
    role: 'Owner',
    quote: 'Packaging kustom dari Super Pack memberikan kesan eksklusif pada produk batik kami, sangat cocok untuk hadiah premium. Proses pemesanan yang mudah dan tim yang sangat membantu.',
    rating: 5,
    imageUrl: placeholderImage,
  },
  {
    id: 'testimonial-5',
    name: 'Denny Pratama',
    company: 'Fresh Farm',
    role: 'Operations Manager',
    quote: 'Kemasan food grade dari Super Pack sangat membantu kami mempertahankan kesegaran produk pertanian. Daya tahan yang baik dan harga yang kompetitif.',
    rating: 4,
    imageUrl: placeholderImage,
  },
];