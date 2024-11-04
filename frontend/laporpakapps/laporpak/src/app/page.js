// src/app/page.js
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Jika token ada, arahkan ke halaman Dashboard
      router.push('/dashboard');
    } else {
      // Jika token tidak ada, arahkan ke halaman Register
      router.push('/register');
    }
  }, [router]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
