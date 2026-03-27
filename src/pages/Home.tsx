import { useTranslation } from 'react-i18next';
import Hero from '../components/features/Hero';
import ServicesMarquee from '../components/features/ServicesMarquee';
import About from '../components/features/About';
import Services from '../components/features/Services';
import Results from '../components/features/Results';
import Testimonials from '../components/features/Testimonials';
import Process from '../components/features/Process';
import Pricing from '../components/features/Pricing';
import ContactForm from '../components/features/ContactForm';

const Home = () => {
  return (
    <main>
      <Hero />
      <ServicesMarquee />
      <About />
      <Services />
      <Results />
      <Testimonials />
      <Process />
      <Pricing />
      <ContactForm />
    </main>
  );
};

export default Home;
