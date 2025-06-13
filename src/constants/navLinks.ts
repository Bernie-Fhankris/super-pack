import { PRODUCT_CATEGORIES } from './categories';

interface NavLink {
  id: string;
  title: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: { id: string; title: string; path: string }[];
}

export const NAV_LINKS: NavLink[] = [
  {
    id: 'home',
    title: 'Beranda',
    path: '/',
  },
  {
    id: 'products',
    title: 'Produk',
    path: '/produk',
    hasDropdown: true,
    dropdownItems: PRODUCT_CATEGORIES.map(cat => ({
      id: cat.id,
      title: cat.label,
      path: cat.navPath,
    })),
  },
  {
    id: 'gallery',
    title: 'Galeri',
    path: '/galeri',
  },
  {
    id: 'testimonials',
    title: 'Testimoni',
    path: '/testimoni',
  },
  {
    id: 'about',
    title: 'Tentang Kami',
    path: '/tentang',
  },
  {
    id: 'contact',
    title: 'Kontak',
    path: '/kontak',
  },
];