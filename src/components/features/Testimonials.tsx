import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: t('testimonials.client1.name'),
      role: t('testimonials.client1.role'),
      quote: t('testimonials.client1.quote'),
    },
    {
      name: t('testimonials.client2.name'),
      role: t('testimonials.client2.role'),
      quote: t('testimonials.client2.quote'),
    },
    {
      name: t('testimonials.client3.name'),
      role: t('testimonials.client3.role'),
      quote: t('testimonials.client3.quote'),
    },
  ];

  return (
    <section className="py-24 bg-surface-main border-y border-border-main relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-text-main"
          >
            {t('nav.results')} ⭐️
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-4xl bg-surface-card border border-border-main shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              <div className="flex gap-1 mb-6 text-primary-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg italic text-text-muted mb-8 font-medium">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary-orange to-blue-500" />
                <div>
                  <h4 className="font-bold text-text-main">{review.name}</h4>
                  <p className="text-sm text-text-muted/60">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
