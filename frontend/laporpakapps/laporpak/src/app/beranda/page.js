// src/app/beranda/page.js
"use client";

import { useRouter } from 'next/navigation';
import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';

export default function Beranda() {
  const router = useRouter();

  // Function to handle navigation to login page
  const handleClick = () => {
    router.push('/tambah-lapor');
  };

  // Pengecekan token sementara dinonaktifkan
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     router.push('/login');
  //   }
  // }, [router]);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
       <Contohnavlogin />

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

      {/* Footer */}
      <Footer /> 
    </div>
  );
}
