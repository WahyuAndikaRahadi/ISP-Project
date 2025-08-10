import React from 'react';

// Data mock untuk paket layanan
const servicePackages = [
  {
    id: 1,
    name: 'Paket Fiber Dasar',
    speed: '100 Mbps',
    data: 'Unlimited',
    price: 'Rp 250.000',
    features: ['Koneksi stabil', 'Cocok untuk streaming', 'Gratis instalasi'],
    icon: '📶', // Mengganti ikon dengan emoji
  },
  {
    id: 2,
    name: 'Paket Fiber Keluarga',
    speed: '300 Mbps',
    data: 'Unlimited',
    price: 'Rp 450.000',
    features: ['Kecepatan super', 'Ideal untuk banyak perangkat', 'Dukungan 24/7'],
    icon: '⚡', // Mengganti ikon dengan emoji
  },
  {
    id: 3,
    name: 'Paket Bisnis',
    speed: '1 Gbps',
    data: 'Unlimited',
    price: 'Rp 800.000',
    features: ['Jaringan prioritas', 'SLA 99.9%', 'IP Public'],
    icon: '💼', // Mengganti ikon dengan emoji
  },
];

const Service = () => {
  return (
    // Section akan mengambil lebar penuh dan padding vertikal
    <section className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      {/* Container di dalam section untuk membatasi lebar konten di tengah */}
      <div className="container max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Layanan Kami</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Pilih paket internet yang paling sesuai dengan kebutuhan Anda, baik untuk rumah maupun bisnis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-5xl text-purple-600 mb-4">
                {/* Menggunakan emoji sebagai pengganti ikon Font Awesome */}
                <span>{pkg.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">{pkg.speed}</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{pkg.data}</p>
              
              <ul className="text-left w-full space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
                    <span className="text-green-500 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{pkg.price}</p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
