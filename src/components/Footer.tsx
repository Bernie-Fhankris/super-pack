'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_COMPANY, FOOTER_SECTIONS, FOOTER_SOCIAL } from '@/constants/footerData';
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';
import { useNavigation } from '@/hooks/useNavigation';

const iconMap: Record<string, React.ReactNode> = {
  instagram: <Instagram size={18} />,
  facebook: <Facebook size={18} />,
  linkedin: <Linkedin size={18} />,
  youtube: <Youtube size={18} />,
};

const Footer: React.FC = () => {
  const { handleNavigation } = useNavigation();

  return (
    <footer className="bg-[#231F20] text-white pt-8 pb-8">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <Link href="/" className="block" onClick={(e)=>{e.preventDefault();handleNavigation('/');}}>
              <Image src="/logo-original.png" alt="SuperPack Logo" width={96} height={96} className="w-24 h-24 object-contain" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">{FOOTER_COMPANY.description}</p>
          </div>

          {/* Dynamic Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold mb-4 text-[#ed1c24]">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-white hover:text-gray-300 transition-colors text-sm" onClick={link.id==='home'? (e=>{e.preventDefault();handleNavigation('/');}):undefined}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#ed1c24]">Kontak Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex">
                <MapPin className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span>{FOOTER_COMPANY.address}</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span>{FOOTER_COMPANY.phone}</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <span>{FOOTER_COMPANY.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t-2 border-dashed border-gray-200 flex flex-col sm:flex-row items-center justify-between text-sm">
          <div className="flex space-x-3 mb-4 sm:mb-0">
            {FOOTER_SOCIAL.filter((s) => s.id !== 'linkedin').map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-gray-800 hover:bg-[#ed1c24] transition-colors"
              >
                {iconMap[social.icon]}
              </a>
            ))}
          </div>
          <div className="text-center sm:text-right">
            {FOOTER_COMPANY.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 