// src/app/selesai-lapor/page.js 
"use client";

import { useRouter } from 'next/navigation';
import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';

export default function SelesaiLapor() {
  const router = useRouter();
  
  // Simulasi ID Laporan
  const reportId = "1234567890";

  const handleCopy = () => {
    navigator.clipboard.writeText(reportId);
    alert("ID Laporan disalin ke clipboard!");
  };

  const handleBackToHome = () => {
    router.push('/beranda'); // Arahkan ke halaman beranda
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
       <Contohnavlogin />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg px-6 py-12 text-center bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Terimakasih Telah Melapor!</h1>
          <p className="text-gray-700 mb-2">
            Laporan kamu akan segera ditindak lanjuti, cek secara berkala pada 
            <a href="/lacak-aduan" className="text-blue-600 font-semibold ml-1 cursor-pointer">
              “Lacak aduan”
            </a>
          </p>
          <p className="text-gray-700 mb-6 flex items-center justify-center">
            ID Laporan Kamu: <span className="font-semibold ml-1">{reportId}</span>
            <button onClick={handleCopy} className="ml-2 text-blue-600 cursor-pointer">
              <img src="/Copy.png" alt="Copy Icon" className="w-5 h-5 inline" />
            </button>
          </p>
          
          {/* Tombol Kembali ke Beranda */}
          <button
            onClick={handleBackToHome}
            className="w-full px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105"
          >
            Kembali ke Beranda
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
