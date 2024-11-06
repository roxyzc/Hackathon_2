// src/app/editdatadiri/page.js
"use client";

import Contohnavlogin from '../../components/Contohnavlogin'; 
import Sidebar from "../../components/Sidebar"; // Sidebar yang aktif pada "Edit Profil"
import Footer from "../../components/Footer";

export default function EditDataDiri() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Contohnavlogin />

      <div className="flex flex-grow gap-8 px-4 md:px-20 py-12">
        <Sidebar active="editdatadiri" />

        <main className="flex-grow max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-8">Edit Data Diri</h1>

          <div className="p-6 border border-gray-300 rounded-lg bg-white">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Data Diri</h2>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                  <i className="fas fa-pen"></i>
                </span>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Nomor Telepon"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                  <i className="fas fa-pen"></i>
                </span>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                  <i className="fas fa-pen"></i>
                </span>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Lokasi"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
                <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                  <i className="fas fa-pen"></i>
                </span>
              </div>

              <button className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
                Selesai
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
