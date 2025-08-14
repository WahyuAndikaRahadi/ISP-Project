import React from 'react';

const QualityAndPrice = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-full mb-6 shadow-lg">
            KEUNGGULAN KAMI
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg leading-tight">
            Solusi Internet
            <br />
            Terdepan untuk Anda
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Rasakan pengalaman internet yang tak tertandingi dengan teknologi fiber optik terdepan, 
            didukung layanan pelanggan 24/7 dan harga yang transparan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Kartu Kualitas Premium */}
          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white dark:hover:bg-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-purple-500/25 transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Performa Ultra Cepat
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                Nikmati kecepatan internet hingga 1 Gbps dengan teknologi fiber optik murni. 
                Koneksi stabil 99.9% uptime untuk streaming 4K, gaming tanpa lag, dan produktivitas maksimal.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Latensi Ultra Rendah &lt; 10ms
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Teknologi GPON Terdepan
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Garansi Kualitas 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Kartu Harga Terjangkau */}
          <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white dark:hover:bg-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-pink-500/25 transition-shadow duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Harga Terjangkau
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                Dapatkan nilai terbaik dengan paket internet mulai dari Rp 299.000/bulan. 
                Tanpa kontrak jangka panjang, tanpa biaya aktivasi tersembunyi, dan cashback untuk pelanggan baru.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Gratis Instalasi & Router WiFi 6
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Cashback 100% Bulan Pertama
                </div>
                <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                  Fleksibilitas Upgrade Paket
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Lihat Paket Lengkap
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
              Konsultasi Gratis
            </button>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hubungi tim ahli kami untuk mendapatkan rekomendasi paket terbaik sesuai kebutuhan Anda
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityAndPrice;