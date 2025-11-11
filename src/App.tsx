import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { HomePage } from './components/HomePage';
import { ToursPage } from './components/ToursPage';
import { TicketsPage } from './components/TicketsPage';
import { FlightsPage } from './components/FlightsPage';
import { ContactPage } from './components/ContactPage';
import { AuthPage } from './components/AuthPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'tours':
        return <ToursPage />;
      case 'tickets':
        return <TicketsPage />;
      case 'flights':
        return <FlightsPage />;
      case 'contact':
        return <ContactPage />;
      case 'auth':
        return <AuthPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      {currentPage !== 'auth' && <Footer setCurrentPage={setCurrentPage} />}
      <FloatingContactButtons />
    </div>
  );
}