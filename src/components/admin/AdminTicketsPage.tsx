import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
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
import { Plus, Pencil, Trash2, Search, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Ticket {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  status: 'published' | 'draft';
  description?: string;
}

const initialTickets: Ticket[] = [
  {
    id: '1',
    name: 'VinWonders Phú Quốc',
    location: 'Phú Quốc, Kiên Giang',
    price: '850,000đ',
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1594138804019-d7c0c93b2b5e?w=400',
    category: 'Công viên giải trí',
    status: 'published',
  },
  {
    id: '2',
    name: 'Asia Park Đà Nẵng',
    location: 'Đà Nẵng',
    price: '600,000đ',
    rating: 4.5,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400',
    category: 'Công viên giải trí',
    status: 'published',
  },
];

export function AdminTicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const [ticketToDelete, setTicketToDelete] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Ticket>>({
    status: 'published',
    category: 'Công viên giải trí',
  });

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch = ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || ticket.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddNew = () => {
    setEditingTicket(null);
    setFormData({
      status: 'published',
      category: 'Công viên giải trí',
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (ticket: Ticket) => {
    setEditingTicket(ticket);
    setFormData(ticket);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (editingTicket) {
      setTickets(tickets.map(t => t.id === editingTicket.id ? { ...t, ...formData } as Ticket : t));
    } else {
      const newTicket: Ticket = {
        id: Date.now().toString(),
        ...formData as Ticket,
      };
      setTickets([...tickets, newTicket]);
    }
    setIsDialogOpen(false);
    setFormData({ status: 'published', category: 'Công viên giải trí' });
  };

  const handleDelete = () => {
    if (ticketToDelete) {
      setTickets(tickets.filter(t => t.id !== ticketToDelete));
      setIsDeleteDialogOpen(false);
      setTicketToDelete(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-[#030213]">Quản lý Vé vui chơi</h1>
          <p className="text-[#717182] mt-1">Quản lý tất cả các vé vui chơi, công viên</p>
        </div>
        <Button onClick={handleAddNew} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">
          <Plus className="w-4 h-4 mr-2" />
          Thêm Vé mới
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
              <Input
                placeholder="Tìm kiếm vé..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Loại vé" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại</SelectItem>
                <SelectItem value="Công viên giải trí">Công viên giải trí</SelectItem>
                <SelectItem value="Khu vui chơi">Khu vui chơi</SelectItem>
                <SelectItem value="Bảo tàng">Bảo tàng</SelectItem>
                <SelectItem value="Di tích">Di tích</SelectItem>
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
                <TableHead>Ảnh</TableHead>
                <TableHead>Tên Vé</TableHead>
                <TableHead>Địa điểm</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Đánh giá</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell>
                    <ImageWithFallback
                      src={ticket.image}
                      alt={ticket.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </TableCell>
                  <TableCell className="text-[#030213]">{ticket.name}</TableCell>
                  <TableCell>{ticket.location}</TableCell>
                  <TableCell className="text-[#030213]">{ticket.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{ticket.rating}</span>
                      <span className="text-[#717182]">({ticket.reviews})</span>
                    </div>
                  </TableCell>
                  <TableCell>{ticket.category}</TableCell>
                  <TableCell>
                    {ticket.status === 'published' ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Published
                      </Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                        Draft
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(ticket)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setTicketToDelete(ticket.id);
                          setIsDeleteDialogOpen(true);
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingTicket ? 'Chỉnh sửa Vé' : 'Thêm Vé mới'}</DialogTitle>
            <DialogDescription>
              Điền thông tin chi tiết của vé vui chơi
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Tên Vé *</Label>
              <Input
                id="name"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nhập tên vé"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Địa điểm *</Label>
              <Input
                id="location"
                value={formData.location || ''}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="VD: Phú Quốc, Kiên Giang"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Giá *</Label>
                <Input
                  id="price"
                  value={formData.price || ''}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="VD: 850,000đ"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Loại vé</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Công viên giải trí">Công viên giải trí</SelectItem>
                    <SelectItem value="Khu vui chơi">Khu vui chơi</SelectItem>
                    <SelectItem value="Bảo tàng">Bảo tàng</SelectItem>
                    <SelectItem value="Di tích">Di tích</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="rating">Đánh giá</Label>
                <Input
                  id="rating"
                  type="number"
                  step="0.1"
                  max="5"
                  value={formData.rating || ''}
                  onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                  placeholder="VD: 4.7"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="reviews">Số lượng đánh giá</Label>
                <Input
                  id="reviews"
                  type="number"
                  value={formData.reviews || ''}
                  onChange={(e) => setFormData({ ...formData, reviews: parseInt(e.target.value) })}
                  placeholder="VD: 189"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Link ảnh</Label>
              <Input
                id="image"
                value={formData.image || ''}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://..."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Mô tả chi tiết</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Nhập mô tả chi tiết về vé..."
                rows={4}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Trạng thái</Label>
              <Select
                value={formData.status}
                onValueChange={(value: 'published' | 'draft') => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Hủy
            </Button>
            <Button onClick={handleSave} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">
              Lưu
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận xóa</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn xóa vé này? Hành động này không thể hoàn tác.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Hủy
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Xóa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
