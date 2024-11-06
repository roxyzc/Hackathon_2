"use client";

import { useState } from 'react';
import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';

export default function Aduan() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showClaimPopup, setShowClaimPopup] = useState(false);

  // Dummy data
  const aduan = {
    id: "L000032",
    status: "Disetujui",
    tanggalDiajukan: "05 November 2024",
    tanggalDiproses: "20 November 2024",
    tanggalDisetujui: "20 November 2024",
    deskripsi: "Saya ingin melaporkan kondisi jalan yang rusak di Jl. Merdeka RT 04 RW 03, Kelurahan X, Kecamatan Y...",
    images: ["/jalan.png", "/jalan2.jpg", "/jalan.png"], // sesuaikan dengan gambar yang disediakan backend
  };

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  const handleClaimPoint = () => {
    setShowClaimPopup(true);
  };

  const handlePopupClose = () => {
    setShowClaimPopup(false);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Contohnavlogin />

      <main className="flex-grow w-full px-4 md:px-20 py-12">
        <div className="mb-6">
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">Status: {aduan.status}</span>
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full ml-4">ID Aduan: {aduan.id}</span>
        </div>

        {/* Carousel untuk Foto */}
        <div className="mb-8">
          <img src={aduan.images[currentImage]} alt="Foto Aduan" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <div className="flex justify-center mt-4 space-x-2">
            {aduan.images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`h-3 w-3 rounded-full ${index === currentImage ? 'bg-blue-600' : 'bg-gray-300'}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Deskripsi Aduan */}
        <p className="text-gray-700 mb-6">{aduan.deskripsi}</p>

        {/* Proses Aduan */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Proses Aduan</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Diajukan:</strong> {aduan.tanggalDiajukan}</li>
            <li><strong>Diproses:</strong> {aduan.tanggalDiproses}</li>
            <li>
              <strong>Disetujui:</strong> {aduan.tanggalDisetujui}
              <button
                onClick={handleClaimPoint}
                className="ml-4 px-2 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm hover:bg-blue-200"
              >
                Claim Point
              </button>
            </li>
          </ul>
        </div>

        {/* Hasil Aduan */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">Hasil Aduan</h2>
          <button
            onClick={() => window.location.href = "/hasiladuan"}
            className="text-blue-600 hover:underline"
          >
            Cek disini
          </button>
          <p className="text-gray-500 text-sm">20 November 2024</p>
        </div>

        {/* Claim Point Popup */}
        {showClaimPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Claim Point</h3>
              <p className="text-gray-700 mb-4">Laporan mu telah disetujui. Selamat anda telah mengumpulkan 1 point.</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handlePopupClose}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Oke
                </button>
                <button
                  onClick={() => window.location.href = "/reward"}
                  className="text-blue-600 hover:underline"
                >
                  Cek Reward
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
