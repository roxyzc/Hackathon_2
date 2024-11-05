// src/components/LoginForm.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success && data.token) {
      localStorage.setItem('token', data.token);
      setMessage('Login berhasil!');
      router.push('/dashboard');
    } else {
      setMessage(data.message || 'Login gagal');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-0 p-8 border rounded-lg shadow-lg bg-white transition duration-500 ease-in-out transform hover:shadow-2xl">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Masuk</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Email atau Nomor Telepon"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition duration-300"
            required
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition duration-300"
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
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition transform hover:scale-105 duration-200"
          disabled={loading}
        >
          {loading ? "Loading..." : "Masuk"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      <p className="mt-6 text-center text-gray-700">
        Belum punya akun? <a href="/register" className="text-blue-600 hover:underline font-semibold">Daftar Disini</a>
      </p>
    </div>
  );
}
