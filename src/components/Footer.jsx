import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Bagian Logo dan Deskripsi */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Namselink
              </span>
            </h3>
            <p className="text-gray-400 text-sm">
              Kami menyediakan solusi internet cepat dan stabil untuk kebutuhan rumah dan bisnis Anda.
            </p>
          </div>

          {/* Bagian Link Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Bagian Layanan */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Fiber Optic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Wireless Internet
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Web Hosting
                </a>
              </li>
            </ul>
          </div>

          {/* Bagian Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <p>
                  Jl. KRT. Radjiman Widyodiningrat, Rawa Badung, No 32 RT 007/RW 007,
                  Kel. Jatinegara, Kec. Cakung, Kota Jakarta Timur, 13930
                </p>
              </li>
              <li>
                <a
                  href="https://www.smkn69jkt.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  www.smkn69jkt.sch.id
                </a>
              </li>
              <li>
                <a
                  href="tel:021-22131229"
                  className="hover:text-white transition-colors duration-300"
                >
                  021-22131229
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bagian Hak Cipta */}
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Namselink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
