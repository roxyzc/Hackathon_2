// src/app/tentang/page.js 
"use client";

import { useState, useEffect } from 'react';
import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';

const heroImages = [
  "/image1.png",
  "/Frame1.png",
  "/image1.png",
];

export default function Tentang() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Contohnavlogin />

      <main className="flex-grow w-full px-6 md:px-20 py-10">
        {/* Header Section with Text above Slider */}
        <section className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Tentang LaporPak.com</h1>
          <p className="text-gray-700 text-md md:text-lg">
            Membangun Indonesia yang lebih baik dengan memberdayakan masyarakat untuk melaporkan masalah di sekitar mereka.
          </p>
        </section>

        {/* Hero Section with Slider */}
        <section className="relative max-w-5xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={heroImages[currentIndex]}
              alt="Hero Image"
              className="w-full h-80 md:h-96 object-cover transition-opacity duration-500"
            />
            {/* Panah Kiri */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
            >
              ←
            </button>
            {/* Panah Kanan */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition"
            >
              →
            </button>
          </div>
          {/* Dots for Image Indicator */}
          <div className="flex justify-center mt-4">
            {heroImages.map((_, index) => (
              <span
                key={index}
                onClick={() => handleDotClick(index)}
                className={`cursor-pointer w-3 h-3 rounded-full mx-1 transition ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </section>

        {/* About Section */}
<section className="flex flex-col md:flex-row items-center justify-between mb-16 px-6 md:px-20">
  <div className="md:w-1/2 text-gray-800">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Apasih LaporPak.com Itu?</h2>
    <p className="text-gray-700 mb-4 text-md md:text-lg">
      <span className="font-semibold text-blue-600">LaporPak.com</span> adalah sebuah platform digital inovatif yang memberdayakan masyarakat Indonesia untuk berpartisipasi aktif dalam pembangunan daerah mereka. Melalui platform ini, masyarakat dapat melaporkan berbagai masalah yang mereka temui di lingkungan sekitar, mulai dari jalan rusak, sampah menumpuk, hingga fasilitas publik yang tidak berfungsi dengan baik.
    </p>
    <button className="px-6 py-3 text-md font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105">
      Mulai Laporan Sekarang <span className="ml-2">→</span>
    </button>
  </div>
  <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
    <img src="/abu.png" alt="Illustration Image" className="w-full max-w-md h-auto rounded-lg shadow-lg" />
  </div>
</section>


        {/* Bagaimana Cara Kerja LaporPak.com? */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">Bagaimana Cara Kerja LaporPak.com?</h2>
          <div className="relative max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <img
              src="/bag.png" // Ganti dengan nama gambar panjang Anda
              alt="Cara Kerja LaporPak"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
       

        <section className="flex flex-col md:flex-row items-center justify-between mb-16 px-6 md:px-20 gap-8">
  <div className="md:w-1/2 text-gray-800">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Manfaat LaporPak.com Bagi Masyarakat dan Pemerintah</h2>
    <p className="text-gray-700 mb-4 text-md md:text-lg">
      LaporPak.com memudahkan masyarakat melaporkan masalah lingkungan dan membantu pemerintah mendapatkan data untuk prioritas pembangunan yang lebih tepat.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
      <li><strong>Bagi Masyarakat</strong> - Memudahkan melaporkan masalah lingkungan. Meningkatkan rasa memiliki dan keterlibatan dalam lingkungan.</li>
      <li><strong>Bagi Pemerintah</strong> - Memberikan data real-time tentang masalah di lapangan. Membantu pemerintah mengidentifikasi prioritas pembangunan.</li>
    </ul>
  </div>
  <img src="/abu.png" alt="Benefits Image" className="md:w-1/2 h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg" />
</section>


{/* Testimonials Section */}
<section className="text-center mb-16 px-6 md:px-20">
  <h2 className="text-3xl font-bold text-blue-600 mb-4">Apa Kata Pengguna LaporPak.com</h2>
  <p className="text-gray-700 mb-8 text-md md:text-lg max-w-2xl mx-auto">
    <span className="font-semibold text-blue-600">LaporPak.com</span> telah membantu banyak orang untuk menyampaikan keluhan mereka dengan mudah dan cepat. Lihat apa yang dikatakan para pengguna kami yang telah berkontribusi membuat lingkungan mereka lebih baik.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Testimonial 1 */}
    <div className="p-6 border border-blue-300 rounded-lg bg-white shadow-md flex flex-col items-start">
      <div className="flex items-center mb-4">
        <img src="/pict1.png" alt="Adam Jacobs" className="w-10 h-10 rounded-full mr-3" />
        <p className="text-blue-600 font-semibold">Adam Jacobs</p>
      </div>
      <p className="text-gray-600 text-left">
        LaporPak.com memudahkan saya melaporkan masalah di sekitar saya. Hanya dengan beberapa langkah, laporan saya segera ditindaklanjuti.
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="p-6 border border-blue-300 rounded-lg bg-white shadow-md flex flex-col items-start">
      <div className="flex items-center mb-4">
        <img src="/pict1.png" alt="Adam Denis" className="w-10 h-10 rounded-full mr-3" />
        <p className="text-blue-600 font-semibold">Adam Denis</p>
      </div>
      <p className="text-gray-600 text-left">
        Website ini sangat membantu dalam mewujudkan transparansi dan memberikan suara bagi masyarakat. Terima kasih LaporPak!
      </p>
    </div>

    {/* Testimonial 3 */}
    <div className="p-6 border border-blue-300 rounded-lg bg-white shadow-md flex flex-col items-start">
      <div className="flex items-center mb-4">
        <img src="/pict1.png" alt="Adam Joseph" className="w-10 h-10 rounded-full mr-3" />
        <p className="text-blue-600 font-semibold">Adam Joseph</p>
      </div>
      <p className="text-gray-600 text-left">
        Proses pelaporan yang cepat dan mudah membuat saya merasa didengar oleh pemerintah setempat. Platform yang luar biasa!
      </p>
    </div>

    {/* Testimonial 4 */}
    <div className="p-6 border border-blue-300 rounded-lg bg-white shadow-md flex flex-col items-start">
      <div className="flex items-center mb-4">
        <img src="/pict1.png" alt="Adam Elwis" className="w-10 h-10 rounded-full mr-3" />
        <p className="text-blue-600 font-semibold">Adam Elwis</p>
      </div>
      <p className="text-gray-600 text-left">
        LaporPak memudahkan saya untuk berkontribusi dalam menjaga lingkungan sekitar. Saya merasa menjadi bagian dari perubahan positif.
      </p>
    </div>
  </div>
</section>


{/* Call to Action Section */}
<section className="text-center mb-16 px-6 md:px-20">
  <p className="text-lg text-gray-700 mb-4">Ayo Berkontribusi Sekarang!</p>
  <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 leading-relaxed">
    Bersama kita bisa menciptakan perubahan nyata di lingkungan kita. Jangan hanya diam, laporkan masalah di sekitar Anda dan bantu wujudkan lingkungan yang lebih baik!
  </h2>
  <button className="px-10 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105">
    Mulai Laporan Sekarang <span className="ml-2">→</span>
  </button>
</section>

      </main>

      <Footer />
    </div>
  );
}
