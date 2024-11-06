"use client";

import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LacakAduan() {
  const router = useRouter();
  const [aduanId, setAduanId] = useState("");
  const [aduanList, setAduanList] = useState([
    "L000032", "L87654321", "L122334455" // Contoh ID Aduan (nanti bisa diubah dengan data dari backend)
  ]);

  const handleLacak = () => {
    if (aduanId) {
      // Mengarahkan ke halaman aduan dengan ID yang dipilih
      router.push(`/aduan?id=${aduanId}`);
    } else {
      alert("Pilih Nomor Aduan terlebih dahulu!");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Contohnavlogin />

      <main className="flex-grow w-full px-4 md:px-20 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Lacak Aduan Kamu!</h1>
        <p className="text-gray-700 mb-8">
          Lacak aduan yang sudah kamu laporkan disini. Ingin melapor?{" "}
          <a href="/tambah-lapor" className="text-blue-600 hover:underline">Lapor disini</a>
        </p>

        {/* Dropdown untuk Memilih Nomor Aduan */}
        <div className="flex items-center space-x-4">
          <select
            value={aduanId}
            onChange={(e) => setAduanId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          >
            <option value="" disabled>
              Pilih Nomor Aduan
            </option>
            {aduanList.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
          <button
            onClick={handleLacak}
            className="px-6 py-3 text-md font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105"
          >
            Lacak
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
