// src/app/editprofil/page.js
"use client";

import Contohnavlogin from '../../components/Contohnavlogin'; 
import Sidebar from "../../components/Sidebar"; 
import Footer from "../../components/Footer";

export default function EditProfile() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
       <Contohnavlogin />

      <div className="flex flex-grow gap-8 px-4 md:px-20 py-12">
        <Sidebar active="editprofil" />

        <main className="flex-grow max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-8">Edit Profile</h1>

          <div className="p-6 border border-gray-300 rounded-lg bg-white text-center">
            <img
              src="/pict1.png"
              alt="User Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <div className="flex justify-center space-x-4 mt-4">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                <i className="fas fa-camera"></i> Kamera
              </button>
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                <i className="fas fa-upload"></i> Upload Foto
              </button>
            </div>

            <button className="mt-8 w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
              Selesai
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
