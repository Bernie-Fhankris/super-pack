'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useNavigation } from '@/hooks/useNavigation';

const Logo: React.FC = () => {
  const { handleNavigation } = useNavigation();

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleNavigation('/');
  };

  return (
    <Link href="/" onClick={onClick} className="block">
      <Image src="/superpack-logo.png" alt="SuperPack Logo" width={140} height={56} priority className="h-10 w-auto object-contain" />
    </Link>
  );
};

export default Logo; 