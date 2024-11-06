export default function Contohnavlogin() {
    return (
      <nav className="sticky top-0 z-50 flex items-center justify-between px-10 md:px-20 py-4 bg-white shadow-lg border-b-2">
        <div className="flex items-center space-x-5 md:space-x-7">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <a href="/beranda" className="text-gray-900 font-medium text-base hover:text-blue-600 transition duration-300 hidden sm:inline-block">Beranda</a>
          <a href="/tentang" className="text-gray-900 font-medium text-base hover:text-blue-600 transition duration-300 hidden sm:inline-block">Tentang</a>
          <a href="/lacakaduan" className="text-gray-900 font-medium text-base hover:text-blue-600 transition duration-300 hidden sm:inline-block">Lacak Aduan</a>
          <a href="/bantuan" className="text-gray-900 font-medium text-base hover:text-blue-600 transition duration-300 hidden sm:inline-block">Bantuan</a>
        </div>
        <div className="space-x-2 md:space-x-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href = '/profile'}>
            <img src="/pict1.png" alt="Profile" className="w-8 h-8 rounded-full border-2 border-gray-300 object-cover" />
            <span className="text-gray-900 font-medium text-base">Karen Starr</span>
          </div>
        </div>
      </nav>
    );
  }