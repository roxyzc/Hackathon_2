// src/app/register/page.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar'; // Mengimpor Navbar

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    no_hp: '',
    nik: '',
    password: '',
    confirm_password: '',
  });
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setMessage('Registrasi berhasil! Silakan login.');
      router.push('/login');
    } else {
      setMessage(data.message || 'Registrasi gagal');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-md mx-auto mt-8 p-8 pb-10 border border-gray-300 rounded-md shadow-lg bg-white transition duration-500 ease-in-out transform hover:shadow-2xl animate-fade-in mb-10">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Daftar</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            value={formData.nama}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition duration-300"
            required
          />
          <input
            type="text"
            name="no_hp"
            placeholder="Nomor Telepon"
            value={formData.no_hp}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition duration-300"
            required
          />
          <input
            type="text"
            name="nik"
            placeholder="Nomor Induk Keluarga (NIK)"
            value={formData.nik}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition duration-300"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Kata Sandi"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              title={showPassword ? "Sembunyikan Password" : "Tampilkan Password"}
            >
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirm_password"
              placeholder="Konfirmasi Kata Sandi"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              title={showConfirmPassword ? "Sembunyikan Password" : "Tampilkan Password"}
            >
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition transform hover:scale-105 focus:scale-95 duration-200"
          >
            Daftar
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        <p className="mt-6 text-center text-gray-700">
        Sudah Daftar? <a href="/login" className="text-blue-600 hover:underline font-semibold">Login Disini</a>
        </p>
      </div>
    </div>
  );
}
