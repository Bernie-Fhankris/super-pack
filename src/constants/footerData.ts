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
  description: 'Menyediakan solusi kemasan premium yang inovatif, fungsional, dan ramah lingkungan untuk berbagai kebutuhan bisnis.',
  address: 'Jl. Industri Raya No. 45, Jakarta Timur 13920',
  phone: '+62 21 4600 8888',
  email: 'info@superpack.co.id',
  copyright: '© 2025 Super Pack. All rights reserved.',
};

export const FOOTER_SOCIAL = [
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/superpack.id', icon: 'instagram' },
  { id: 'facebook', name: 'Facebook', url: 'https://facebook.com/SuperPackIndonesia', icon: 'facebook' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/company/super-pack', icon: 'linkedin' },
  { id: 'youtube', name: 'YouTube', url: 'https://youtube.com/c/SuperPackID', icon: 'youtube' },
];