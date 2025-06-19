'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ABOUT_CONTENT, ABOUT_IMAGES_PAGE, ABOUT_POINTS } from '@/constants/aboutPoints';
import { Award, Leaf, Settings, Truck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={24} className="text-[#ed1c24]" />,
  leaf: <Leaf size={24} className="text-[#ed1c24]" />,
  settings: <Settings size={24} className="text-[#ed1c24]" />,
  truck: <Truck size={24} className="text-[#ed1c24]" />,
};

export default function AboutClient() {
  return (
    <main className="pb-16 md:pb-24 bg-gray-50">
      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        {/* Intro */}
        <header id="profil-perusahaan" className="pt-8 md:pt-10 mb-12 scroll-mt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ed1c24] mb-4">Tentang Super Pack</h1>
          <p className="text-[#212125] max-w-3xl text-lg">
            Super Pack adalah produsen kemasan modern yang berfokus pada solusi bubble wrap berkualitas tinggi untuk berbagai kebutuhan industri dan UMKM di Indonesia. Kami menghadirkan produk yang fungsional, aman, dan ramah lingkungan — langsung dari fasilitas produksi milik kami sendiri.
          </p>
        </header>

        {/* Overview */}
        <section className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Images */}
          <div className="lg:w-5/12 relative">
            <div className="relative">
              <Image src={ABOUT_IMAGES_PAGE.main} alt="Facilities" width={600} height={400} className="w-full h-auto rounded-2xl shadow-xl object-cover" />
              <Image src={ABOUT_IMAGES_PAGE.secondary1} alt="Packaging" width={200} height={200} className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 w-32 h-32 sm:w-40 sm:h-40 md:w-40 md:h-40 object-cover rounded-xl shadow-lg border-4 border-white" />
              <Image src={ABOUT_IMAGES_PAGE.secondary2} alt="Eco" width={160} height={160} className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-xl shadow-lg border-4 border-white" />
            </div>
          </div>
          {/* Content */}
          <div className="lg:w-7/12">
            <h2 className="text-3xl font-bold text-[#ed1c24] mb-6">Siapa Kami</h2>
            <p className="text-[#212125] mb-8 leading-relaxed text-lg">Didirikan pada tahun 2023, Super Pack hadir sebagai bagian dari upaya menyediakan kemasan pelindung yang tidak hanya kuat dan praktis, tapi juga memperhatikan efisiensi logistik dan keberlanjutan lingkungan. Berbasis di kawasan industri Bekasi, kami melayani berbagai sektor mulai dari ekspor, logistik, makanan, hingga retail lokal.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {ABOUT_POINTS.map((p) => (
                <div key={p.id} className="flex">
                  <div className="mr-4">{iconMap[p.icon]}</div>
                  <div>
                    <h3 className="font-bold text-[#ed1c24] mb-1">{p.title}</h3>
                    <p className="text-[#212125] text-base">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="visi-misi" className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16 shadow-sm scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[#ed1c24] mb-4">Visi Kami</h2>
              <p className="text-[#212125] leading-relaxed text-lg">{ABOUT_CONTENT.vision}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#ed1c24] mb-4">Misi Kami</h2>
              <ul className="list-disc pl-6 space-y-2 text-[#212125] text-lg">
                {ABOUT_CONTENT.mission.split('\n').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#ed1c24] mb-6">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_CONTENT.values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-[#FFE5EB] rounded-full mb-4">
                  <span className="text-xl font-bold text-[#ed1c24]">{i + 1}</span>
                </div>
                <p className="text-[#212125] font-medium">{v}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CSR */}
        <section id="csr" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-[#ed1c24] mb-6">Tanggung Jawab Sosial (CSR)</h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-[#212125] mb-4 text-lg">
              Super Pack percaya bahwa bisnis harus memberi dampak baik. Program CSR kami berfokus pada:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#212125] text-lg">
              <li>Penggunaan bahan baku ramah lingkungan</li>
              <li>Kolaborasi dengan komunitas lokal dalam produksi kemasan</li>
              <li>Edukasi publik tentang pengemasan berkelanjutan</li>
              <li>Dukungan kemasan bagi pelaku UMKM dan ekspedisi lokal</li>
            </ul>
          </div>
        </section>

        {/* Careers */}
        <section id="karir" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-bold text-[#ed1c24] mb-6">Karir di Super Pack</h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-[#212125] mb-4 text-lg">
              Kami membuka kesempatan bagi Anda yang ingin tumbuh bersama industri kemasan modern. Super Pack menawarkan lingkungan kerja yang:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#212125] text-lg mb-6">
              <li>Inklusif dan kolaboratif</li>
              <li>Fokus pada pengembangan diri</li>
              <li>Berorientasi pada hasil dan pertumbuhan nyata</li>
            </ul>
            <p className="text-[#212125] mb-6 text-lg">
              📩 Kirimkan CV dan surat pengantar Anda ke: <Link href="mailto:ptsunjayamakmursukses@gmail.com" className="text-[#ed1c24] hover:underline">ptsunjayamakmursukses@gmail.com</Link>
            </p>
            <Link href="/kontak" className="inline-block bg-[#ed1c24] hover:bg-[#c9151b] text-white font-bold uppercase py-3 px-6 rounded-md shadow-md">
              Lihat Lowongan Tersedia →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
} 