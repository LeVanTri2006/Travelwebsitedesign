import { Plane, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'tours', label: 'Tour du lịch' },
    { id: 'tickets', label: 'Vé vui chơi' },
    { id: 'flights', label: 'Vé máy bay' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-[#0f4c81] p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#0f4c81]">apexdesign.id.vn</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-[#0f4c81]'
                    : 'text-gray-700 hover:text-[#0f4c81]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Login/Register Button */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => handleNavClick('auth')}
              className="px-6 py-2 bg-[#ff9933] text-white rounded-lg hover:bg-[#e68a2e] transition-colors"
            >
              Đăng nhập / Đăng ký
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg ${
                  currentPage === item.id
                    ? 'bg-[#0f4c81] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('auth')}
              className="w-full px-4 py-2 bg-[#ff9933] text-white rounded-lg hover:bg-[#e68a2e] transition-colors"
            >
              Đăng nhập / Đăng ký
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}