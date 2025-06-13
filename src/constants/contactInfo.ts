export const CONTACT_INFO = {
  address: 'Jl. Industri Raya No. 45, Kawasan Industri Pulogadung, Jakarta Timur 13920',
  phone: '+62 21 4600 8888',
  whatsapp: '+62 812 3456 7890',
  email: 'info@superpack.co.id',
  operationalHours: 'Senin - Jumat: 08.00 - 17.00 WIB',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2775153356733!2d106.9142813!3d-6.2292299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnNDUuMyJTIDEwNsKwNTQnNTAuNCJF!5e0!3m2!1sen!2sid!4v1625123456789!5m2!1sen!2sid',
  socialMedia: {
    instagram: 'superpack.id',
    facebook: 'SuperPackIndonesia',
    linkedin: 'super-pack',
  },
};

export const CONTACT_FORM_FIELDS = [
  { id: 'name', label: 'Nama Lengkap', type: 'text', required: true },
  { id: 'email', label: 'Email', type: 'email', required: true },
  { id: 'phone', label: 'Nomor Telepon', type: 'tel', required: true },
  { id: 'company', label: 'Perusahaan', type: 'text', required: false },
  { id: 'subject', label: 'Subjek', type: 'text', required: true },
  { id: 'message', label: 'Pesan', type: 'textarea', required: true },
];