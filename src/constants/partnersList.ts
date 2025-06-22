const placeholderLogo = "/superpack-logo.png";

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'partner-vivo',
    name: 'Vivo',
    logoUrl: '/Terpercaya-Vivo.svg',
  },
  {
    id: 'partner-honda',
    name: 'Honda',
    logoUrl: '/Terpercaya-Honda.svg',
  },
  {
    id: 'partner-hs',
    name: 'HS',
    logoUrl: '/Terpercaya-HS.svg',
  },
  {
    id: 'partner-4',
    name: 'Pack & Go',
    logoUrl: placeholderLogo,
  },
  {
    id: 'partner-5',
    name: 'Box Factory',
    logoUrl: placeholderLogo,
  },
];