import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
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
import { Search, Mail, Trash2, Eye } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read';
}

const initialContacts: Contact[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    subject: 'Hỏi về tour Hạ Long',
    message: 'Tôi muốn hỏi về chi tiết tour Hạ Long 2 ngày 1 đêm. Có những gì trong tour?',
    date: '12/11/2025 10:30',
    status: 'new',
  },
  {
    id: '2',
    name: 'Trần Thị B',
    email: 'tranthib@example.com',
    subject: 'Chính sách hoàn tiền',
    message: 'Xin cho tôi biết chính sách hoàn tiền khi hủy tour là như thế nào?',
    date: '11/11/2025 15:45',
    status: 'read',
  },
  {
    id: '3',
    name: 'Lê Văn C',
    email: 'levanc@example.com',
    subject: 'Đặt tour cho nhóm',
    message: 'Tôi muốn đặt tour cho nhóm 20 người. Có được giảm giá không?',
    date: '10/11/2025 09:15',
    status: 'new',
  },
];

export function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [contactToDelete, setContactToDelete] = useState<string | null>(null);

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || contact.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewDetail = (contact: Contact) => {
    setSelectedContact(contact);
    setIsDetailDialogOpen(true);
    // Mark as read
    setContacts(contacts.map(c => c.id === contact.id ? { ...c, status: 'read' as const } : c));
  };

  const handleReply = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleDelete = () => {
    if (contactToDelete) {
      setContacts(contacts.filter(c => c.id !== contactToDelete));
      setIsDeleteDialogOpen(false);
      setContactToDelete(null);
    }
  };

  const newContactsCount = contacts.filter(c => c.status === 'new').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl text-[#030213]">Quản lý Liên hệ</h1>
          <p className="text-[#717182] mt-1">
            Xem và phản hồi các tin nhắn từ khách hàng
            {newContactsCount > 0 && (
              <Badge className="ml-2 bg-[#ff9933] hover:bg-[#ff9933]/90">
                {newContactsCount} mới
              </Badge>
            )}
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
              <Input
                placeholder="Tìm kiếm tin nhắn..."
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
                <SelectItem value="all">Tất cả tin nhắn</SelectItem>
                <SelectItem value="new">Tin nhắn mới</SelectItem>
                <SelectItem value="read">Đã đọc</SelectItem>
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
                <TableHead>Người gửi</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Chủ đề</TableHead>
                <TableHead>Ngày gửi</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow 
                  key={contact.id}
                  className={contact.status === 'new' ? 'bg-blue-50/50' : ''}
                >
                  <TableCell className={contact.status === 'new' ? 'text-[#030213]' : ''}>
                    {contact.name}
                  </TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell className={contact.status === 'new' ? 'text-[#030213]' : ''}>
                    {contact.subject}
                  </TableCell>
                  <TableCell>{contact.date}</TableCell>
                  <TableCell>
                    {contact.status === 'new' ? (
                      <Badge className="bg-[#ff9933] hover:bg-[#ff9933]/90">
                        Mới
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Đã đọc</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewDetail(contact)}
                        title="Xem chi tiết"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleReply(contact.email)}
                        title="Trả lời"
                      >
                        <Mail className="w-4 h-4 text-[#0f4c81]" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setContactToDelete(contact.id);
                          setIsDeleteDialogOpen(true);
                        }}
                        title="Xóa"
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

      {/* Detail Dialog */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Chi tiết tin nhắn</DialogTitle>
            <DialogDescription className="sr-only">
              Xem thông tin chi tiết của tin nhắn liên hệ
            </DialogDescription>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#717182]">Người gửi</p>
                  <p className="text-[#030213]">{selectedContact.name}</p>
                </div>
                <div>
                  <p className="text-sm text-[#717182]">Email</p>
                  <p className="text-[#030213]">{selectedContact.email}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#717182]">Chủ đề</p>
                <p className="text-[#030213]">{selectedContact.subject}</p>
              </div>
              <div>
                <p className="text-sm text-[#717182]">Ngày gửi</p>
                <p className="text-[#030213]">{selectedContact.date}</p>
              </div>
              <div>
                <p className="text-sm text-[#717182] mb-2">Nội dung</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-[#030213] whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailDialogOpen(false)}>
              Đóng
            </Button>
            {selectedContact && (
              <Button 
                onClick={() => handleReply(selectedContact.email)}
                className="bg-[#0f4c81] hover:bg-[#0f4c81]/90"
              >
                <Mail className="w-4 h-4 mr-2" />
                Trả lời
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận xóa</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn xóa tin nhắn này? Hành động này không thể hoàn tác.
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