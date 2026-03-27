import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, TrendingUp, BarChart3 } from 'lucide-react';
import CountUp from '../common/CountUp';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Database className="text-primary-orange" size={32} />,
      title: t('about.features.data.title'),
      desc: t('about.features.data.desc'),
    },
    {
      icon: <TrendingUp className="text-blue-500" size={32} />,
      title: t('about.features.roi.title'),
      desc: t('about.features.roi.desc'),
    },
    {
      icon: <BarChart3 className="text-primary-orange" size={32} />,
      title: t('about.features.growth.title'),
      desc: t('about.features.growth.desc'),
    },
  ];

  const stats = [
    { value: 33, suffix: '+', label: t('about.stats.projects') },
    { value: 11, suffix: 'x', label: t('about.stats.roi') },
    { value: 22, suffix: '%', label: t('about.stats.growth') },
    { value: 112, suffix: '+', label: t('about.stats.campaigns') },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-text-main"
          >
            {t('sections.about')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-text-muted mb-8"
          >
            {t('about.description')}
          </motion.p>
          <Link to="/#contact">
            <button className="px-8 py-3 bg-primary-orange text-white rounded-full font-bold hover:bg-orange-600 transition-all">
                {t('hero.cta')}
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-card p-8 rounded-3xl hover:border-primary-orange/30 transition-all group"
            >
              <div className="mb-6 p-4 bg-surface-alt rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-main">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4"
          >
            {t('about.subtitle')}
          </motion.p>

        <div className="bg-surface-alt rounded-[40px] p-8 md:p-12 border border-border-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className={index !== stats.length - 1 ? "md:border-r border-border-main rtl:md:border-r-0 rtl:md:border-l" : ""}>
                <div className="text-4xl md:text-5xl font-bold text-primary-orange mb-2">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm uppercase tracking-widest text-text-muted/50 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
