// src/components/Navbar.js
export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 flex items-center justify-between px-10 md:px-20 py-4 bg-white shadow-lg border-b-2">
        <div className="flex items-center space-x-5 md:space-x-7">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <a href="#" className="text-gray-900 font-medium text-base hover:text-blue-600 transition duration-300 hidden sm:inline-block">Beranda</a>
          <a href="#" className="text-gray-900 font-medium text-base hover:text-blue-600 transition duration-300 hidden sm:inline-block">Tentang</a>
          <a href="#" className="text-gray-900 font-medium text-base hover:text-blue-600 transition duration-300 hidden sm:inline-block">Lacak Aduan</a>
          <a href="#" className="text-gray-900 font-medium text-base hover:text-blue-600 transition duration-300 hidden sm:inline-block">Bantuan</a>
        </div>
        <div className="space-x-2 md:space-x-4">
          <a href="/register" className="px-3 py-1.5 border-2 rounded-md text-gray-900 font-medium text-base hover:bg-gray-200 transition duration-300">Daftar</a>
          <a href="/login" className="px-3 py-1.5 text-white bg-blue-600 rounded-md font-medium text-base hover:bg-blue-700 transition duration-300">Login</a>
        </div>
      </nav>
    );
  }
  