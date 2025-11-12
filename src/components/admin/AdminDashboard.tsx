import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DollarSign, Calendar, Users, MessageSquare, TrendingUp } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';

const stats = [
  {
    title: 'Tổng doanh thu',
    value: '128,500,000đ',
    change: '+12.5%',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Booking mới',
    value: '24',
    change: '+8 hôm nay',
    icon: Calendar,
    color: 'text-[#ff9933]',
    bgColor: 'bg-orange-50',
  },
  {
    title: 'Người dùng mới',
    value: '156',
    change: '+23 tuần này',
    icon: Users,
    color: 'text-[#0f4c81]',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Tin nhắn mới',
    value: '12',
    change: '5 chưa đọc',
    icon: MessageSquare,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

const recentBookings = [
  {
    id: '#BK001',
    customer: 'Nguyễn Văn A',
    tour: 'Tour Đà Lạt 3N2Đ',
    date: '15/11/2025',
    total: '4,500,000đ',
    status: 'confirmed',
  },
  {
    id: '#BK002',
    customer: 'Trần Thị B',
    tour: 'Vé VinWonders Phú Quốc',
    date: '16/11/2025',
    total: '850,000đ',
    status: 'pending',
  },
  {
    id: '#BK003',
    customer: 'Lê Văn C',
    tour: 'Tour Hạ Long 2N1Đ',
    date: '17/11/2025',
    total: '3,200,000đ',
    status: 'confirmed',
  },
  {
    id: '#BK004',
    customer: 'Phạm Thị D',
    tour: 'Vé Asia Park Đà Nẵng',
    date: '18/11/2025',
    total: '600,000đ',
    status: 'cancelled',
  },
];

const newUsers = [
  { name: 'Hoàng Văn E', email: 'hoang@example.com', date: '12/11/2025' },
  { name: 'Võ Thị F', email: 'vo@example.com', date: '12/11/2025' },
  { name: 'Đặng Văn G', email: 'dang@example.com', date: '11/11/2025' },
  { name: 'Bùi Thị H', email: 'bui@example.com', date: '11/11/2025' },
];

export function AdminDashboard() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Đã xác nhận</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Chờ xác nhận</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Đã hủy</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm text-[#717182]">{stat.title}</CardTitle>
                <div className={`${stat.bgColor} ${stat.color} p-2 rounded-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xl text-[#030213] mb-1 break-words">{stat.value}</div>
                <p className="text-xs text-[#717182] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Doanh thu theo tháng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center text-[#717182]">
                <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Biểu đồ doanh thu</p>
                <p className="text-sm">(Sử dụng Recharts để hiển thị)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Users */}
        <Card>
          <CardHeader>
            <CardTitle>Người dùng mới đăng ký</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {newUsers.map((user, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-[#0f4c81] text-white">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm text-[#030213]">{user.name}</p>
                    <p className="text-xs text-[#717182]">{user.email}</p>
                  </div>
                  <span className="text-xs text-[#717182]">{user.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>Booking gần đây</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã đơn</TableHead>
                <TableHead>Khách hàng</TableHead>
                <TableHead>Tour/Vé</TableHead>
                <TableHead>Ngày đi</TableHead>
                <TableHead>Tổng tiền</TableHead>
                <TableHead>Trạng thái</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="text-[#030213]">{booking.id}</TableCell>
                  <TableCell>{booking.customer}</TableCell>
                  <TableCell>{booking.tour}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell className="text-[#030213]">{booking.total}</TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}