export interface NavLink {
  id: string;
  title: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    id: string;
    title: string;
    path: string;
  }[];
} 