import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/useAppStore';
import { Sun, Moon, Languages, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { theme, language, toggleTheme, setLanguage, isMobileMenuOpen, toggleMobileMenu } = useAppStore();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.work'), href: '/work' },
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.pricing'), href: '/#pricing' },
  ];

  const isHome = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-3">
            <img src="/logo.png" alt="ClickNest Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium hover:text-primary-orange transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              title="Toggle Language"
            >
              <Languages size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="/#contact" className="btn-premium px-6 py-2 bg-primary-orange text-white rounded-full font-semibold shadow-lg shadow-primary-orange/20 hover:bg-orange-600 transition-all transform hover:scale-105 whitespace-nowrap">
              {t('nav.getStarted')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => toggleMobileMenu()}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => toggleMobileMenu(false)}
                  className="block px-3 py-4 text-base font-medium border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 px-3">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="flex items-center gap-2 text-sm"
                >
                  <Languages size={18} />
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
                <Link to="/#contact" className="px-6 py-2 bg-primary-orange text-white rounded-lg font-semibold">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
