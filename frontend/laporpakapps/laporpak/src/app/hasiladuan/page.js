"use client";

import { useState } from 'react';
import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';

export default function HasilAduan() {
  const [currentBeforeImage, setCurrentBeforeImage] = useState(0);
  const [currentAfterImage, setCurrentAfterImage] = useState(0);

  // Dummy data, ini nantinya bisa disesuaikan dengan data dari backend
  const aduan = {
    id: "L000032",
    deskripsi: "Saya ingin melaporkan kondisi jalan yang rusak di Jl. Merdeka RT 04 RW 03, Kelurahan X, Kecamatan Y. Jalan ini sudah cukup lama mengalami kerusakan yang serius. Terdapat beberapa lubang besar dan aspal yang mengelupas, sehingga sangat membahayakan pengendara, terutama pengguna motor.",
    beforeImages: ["/jalan.png", "/before2.jpg", "/before3.jpg"],
    afterImages: ["/jalan3.png", "/jalan3.png"],
  };

  const handleBeforeImageChange = (index) => {
    setCurrentBeforeImage(index);
  };

  const handleAfterImageChange = (index) => {
    setCurrentAfterImage(index);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
       <Contohnavlogin />

      <main className="flex-grow w-full px-4 md:px-20 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Hasil Aduan</h1>
        <p className="mb-4 text-gray-800">Hasil dari aduan kamu dengan nomor aduan: <strong>{aduan.id}</strong>, dengan detail laporan:</p>
        <p className="mb-8 text-gray-700">{aduan.deskripsi}</p>

        {/* Section Sebelum Aduan */}
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Sebelum Aduan</h2>
        <div className="mb-8">
          <img src={aduan.beforeImages[currentBeforeImage]} alt="Sebelum Aduan" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <div className="flex justify-center mt-4 space-x-2">
            {aduan.beforeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleBeforeImageChange(index)}
                className={`h-3 w-3 rounded-full ${index === currentBeforeImage ? 'bg-blue-600' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Section Sesudah Aduan */}
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Sesudah Aduan</h2>
        <div className="mb-8">
          <img src={aduan.afterImages[currentAfterImage]} alt="Sesudah Aduan" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <div className="flex justify-center mt-4 space-x-2">
            {aduan.afterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleAfterImageChange(index)}
                className={`h-3 w-3 rounded-full ${index === currentAfterImage ? 'bg-blue-600' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Ucapan Terima Kasih */}
        <p className="text-gray-800 text-center">Terima kasih telah melaporkan, semoga hasil dari aduan kamu dapat bermanfaat bagi lingkungan sekitar anda.</p>
      </main>

      <Footer />
    </div>
  );
}
