'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO, CONTACT_FORM_FIELDS } from '@/constants/contactInfo';

interface ContactSectionProps {
  isStandalone?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isStandalone = false }) => {
  return (
    <section
      className={
        isStandalone
          ? 'pt-8 md:pt-10 pb-16 md:pb-24'
          : 'mt-8 md:mt-10 mb-16 md:mb-24'
      }
    >
      {isStandalone && (
        <div className="max-w-[1260px] mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ed1c24] mb-4">Kontak Kami</h1>
            <p className="text-[#212125] max-w-xl text-lg">
              Punya pertanyaan seputar produk bubble wrap atau ingin berkonsultasi langsung mengenai kebutuhan kemasan usaha Anda?
              Tim Super Pack siap membantu Anda memberikan solusi terbaik.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-[1260px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact info */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-[#ed1c24] mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex">
                  <MapPin className="h-6 w-6 text-[#ed1c24] mr-4 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#ed1c24] mb-1">Alamat</h4>
                    <p className="text-[#212125] text-lg">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex">
                  <Phone className="h-6 w-6 text-[#ed1c24] mr-4 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#ed1c24] mb-1">Telepon</h4>
                    <p className="text-[#212125] text-lg">{CONTACT_INFO.phone}</p>
                    <p className="text-[#212125] text-lg">WhatsApp: {CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>
                <div className="flex">
                  <Mail className="h-6 w-6 text-[#ed1c24] mr-4 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#ed1c24] mb-1">Email</h4>
                    <p className="text-[#212125] text-lg">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex">
                  <Clock className="h-6 w-6 text-[#ed1c24] mr-4 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#ed1c24] mb-1">Jam Operasional</h4>
                    <p className="text-[#212125] text-lg">{CONTACT_INFO.operationalHours}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href={`https://wa.me/62${CONTACT_INFO.whatsapp.replace(/\D/g, '').substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full justify-center items-center px-4 py-3 text-base font-bold uppercase text-white bg-[#231F20] hover:bg-red-600 rounded-md transition-colors"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="lg:w-2/3 lg:pl-12 mt-12 lg:mt-0">
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-[#ed1c24] mb-6">Kirim Pesan</h3>
              <form onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);

                const name = formData.get('name') || '';
                const email = formData.get('email') || '';
                const phone = formData.get('phone') || '';
                const company = formData.get('company') || '';
                const subject = formData.get('subject') || '';
                const message = formData.get('message') || '';

                let whatsappMessage = "Permohonan Kontak dari Website Super Pack\n\n";
                whatsappMessage += `Nama Lengkap: ${name}\n`;
                whatsappMessage += `Email: ${email}\n`;
                whatsappMessage += `Nomor Telepon: ${phone}\n`;
                if (company) {
                  whatsappMessage += `Perusahaan: ${company}\n`;
                }
                whatsappMessage += `Subjek: ${subject}\n`;
                whatsappMessage += `Pesan:\n${message}\n\n`;
                whatsappMessage += `--- \n(Dikirim otomatis dari superpack.id)`;

                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappNumber = `62${CONTACT_INFO.whatsapp.replace(/\D/g, '').substring(1)}`;
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

                window.open(whatsappUrl, '_blank');
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {CONTACT_FORM_FIELDS.slice(0,4).map(field=> (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        required={field.required}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <button type="submit" className="w-full bg-[#ed1c24] hover:bg-[#c9151b] text-white font-bold uppercase py-3 px-6 rounded-md transition-colors shadow-md">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Map */}
        <div className="mt-12">
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src={CONTACT_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Super Pack Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 