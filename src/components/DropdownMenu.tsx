'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useNavigation } from '@/hooks/useNavigation';

interface DropdownItem {
  id: string;
  title: string;
  path: string;
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { handleNavigation } = useNavigation({ onNavigate: () => setIsOpen(false) });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isItemActive = (path: string) => pathname + (globalThis.location?.hash || '') === path;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="group relative inline-block font-medium text-white hover:text-gray-200 transition-all duration-200 px-4 py-2 pb-3"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="inline-block relative">
          {title}
          <span className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#ed1c24] transform scale-x-0 origin-left transition-transform duration-200 ease-out z-10 ${isOpen ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
        </span>
        <ChevronDown className={`ml-1.5 h-4 w-4 inline-block transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-200">
          {items.map((item) => {
            const active = isItemActive(item.path);
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`group w-full text-left px-4 py-2 pb-3 text-sm transition-all duration-200 font-medium ${active ? 'text-primary-500' : 'text-gray-700 hover:text-gray-900'}`}
              >
                <span className="inline-block relative">
                  {item.title}
                  <span className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#ed1c24] transform scale-x-0 origin-left transition-transform duration-200 ease-out z-10 ${active ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu; 