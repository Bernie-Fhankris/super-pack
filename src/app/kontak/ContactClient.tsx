'use client';

import ContactSection from '@/sections/ContactSection/ContactSection';

export default function ContactClient() {
  return (
    <main className="pb-16 md:pb-24 bg-gray-50">
      <ContactSection isStandalone={true} />
    </main>
  );
} 