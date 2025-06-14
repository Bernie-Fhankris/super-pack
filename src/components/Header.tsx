'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import NavLink from '@/components/NavLink';
import DropdownMenu from '@/components/DropdownMenu';
import Drawer from '@/components/Drawer';
import { DrawerProvider, useDrawerContext } from '@/contexts/DrawerContext';
import { NAV_LINKS } from '@/constants/navLinks';
import Link from 'next/link';

// -------------------------
// Inner header that consumes DrawerContext
const HeaderContent: React.FC = () => {
  const { openDrawer } = useDrawerContext();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const headerCls = useMemo(
    () => `fixed top-0 left-0 right-0 z-[9997] transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`,
    [isScrolled]
  );

  return (
    <header className={headerCls} role="banner">
      {/* backdrop bar */}
      <div className="absolute inset-0 bg-[#231F20]" aria-hidden="true" />

      <div className="relative max-w-[1260px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-14 sm:h-16 md:h-20">
        {/* Hamburger */}
        <button
          onClick={openDrawer}
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white transition-colors relative z-10"
          aria-label="Open menu"
        >
          <Menu className="h-8 w-8 text-[#F9FAFB]" />
        </button>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center md:static md:justify-start md:items-center md:inset-auto">
          <Logo />
        </div>

        {/* Contact button (mobile) */}
        <Link
          href="/kontak"
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg text-[#F9FAFB] hover:bg-white/10 relative z-10"
          aria-label="Hubungi Kami"
        >
          <Phone className="h-6 w-6" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-3" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            link.hasDropdown && link.dropdownItems ? (
              <DropdownMenu key={link.id} title={link.title} items={link.dropdownItems!} />
            ) : (
              <NavLink key={link.id} to={link.path}>
                {link.title}
              </NavLink>
            )
          ))}
        </nav>

        {/* Contact button (desktop) */}
        <div className="hidden md:block">
          <Link href="/kontak" className="inline-flex items-center min-h-[32px] px-4 py-1 text-sm font-medium uppercase text-white bg-[#231F20] border border-white hover:bg-red-600 rounded-md transition-colors"> 
            <Phone size={14} className="mr-1.5" /> Hubungi Kami
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer />
    </header>
  );
};

// Wrapper provider
const Header: React.FC = () => (
  <DrawerProvider>
    <HeaderContent />
  </DrawerProvider>
);

export default Header; 