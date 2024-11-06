// src/app/profile/page.js
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    // Cek status login di localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // Jika tidak ada atau false, arahkan ke halaman login
    if (!isLoggedIn) {
      router.push('/login'); // Ganti '/login' dengan path halaman login yang sesuai
    }
  }, [router]);

  // Function to navigate to edit profile page
  const handleEditProfile = () => {
    router.push('/editprofil');
  };

  // Function to navigate to edit data diri page
  const handleEditDataDiri = () => {
    router.push('/editdatadiri');
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
       <Contohnavlogin />

      <main className="flex-grow flex w-full max-w-7xl mx-auto px-4 md:px-20 py-12 space-x-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Konten Profil */}
        <div className="flex-grow p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-bold text-blue-600 mb-8">Profile</h1>

          <div className="flex items-center space-x-8 mb-8">
            {/* Foto Profil */}
            <div className="relative flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="/pict1.png" alt="Profile" className="object-cover w-full h-full" />
              </div>
              <button
                onClick={handleEditProfile}
                className="mt-2 flex items-center text-blue-600 hover:underline"
                title="Edit Profil"
              >
                <i className="fas fa-pencil-alt mr-1"></i> Edit Profil
              </button>
            </div>

            {/* Data Diri */}
            <div className="flex-grow border border-gray-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Data Diri</h2>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Nama Lengkap:</span> Disini Nama
                </div>
                <div>
                  <span className="font-semibold">Email:</span> Disini Email
                </div>
                <div>
                  <span className="font-semibold">Nomor Telepon:</span> Disini Nomor
                </div>
                <div>
                  <span className="font-semibold">Lokasi:</span> Disini Lokasi
                </div>
              </div>
              <button
                onClick={handleEditDataDiri}
                className="mt-4 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg flex items-center space-x-2 hover:bg-gray-100"
              >
                <i className="fas fa-edit"></i>
                <span>Edit Data Diri</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
