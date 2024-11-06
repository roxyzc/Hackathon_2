// src/app/page.js
"use client";

import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  const router = useRouter();

  // Function to handle navigation to login page
  const handleClick = () => {
    router.push('/login');
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <img src="/frame1.png" alt="Hero Image" className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg" />

        {/* Content below Hero Image */}
        <div className="mt-8 text-left max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Bersama Kita Bangun Daerah Lebih Baik!
          </h1>
          <p className="text-md md:text-lg text-gray-600 mb-6">
            Laporkan masalah di sekitar Anda dengan mudah dan bantu pemerintah memperbaiki infrastruktur publik.
          </p>
          <button 
            onClick={handleClick} 
            className="px-8 py-3 text-md md:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105">
            Mulai Laporan Sekarang <span className="ml-2">→</span>
          </button>
        </div>
      </section>

      {/* Steps Section without Background */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-10">
        <h2 className="text-3xl font-bold text-left text-gray-900 mb-10">
          Hanya dengan 3 Tahap!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Step 1: Daftar/Login */}
          <div className="relative flex items-center p-6 border border-gray-300 rounded-lg bg-white shadow-md w-full md:w-[300px]">
            <img src="/login 1.png" alt="Register Icon" className="w-10 h-10 mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-600 mb-1">Daftar/Login</h3>
              <p className="text-sm text-gray-600">Buat akun untuk melapor permasalahan di sekitar Anda.</p>
            </div>
            <div className="ml-auto">
              <img src="/Arrow right.png" alt="Arrow Icon" className="w-5 h-5" />
            </div>
          </div>

          {/* Step 2: Isi Laporan */}
          <div className="relative flex items-center p-6 border border-gray-300 rounded-lg bg-white shadow-md w-full md:w-[300px]">
            <img src="/clipboard.png" alt="Report Icon" className="w-10 h-10 mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-600 mb-1">Isi Laporan</h3>
              <p className="text-sm text-gray-600">Buat laporan secara detail dengan foto/video pendukung.</p>
            </div>
            <div className="ml-auto">
              <img src="/Arrow right.png" alt="Arrow Icon" className="w-5 h-5" />
            </div>
          </div>

          {/* Step 3: Lacak Laporan */}
          <div className="relative flex items-center p-6 border border-gray-300 rounded-lg bg-white shadow-md w-full md:w-[300px]">
            <img src="/monitor.png" alt="Track Icon" className="w-10 h-10 mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-blue-600 mb-1">Lacak Laporan</h3>
              <p className="text-sm text-gray-600">Lihat proses laporan dan tindakan yang diambil.</p>
            </div>
            <div className="ml-auto">
              <img src="/Arrow right.png" alt="Arrow Icon" className="w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Button below the Steps with the same size and alignment */}
        <div className="mt-8 text-left">
          <button 
            onClick={handleClick} 
            className="w-full md:w-auto px-8 py-3 text-md md:text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105">
            Cek Selengkapnya Tentang Kami <span className="ml-2">→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
