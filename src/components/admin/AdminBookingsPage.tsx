import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Badge } from '../ui/badge';
import { Search, Eye, Check, X } from 'lucide-react';

interface Booking {
  id: string;
  bookingCode: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  tourName: string;
  date: string;
  quantity: number;
  total: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  bookingDate: string;
}

const initialBookings: Booking[] = [
  {
    id: '1',
    bookingCode: '#BK001',
    customerName: 'Nguyễn Văn A',
    customerEmail: 'nguyenvana@example.com',
    customerPhone: '0901234567',
    tourName: 'Tour Đà Lạt 3N2Đ',
    date: '15/11/2025',
    quantity: 2,
    total: '9,000,000đ',
    status: 'confirmed',
    bookingDate: '10/11/2025',
  },
  {
    id: '2',
    bookingCode: '#BK002',
    customerName: 'Trần Thị B',
    customerEmail: 'tranthib@example.com',
    customerPhone: '0902345678',
    tourName: 'Vé VinWonders Phú Quốc',
    date: '16/11/2025',
    quantity: 4,
    total: '3,400,000đ',
    status: 'pending',
    bookingDate: '11/11/2025',
  },
  {
    id: '3',
    bookingCode: '#BK003',
    customerName: 'Lê Văn C',
    customerEmail: 'levanc@example.com',
    customerPhone: '0903456789',
    tourName: 'Tour Hạ Long 2N1Đ',
    date: '17/11/2025',
    quantity: 2,
    total: '6,400,000đ',
    status: 'confirmed',
    bookingDate: '09/11/2025',
  },
  {
    id: '4',
    bookingCode: '#BK004',
    customerName: 'Phạm Thị D',
    customerEmail: 'phamthid@example.com',
    customerPhone: '0904567890',
    tourName: 'Vé Asia Park Đà Nẵng',
    date: '18/11/2025',
    quantity: 3,
    total: '1,800,000đ',
    status: 'cancelled',
    bookingDate: '08/11/2025',
  },
];

export function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch = booking.bookingCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.tourName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewDetail = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsDetailDialogOpen(true);
  };

  const handleConfirmBooking = (bookingId: string) => {
    setBookings(bookings.map(b => 
      b.id === bookingId ? { ...b, status: 'confirmed' as const } : b
    ));
    setIsDetailDialogOpen(false);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(bookings.map(b => 
      b.id === bookingId ? { ...b, status: 'cancelled' as const } : b
    ));
    setIsDetailDialogOpen(false);
  };

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

  const pendingCount = bookings.filter(b => b.status === 'pending').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-[#030213]">Quản lý Đặt chỗ</h1>
          <p className="text-[#717182] mt-1">
            Quản lý tất cả các đơn đặt tour và vé
            {pendingCount > 0 && (
              <Badge className="ml-2 bg-[#ff9933] hover:bg-[#ff9933]/90">
                {pendingCount} chờ xác nhận
              </Badge>
            )}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl text-[#030213] mb-1">
              {bookings.filter(b => b.status === 'pending').length}
            </div>
            <p className="text-sm text-[#717182]">Chờ xác nhận</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl text-[#030213] mb-1">
              {bookings.filter(b => b.status === 'confirmed').length}
            </div>
            <p className="text-sm text-[#717182]">Đã xác nhận</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl text-[#030213] mb-1">
              {bookings.length}
            </div>
            <p className="text-sm text-[#717182]">Tổng số booking</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
              <Input
                placeholder="Tìm kiếm booking..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="pending">Chờ xác nhận</SelectItem>
                <SelectItem value="confirmed">Đã xác nhận</SelectItem>
                <SelectItem value="cancelled">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã đơn</TableHead>
                <TableHead>Khách hàng</TableHead>
                <TableHead>Tour/Vé</TableHead>
                <TableHead>Ngày đi</TableHead>
                <TableHead>SL</TableHead>
                <TableHead>Tổng tiền</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="text-[#030213]">{booking.bookingCode}</TableCell>
                  <TableCell>
                    <div>
                      <p className="text-[#030213]">{booking.customerName}</p>
                      <p className="text-xs text-[#717182]">{booking.customerPhone}</p>
                    </div>
                  </TableCell>
                  <TableCell>{booking.tourName}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.quantity}</TableCell>
                  <TableCell className="text-[#030213]">{booking.total}</TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewDetail(booking)}
                      title="Xem chi tiết"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chi tiết đặt chỗ</DialogTitle>
            <DialogDescription className="sr-only">
              Xem thông tin chi tiết của đơn đặt chỗ
            </DialogDescription>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-6 py-4">
              {/* Booking Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#717182]">Mã đơn</p>
                  <p className="text-[#030213]">{selectedBooking.bookingCode}</p>
                </div>
                <div>
                  <p className="text-sm text-[#717182]">Ngày đặt</p>
                  <p className="text-[#030213]">{selectedBooking.bookingDate}</p>
                </div>
                <div>
                  <p className="text-sm text-[#717182]">Trạng thái</p>
                  <div className="mt-1">{getStatusBadge(selectedBooking.status)}</div>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="text-[#030213] mb-3">Thông tin khách hàng</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#717182]">Họ tên</p>
                    <p className="text-[#030213]">{selectedBooking.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#717182]">Email</p>
                    <p className="text-[#030213]">{selectedBooking.customerEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#717182]">Số điện thoại</p>
                    <p className="text-[#030213]">{selectedBooking.customerPhone}</p>
                  </div>
                </div>
              </div>

              {/* Tour Info */}
              <div>
                <h3 className="text-[#030213] mb-3">Thông tin tour/vé</h3>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#717182]">Tên:</span>
                    <span className="text-[#030213]">{selectedBooking.tourName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#717182]">Ngày đi:</span>
                    <span className="text-[#030213]">{selectedBooking.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#717182]">Số lượng:</span>
                    <span className="text-[#030213]">{selectedBooking.quantity} người</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-[#717182]">Tổng tiền:</span>
                    <span className="text-[#030213]">{selectedBooking.total}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailDialogOpen(false)}>
              Đóng
            </Button>
            {selectedBooking && selectedBooking.status === 'pending' && (
              <>
                <Button
                  variant="destructive"
                  onClick={() => handleCancelBooking(selectedBooking.id)}
                >
                  <X className="w-4 h-4 mr-2" />
                  Hủy đơn
                </Button>
                <Button
                  onClick={() => handleConfirmBooking(selectedBooking.id)}
                  className="bg-[#0f4c81] hover:bg-[#0f4c81]/90"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Xác nhận đơn
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}