/* eslint-disable @next/next/no-img-element */
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <Header />
            {/* Spacing... */}
            <div style={{ width: "100%", height: "60px" }}></div>


            <Contact />

            <Footer />
        </>
    );
}
