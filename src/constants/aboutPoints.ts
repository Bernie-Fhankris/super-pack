// Types for about section
interface AboutPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// List of points shown in AboutSection
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
  mission: 'Menyediakan bubble wrap dan produk kemasan berkualitas premium dengan harga kompetitif\nMendukung pertumbuhan usaha kecil dan menengah dengan solusi kemasan siap pakai\nMembangun rantai pasok kemasan yang cepat dan terpercaya\nMenjaga standar ramah lingkungan dalam produksi dan distribusi',
  vision: 'Menjadi mitra terpercaya dalam solusi kemasan pelindung yang mengedepankan kualitas, efisiensi, dan tanggung jawab lingkungan di seluruh Indonesia.',
  history: 'Super Pack didirikan pada tahun 2010 oleh sekelompok profesional yang memiliki visi untuk merevolusi industri kemasan di Indonesia. Berawal dari workshop kecil di Jakarta, kami kini telah berkembang menjadi produsen kemasan terkemuka dengan fasilitas produksi modern di beberapa kota besar.',
  values: [
    'Komitmen pada Kualitas – Produk diproduksi dengan material terbaik dan proses yang terstandar',
    'Efisiensi & Ketepatan – Pengiriman cepat, respons cepat, stok siap',
    'Keberlanjutan – Fokus pada bahan daur ulang dan pengurangan limbah',
    'Transparansi – Informasi produk jelas dan proses kerja terbuka',
    'Kepuasan Pelanggan – Setiap masukan dihargai sebagai bahan perbaikan',
  ],
};

// Image paths (served from /public)
export const ABOUT_IMAGES = {
  main: "/bubble-wrap-bening125cm.webp",
  secondary1: "/bubble-wrap-anti-static125cm.webp",
  secondary2: "/bubble-wrap-hitam125cm.webp",
};