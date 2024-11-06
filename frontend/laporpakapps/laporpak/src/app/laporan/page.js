// src/app/laporan/page.js
"use client";

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Contohnavlogin from '../../components/Contohnavlogin';
import Footer from '../../components/Footer';
import { useRouter } from 'next/navigation';

export default function LaporanPage() {
  const router = useRouter();

  const [reports] = useState([
    {
      id: 1,
      image: "/sampah.png",
      title: "Saya ingin melaporkan adanya penumpukan sampah di lokasi Jl. Melati, RT. Surabaya",
      date: "5 Januari 2024",
      status: "Diajukan",
    },
    {
      id: 2,
      image: "/lampu.png",
      title: "Saya ingin melaporkan masalah lampu jalan yang tidak berfungsi di lokasi Jl. Pahlawan, R...",
      date: "8 Juni 2024",
      status: "Disetujui",
    },
    {
      id: 3,
      image: "/jalan.png",
      title: "Saya ingin melaporkan kondisi jalan yang rusak di Jl. Merdeka RT 04 RW 03, Kelurahan X...",
      date: "5 November 2024",
      status: "Selesai",
    },
  ]);

  const handleReportClick = (id) => {
    router.push(`/laporan/${id}`); // Arahkan ke halaman detail laporan
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Contohnavlogin />
      <main className="flex-grow w-full flex px-4 md:px-20 py-8">
        <Sidebar active="Laporan" />
        <div className="w-full md:w-3/4 lg:w-2/3 ml-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Laporan</h1>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                onClick={() => handleReportClick(report.id)}
                className="flex border border-gray-300 rounded-lg bg-white shadow-md p-4 cursor-pointer hover:shadow-lg transition duration-300"
              >
                <img src={report.image} alt="Report Image" className="w-20 h-20 object-cover rounded-md mr-4" />
                <div className="flex flex-col justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">{report.title}</h2>
                  <p className="text-gray-500 text-sm">{report.date}</p>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    report.status === "Diajukan"
                      ? "bg-yellow-100 text-yellow-600"
                      : report.status === "Disetujui"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}>
                    {report.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
