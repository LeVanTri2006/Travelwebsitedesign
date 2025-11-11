import { Plane, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Intro */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#0f4c81] p-2 rounded-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-white">apexdesign.id.vn</span>
            </div>
            <p className="text-sm leading-relaxed">
              Đối tác du lịch tin cậy của bạn. Khám phá thế giới với những tour du lịch tuyệt vời và dịch vụ chuyên nghiệp.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#ff9933] transition-colors"
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('tours')}
                  className="hover:text-[#ff9933] transition-colors"
                >
                  Tour du lịch
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('tickets')}
                  className="hover:text-[#ff9933] transition-colors"
                >
                  Vé vui chơi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('flights')}
                  className="hover:text-[#ff9933] transition-colors"
                >
                  Vé máy bay
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#ff9933] transition-colors"
                >
                  Liên hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div>
            <h3 className="text-white mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#ff9933] transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff9933] transition-colors">
                  Chính sách hoàn hủy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff9933] transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff9933] transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff9933] transition-colors">
                  Hướng dẫn thanh toán
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#ff9933] flex-shrink-0 mt-0.5" />
                <span>123 Nguyễn Văn Linh,Thành Phố Đà Nẵng</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#ff9933]" />
                <span>1900 XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#ff9933]" />
                <span>hotro@apexdesign.id.vn</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0f4c81] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0f4c81] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0f4c81] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 apexdesign.id.vn. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}