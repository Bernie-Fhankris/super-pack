import bubbleBening from '../assets/bubble-wrap-bening125cm.webp';
import bubbleAntiStatic from '../assets/bubble-wrap-anti-static125cm.webp';
import bubbleHitam from '../assets/bubble-wrap-hitam125cm.webp';

interface AboutPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const ABOUT_POINTS: AboutPoint[] = [
  {
    id: 'point-1',
    title: 'Kualitas Premium',
    description: 'Material berkualitas tinggi dan proses produksi yang presisi menghasilkan kemasan terbaik.',
    icon: 'award',
  },
  {
    id: 'point-2',
    title: 'Ramah Lingkungan',
    description: 'Komitmen pada keberlanjutan dengan material daur ulang dan proses produksi hijau.',
    icon: 'leaf',
  },
  {
    id: 'point-3',
    title: 'Kustomisasi Penuh',
    description: 'Solusi kemasan yang sepenuhnya dapat disesuaikan dengan kebutuhan spesifik bisnis Anda.',
    icon: 'settings',
  },
  {
    id: 'point-4',
    title: 'Pengiriman Cepat',
    description: 'Proses produksi efisien dan jaringan logistik yang luas untuk pengiriman tepat waktu.',
    icon: 'truck',
  },
];

export const ABOUT_CONTENT = {
  mission: 'Menyediakan solusi kemasan berkualitas premium yang tidak hanya memenuhi kebutuhan praktis tetapi juga meningkatkan nilai brand dan pengalaman pelanggan, sembari menjaga komitmen pada keberlanjutan lingkungan.',
  vision: 'Menjadi pemimpin industri dalam inovasi kemasan yang menggabungkan desain kreatif, fungsionalitas unggul, dan praktik ramah lingkungan.',
  history: 'Super Pack didirikan pada tahun 2010 oleh sekelompok profesional yang memiliki visi untuk merevolusi industri kemasan di Indonesia. Berawal dari workshop kecil di Jakarta, kami kini telah berkembang menjadi produsen kemasan terkemuka dengan fasilitas produksi modern di beberapa kota besar.',
  values: [
    'Kualitas dan keunggulan dalam setiap produk',
    'Inovasi berkelanjutan dalam desain dan material',
    'Tanggung jawab lingkungan dalam seluruh operasi',
    'Kepuasan pelanggan sebagai prioritas utama',
    'Integritas dan transparansi dalam berbisnis',
  ],
};

export const ABOUT_IMAGES = {
  main: bubbleBening,
  secondary1: bubbleAntiStatic,
  secondary2: bubbleHitam,
};