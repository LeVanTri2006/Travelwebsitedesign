import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export function ToursPage() {
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const allTours = [
    {
      id: 1,
      name: 'Tour Đà Nẵng - Hội An - Bà Nà Hills',
      destination: 'Đà Nẵng',
      duration: '3 ngày 2 đêm',
      price: 4999000,
      rating: 4.8,
      reviews: 152,
      image: 'https://images.unsplash.com/photo-1720777366540-ca547cbddfa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Khám phá'
    },
    {
      id: 2,
      name: 'Tour Phú Quốc Nghỉ Dưỡng 5 Sao',
      destination: 'Phú Quốc',
      duration: '4 ngày 3 đêm',
      price: 6999000,
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1698809807960-758cf416e96e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Nghỉ dưỡng'
    },
    {
      id: 3,
      name: 'Tour Hà Giang - Cao Nguyên Đá',
      destination: 'Hà Giang',
      duration: '3 ngày 2 đêm',
      price: 3999000,
      rating: 4.7,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1682134900019-73bfd00d8289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Khám phá'
    },
    {
      id: 4,
      name: 'Tour Nhật Bản Mùa Hoa Anh Đào',
      destination: 'Nhật Bản',
      duration: '5 ngày 4 đêm',
      price: 25999000,
      rating: 5.0,
      reviews: 421,
      image: 'https://images.unsplash.com/photo-1705803420366-58334fd4df1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Văn hóa'
    },
    {
      id: 5,
      name: 'Tour Hàn Quốc Seoul - Jeju',
      destination: 'Hàn Quốc',
      duration: '5 ngày 4 đêm',
      price: 18999000,
      rating: 4.8,
      reviews: 287,
      image: 'https://images.unsplash.com/photo-1570192076494-f399d7681378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Văn hóa'
    },
    {
      id: 6,
      name: 'Tour Châu Âu 5 Nước',
      destination: 'Châu Âu',
      duration: '7 ngày 6 đêm',
      price: 45999000,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1657051647344-fef7e9737598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Văn hóa'
    },
    {
      id: 7,
      name: 'Tour Hạ Long - Sapa',
      destination: 'Miền Bắc',
      duration: '4 ngày 3 đêm',
      price: 5499000,
      rating: 4.6,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1668000018482-a02acf02b22a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Khám phá'
    },
    {
      id: 8,
      name: 'Tour Sapa Trekking Ruộng Bậc Thang',
      destination: 'Sapa',
      duration: '2 ngày 1 đêm',
      price: 2999000,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1649530928914-c2df337e3007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Khám phá'
    },
    {
      id: 9,
      name: 'Tour Nha Trang Biển Đảo',
      destination: 'Nha Trang',
      duration: '3 ngày 2 đêm',
      price: 4499000,
      rating: 4.5,
      reviews: 176,
      image: 'https://images.unsplash.com/photo-1579077926357-365f07b70b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      type: 'Nghỉ dưỡng'
    },
  ];

  const totalPages = Math.ceil(allTours.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTours = allTours.slice(startIndex, startIndex + itemsPerPage);

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#0f4c81] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-center mb-4">Tìm kiếm Tour du lịch cho bạn</h1>
          <p className="text-center text-gray-200">Khám phá những điểm đến tuyệt vời với các gói tour đa dạng</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-gray-900 mb-4 pb-3 border-b border-gray-200">Bộ lọc tìm kiếm</h3>
              
              {/* Destination Filter */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Điểm đến</h4>
                <div className="space-y-2">
                  {['Đà Nẵng', 'Phú Quốc', 'Hà Giang', 'Nha Trang', 'Sapa', 'Nhật Bản', 'Hàn Quốc', 'Châu Âu'].map((dest) => (
                    <label key={dest} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#0f4c81] focus:ring-[#0f4c81]" />
                      <span className="text-sm text-gray-700">{dest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Departure Date */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Ngày khởi hành</h4>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] text-sm"
                />
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Thời lượng</h4>
                <div className="space-y-2">
                  {['1-3 ngày', '4-6 ngày', '7-10 ngày', 'Trên 10 ngày'].map((duration) => (
                    <label key={duration} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#0f4c81] focus:ring-[#0f4c81]" />
                      <span className="text-sm text-gray-700">{duration}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Mức giá</h4>
                <input 
                  type="range" 
                  min="0" 
                  max="50000000" 
                  step="1000000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>0 đ</span>
                  <span>{formatPrice(priceRange[1])} đ</span>
                </div>
              </div>

              {/* Tour Type */}
              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Loại tour</h4>
                <div className="space-y-2">
                  {['Nghỉ dưỡng', 'Khám phá', 'Văn hóa', 'Ẩm thực'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#0f4c81] focus:ring-[#0f4c81]" />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full py-2 bg-[#ff9933] text-white rounded-lg hover:bg-[#e68a2e] transition-colors">
                Áp dụng bộ lọc
              </button>
            </div>
          </aside>

          {/* Tours Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">Hiển thị {displayedTours.length} trong số {allTours.length} tour</p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] text-sm">
                <option>Phổ biến nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
                <option>Đánh giá cao nhất</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayedTours.map((tour) => (
                <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-[#ff9933] text-white px-3 py-1 rounded-full text-sm">
                      {tour.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 mb-2 line-clamp-2">{tour.name}</h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{tour.destination}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{tour.duration}</span>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-700">{tour.rating}</span>
                      <span className="text-sm text-gray-500">({tour.reviews} đánh giá)</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500">Từ</p>
                        <p className="text-[#ff9933]">{formatPrice(tour.price)} đ</p>
                      </div>
                      <button className="px-4 py-2 bg-[#0f4c81] text-white rounded-lg hover:bg-[#0d3f6b] transition-colors text-sm">
                        Xem chi tiết
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
