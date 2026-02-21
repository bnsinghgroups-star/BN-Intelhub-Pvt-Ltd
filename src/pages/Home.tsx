import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Courses from '../components/Courses';
import Internships from '../components/Internships';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-slate-50">
         <Stats />
      </div>
      <WhyChooseUs />
      <Courses />
      <Internships />
      <Services />
      <div className="bg-slate-50">
         <Testimonials />
      </div>
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
