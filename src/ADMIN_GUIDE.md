# Hướng dẫn sử dụng Admin Dashboard

## Cách truy cập Admin Dashboard

1. **Từ Navbar**: Click vào link "Admin" nhỏ bên cạnh nút "Đăng nhập / Đăng ký" trên thanh điều hướng
2. **Hoặc**: Thay đổi state `currentPage` thành `'admin'` trong code

## Cấu trúc Admin Dashboard

### 1. Dashboard (Trang chủ)
- **Thống kê tổng quan**: Doanh thu, Booking mới, Người dùng mới, Tin nhắn
- **Biểu đồ**: Doanh thu theo tháng (placeholder cho Recharts)
- **Bảng**: Booking gần đây và Người dùng mới đăng ký

### 2. Quản lý Tours
- **Tính năng CRUD đầy đủ**: Thêm, Sửa, Xóa tour
- **Tìm kiếm & Lọc**: Theo tên, điểm đến, loại tour
- **Thông tin quản lý**: Tên, điểm đến, thời lượng, giá, đánh giá, loại tour, trạng thái

### 3. Quản lý Vé
- **Tính năng CRUD đầy đủ**: Thêm, Sửa, Xóa vé
- **Tìm kiếm & Lọc**: Theo tên, loại vé
- **Thông tin quản lý**: Tên vé, địa điểm, giá, đánh giá, loại vé, trạng thái

### 4. Quản lý Người dùng
- **Xem danh sách**: Tất cả người dùng đã đăng ký
- **Chỉnh sửa**: Thông tin, vai trò (Admin/User), trạng thái (Active/Blocked)
- **Đặt lại mật khẩu**: Cho từng người dùng
- **Tìm kiếm & Lọc**: Theo tên, email, vai trò, trạng thái

### 5. Quản lý Liên hệ
- **Xem tin nhắn**: Từ form liên hệ của khách hàng
- **Trạng thái**: Mới/Đã đọc (tự động đánh dấu khi xem)
- **Trả lời**: Mở email client để phản hồi
- **Badge thông báo**: Hiển thị số tin nhắn mới

### 6. Quản lý Nội dung
**3 tabs quản lý:**

#### Tab FAQ:
- Thêm/Sửa/Xóa câu hỏi thường gặp
- Hiển thị dạng bảng với câu hỏi và câu trả lời

#### Tab Điểm đến:
- Thêm/Sửa/Xóa điểm đến nổi bật
- Hiển thị dạng card grid với hình ảnh
- Quản lý: Tên, mô tả, hình ảnh

#### Tab Blog/Cẩm nang:
- Thêm/Sửa/Xóa bài viết
- Quản lý: Tiêu đề, mô tả, nội dung chi tiết, hình ảnh, ngày đăng

### 7. Quản lý Đặt chỗ
- **Xem tất cả booking**: Tour và vé
- **Thống kê nhanh**: Chờ xác nhận, Đã xác nhận, Tổng số
- **Chi tiết đơn hàng**: Thông tin khách hàng, tour/vé, thanh toán
- **Hành động**: Xác nhận đơn, Hủy đơn
- **Badge thông báo**: Số đơn chờ xác nhận

## Design System

### Màu sắc
- **Primary**: `#0f4c81` (Xanh dương) - Sidebar, button chính
- **Accent**: `#ff9933` (Cam) - CTA, thông báo, badge
- **Background**: `#f3f3f5` - Nền chính
- **Text**: `#030213` (Tiêu đề), `#717182` (Phụ)

### Components sử dụng
- **Shadcn/ui**: Button, Card, Table, Dialog, Select, Input, Textarea, Badge, Avatar, Tabs
- **Icons**: Lucide React
- **Layout**: Sidebar cố định + Header sticky + Main content

## Responsive Design
- **Desktop**: Sidebar luôn hiển thị
- **Mobile**: Sidebar ẩn, hiển thị qua hamburger menu
- **Tablet**: Tự động điều chỉnh grid và layout

## Tính năng nổi bật
1. ✅ **Thống kê trực quan** với cards và biểu đồ
2. ✅ **CRUD hoàn chỉnh** cho tất cả entities
3. ✅ **Tìm kiếm & Lọc** mạnh mẽ
4. ✅ **Form validation** cơ bản
5. ✅ **Dialog xác nhận** cho các hành động nguy hiểm
6. ✅ **Badge thông báo** cho tin nhắn và booking mới
7. ✅ **Responsive** hoàn toàn
8. ✅ **UI/UX nhất quán** với website chính

## Mở rộng trong tương lai
- Tích hợp Supabase cho database thực
- Thêm authentication và authorization
- Upload hình ảnh thực (hiện tại dùng link)
- Rich text editor cho blog
- Export báo cáo (Excel, PDF)
- Email template cho phản hồi khách hàng
- Notification system real-time
