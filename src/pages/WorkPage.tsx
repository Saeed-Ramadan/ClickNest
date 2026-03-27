import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

const WorkPage = () => {
  const { t } = useTranslation();

  const cases = [
    {
      id: 'ecommerce',
      title: t('results.case1'),
      result: '340%',
      type: t('results.roiIncrease'),
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      description: "Complete digital transformation for a leading e-commerce brand, focusing on funnel optimization and precision media buying.",
      strategy: "Implemented a multi-stage retargeting funnel with dynamic creative optimization.",
      impact: "Tripled monthly revenue within 6 months while reducing CAC by 40%."
    },
    {
      id: 'saas',
      title: t('results.case2'),
      result: '200%',
      type: t('results.leadGen'),
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      description: "Scaling high-quality lead generation for a Series B SaaS startup in the fintech space.",
      strategy: "ABM (Account Based Marketing) campaigns targeting C-suite executives via LinkedIn.",
      impact: "Generated 500+ SQLs in one quarter with a 25% demo-to-close rate."
    },
    {
      id: 'b2b',
      title: t('results.case3'),
      result: '150k',
      type: t('results.newUsers'),
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
      description: "Aggressive market expansion strategy for a B2B logistics platform entering the MENA region.",
      strategy: "Localized content strategy paired with strategic partnerships and performance PR.",
      impact: "Achieved 150,000 active users in the first year of regional operations."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-text-main"
          >
            {t('workPage.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-3xl mx-auto"
          >
            {t('workPage.subtitle')}
          </motion.p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-32">
          {cases.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="relative overflow-hidden rounded-[40px] glass p-2 border border-border-main">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full aspect-video object-cover rounded-4xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-8 right-8 bg-primary-orange text-white px-6 py-2 rounded-full font-bold shadow-xl">
                    {project.result} {project.type}
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary-orange/20 rounded-full blur-3xl" />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8 text-right rtl:text-right ltr:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-text-main">
                  {project.title}
                </h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  <div className="glass p-6 rounded-3xl border border-border-main group hover:border-primary-orange/30 transition-all">
                    <h4 className="flex items-center gap-3 font-bold text-primary-orange mb-3">
                      <CheckCircle2 size={20} />
                      {t('workPage.cases.strategy')}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {project.strategy}
                    </p>
                  </div>
                  <div className="glass p-6 rounded-3xl border border-white/5 group hover:border-blue-500/30 transition-all">
                    <h4 className="flex items-center gap-3 font-bold text-blue-500 mb-3">
                      <ExternalLink size={20} />
                      {t('workPage.cases.impact')}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link to="/#contact">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary-orange font-bold text-lg group"
                    >
                      {t('workPage.cta')}
                      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-12 md:p-20 glass rounded-[60px] border border-border-main text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-main">
              {t('contact.title')}
            </h2>
            <Link to="/#contact">
              <button className="px-12 py-5 bg-primary-orange text-white rounded-full font-bold text-xl shadow-2xl shadow-primary-orange/20 hover:bg-orange-600 transition-all">
                {t('nav.getStarted')}
              </button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPage;
