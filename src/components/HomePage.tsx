import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  DollarSign, 
  Headphones, 
  Shield,
  Plane,
  Palmtree,
  Ticket
} from 'lucide-react';

export function HomePage() {
  const [activeTab, setActiveTab] = useState<'flights' | 'tours' | 'tickets'>('flights');

  const tours = [
    {
      id: 1,
      name: 'Tour Đà Nẵng - Hội An',
      duration: '3N2Đ',
      price: '4.999.000',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1720777366540-ca547cbddfa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Tour Phú Quốc Nghỉ Dưỡng',
      duration: '4N3Đ',
      price: '6.999.000',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1698809807960-758cf416e96e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Tour Hà Giang Mùa Hoa',
      duration: '3N2Đ',
      price: '3.999.000',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1682134900019-73bfd00d8289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Tour Nhật Bản Mùa Xuân',
      duration: '5N4Đ',
      price: '25.999.000',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1705803420366-58334fd4df1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
  ];

  const destinations = [
    {
      name: 'Đà Nẵng',
      image: 'https://images.unsplash.com/photo-1720777366540-ca547cbddfa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '233 khách sạn',
      size: 'large' // Wider card
    },
    {
      name: 'Đà Lạt',
      image: 'https://images.unsplash.com/photo-1586595276832-b6840c79bdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '156 khách sạn',
      size: 'medium'
    },
    {
      name: 'Quy Nhơn',
      image: 'https://images.unsplash.com/photo-1670313463553-be7b032fe735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '89 khách sạn',
      size: 'medium'
    },
    {
      name: 'Vũng Tàu',
      image: 'https://images.unsplash.com/photo-1663159935126-4bb481e70016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '178 khách sạn',
      size: 'small'
    },
    {
      name: 'Phú Quốc',
      image: 'https://images.unsplash.com/photo-1698809807960-758cf416e96e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '245 khách sạn',
      size: 'medium'
    },
    {
      name: 'Nha Trang',
      image: 'https://images.unsplash.com/photo-1533002832-1721d16b4bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '321 khách sạn',
      size: 'small'
    },
    {
      name: 'Phan Thiết',
      image: 'https://images.unsplash.com/photo-1702744228739-0123d6e79871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '173 khách sạn',
      size: 'medium'
    },
    {
      name: 'Phú Yên',
      image: 'https://images.unsplash.com/photo-1579077926357-365f07b70b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '112 khách sạn',
      size: 'small'
    },
    {
      name: 'Hà Giang',
      image: 'https://images.unsplash.com/photo-1682134900019-73bfd00d8289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '67 khách sạn',
      size: 'medium'
    },
    {
      name: 'Sapa',
      image: 'https://images.unsplash.com/photo-1665905905591-fb66b0496481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '95 khách sạn',
      size: 'medium'
    },
    {
      name: 'Hội An',
      image: 'https://images.unsplash.com/photo-1664650440553-ab53804814b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '198 khách sạn',
      size: 'small'
    },
    {
      name: 'Ninh Bình',
      image: 'https://images.unsplash.com/photo-1686766219304-5e2fb0df9d2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '142 khách sạn',
      size: 'medium'
    },
    {
      name: 'Hạ Long',
      image: 'https://images.unsplash.com/photo-1560113781-cb0bddd6772b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      trips: '287 khách sạn',
      size: 'small'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2024/10/20/237279_tiny.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl mx-auto py-16">
          <div className="mb-12">
            <h1 className="text-white mb-4 drop-shadow-2xl">Khám phá Việt Nam cùng chúng tôi</h1>
            <p className="text-lg md:text-xl text-white/95 drop-shadow-lg max-w-2xl mx-auto">
              Trải nghiệm du lịch trọn vẹn với hàng ngàn tour, vé máy bay và điểm đến hấp dẫn
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 text-gray-900">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 pb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('flights')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'flights'
                    ? 'bg-[#ff9933] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Plane className="w-5 h-5" />
                <span>Vé máy bay</span>
              </button>
              <button
                onClick={() => setActiveTab('tours')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'tours'
                    ? 'bg-[#ff9933] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Palmtree className="w-5 h-5" />
                <span>Tour du lịch</span>
              </button>
              <button
                onClick={() => setActiveTab('tickets')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === 'tickets'
                    ? 'bg-[#ff9933] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Ticket className="w-5 h-5" />
                <span>Vé vui chơi</span>
              </button>
            </div>

            {/* Search Fields */}
            {activeTab === 'flights' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Điểm đi"
                    className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Điểm đến"
                    className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    placeholder="Ngày đi"
                    className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    placeholder="Ngày về"
                    className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {activeTab === 'tours' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Điểm đến"
                    className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    placeholder="Ngày khởi hành"
                    className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent appearance-none bg-white">
                    <option>Số lượng người</option>
                    <option>1 người</option>
                    <option>2 người</option>
                    <option>3-4 người</option>
                    <option>5+ người</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'tickets' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Địa điểm"
                    className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    placeholder="Ngày sử dụng"
                    className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-11 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent appearance-none bg-white">
                    <option>Loại vé</option>
                    <option>Công viên</option>
                    <option>Bảo tàng</option>
                    <option>Show diễn</option>
                  </select>
                </div>
              </div>
            )}

            <button className="w-full mt-6 px-8 py-4 bg-[#0f4c81] text-white rounded-xl hover:bg-[#0d3f6b] transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              <span>Tìm kiếm ngay</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-[#0f4c81] text-center mb-12">Tour du lịch hot nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 mb-2">{tour.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[#ff9933]">Từ {tour.price} VNĐ</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{tour.rating}</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-[#0f4c81] text-white rounded-lg hover:bg-[#0d3f6b] transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0f4c81] text-center mb-12">Những điểm đến không thể bỏ lỡ</h2>
          
          {/* Clean Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="lg:col-span-2 relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[0].image}
                alt={destinations[0].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[0].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[0].trips}</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[1].image}
                alt={destinations[1].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[1].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[1].trips}</p>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[2].image}
                alt={destinations[2].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[2].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[2].trips}</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[3].image}
                alt={destinations[3].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[3].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[3].trips}</p>
                </div>
              </div>
            </div>

            <div className="relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[4].image}
                alt={destinations[4].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[4].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[4].trips}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[5].image}
                alt={destinations[5].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[5].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[5].trips}</p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="lg:col-span-2 relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[6].image}
                alt={destinations[6].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[6].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[6].trips}</p>
                </div>
              </div>
            </div>

            <div className="relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[7].image}
                alt={destinations[7].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[7].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[7].trips}</p>
                </div>
              </div>
            </div>

            <div className="relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[8].image}
                alt={destinations[8].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[8].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[8].trips}</p>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[9].image}
                alt={destinations[9].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[9].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[9].trips}</p>
                </div>
              </div>
            </div>

            <div className="relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[10].image}
                alt={destinations[10].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[10].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[10].trips}</p>
                </div>
              </div>
            </div>

            <div className="relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[11].image}
                alt={destinations[11].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[11].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[11].trips}</p>
                </div>
              </div>
            </div>

            <div className="relative h-72 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={destinations[12].image}
                alt={destinations[12].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-white mb-1">{destinations[12].name}</h3>
                  <p className="text-sm text-gray-200">{destinations[12].trips}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-[#0f4c81] text-center mb-12">Trải nghiệm dịch vụ tốt nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0f4c81] rounded-full mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-gray-900 mb-2">Giá tốt nhất</h3>
            <p className="text-gray-600">Cam kết giá tốt nhất thị trường với nhiều ưu đãi hấp dẫn</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0f4c81] rounded-full mb-4">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-gray-900 mb-2">Hỗ trợ 24/7</h3>
            <p className="text-gray-600">Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ mọi lúc mọi nơi</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0f4c81] rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-gray-900 mb-2">Thanh toán an toàn</h3>
            <p className="text-gray-600">Hệ thống thanh toán được mã hóa, bảo mật tuyệt đối</p>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0f4c81] text-center mb-12">Cẩm nang du lịch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1579077926357-365f07b70b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt={`Blog ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">
                    {item === 1 && 'Top 10 điểm đến hấp dẫn năm 2025'}
                    {item === 2 && 'Kinh nghiệm du lịch tiết kiệm'}
                    {item === 3 && 'Cẩm nang du lịch Đà Nẵng'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Khám phá những địa điểm tuyệt vời và trải nghiệm độc đáo trong chuyến đi của bạn...
                  </p>
                  <a href="#" className="text-[#ff9933] hover:text-[#e68a2e] text-sm">
                    Đọc thêm →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}