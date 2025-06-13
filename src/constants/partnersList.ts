import placeholderLogo from '../assets/superpack-logo.png';

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'partner-1',
    name: 'Eco Solutions',
    logoUrl: placeholderLogo,
  },
  {
    id: 'partner-2',
    name: 'Green Pack',
    logoUrl: placeholderLogo,
  },
  {
    id: 'partner-3',
    name: 'Premium Box',
    logoUrl: placeholderLogo,
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