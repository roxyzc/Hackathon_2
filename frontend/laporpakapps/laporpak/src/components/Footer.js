// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Logo and Description */}
          <div className="md:col-span-1 flex flex-col items-start pl-4"> {/* Menambahkan pl-4 untuk padding kiri pada logo */}
            <img src="/logo.png" alt="Logo" className="w-20 h-20 mb-4" />
            <p className="text-sm text-gray-400">© 2024 LaporPak.com</p>
          </div>
  
          {/* Contact Information */}
          <div className="md:col-span-1 ml-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-400">9565 S. Railroad Dr.<br />Spring Valley, NY 10977<br />United States</p>
            <p className="text-sm mt-3 text-gray-400">0800 01234 5678</p>
          </div>
  
          {/* Navigation Links */}
          <div className="md:col-span-1 ml-4">
            <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Beranda</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Tentang</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Lacak Aduan</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Bantuan</a></li>
            </ul>
          </div>
  
          {/* Social Media Links */}
          <div className="md:col-span-1 ml-4">
            <h3 className="text-lg font-semibold mb-2">Sosial Media</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Facebook</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Instagram</a></li>
            </ul>
          </div>
  
          {/* Legal Links */}
          <div className="md:col-span-1 ml-4">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Cookie Agreement</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-10 text-xs">
          © 2024 LaporPak.com. All rights reserved.
        </p>
      </footer>
    );
  }
  