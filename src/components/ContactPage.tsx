import { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Làm thế nào để đặt tour du lịch?',
      answer: 'Bạn có thể đặt tour trực tiếp trên website bằng cách chọn tour yêu thích, điền thông tin và thanh toán. Hoặc liên hệ hotline 1900 XXXX để được tư vấn và đặt tour qua điện thoại.'
    },
    {
      question: 'Chính sách hủy và hoàn tiền như thế nào?',
      answer: 'Hủy trước 15 ngày: hoàn 80% giá trị tour. Hủy trước 7-14 ngày: hoàn 50%. Hủy trong vòng 7 ngày: không hoàn tiền. Các trường hợp đặc biệt sẽ được xem xét riêng.'
    },
    {
      question: 'Tôi có thể thanh toán bằng những hình thức nào?',
      answer: 'Chúng tôi chấp nhận thanh toán qua thẻ tín dụng/ghi nợ (Visa, MasterCard), chuyển khoản ngân hàng, ví điện tử (MoMo, ZaloPay, VNPay), và thanh toán tại văn phòng.'
    },
    {
      question: 'Tour có bao gồm bảo hiểm du lịch không?',
      answer: 'Có, tất cả các tour của chúng tôi đều bao gồm bảo hiểm du lịch cơ bản. Khách hàng có thể mua thêm gói bảo hiểm nâng cao nếu muốn.'
    },
    {
      question: 'Tôi cần chuẩn bị gì cho chuyến đi?',
      answer: 'Tùy vào từng tour, chúng tôi sẽ gửi email thông tin chi tiết về hành lý cần mang, giấy tờ cần thiết, và các lưu ý quan trọng. Vui lòng kiểm tra email sau khi đặt tour.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#0f4c81] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-center mb-4">Chúng tôi luôn sẵn sàng hỗ trợ bạn</h1>
          <p className="text-center text-gray-200">Liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Information - 40% */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-[#0f4c81] mb-6">Thông tin liên hệ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0f4c81] p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Hotline</h3>
                    <p className="text-gray-600">1900 XXXX</p>
                    <p className="text-sm text-gray-500">Hỗ trợ 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0f4c81] p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hotro@travelhub.com</p>
                    <p className="text-sm text-gray-500">Phản hồi trong 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0f4c81] p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Địa chỉ văn phòng</h3>
                    <p className="text-gray-600">123 Đường ABC, Quận 1</p>
                    <p className="text-gray-600">TP. Hồ Chí Minh, Việt Nam</p>
                    <p className="text-sm text-gray-500">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4959614494594!2d106.69530731533417!3d10.772461262154555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc1%3A0xb3ff69197b10ec4f!2sBen%20Thanh%20Market!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form - 60% */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-[#0f4c81] mb-6">Gửi yêu cầu hỗ trợ</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0901234567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Chủ đề <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                    required
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="tour">Hỗ trợ đặt tour</option>
                    <option value="payment">Vấn đề thanh toán</option>
                    <option value="booking">Thay đổi/Hủy booking</option>
                    <option value="feedback">Góp ý dịch vụ</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Nội dung tin nhắn <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Vui lòng mô tả chi tiết yêu cầu của bạn..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#ff9933] text-white rounded-lg hover:bg-[#e68a2e] transition-colors"
                >
                  Gửi yêu cầu
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-[#0f4c81] text-center mb-8">Câu hỏi thường gặp (FAQ)</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-gray-900 pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#0f4c81] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0f4c81] flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Working Hours */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-gray-900 mb-2">Giờ làm việc</h3>
            <p className="text-gray-600 text-sm">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
            <p className="text-gray-600 text-sm">Thứ 7: 8:00 - 17:00</p>
            <p className="text-gray-600 text-sm">Chủ nhật: Nghỉ</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-gray-900 mb-2">Hotline 24/7</h3>
            <p className="text-[#ff9933] text-2xl">1900 XXXX</p>
            <p className="text-gray-600 text-sm mt-2">Hỗ trợ khẩn cấp mọi lúc</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-gray-900 mb-2">Thời gian phản hồi</h3>
            <p className="text-gray-600 text-sm">Email: Trong vòng 24h</p>
            <p className="text-gray-600 text-sm">Hotline: Ngay lập tức</p>
            <p className="text-gray-600 text-sm">Chat: 5-10 phút</p>
          </div>
        </div>
      </div>
    </div>
  );
}
