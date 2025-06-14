'use client';

import { useNavigation } from '@/hooks/useNavigation';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = '' }) => {
  const { handleNavigation } = useNavigation();
  const pathname = usePathname();
  const isActive = pathname === to.replace(/#.*$/, '');

  return (
    <button
      onClick={() => handleNavigation(to)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleNavigation(to);
      }}
      className={`group relative inline-block font-medium text-white hover:text-gray-200 transition-all duration-200 px-4 py-2 pb-3 ${className}`}
    >
      <span className="inline-block relative">
        {children}
        <span
          className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#ed1c24] transform scale-x-0 origin-left transition-transform duration-200 ease-out z-10 ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
        />
      </span>
    </button>
  );
};

export default NavLink; 