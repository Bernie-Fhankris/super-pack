import { CONTACT_INFO } from './contactInfo';

interface FooterSection {
  title: string;
  links: {
    id: string;
    text: string;
    url: string;
  }[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Menu Utama',
    links: [
      { id: 'home', text: 'Beranda', url: '/' },
      { id: 'products', text: 'Produk', url: '/produk' },
      { id: 'gallery', text: 'Galeri', url: '/galeri' },
      { id: 'testimonials', text: 'Testimoni', url: '/testimoni' },
    ],
  },
  {
    title: 'Tentang Kami',
    links: [
      { id: 'about', text: 'Profil Perusahaan', url: '/tentang#profil-perusahaan' },
      { id: 'mission', text: 'Visi & Misi', url: '/tentang#visi-misi' },
      { id: 'csr', text: 'CSR', url: '/tentang#csr' },
      { id: 'career', text: 'Karir', url: '/tentang#karir' },
    ],
  },
];

export const FOOTER_COMPANY = {
  name: 'Super Pack',
  description: 'Super Pack adalah produsen bubble wrap dan solusi kemasan pelindung untuk berbagai kebutuhan bisnis di Indonesia. Fokus pada kualitas, kepraktisan, dan pengiriman cepat.',
  address: CONTACT_INFO.address,
  phone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  copyright: '© 2025 Super Pack. All rights reserved.',
};

export const FOOTER_SOCIAL = [
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/', icon: 'instagram' },
  { id: 'facebook', name: 'Facebook', url: 'https://facebook.com/', icon: 'facebook' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'linkedin' },
  { id: 'youtube', name: 'YouTube', url: 'https://youtube.com/', icon: 'youtube' },
];