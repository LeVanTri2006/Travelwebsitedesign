import { useState } from 'react';
import { AdminLayout } from './admin/AdminLayout';
import { AdminDashboard } from './admin/AdminDashboard';
import { AdminToursPage } from './admin/AdminToursPage';
import { AdminTicketsPage } from './admin/AdminTicketsPage';
import { AdminUsersPage } from './admin/AdminUsersPage';
import { AdminContactsPage } from './admin/AdminContactsPage';
import { AdminContentPage } from './admin/AdminContentPage';
import { AdminBookingsPage } from './admin/AdminBookingsPage';

export function AdminApp() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'tours':
        return <AdminToursPage />;
      case 'tickets':
        return <AdminTicketsPage />;
      case 'users':
        return <AdminUsersPage />;
      case 'contacts':
        return <AdminContactsPage />;
      case 'content':
        return <AdminContentPage />;
      case 'bookings':
        return <AdminBookingsPage />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <AdminLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  );
}
