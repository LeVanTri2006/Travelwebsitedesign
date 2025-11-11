import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Star, ChevronLeft, ChevronRight, Ticket } from 'lucide-react';

export function TicketsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const allTickets = [
    {
      id: 1,
      name: 'Vé Sun World Bà Nà Hills',
      location: 'Đà Nẵng',
      price: 750000,
      rating: 4.8,
      reviews: 1542,
      image: 'https://images.unsplash.com/photo-1721921567589-8005106f35ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Công viên giải trí'
    },
    {
      id: 2,
      name: 'Vé Vinpearl Land Phú Quốc',
      location: 'Phú Quốc',
      price: 650000,
      rating: 4.7,
      reviews: 987,
      image: 'https://images.unsplash.com/photo-1723524993962-0234edebe0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Công viên giải trí'
    },
    {
      id: 3,
      name: 'Vé Vinpearl Land Nha Trang',
      location: 'Nha Trang',
      price: 550000,
      rating: 4.6,
      reviews: 756,
      image: 'https://images.unsplash.com/photo-1579077926357-365f07b70b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Công viên giải trí'
    },
    {
      id: 4,
      name: 'Vé Bảo tàng Lịch sử Việt Nam',
      location: 'TP. Hồ Chí Minh',
      price: 40000,
      rating: 4.5,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1657051647344-fef7e9737598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Bảo tàng'
    },
    {
      id: 5,
      name: 'Vé Buffet Hải Sản Biển Đông',
      location: 'Hà Nội',
      price: 399000,
      rating: 4.7,
      reviews: 521,
      image: 'https://images.unsplash.com/photo-1579077926357-365f07b70b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Ẩm thực'
    },
    {
      id: 6,
      name: 'Vé Show Á Ố - Lune Production',
      location: 'TP. Hồ Chí Minh',
      price: 800000,
      rating: 4.9,
      reviews: 1823,
      image: 'https://images.unsplash.com/photo-1705803420366-58334fd4df1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Show diễn'
    },
    {
      id: 7,
      name: 'Vé Aquarium Times City',
      location: 'Hà Nội',
      price: 250000,
      rating: 4.4,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1723524993962-0234edebe0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Trải nghiệm'
    },
    {
      id: 8,
      name: 'Vé Asia Park Đà Nẵng',
      location: 'Đà Nẵng',
      price: 200000,
      rating: 4.5,
      reviews: 678,
      image: 'https://images.unsplash.com/photo-1721921567589-8005106f35ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Công viên giải trí'
    },
    {
      id: 9,
      name: 'Vé Trải nghiệm Làm Gốm Bát Tràng',
      location: 'Hà Nội',
      price: 150000,
      rating: 4.8,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1657051647344-fef7e9737598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Trải nghiệm'
    },
  ];

  const totalPages = Math.ceil(allTickets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTickets = allTickets.slice(startIndex, startIndex + itemsPerPage);

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#0f4c81] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-center mb-4">Vé vui chơi & Trải nghiệm độc đáo</h1>
          <p className="text-center text-gray-200">Khám phá những địa điểm vui chơi giải trí hấp dẫn</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-gray-900 mb-4 pb-3 border-b border-gray-200">Bộ lọc tìm kiếm</h3>
              
              {/* Area Filter */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Khu vực</h4>
                <div className="space-y-2">
                  {['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Nha Trang', 'Phú Quốc', 'Hạ Long'].map((area) => (
                    <label key={area} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#0f4c81] focus:ring-[#0f4c81]" />
                      <span className="text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Loại hình</h4>
                <div className="space-y-2">
                  {[
                    'Công viên giải trí',
                    'Bảo tàng',
                    'Show diễn',
                    'Trải nghiệm ẩm thực',
                    'Thể thao mạo hiểm',
                    'Tour thành phố'
                  ].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#0f4c81] focus:ring-[#0f4c81]" />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Mức giá</h4>
                <div className="space-y-2">
                  {[
                    'Dưới 100.000đ',
                    '100.000đ - 500.000đ',
                    '500.000đ - 1.000.000đ',
                    'Trên 1.000.000đ'
                  ].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#0f4c81] focus:ring-[#0f4c81]" />
                      <span className="text-sm text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-2 bg-[#ff9933] text-white rounded-lg hover:bg-[#e68a2e] transition-colors">
                Áp dụng bộ lọc
              </button>
            </div>
          </aside>

          {/* Tickets Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">Hiển thị {displayedTickets.length} trong số {allTickets.length} vé</p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] text-sm">
                <option>Phổ biến nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
                <option>Đánh giá cao nhất</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayedTickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={ticket.image}
                      alt={ticket.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-[#ff9933] text-white px-3 py-1 rounded-full text-sm">
                      {ticket.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 mb-2 line-clamp-2">{ticket.name}</h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{ticket.location}</span>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-700">{ticket.rating}</span>
                      <span className="text-sm text-gray-500">({ticket.reviews} đánh giá)</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500">Giá vé</p>
                        <p className="text-[#ff9933]">{formatPrice(ticket.price)} đ</p>
                      </div>
                      <button className="px-4 py-2 bg-[#ff9933] text-white rounded-lg hover:bg-[#e68a2e] transition-colors text-sm flex items-center gap-2">
                        <Ticket className="w-4 h-4" />
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-[#0f4c81] text-white'
                      : 'border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
