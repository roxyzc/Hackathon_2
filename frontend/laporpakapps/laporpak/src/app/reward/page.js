"use client";

import Contohnavlogin from '../../components/Contohnavlogin'; 
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/navigation';

export default function HadiahPage() {
  const router = useRouter();

  const handleRewardClick = (rewardId) => {
    router.push(`/reward/${rewardId}`); 
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Contohnavlogin />

      <main className="flex-grow w-full px-4 md:px-20 py-12 flex space-x-10">
        <Sidebar /> {/* Menggunakan Sidebar */}
        
        {/* Main Content */}
        <section className="w-3/4 p-6 border border-gray-300 rounded-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Tukar Hadiah</h1>
          <p className="text-gray-700 mb-2">Kumpulkan point dan tukarkan hadiahnya</p>
          <p className="text-gray-700 mb-8">Point kamu sekarang adalah: <span className="font-bold text-blue-600">100</span></p>

          <h2 className="text-lg font-semibold mb-4">Hadiah yang bisa ditukarkan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { id: 'voucher-belanja', title: 'Voucher Belanja', points: 10, icon: '/voucher.png' },
              { id: 'merchandise', title: 'Merchandise', points: 20, icon: '/voucher.png' },
              { id: 'discount-belanja', title: 'Discount Belanja', points: 40, icon: '/voucher.png' },
              { id: 'hadiah-special', title: 'Hadiah Special', points: 50, icon: '/voucher.png' },
              { id: 'tiket-liburan', title: 'Tiket Liburan', points: 100, icon: '/voucher.png' },
              { id: 'gadget', title: 'Gadget', points: 500, icon: '/voucher.png' },
            ].map((reward) => (
              <div
                key={reward.id}
                onClick={() => handleRewardClick(reward.id)}
                className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-lg transition duration-300 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img src={reward.icon} alt={reward.title} className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-semibold">{reward.title}</h3>
                    <p className="text-sm text-gray-600">Tukar Point {reward.points}</p>
                  </div>
                </div>
                <span className="text-gray-500">&gt;</span>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-6">Bagaimana saya mendapatkan point? Lihat caranya <a href="/info-point" className="text-blue-600 underline">disini</a>.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
