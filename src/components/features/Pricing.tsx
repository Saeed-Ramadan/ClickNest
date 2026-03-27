import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('pricing.starter'),
      price: '$999',
      features: [t('pricing.features.strategy'), t('pricing.features.ads')],
      popular: false,
    },
    {
      name: t('pricing.professional'),
      price: '$2,499',
      features: [t('pricing.features.strategy'), t('pricing.features.ads'), t('pricing.features.report'), t('pricing.features.custom')],
      popular: true,
    },
    {
      name: t('pricing.enterprise'),
      price: 'Custom',
      features: [t('pricing.features.strategy'), t('pricing.features.ads'), t('pricing.features.report'), t('pricing.features.custom'), t('pricing.features.priority')],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-surface-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-text-main"
          >
            {t('pricing.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-4xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-surface-card border-primary-orange shadow-2xl shadow-primary-orange/20 scale-105 z-10' 
                  : 'bg-surface-alt border-border-main shadow-xl'
              } flex flex-col`}
            >
              {plan.popular && (
                <span className="bg-primary-orange text-white text-xs font-bold uppercase px-3 py-1 rounded-full w-fit mb-6">
                  {t('pricing.popular')}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4 text-text-main">{plan.name}</h3>
              <div className="mb-8 text-text-main">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-text-muted ml-2">{t('pricing.perMonth')}</span>}
              </div>
              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted">
                    <Check size={18} className="text-primary-orange" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/#contact">
                <button
                  className={`w-full py-4 rounded-full font-bold transition-all ${
                    plan.popular 
                      ? 'bg-primary-orange text-white hover:bg-orange-600 shadow-lg shadow-primary-orange/20' 
                      : 'bg-surface-alt text-text-main hover:bg-surface-card border border-border-main'
                  }`}
                >
                  {t('pricing.cta')}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
