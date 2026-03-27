import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from './store/useAppStore';
import Navbar from './components/layout/Navbar';
import Footer from './components/features/Footer';
import Preloader from './components/common/Preloader';
import { AnimatePresence, motion } from 'framer-motion';
import '@/i18n/config';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top/hash component
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, language } = useAppStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Sync theme
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // Sync language and direction
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [theme, language, i18n]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      <ScrollHandler />
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white dark:bg-background-dark">
          <div className="w-12 h-12 border-4 border-primary-orange border-t-transparent rounded-full animate-spin" />
        </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/privacy" element={<LegalPage type="privacy" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.main>
      
      {!isLoading && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
