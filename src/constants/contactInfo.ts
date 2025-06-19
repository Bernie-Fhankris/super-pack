export const CONTACT_INFO = {
  address: 'Jl. Peternakan II No.24, Kapuk, Cengkareng, Jakarta Barat 11720',
  phone: '0821-8888-7061',
  whatsapp: '0821-8888-7061',
  email: 'ptsunjayamakmursukses@gmail.com',
  website: 'superpack.id',
  operationalHours: 'Senin – Jumat, 08.00 – 17.00 WIB',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1983.451824078812!2d106.76133314461752!3d-6.14364298266701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1750314343268!5m2!1sen!2sus',
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