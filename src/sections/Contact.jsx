import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Cek validasi browser
    if (!form.checkValidity()) {
      form.reportValidity(); // munculkan tooltip "Isi bidang ini"
      return;
    }

    alert("Pesan terkirim!");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Kami senang mendengar dari Anda. Kirimkan pesan atau kunjungi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Informasi Kontak</h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-start">
                <span className="text-2xl text-purple-600 mr-4">📍</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Alamat Kami</p>
                  <p>Jalan Internet No. 123, Jakarta, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl text-purple-600 mr-4">📧</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email Kami</p>
                  <p>info@mywebsite.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl text-purple-600 mr-4">📞</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Telepon</p>
                  <p>+62 812-3456-789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulir Kontak */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Kirim Pesan</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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

export default Contact;
