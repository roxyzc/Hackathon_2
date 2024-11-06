// src/app/tambah-lapor/page.js 
"use client";

import { useRouter } from 'next/navigation';
import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function TambahLapor() {
  const router = useRouter();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [location, setLocation] = useState('');

  const handleLocationClick = () => {
    
    window.open('https://www.google.com/maps', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/selesai-lapor'); 
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Contohnavlogin />

      {/*  py-12 menjadi py-6 */}
      <main className="flex-grow w-full px-4 md:px-20 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">Laporan</h1>

        {/* Formulir Laporan */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Detail Laporan */}
          <div>
            <textarea
              placeholder="Detail Laporan"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 resize-none"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Tempat Kejadian */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tempat Kejadian"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              required
            />
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
              onClick={handleLocationClick}
              title="Pilih lokasi di Maps"
            >
              <img src="/lokasi.png" alt="Lokasi Icon" className="w-5 h-5" />
            </span>
          </div>

          {/* Tambah File Pendukung */}
          <div className="relative border border-gray-300 rounded-lg p-4 flex items-center justify-center text-gray-500 w-full">
            <label className="cursor-pointer w-full text-center">
              <input type="file" className="hidden" />
              <span className="flex items-center justify-center space-x-2 text-blue-600 hover:underline">
                <img src="/tambah.png" alt="Tambah File Icon" className="w-5 h-5" />
                <span>Tambah File Pendukung</span>
              </span>
            </label>
          </div>

          {/* Checkbox Anonim */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="anonymous"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
              className="form-checkbox text-blue-600"
            />
            <label htmlFor="anonymous" className="text-gray-600">
              Ceklis untuk melapor sebagai Anonim
            </label>
          </div>

          {/* Tombol Lapor */}
          <button
            type="submit"
            className="w-full px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105 text-center"
          >
            Lapor
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
