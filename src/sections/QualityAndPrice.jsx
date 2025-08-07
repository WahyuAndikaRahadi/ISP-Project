import React from 'react';

const QualityAndPrice = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Kualitas dan Harga Terbaik</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Kami berkomitmen untuk memberikan layanan internet fiber optik dengan kualitas tak tertandingi dan harga yang sangat kompetitif.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Kartu Kualitas */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-5xl text-purple-600 mb-4">
              <span role="img" aria-label="Kualitas">⭐</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Kualitas Terjamin</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Nikmati koneksi super cepat dan stabil tanpa henti. Jaringan fiber optik kami dibangun dengan teknologi terkini untuk memastikan pengalaman terbaik.
            </p>
          </div>

          {/* Kartu Harga */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="text-5xl text-pink-600 mb-4">
              <span role="img" aria-label="Harga">💰</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Harga Kompetitif</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Dapatkan paket internet dengan harga paling bersahabat di kelasnya. Tanpa biaya tersembunyi, transparan, dan pastinya hemat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAndPrice;
