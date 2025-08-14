import React, { useState, useEffect } from 'react';

// Language dictionary for About component
const translations = {
  en: {
    title: 'From the Nation\'s Children for Our Beloved Indonesia',
    paragraph1: 'We are a company dedicated to providing cutting-edge internet solutions for the community. Since our founding in 2020, we have been committed to connecting communities with fast, stable, and affordable services.',
    paragraph2: 'Our mission is to empower individuals and businesses with unlimited access to information and opportunities, ensuring that no one is left behind in this digital era.',
    ctaButton: 'Learn More',
  },
  id: {
    title: 'Dari Anak Negeri untuk Indonesia Tercinta',
    paragraph1: 'Kami adalah perusahaan yang berdedikasi untuk menyediakan solusi internet terdepan bagi masyarakat. Sejak didirikan pada tahun 2020, kami telah berkomitmen untuk menghubungkan komunitas dengan layanan yang cepat, stabil, dan terjangkau.',
    paragraph2: 'Misi kami adalah memberdayakan individu dan bisnis dengan akses tak terbatas ke informasi dan peluang, memastikan tidak ada lagi yang tertinggal dalam era digital ini.',
    ctaButton: 'Pelajari Lebih Lanjut',
  },
};

const About = () => {
  // State for language, defaults to 'en' or saved preference
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || 'en';
  });

  // Translate text based on current language
  const t = (key) => translations[language][key] || key;

  // Update language state if localStorage changes (e.g., from Navbar)
  useEffect(() => {
    const handleStorageChange = () => {
      const newLang = localStorage.getItem('language');
      if (newLang && newLang !== language) {
        setLanguage(newLang);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [language]);

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
            <h2 className="text-4xl font-bold mb-4 max-sm:text-center">
              {t('title')}
            </h2>
            <p className="text-lg mb-6 leading-relaxed max-sm:text-center">
              {t('paragraph1')}
            </p>
            <p className="text-lg mb-6 leading-relaxed max-sm:text-center">
              {t('paragraph2')}
            </p>
            <div className="mt-8  flex max-sm:justify-center">
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                {t('ctaButton')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;