import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  Target, 
  Rocket, 
  Zap, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

const ServicesMarquee = () => {
  const { t } = useTranslation();
  
  const services = [
    { name: t('services.mediaBuying'), icon: Rocket },
    { name: t('services.funnel'), icon: Zap },
    { name: t('services.targeting'), icon: Target },
    { name: t('services.analytics'), icon: BarChart3 },
    { name: t('services.creative'), icon: Sparkles },
    { name: t('services.copywriting'), icon: ShieldCheck },
  ];

  // Triple the array to ensure no gaps during animation
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="py-12 bg-surface-main border-y border-border-main overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-surface-main to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-surface-main to-transparent z-10" />
      
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedServices.map((service, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 group"
          >
            <div className="p-3 rounded-xl bg-primary-orange/10 text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all duration-300">
              <service.icon size={20} />
            </div>
            <span className="text-xl md:text-2xl font-bold text-text-main/80 group-hover:text-primary-orange transition-colors tracking-tight">
              {service.name}
            </span>
            <div className="mx-6 w-2 h-2 rounded-full bg-border-main" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesMarquee;
