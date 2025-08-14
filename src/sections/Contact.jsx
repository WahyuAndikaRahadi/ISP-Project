import React, { useState } from 'react';

// Main application component that renders the Contact section
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-sans antialiased">
      <Contact />
    </div>
  );
}

// The Contact component, updated with a map and custom message box
const Contact = () => {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setMessage("Pesan Anda telah berhasil dikirim!");
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      setMessage('');
      form.reset();
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-md md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kami senang mendengar dari Anda. Kirimkan pesan atau kunjungi kami.
          </p>
        </div>

        {/* Custom Message Box */}
        {showMessage && (
          <div className="fixed bottom-5 right-5 z-50 p-4 bg-green-500 text-white rounded-lg shadow-xl animate-fade-in-up transition-all">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{message}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information with Map */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col transform transition duration-300 hover:scale-105">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Informasi Kontak</h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">

              {/* Alamat */}
              <div className="flex items-start">
                <i className="ri-map-pin-line text-primary text-2xl mr-4"></i>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Alamat Kami</p>
                  <p>Jl. KRT. Radjiman Widyodiningrat, Rawa Badung, No 32 RT 007/RW 007, Kel. Jatinegara, Kec. Cakung, Kota Jakarta Timur, 13930</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <i className="ri-mail-line text-primary text-2xl mr-4"></i>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email Kami</p>
                  <p>smknegeri69jkt@gmail.com</p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start">
                <i className="ri-phone-line text-primary text-2xl mr-4"></i>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Telepon</p>
                  <p>021-22131229</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 flex-grow relative w-full h-80 rounded-xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4307.299626694295!2d106.9230641753523!3d-6.206318193781518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bcabb1368d7%3A0xea46dd080cc5e54c!2sSMK%20NEGERI%2069%20JAKARTA!5e1!3m2!1sid!2sid!4v1755137203040!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Peta Lokasi"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Kirim Pesan</h3>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Pesan Anda"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Keyframes for the fade-in-up animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
`;
document.head.appendChild(style);
