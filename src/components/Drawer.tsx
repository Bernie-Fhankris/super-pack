'use client';

import { useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '@/constants/navLinks';
import { useDrawerContext } from '@/contexts/DrawerContext';
import { useNavigation } from '@/hooks/useNavigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Drawer: React.FC = () => {
  const { isDrawerOpen, closeDrawer } = useDrawerContext();
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { handleNavigation } = useNavigation({ onNavigate: closeDrawer });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleOverlay = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeDrawer();
  };

  const handleDropdownToggle = (id: string) => {
    setOpenDropdowns(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isLinkActive = (path: string) => pathname === path.replace(/#.*$/, '');

  const backdropCls = useMemo(() => `fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 z-[9998] ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`, [isDrawerOpen]);
  const drawerCls = useMemo(() => `fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl flex flex-col z-[9999] transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`, [isDrawerOpen]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div className={backdropCls} onClick={handleOverlay} aria-hidden="true" />
      <div className={drawerCls} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="flex items-center justify-between p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-[#ed1c24]">Menu</h2>
          <button onClick={closeDrawer} className="p-2 text-gray-400 hover:text-gray-600" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                {link.hasDropdown && link.dropdownItems ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => handleDropdownToggle(link.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-base font-bold uppercase rounded-md transition-colors ${isLinkActive(link.path) ? 'text-[#ed1c24] bg-red-50' : 'text-gray-900 hover:bg-gray-50'}`}
                    >
                      {link.title}
                      <ChevronDown className={`h-5 w-5 transition-transform ${openDropdowns.has(link.id) ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${openDropdowns.has(link.id) ? 'max-h-96' : 'max-h-0'}`}>
                      {link.dropdownItems?.map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleNavigation(item.path)}
                          className={`block w-full text-left py-2 pl-8 pr-4 text-base font-medium transition-colors ${pathname + (globalThis.location?.hash || '') === item.path ? 'text-[#ed1c24]' : 'text-gray-700 hover:text-gray-900'}`}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={`w-full text-left px-4 py-3 text-base font-bold uppercase rounded-md transition-colors ${isLinkActive(link.path) ? 'text-[#ed1c24] bg-red-50' : 'text-gray-900 hover:bg-gray-50'}`}
                  >
                    {link.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <Link href="/kontak" onClick={() => closeDrawer()} className="block w-full text-center py-3 bg-[#ed1c24] text-white font-bold uppercase rounded-md hover:bg-red-700 transition-colors">
            Hubungi Kami
          </Link>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Drawer; 