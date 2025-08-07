import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Bagian Kiri: Gambar */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="./src/assets/img-about.png"
              alt="Tim kami sedang bekerja"
              className="rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Bagian Kanan: Teks */}
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-4xl font-bold mb-4">
              Dari Anak Negeri untuk Indonesia Tercinta
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Kami adalah perusahaan yang berdedikasi untuk menyediakan solusi internet terdepan bagi masyarakat. Sejak didirikan pada tahun 2020, kami telah berkomitmen untuk menghubungkan komunitas dengan layanan yang cepat, stabil, dan terjangkau.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Misi kami adalah memberdayakan individu dan bisnis dengan akses tak terbatas ke informasi dan peluang, memastikan tidak ada lagi yang tertinggal dalam era digital ini.
            </p>
            <div className="mt-8">
              
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
