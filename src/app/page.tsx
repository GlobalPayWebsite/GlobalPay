import AboutUs from '@/components/AboutUs';
import Carousel from '@/components/Carousel';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Team from '@/components/Team';
import WhyUs from '@/components/WhyUs';

export default function Home() {
  return (
    <>
      <Header />
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary rounded-2" tabIndex={0}>
        <main>
          <Carousel />
          <AboutUs />
          <Services />
          <WhyUs />
          <Team />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
