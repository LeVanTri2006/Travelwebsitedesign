import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
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
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
}

const initialFAQs: FAQ[] = [
  {
    id: '1',
    question: 'Làm thế nào để đặt tour?',
    answer: 'Bạn có thể đặt tour trực tiếp trên website hoặc liên hệ hotline để được hỗ trợ.',
  },
  {
    id: '2',
    question: 'Chính sách hủy tour như thế nào?',
    answer: 'Hủy trước 7 ngày được hoàn 70%, hủy trước 3 ngày được hoàn 50%.',
  },
];

const initialDestinations: Destination[] = [
  {
    id: '1',
    name: 'Vịnh Hạ Long',
    description: 'Di sản thiên nhiên thế giới với cảnh quan kỳ vĩ',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400',
  },
];

const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 điểm đến hấp dẫn nhất Việt Nam',
    description: 'Khám phá những điểm đến tuyệt vời nhất tại Việt Nam',
    content: 'Nội dung chi tiết về top 10 điểm đến...',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400',
    date: '10/11/2025',
  },
];

export function AdminContentPage() {
  // FAQ State
  const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);
  const [isFaqDialogOpen, setIsFaqDialogOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [faqFormData, setFaqFormData] = useState<Partial<FAQ>>({});

  // Destination State
  const [destinations, setDestinations] = useState<Destination[]>(initialDestinations);
  const [isDestDialogOpen, setIsDestDialogOpen] = useState(false);
  const [editingDest, setEditingDest] = useState<Destination | null>(null);
  const [destFormData, setDestFormData] = useState<Partial<Destination>>({});

  // Blog State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [isBlogDialogOpen, setIsBlogDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogFormData, setBlogFormData] = useState<Partial<BlogPost>>({});

  // Delete Dialog State
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteType, setDeleteType] = useState<'faq' | 'destination' | 'blog'>('faq');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  // FAQ Functions
  const handleAddFaq = () => {
    setEditingFaq(null);
    setFaqFormData({});
    setIsFaqDialogOpen(true);
  };

  const handleEditFaq = (faq: FAQ) => {
    setEditingFaq(faq);
    setFaqFormData(faq);
    setIsFaqDialogOpen(true);
  };

  const handleSaveFaq = () => {
    if (editingFaq) {
      setFaqs(faqs.map(f => f.id === editingFaq.id ? { ...f, ...faqFormData } as FAQ : f));
    } else {
      const newFaq: FAQ = {
        id: Date.now().toString(),
        ...faqFormData as FAQ,
      };
      setFaqs([...faqs, newFaq]);
    }
    setIsFaqDialogOpen(false);
    setFaqFormData({});
  };

  // Destination Functions
  const handleAddDestination = () => {
    setEditingDest(null);
    setDestFormData({});
    setIsDestDialogOpen(true);
  };

  const handleEditDestination = (dest: Destination) => {
    setEditingDest(dest);
    setDestFormData(dest);
    setIsDestDialogOpen(true);
  };

  const handleSaveDestination = () => {
    if (editingDest) {
      setDestinations(destinations.map(d => d.id === editingDest.id ? { ...d, ...destFormData } as Destination : d));
    } else {
      const newDest: Destination = {
        id: Date.now().toString(),
        ...destFormData as Destination,
      };
      setDestinations([...destinations, newDest]);
    }
    setIsDestDialogOpen(false);
    setDestFormData({});
  };

  // Blog Functions
  const handleAddBlog = () => {
    setEditingBlog(null);
    setBlogFormData({ date: new Date().toLocaleDateString('vi-VN') });
    setIsBlogDialogOpen(true);
  };

  const handleEditBlog = (blog: BlogPost) => {
    setEditingBlog(blog);
    setBlogFormData(blog);
    setIsBlogDialogOpen(true);
  };

  const handleSaveBlog = () => {
    if (editingBlog) {
      setBlogPosts(blogPosts.map(b => b.id === editingBlog.id ? { ...b, ...blogFormData } as BlogPost : b));
    } else {
      const newBlog: BlogPost = {
        id: Date.now().toString(),
        ...blogFormData as BlogPost,
      };
      setBlogPosts([...blogPosts, newBlog]);
    }
    setIsBlogDialogOpen(false);
    setBlogFormData({});
  };

  // Delete Function
  const handleDelete = () => {
    if (!itemToDelete) return;

    switch (deleteType) {
      case 'faq':
        setFaqs(faqs.filter(f => f.id !== itemToDelete));
        break;
      case 'destination':
        setDestinations(destinations.filter(d => d.id !== itemToDelete));
        break;
      case 'blog':
        setBlogPosts(blogPosts.filter(b => b.id !== itemToDelete));
        break;
    }
    setIsDeleteDialogOpen(false);
    setItemToDelete(null);
  };

  const openDeleteDialog = (type: 'faq' | 'destination' | 'blog', id: string) => {
    setDeleteType(type);
    setItemToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl text-[#030213]">Quản lý Nội dung</h1>
        <p className="text-[#717182] mt-1">Quản lý FAQ, điểm đến và blog</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="destinations">Điểm đến</TabsTrigger>
          <TabsTrigger value="blog">Blog/Cẩm nang</TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={handleAddFaq} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">
              <Plus className="w-4 h-4 mr-2" />
              Thêm FAQ
            </Button>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Câu hỏi</TableHead>
                    <TableHead>Câu trả lời</TableHead>
                    <TableHead>Hành động</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {faqs.map((faq) => (
                    <TableRow key={faq.id}>
                      <TableCell className="text-[#030213]">{faq.question}</TableCell>
                      <TableCell className="max-w-md truncate">{faq.answer}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditFaq(faq)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openDeleteDialog('faq', faq.id)}
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
        </TabsContent>

        {/* Destinations Tab */}
        <TabsContent value="destinations" className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={handleAddDestination} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">
              <Plus className="w-4 h-4 mr-2" />
              Thêm Điểm đến
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Card key={dest.id}>
                <CardContent className="p-4">
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-[#030213] mb-2">{dest.name}</h3>
                  <p className="text-sm text-[#717182] mb-4">{dest.description}</p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditDestination(dest)}
                    >
                      <Pencil className="w-4 h-4 mr-2" />
                      Sửa
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openDeleteDialog('destination', dest.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-600 mr-2" />
                      Xóa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Blog Tab */}
        <TabsContent value="blog" className="space-y-4">
          <div className="flex justify-end">
            <Button onClick={handleAddBlog} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">
              <Plus className="w-4 h-4 mr-2" />
              Thêm Bài viết
            </Button>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ảnh</TableHead>
                    <TableHead>Tiêu đề</TableHead>
                    <TableHead>Mô tả</TableHead>
                    <TableHead>Ngày đăng</TableHead>
                    <TableHead>Hành động</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogPosts.map((blog) => (
                    <TableRow key={blog.id}>
                      <TableCell>
                        <ImageWithFallback
                          src={blog.image}
                          alt={blog.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </TableCell>
                      <TableCell className="text-[#030213]">{blog.title}</TableCell>
                      <TableCell className="max-w-md truncate">{blog.description}</TableCell>
                      <TableCell>{blog.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditBlog(blog)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openDeleteDialog('blog', blog.id)}
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
        </TabsContent>
      </Tabs>

      {/* FAQ Dialog */}
      <Dialog open={isFaqDialogOpen} onOpenChange={setIsFaqDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingFaq ? 'Chỉnh sửa FAQ' : 'Thêm FAQ mới'}</DialogTitle>
            <DialogDescription>Điền thông tin câu hỏi và câu trả lời</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="question">Câu hỏi *</Label>
              <Input
                id="question"
                value={faqFormData.question || ''}
                onChange={(e) => setFaqFormData({ ...faqFormData, question: e.target.value })}
                placeholder="Nhập câu hỏi"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="answer">Câu trả lời *</Label>
              <Textarea
                id="answer"
                value={faqFormData.answer || ''}
                onChange={(e) => setFaqFormData({ ...faqFormData, answer: e.target.value })}
                placeholder="Nhập câu trả lời"
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsFaqDialogOpen(false)}>Hủy</Button>
            <Button onClick={handleSaveFaq} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">Lưu</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Destination Dialog */}
      <Dialog open={isDestDialogOpen} onOpenChange={setIsDestDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingDest ? 'Chỉnh sửa Điểm đến' : 'Thêm Điểm đến mới'}</DialogTitle>
            <DialogDescription>Điền thông tin điểm đến</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="dest-name">Tên điểm đến *</Label>
              <Input
                id="dest-name"
                value={destFormData.name || ''}
                onChange={(e) => setDestFormData({ ...destFormData, name: e.target.value })}
                placeholder="VD: Vịnh Hạ Long"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dest-description">Mô tả ngắn *</Label>
              <Textarea
                id="dest-description"
                value={destFormData.description || ''}
                onChange={(e) => setDestFormData({ ...destFormData, description: e.target.value })}
                placeholder="Nhập mô tả ngắn"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dest-image">Link ảnh *</Label>
              <Input
                id="dest-image"
                value={destFormData.image || ''}
                onChange={(e) => setDestFormData({ ...destFormData, image: e.target.value })}
                placeholder="https://..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDestDialogOpen(false)}>Hủy</Button>
            <Button onClick={handleSaveDestination} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">Lưu</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Blog Dialog */}
      <Dialog open={isBlogDialogOpen} onOpenChange={setIsBlogDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingBlog ? 'Chỉnh sửa Bài viết' : 'Thêm Bài viết mới'}</DialogTitle>
            <DialogDescription>Điền thông tin bài viết</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="blog-title">Tiêu đề *</Label>
              <Input
                id="blog-title"
                value={blogFormData.title || ''}
                onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                placeholder="Nhập tiêu đề bài viết"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-description">Mô tả ngắn *</Label>
              <Textarea
                id="blog-description"
                value={blogFormData.description || ''}
                onChange={(e) => setBlogFormData({ ...blogFormData, description: e.target.value })}
                placeholder="Nhập mô tả ngắn"
                rows={2}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-content">Nội dung chi tiết *</Label>
              <Textarea
                id="blog-content"
                value={blogFormData.content || ''}
                onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                placeholder="Nhập nội dung chi tiết"
                rows={6}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-image">Link ảnh *</Label>
              <Input
                id="blog-image"
                value={blogFormData.image || ''}
                onChange={(e) => setBlogFormData({ ...blogFormData, image: e.target.value })}
                placeholder="https://..."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blog-date">Ngày đăng</Label>
              <Input
                id="blog-date"
                value={blogFormData.date || ''}
                onChange={(e) => setBlogFormData({ ...blogFormData, date: e.target.value })}
                placeholder="DD/MM/YYYY"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsBlogDialogOpen(false)}>Hủy</Button>
            <Button onClick={handleSaveBlog} className="bg-[#0f4c81] hover:bg-[#0f4c81]/90">Lưu</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận xóa</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn xóa {deleteType === 'faq' ? 'FAQ' : deleteType === 'destination' ? 'điểm đến' : 'bài viết'} này? Hành động này không thể hoàn tác.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Hủy</Button>
            <Button variant="destructive" onClick={handleDelete}>Xóa</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
