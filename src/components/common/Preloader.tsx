import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/useAppStore';

const Preloader = () => {
  const { t } = useTranslation();
  const { language, theme } = useAppStore();

  return (
    <motion.div 
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0B0F2A]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.1, 0.15, 0.1]
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className={`absolute top-[-10%] ${language === 'ar' ? 'left-[-10%]' : 'right-[-10%]'} w-[600px] h-[600px] bg-primary-orange rounded-full blur-[140px]`}
        />
        <motion.div
           animate={{ 
             scale: [1, 1.3, 1],
             opacity: [0.05, 0.1, 0.05]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className={`absolute bottom-[-10%] ${language === 'ar' ? 'right-[-10%]' : 'left-[-10%]'} w-[700px] h-[700px] bg-blue-600 rounded-full blur-[160px]`}
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Official Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12"
        >
          <div className="relative p-4">
             <img 
               src="/logo.png" 
               alt="ClickNest Logo" 
               className={`h-32 md:h-40 w-auto object-contain transition-all duration-500 ${theme === 'dark' ? 'brightness-110 contrast-125' : ''}`}
             />
             
             {/* Scanning Line Effect */}
             <motion.div 
               animate={{ top: ['0%', '100%', '0%'] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute left-0 w-full h-[2px] bg-linear-to-r from-transparent via-primary-orange to-transparent opacity-50 z-20"
             />
          </div>

          {/* Liquid Ripple Effect behind logo */}
          <motion.div
            animate={{ 
              scale: [1, 1.4, 1.8],
              opacity: [0.3, 0.1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 bg-primary-orange/20 rounded-full blur-2xl z-0"
          />
        </motion.div>

        {/* Status Section */}
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-primary-orange"
                />
              ))}
            </div>
            <span className="text-xs font-bold tracking-[0.4em] text-text-main uppercase">
              {t('loading')}
            </span>
          </motion.div>

          {/* Minimalist Progress Bar */}
          <div className="w-64 h-[2px] bg-slate-100 dark:bg-white/5 rounded-full relative overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-linear-to-r from-primary-orange to-blue-500 rounded-full"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[10px] font-mono text-text-muted/60 tracking-wider"
          >
            {language === 'ar' ? 'ClickNest Agency • التحول الرقمي' : 'ClickNest Agency • Digital Transformation'}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
