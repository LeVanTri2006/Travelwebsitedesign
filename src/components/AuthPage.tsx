import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Lock, User, Phone, Eye, EyeOff, Facebook, Chrome } from 'lucide-react';

interface AuthPageProps {
  initialMode?: 'login' | 'register';
}

export function AuthPage({ initialMode = 'login' }: AuthPageProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Side - Image/Branding */}
          <div className="hidden lg:block relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1579077926357-365f07b70b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Travel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c81]/90 to-[#ff9933]/90 flex items-center justify-center p-12">
              <div className="text-white text-center">
                <h2 className="text-white mb-4">Chào mừng đến với TravelHub</h2>
                <p className="text-lg mb-6">Khám phá thế giới cùng chúng tôi</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      ✈️
                    </div>
                    <div>
                      <p className="text-sm">Đặt vé máy bay nhanh chóng</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      🏖️
                    </div>
                    <div>
                      <p className="text-sm">Tour du lịch đa dạng</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      🎫
                    </div>
                    <div>
                      <p className="text-sm">Vé vui chơi giá tốt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              {/* Toggle Tabs */}
              <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setMode('login')}
                  className={`flex-1 py-2 px-4 rounded-lg transition-all ${
                    mode === 'login'
                      ? 'bg-[#0f4c81] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Đăng nhập
                </button>
                <button
                  onClick={() => setMode('register')}
                  className={`flex-1 py-2 px-4 rounded-lg transition-all ${
                    mode === 'register'
                      ? 'bg-[#0f4c81] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Đăng ký
                </button>
              </div>

              <h2 className="text-gray-900 mb-2 text-center">
                {mode === 'login' ? 'Đăng nhập tài khoản' : 'Tạo tài khoản mới'}
              </h2>
              <p className="text-gray-600 text-center mb-8">
                {mode === 'login'
                  ? 'Đăng nhập để trải nghiệm dịch vụ tốt nhất'
                  : 'Đăng ký để nhận ưu đãi độc quyền'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Register Only - Full Name */}
                {mode === 'register' && (
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                      required
                    />
                  </div>
                </div>

                {/* Register Only - Phone */}
                {mode === 'register' && (
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="0901234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Password */}
                <div>
                  <label className="block text-gray-700 mb-2 text-sm">
                    Mật khẩu <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Register Only - Confirm Password */}
                {mode === 'register' && (
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">
                      Xác nhận mật khẩu <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Login Only - Remember & Forgot */}
                {mode === 'login' && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded text-[#0f4c81] focus:ring-[#0f4c81]"
                      />
                      <span className="text-gray-700">Ghi nhớ đăng nhập</span>
                    </label>
                    <a href="#" className="text-[#0f4c81] hover:text-[#0d3f6b]">
                      Quên mật khẩu?
                    </a>
                  </div>
                )}

                {/* Register Only - Terms */}
                {mode === 'register' && (
                  <div>
                    <label className="flex items-start gap-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                        className="rounded text-[#0f4c81] focus:ring-[#0f4c81] mt-0.5"
                        required
                      />
                      <span className="text-gray-700">
                        Tôi đồng ý với{' '}
                        <a href="#" className="text-[#0f4c81] hover:underline">
                          Điều khoản dịch vụ
                        </a>{' '}
                        và{' '}
                        <a href="#" className="text-[#0f4c81] hover:underline">
                          Chính sách bảo mật
                        </a>
                      </span>
                    </label>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-[#ff9933] text-white rounded-lg hover:bg-[#e68a2e] transition-colors"
                >
                  {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Hoặc tiếp tục với</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Chrome className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-gray-700">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">Facebook</span>
                </button>
              </div>

              {/* Mobile - Switch Mode Text */}
              <div className="lg:hidden mt-6 text-center text-sm text-gray-600">
                {mode === 'login' ? (
                  <p>
                    Chưa có tài khoản?{' '}
                    <button
                      onClick={() => setMode('register')}
                      className="text-[#0f4c81] hover:underline"
                    >
                      Đăng ký ngay
                    </button>
                  </p>
                ) : (
                  <p>
                    Đã có tài khoản?{' '}
                    <button
                      onClick={() => setMode('login')}
                      className="text-[#0f4c81] hover:underline"
                    >
                      Đăng nhập
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
