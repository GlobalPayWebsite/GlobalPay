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
      <div style={{ width: "100%", height: "60px" }}></div>
      <main>
        <Carousel />
        <AboutUs />
        <Services />
        <WhyUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
