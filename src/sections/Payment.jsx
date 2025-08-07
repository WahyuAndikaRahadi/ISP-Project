import React from 'react';

const Payment = () => {
  const paymentMethods = [
    { name: 'Bank Transfer', icon: '🏦' },
    { name: 'E-Wallet', icon: '📱' },
    { name: 'Credit Card', icon: '💳' },
    { name: 'QRIS', icon: '📷' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Metode Pembayaran</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Kami menyediakan berbagai pilihan pembayaran yang mudah dan aman untuk kenyamanan Anda.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-3">{method.icon}</div>
              <h3 className="text-lg font-semibold">{method.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payment;
