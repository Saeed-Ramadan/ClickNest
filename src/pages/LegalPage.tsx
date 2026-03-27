import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LegalPage = ({ type }: { type: 'privacy' | 'terms' }) => {
  const { t } = useTranslation();

  const sections = type === 'privacy' 
    ? [
        { title: t('legal.privacy.s1Title'), content: t('legal.privacy.s1Content') },
        { title: t('legal.privacy.s2Title'), content: t('legal.privacy.s2Content') },
        { title: t('legal.privacy.s3Title'), content: t('legal.privacy.s3Content') },
      ]
    : [
        { title: t('legal.terms.s1Title'), content: t('legal.terms.s1Content') },
        { title: t('legal.terms.s2Title'), content: t('legal.terms.s2Content') },
        { title: t('legal.terms.s3Title'), content: t('legal.terms.s3Content') },
      ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-12 rounded-[40px] border border-border-main"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-text-main">
            {type === 'privacy' ? t('legal.privacyTitle') : t('legal.termsTitle')}
          </h1>
          <p className="text-text-muted mb-6">
            {t('legal.lastUpdated')} {new Date().toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })}
          </p>
          <div className="prose prose-invert max-w-none text-text-muted leading-relaxed space-y-6">
            <p>{t('legal.content')}</p>
            
            {sections.map((section, index) => (
              <div key={index} className="pt-4">
                <h2 className="text-2xl font-bold text-text-main mb-4">{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
