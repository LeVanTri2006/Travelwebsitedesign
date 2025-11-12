import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
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

interface Tour {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  status: 'published' | 'draft';
  description?: string;
}

const initialTours: Tour[] = [
  {
    id: '1',
    name: 'Khám phá Hạ Long',
    destination: 'Quảng Ninh',
    duration: '2 ngày 1 đêm',
    price: '3,200,000đ',
    rating: 4.8,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400',
    category: 'Khám phá',
    status: 'published',
    description: 'Khám phá vịnh Hạ Long với những hang động kỳ vĩ',
  },
  {
    id: '2',
    name: 'Tour Đà Lạt Lãng Mạn',
    destination: 'Lâm Đồng',
    duration: '3 ngày 2 đêm',
    price: '4,500,000đ',
    rating: 4.9,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400',
    category: 'Nghỉ dưỡng',
    status: 'published',
    description: 'Thành phố ngàn hoa với khí hậu mát mẻ',
  },
];

export function AdminToursPage() {
  const [tours, setTours] = useState<Tour[]>(initialTours);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDestination, setFilterDestination] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [tourToDelete, setTourToDelete] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Tour>>({
    status: 'published',
    category: 'Khám phá',
  });

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDestination = filterDestination === 'all' || tour.destination === filterDestination;
    const matchesCategory = filterCategory === 'all' || tour.category === filterCategory;
    return matchesSearch && matchesDestination && matchesCategory;
  });

  const handleAddNew = () => {
    setEditingTour(null);
    setFormData({
      status: 'published',
      category: 'Khám phá',
    });
    setIsDialogOpen(true);
  };

  const handleEdit = (tour: Tour) => {
    setEditingTour(tour);
    setFormData(tour);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (editingTour) {
      setTours(tours.map(t => t.id === editingTour.id ? { ...t, ...formData } as Tour : t));
    } else {
      const newTour: Tour = {
        id: Date.now().toString(),
        ...formData as Tour,
      };
      setTours([...tours, newTour]);
    }
    setIsDialogOpen(false);
    setFormData({ status: 'published', category: 'Khám phá' });
  };

  const handleDelete = () => {
    if (tourToDelete) {
      setTours(tours.filter(t => t.id !== tourToDelete));
      setIsDeleteDialogOpen(false);
      setTourToDelete(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-[#030213]">Quản lý Tours</h1>
          <p className="text-[#717182] mt-1">Quản lý tất cả các tour du lịch</p>
        </div>
        <Button onClick={handleAddNew} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">
          <Plus className="w-4 h-4 mr-2" />
          Thêm Tour mới
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
              <Input
                placeholder="Tìm kiếm tour..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterDestination} onValueChange={setFilterDestination}>
              <SelectTrigger>
                <SelectValue placeholder="Điểm đến" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả điểm đến</SelectItem>
                <SelectItem value="Quảng Ninh">Quảng Ninh</SelectItem>
                <SelectItem value="Lâm Đồng">Lâm Đồng</SelectItem>
                <SelectItem value="Khánh Hòa">Khánh Hòa</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Loại tour" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả loại</SelectItem>
                <SelectItem value="Khám phá">Khám phá</SelectItem>
                <SelectItem value="Nghỉ dưỡng">Nghỉ dưỡng</SelectItem>
                <SelectItem value="Văn hóa">Văn hóa</SelectItem>
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
                <TableHead>Tên Tour</TableHead>
                <TableHead>Điểm đến</TableHead>
                <TableHead>Thời lượng</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Đánh giá</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTours.map((tour) => (
                <TableRow key={tour.id}>
                  <TableCell>
                    <ImageWithFallback
                      src={tour.image}
                      alt={tour.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </TableCell>
                  <TableCell className="text-[#030213]">{tour.name}</TableCell>
                  <TableCell>{tour.destination}</TableCell>
                  <TableCell>{tour.duration}</TableCell>
                  <TableCell className="text-[#030213]">{tour.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{tour.rating}</span>
                      <span className="text-[#717182]">({tour.reviews})</span>
                    </div>
                  </TableCell>
                  <TableCell>{tour.category}</TableCell>
                  <TableCell>
                    {tour.status === 'published' ? (
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
                        onClick={() => handleEdit(tour)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setTourToDelete(tour.id);
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
            <DialogTitle>{editingTour ? 'Chỉnh sửa Tour' : 'Thêm Tour mới'}</DialogTitle>
            <DialogDescription>
              Điền thông tin chi tiết của tour du lịch
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Tên Tour *</Label>
              <Input
                id="name"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nhập tên tour"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="destination">Điểm đến *</Label>
                <Input
                  id="destination"
                  value={formData.destination || ''}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="VD: Quảng Ninh"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Thời lượng *</Label>
                <Input
                  id="duration"
                  value={formData.duration || ''}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="VD: 3 ngày 2 đêm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Giá *</Label>
                <Input
                  id="price"
                  value={formData.price || ''}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="VD: 3,200,000đ"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rating">Đánh giá</Label>
                <Input
                  id="rating"
                  type="number"
                  step="0.1"
                  max="5"
                  value={formData.rating || ''}
                  onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                  placeholder="VD: 4.8"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="reviews">Số lượng đánh giá</Label>
                <Input
                  id="reviews"
                  type="number"
                  value={formData.reviews || ''}
                  onChange={(e) => setFormData({ ...formData, reviews: parseInt(e.target.value) })}
                  placeholder="VD: 256"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Loại tour</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Khám phá">Khám phá</SelectItem>
                    <SelectItem value="Nghỉ dưỡng">Nghỉ dưỡng</SelectItem>
                    <SelectItem value="Văn hóa">Văn hóa</SelectItem>
                    <SelectItem value="Ẩm thực">Ẩm thực</SelectItem>
                  </SelectContent>
                </Select>
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
                placeholder="Nhập mô tả chi tiết về tour..."
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
              Bạn có chắc chắn muốn xóa tour này? Hành động này không thể hoàn tác.
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
