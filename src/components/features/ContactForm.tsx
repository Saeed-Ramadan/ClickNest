import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const { t, i18n } = useTranslation();

  // // RATIONALE: Schema defined inside hook to access t() for localized error messages
  const contactSchema = z.object({
    name: z.string().min(2, t('contact.validation.nameMin')),
    email: z.string().email(t('contact.validation.email')),
    message: z.string().min(10, t('contact.validation.messageMin')),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // // RATIONALE: Simulating API call for form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data); // Just for demo
    reset();
    alert(t('contact.success'));
  };

  return (
    <section id="contact" className="py-24 bg-surface-main border-t border-border-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-text-main"
            >
              {t('contact.title')}
            </motion.h2>
            <p className="text-text-muted mb-10 text-lg">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl group-hover:bg-primary-orange group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-muted/60 text-sm">{t('contact.placeholderEmail')}</h4>
                  <p className="text-xl font-medium text-text-main">hello@clicknest.digital</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 glass rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-muted/60 text-sm">{t('contact.phoneLabel')}</h4>
                  <p className="text-xl font-medium text-text-main" dir="ltr">+971 50 123 4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: i18n.language === 'ar' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-surface-card p-10 rounded-4xl border border-border-main shadow-2xl relative z-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <input
                  {...register('name')}
                  placeholder={t('contact.placeholderName')}
                  className={`w-full px-6 py-4 rounded-2xl bg-surface-input border ${errors.name ? 'border-red-500' : 'border-border-main'} text-text-main focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all outline-none`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('email')}
                  placeholder={t('contact.placeholderEmail')}
                  className={`w-full px-6 py-4 rounded-2xl bg-surface-input border ${errors.email ? 'border-red-500' : 'border-border-main'} text-text-main focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all outline-none`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder={t('contact.placeholderMessage')}
                  className="w-full px-6 py-4 rounded-2xl bg-surface-input border border-border-main text-text-main focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all outline-none"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium w-full bg-primary-orange text-white py-4 rounded-full font-bold text-xl shadow-lg shadow-primary-orange/30 flex items-center justify-center gap-2 hover:bg-orange-600 transition-all disabled:opacity-50"
              >
                {isSubmitting ? t('contact.sending') : t('contact.submit')}
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
