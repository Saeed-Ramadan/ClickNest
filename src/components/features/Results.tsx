import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Results = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const cases = [
    {
      title: t('results.case1'),
      result: '340%',
      type: t('results.roiIncrease'),
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: t('results.case2'),
      result: '200%',
      type: t('results.leadGen'),
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: t('results.case3'),
      result: '150k',
      type: t('results.newUsers'),
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="results" className="py-24 bg-surface-main relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-text-main"
          >
            {t('results.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-4xl bg-surface-card h-120 border border-border-main shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-right rtl:text-right ltr:text-left translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-5xl font-black text-primary-orange mb-2 drop-shadow-lg">
                  {item.result}
                </div>
                <div className="text-sm uppercase font-bold tracking-widest text-white/80 mb-4">
                  {item.type}
                </div>
                <h3 className="text-2xl font-bold text-white mb-8 leading-tight">{item.title}</h3>
                
                <Link to="/work" className="inline-flex items-center gap-2 group/btn mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-sm font-bold text-white uppercase tracking-widest border-b-2 border-primary-orange/50 group-hover/btn:border-primary-orange transition-all py-1">
                    {t('hero.secondaryCta')}
                  </span>
                  <motion.span
                    animate={{ x: language === 'ar' ? [-5, 5] : [5, -5] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    className="text-primary-orange text-xl"
                  >
                    {language === 'ar' ? '←' : '→'}
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
