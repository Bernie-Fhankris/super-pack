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
    id: 'produk',
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
    id: 'galeri',
    title: 'Galeri',
    path: '/galeri',
  },
  {
    id: 'testimoni',
    title: 'Testimoni',
    path: '/testimoni',
  },
  {
    id: 'tentang',
    title: 'Tentang Kami',
    path: '/tentang',
  },
  {
    id: 'kontak',
    title: 'Kontak',
    path: '/kontak',
  },
];