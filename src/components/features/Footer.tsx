import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Send, Mail, Globe, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-surface-main border-t border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="ClickNest Logo" className="h-30 w-auto" />

            </div>
            <p className="text-text-muted leading-relaxed uppercase tracking-widest text-[10px] mb-8">
              Accelerating your digital growth through data and precision.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, Phone, Send].map((Icon, i) => (
                <a key={i} href="#" className="p-3 glass rounded-full hover:bg-primary-orange transition-all text-text-main">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-text-main">{t('footer.links')}</h4>
            <ul className="space-y-4 text-text-muted">
              <li><Link to="/#process" className="hover:text-primary-orange transition-colors">{t('footer.linkStrategy')}</Link></li>
              <li><Link to="/work" className="hover:text-primary-orange transition-colors">{t('footer.linkCaseStudies')}</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-orange transition-colors">{t('footer.linkPrivacy')}</Link></li>
              <li><Link to="/terms" className="hover:text-primary-orange transition-colors">{t('footer.linkTerms')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-text-main">{t('footer.newsletter')}</h4>
            <div className="flex gap-2">
              <input
                placeholder="email@example.com"
                className="grow bg-surface-alt border border-border-main rounded-full px-6 py-4 focus:outline-none focus:border-primary-orange text-text-main"
              />
              <button className="p-4 bg-primary-orange text-white rounded-full hover:bg-orange-600 transition-all">
                <Send size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-muted/50 text-sm order-2 md:order-1">
            © {new Date().getFullYear()} ClickNest. {t('footer.rights')}
          </div>
          
          <div className="order-1 md:order-2">
            <a 
              href="https://www.facebook.com/profile.php?id=61588661400997" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center md:items-end gap-1"
            >
              <span className="text-[10px] text-text-muted/40 uppercase tracking-[0.2em] mb-1">
                {t('footer.developedBy')}
              </span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-300">
                <div className="flex flex-col items-end leading-none">
                  <span className="text-blue-500 font-bold text-lg tracking-tight">TechCore</span>
                </div>
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
                    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
