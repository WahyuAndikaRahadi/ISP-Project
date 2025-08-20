import React from 'react';

function Home() {
  return (
    <div className="relative z-10 flex items-center justify-between min-h-screen bg-transparent text-white p-10 overflow-hidden "> {/* bg-transparent instead of bg-[#100F2F] */}
      {/* Left content (explanation and CTA) */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center w-full md:w-1/2 p-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Selalu Terhubung!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-lg">
          Nikmati pengalaman online terbaik dengan koneksi internet fiber optik yang cepat, stabil, dan tanpa batas. Cocok untuk rumah, bisnis, dan segala aktivitas digital Anda.</p>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
          Mulai Petualangan Anda
        </button>
      </div>

      {/* The Globe div is removed from here */}
    </div>
  );
}

export default Home;