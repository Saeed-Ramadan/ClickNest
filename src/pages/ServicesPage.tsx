import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Services from '../components/features/Services';
import ContactForm from '../components/features/ContactForm';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-text-main"
        >
          {t('servicesPage.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto text-xl text-text-muted"
        >
          {t('servicesPage.subtitle')}
        </motion.p>
      </div>
      
      <Services />
      
      <div className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-main">{t('servicesPage.cta')}</h2>
            <button className="px-10 py-4 bg-primary-orange text-white rounded-full font-bold text-xl hover:bg-orange-600 transition-all">
                {t('hero.cta')}
            </button>
        </div>
      </div>
      
      <ContactForm />
    </div>
  );
};

export default ServicesPage;
