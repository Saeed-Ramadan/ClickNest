import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Process = () => {
  const { t } = useTranslation();

  const steps = [
    { number: '01', title: t('process.step1.title'), desc: t('process.step1.desc') },
    { number: '02', title: t('process.step2.title'), desc: t('process.step2.desc') },
    { number: '03', title: t('process.step3.title'), desc: t('process.step3.desc') },
    { number: '04', title: t('process.step4.title'), desc: t('process.step4.desc') },
  ];

  return (
    <section id="process" className="py-24 bg-surface-main border-y border-border-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-text-main"
          >
            {t('sections.process')}
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/5 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-alt p-8 rounded-4xl border border-border-main hover:border-primary-orange/30 transition-all group relative z-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-orange text-white flex items-center justify-center text-2xl font-black mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-primary-orange/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-extrabold mb-4 group-hover:text-primary-orange transition-colors text-text-main">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
