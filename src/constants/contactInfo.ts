export const CONTACT_INFO = {
  address: 'Jl. Peternakan II No.24, Kapuk, Cengkareng, Jakarta Barat 11720',
  phone: '0821-8888-7061',
  whatsapp: '0821-8888-7061',
  email: 'ptsunjayamakmursukses@gmail.com',
  website: 'superpack.id',
  operationalHours: 'Senin – Jumat, 08.00 – 17.00 WIB',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!4v1749962610367!6m8!1m7!1sKO8sAkd_go0gMIRe0s1JTg!2m2!1d-6.143874804526527!2d106.7630407379121!3f212.01565594221466!4f1.8604268554996395!5f0.7820865974627469',
  socialMedia: {
    instagram: 'instagram.com',
    facebook: 'facebook.com',
    linkedin: 'linkedin.com',
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