// src/app/bantuan/page.js
"use client";

import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Bantuan() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
       <Contohnavlogin />

      {/* Konten Halaman Bantuan */}
      <main className="flex-grow w-full px-4 md:px-20 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">Bantuan</h1>

        {/* Daftar Bantuan */}
        <section className="mb-12 space-y-4 text-blue-600 font-semibold">
          <div className="cursor-pointer flex items-center">
            <span className="mr-2">+</span> Cara membuat laporan
          </div>
          <div className="cursor-pointer flex items-center">
            <span className="mr-2">+</span> Cara melacak perkembangan laporan
          </div>
          <div className="cursor-pointer flex items-center">
            <span className="mr-2">+</span> Keamanan dan privasi laporan
          </div>
          <div className="cursor-pointer flex items-center">
            <span className="mr-2">+</span> Mengelola laporan yang sudah dikirim
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Frequently asked questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Bagaimana cara saya membuat laporan?",
              "Bagaimana cara melacak perkembangan laporan saya?",
              "Apakah saya bisa melaporkan secara anonim?",
              "Bagaimana cara mendaftar akun baru?",
              "Bagaimana cara memperbarui informasi akun saya?",
              "Apa yang harus saya lakukan jika saya lupa kata sandi?"
            ].map((question, index) => (
              <div key={index} className="border border-blue-200 rounded-lg p-4">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-blue-600 font-semibold">{question}</span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-700 text-sm">
                    {/* Jawaban atau konten FAQ */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
