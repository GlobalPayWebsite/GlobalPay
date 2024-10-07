/* eslint-disable @next/next/no-img-element */
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <Header />
            {/* Spacing... */}
            <div style={{ width: "100%", height: "60px" }}></div>


            <AboutUs />

            <Footer />
        </>
    );
}
