// src/app/notifikasi/page.js
"use client";

import { useState } from 'react';
import Sidebar from '../../components/Sidebar'; // Pastikan Sidebar sudah diatur untuk mendukung active item
import Contohnavlogin from '../../components/Contohnavlogin';
import Footer from '../../components/Footer';

export default function Notification() {
  const [activeNotification, setActiveNotification] = useState(null);

  const notifications = [
    {
      id: 1,
      title: "Laporan kamu telah terverifikasi, lihat disini!",
      detail: "Laporan kamu dengan nomor aduan L000032 telah berhasil diverifikasi! Terima kasih atas kontribusi kamu dalam melaporkan kondisi di sekitar. Saat ini, laporan kamu sedang dalam proses untuk ditindaklanjuti oleh tim terkait. Kamu bisa memantau perkembangan dan status terbaru dari laporan tersebut dengan mengunjungi halaman 'Lacak Aduan' di platform kami. Kami sangat menghargai peran aktifmu dalam menjaga dan membangun lingkungan yang lebih baik. Terus berpartisipasi untuk perubahan positif di komunitasmu!.",
    },
    {
      id: 2,
      title: "Laporan kamu telah terverifikasi, lihat disini!",
      detail: "Laporan kamu telah diterima dan sedang dalam proses peninjauan lebih lanjut.",
    },
    {
      id: 3,
      title: "Kamu telah melaporkan aduan, lihat disini!",
      detail: "Aduan kamu telah tercatat dan sedang kami proses. Terima kasih atas partisipasimu!",
    },
  ];

  const handleNotificationClick = (id) => {
    setActiveNotification(activeNotification === id ? null : id);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Contohnavlogin />
      <main className="flex-grow w-full flex px-4 md:px-20 py-8">
        <Sidebar active="Notifikasi" /> {/* Pastikan Sidebar mendukung active item */}
        <div className="w-full md:w-3/4 lg:w-2/3 ml-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Notifikasi</h1>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="border border-gray-300 rounded-lg bg-white shadow-md p-4">
                <div
                  onClick={() => handleNotificationClick(notification.id)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="text-gray-700 font-medium">{notification.title}</span>
                  <span className="text-gray-500">
                    {activeNotification === notification.id ? "▼" : "▶"}
                  </span>
                </div>
                {activeNotification === notification.id && (
                  <p className="mt-3 text-gray-600">
                    {notification.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
