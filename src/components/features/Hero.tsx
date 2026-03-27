import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1 mb-6 rounded-full glass text-sm font-medium text-primary-orange border border-primary-orange/20">
            {t('sections.results')} 📈
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight text-text-main tracking-tight">
            {t('hero.headline')}
            <span className="block text-primary-orange">{t('hero.headlineAccent')}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-10 leading-relaxed">
            {t('hero.subtext')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/#contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium px-10 py-5 bg-primary-orange text-white rounded-full font-bold text-xl shadow-xl shadow-primary-orange/30 hover:bg-orange-600 transition-all w-full relative"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
              </motion.button>
            </Link>
            <Link to="/work" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium px-10 py-5 glass bg-white/50 dark:bg-white/10 text-text-main rounded-full font-bold text-xl border border-slate-200 dark:border-white/20 hover:bg-white/80 dark:hover:bg-white/20 transition-all w-full shadow-lg dark:shadow-none"
              >
                {t('hero.secondaryCta')}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements (Decorative) - Moved behind text using z-0 */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 left-[10%] w-24 h-24 glass rounded-2xl hidden lg:block border border-white/5 opacity-50"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [-12, -15, -12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-[10%] w-32 h-32 glass rounded-full hidden lg:block border border-white/5 opacity-50"
          />
          
          {/* Logo-inspired Shapes: House/Cursor Motif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1, rotate: -15 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-[20%] left-[5%] hidden xl:block"
          >
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-orange">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1, rotate: 15 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            className="absolute bottom-[30%] right-[5%] hidden xl:block"
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500">
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
