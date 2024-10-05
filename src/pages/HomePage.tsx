// pages/index.tsx
import Header from '@/components/Header';
import RecruitmentSection from '@/components/RecruitmentSection';
import Section from '@/components/Section';
import SSWSection from '@/components/SSWSection';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <RecruitmentSection />

        <SSWSection/>

        <Section
          id="real-estate"
          title="Real Estate Consulting"
          content={[
            "Comprehensive Rental Assistance: We provide support in finding the perfect rental apartment in Japan.",
            "Multilingual Support: Our team speaks English, Japanese, Nepali, and more to help clients rent smoothly.",
            "Expert Knowledge of Japanese Market: We provide insights into navigating rental complexities in Japan."
          ]}
        />

        <Section
          id="education"
          title="Educational Consulting"
          content={[
            "Personalized Guidance: We support students from Japan to study in the USA, Australia, or Canada.",
            "Comprehensive Services: From university selection to visa support, we offer complete assistance for academic success."
          ]}
        />

        <Section
          id="travel"
          title="Travel Consulting"
          content={[
            "Competitive Airline Tickets: We sell tickets from Japan to any country, offering exclusive travel deals and best value."
          ]}
        />
      </main>
    </>
  );
};

export default HomePage;
