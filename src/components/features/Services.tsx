import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Layers, 
  Users, 
  PieChart, 
  Palette, 
  PenTool 
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: <Target className="text-blue-500" />, title: t('services.mediaBuying') },
    { icon: <Layers className="text-primary-orange" />, title: t('services.funnel') },
    { icon: <Users className="text-blue-400" />, title: t('services.targeting') },
    { icon: <PieChart className="text-primary-orange" />, title: t('services.analytics') },
    { icon: <Palette className="text-blue-600" />, title: t('services.creative') },
    { icon: <PenTool className="text-primary-orange" />, title: t('services.copywriting') },
  ];

  return (
    <section id="services" className="py-24 bg-surface-main border-y border-border-main relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100">
        <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-primary-orange/20 rounded-full blur-[128px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-text-main"
          >
            {t('sections.services')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-4xl bg-surface-card border border-border-main hover:border-primary-orange/30 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="mb-6 p-4 bg-surface-alt rounded-2xl w-fit shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-main">{service.title}</h3>
              <div className="w-12 h-1 bg-linear-to-r from-primary-orange to-transparent rounded-full mb-6" />
              <Link to="/work" className="text-primary-orange text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                {t('hero.secondaryCta')} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
