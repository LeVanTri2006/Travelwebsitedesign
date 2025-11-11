import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plane, Calendar, Users, ArrowRightLeft } from 'lucide-react';

export function FlightsPage() {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [classType, setClassType] = useState('economy');
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#0f4c81] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-center mb-4">Tìm kiếm chuyến bay hoàn hảo của bạn</h1>
          <p className="text-center text-gray-200">Đặt vé máy bay dễ dàng với giá tốt nhất</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          {/* Trip Type Selection */}
          <div className="flex gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'roundtrip'}
                onChange={() => setTripType('roundtrip')}
                className="text-[#0f4c81] focus:ring-[#0f4c81]"
              />
              <span className="text-gray-700">Khứ hồi</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'oneway'}
                onChange={() => setTripType('oneway')}
                className="text-[#0f4c81] focus:ring-[#0f4c81]"
              />
              <span className="text-gray-700">Một chiều</span>
            </label>
          </div>

          {/* From/To Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Điểm đi (From)</label>
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Hà Nội (HAN)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Điểm đến (To)</label>
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90" />
                <input
                  type="text"
                  placeholder="TP. Hồ Chí Minh (SGN)"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                />
              </div>
            </div>
          </div>

          {/* Date Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Ngày đi</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Ngày về</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  disabled={tripType === 'oneway'}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] ${
                    tripType === 'oneway' ? 'bg-gray-100 cursor-not-allowed' : ''
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Passengers and Class */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative">
              <label className="block text-sm text-gray-700 mb-2">Số lượng hành khách</label>
              <button
                onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">
                    {passengers.adults + passengers.children + passengers.infants} Hành khách
                  </span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showPassengerDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Người lớn (≥12 tuổi)</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setPassengers({ ...passengers, adults: Math.max(1, passengers.adults - 1) })}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{passengers.adults}</span>
                        <button
                          onClick={() => setPassengers({ ...passengers, adults: passengers.adults + 1 })}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Trẻ em (2-11 tuổi)</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setPassengers({ ...passengers, children: Math.max(0, passengers.children - 1) })}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{passengers.children}</span>
                        <button
                          onClick={() => setPassengers({ ...passengers, children: passengers.children + 1 })}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Em bé (&lt;2 tuổi)</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setPassengers({ ...passengers, infants: Math.max(0, passengers.infants - 1) })}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{passengers.infants}</span>
                        <button
                          onClick={() => setPassengers({ ...passengers, infants: passengers.infants + 1 })}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPassengerDropdown(false)}
                    className="w-full mt-4 py-2 bg-[#0f4c81] text-white rounded-lg hover:bg-[#0d3f6b]"
                  >
                    Xác nhận
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Hạng vé</label>
              <select
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
              >
                <option value="economy">Phổ thông (Economy)</option>
                <option value="business">Thương gia (Business)</option>
                <option value="first">Hạng nhất (First Class)</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full py-4 bg-[#ff9933] text-white rounded-lg hover:bg-[#e68a2e] transition-colors flex items-center justify-center gap-2">
            <Plane className="w-5 h-5" />
            Tìm kiếm chuyến bay
          </button>
        </div>

        {/* Promotional Banners */}
        <div className="mt-12">
          <h3 className="text-gray-900 mb-6">Ưu đãi đặc biệt</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705803420366-58334fd4df1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Promo 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="p-6 text-white">
                  <p className="text-sm mb-2">Vietnam Airlines</p>
                  <h3 className="text-white mb-2">Giảm 30% vé nội địa</h3>
                  <p className="text-sm text-gray-200">Áp dụng đến 31/12/2025</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-48 rounded-xl overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1570192076494-f399d7681378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Promo 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="p-6 text-white">
                  <p className="text-sm mb-2">VietJet Air</p>
                  <h3 className="text-white mb-2">Flash Sale 0đ</h3>
                  <p className="text-sm text-gray-200">Chỉ thanh toán phí và thuế</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Tips */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="text-gray-900 mb-4">💡 Mẹo đặt vé máy bay</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#ff9933] mt-1">•</span>
              <span>Đặt vé sớm từ 3-4 tuần để có giá tốt nhất</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff9933] mt-1">•</span>
              <span>Bay vào giữa tuần (Thứ 3, Thứ 4) thường rẻ hơn cuối tuần</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff9933] mt-1">•</span>
              <span>So sánh giá từ nhiều hãng hàng không khác nhau</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#ff9933] mt-1">•</span>
              <span>Đăng ký nhận thông báo để không bỏ lỡ các chương trình khuyến mãi</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}