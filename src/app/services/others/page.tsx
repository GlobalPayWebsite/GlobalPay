/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <Header />
            {/* Spacing... */}
            <div style={{ width: "100%", height: "60px" }}></div>

            <div id="real-estate">
                <div className="container">
                    <div className="section">
                        <h3 className="section__title">Real Estate Consultant</h3>
                        <div className="section__subtitle">Our team is dedicated to helping you find the perfect rental property in Japan.</div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-regular fa-building"></i> {/* Comprehensive Rental Assistance */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Comprehensive Rental Assistance:</h6>
                                        <p className='text-secondary'>We provide end-to-end support in finding the perfect rental apartment in Japan. Whether it is a cozy studio in Tokyo or a spacious family home in Osaka, our team is here to help every step of the way.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-file-contract"></i> {/* Lease Negotiation */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Lease Negotiation and Paperwork Assistance:</h6>
                                        <p className='text-secondary'>We handle the paperwork, ensuring all documents are completed correctly, and assist with lease negotiations to secure the best deal for our clients.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-key"></i> {/* Move-In Assistance */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Move-In Assistance:</h6>
                                        <p className='text-secondary'>Our services don&apos;t stop when the lease is signed. We also provide move-in support, helping you settle into your new home with ease, from arranging utilities to offering guidance on the local area.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
