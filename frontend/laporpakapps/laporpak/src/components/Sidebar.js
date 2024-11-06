"use client";

import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-1/4 p-4 border border-gray-300 rounded-lg">
      <button
        onClick={() => router.push('/profile')}
        className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center justify-start"
      >
        <i className="fas fa-user mr-2"></i> Edit Profil
      </button>
      <button
        onClick={() => router.push('/notifications')}
        className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center justify-start"
      >
        <i className="fas fa-bell mr-2"></i> Notifikasi
      </button>
      <button
        onClick={() => router.push('/laporan')}
        className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center justify-start"
      >
        <i className="fas fa-file-alt mr-2"></i> Laporan
      </button>
      <button
        onClick={() => router.push('/reward')}
        className="w-full py-3 mt-8 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105 text-center"
      >
        Tukar Hadiah
      </button>
    </aside>
  );
}
