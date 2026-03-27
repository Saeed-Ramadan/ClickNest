import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-surface-main">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[150px] md:text-[200px] font-black leading-none text-primary-orange/20 select-none">
            404
          </h1>
          <div className="mt-[-60px] md:mt-[-80px]">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main">
              {t('error.notFound')}
            </h2>
            <p className="text-text-muted text-lg max-w-md mx-auto mb-10">
              {t('error.message')}
            </p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium px-10 py-4 bg-primary-orange text-white rounded-full font-bold text-xl shadow-xl shadow-primary-orange/30 flex items-center gap-3 mx-auto"
              >
                <Home size={24} />
                {t('error.backHome')}
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-32 h-32 glass rounded-3xl border border-border-main hidden md:block"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-0 -right-20 w-40 h-40 glass rounded-full border border-border-main hidden md:block"
        />
      </div>
    </main>
  );
};

export default NotFound;
