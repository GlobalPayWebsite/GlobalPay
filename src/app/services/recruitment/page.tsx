/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <Header />
            {/* Spacing... */}
            <div style={{ width: "100%", height: "60px" }}></div>

            <div className="page__header">
                <div className="container">
                    <h1>Our Services</h1>
                    <div className="breadcrumb">
                        <h6><a href="/">Home</a><span>/</span><a href="/services/recruitment">Services</a> <span>/</span><a href="/services/recruitment">Recruitment</a></h6>
                    </div>
                </div>
            </div>

            <div id="recruitment">
                <div className="container">
                    <div className="section">
                        <h3 className="section__title">Recruitment</h3>
                        <div className="section__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure maxime ab iste. Numquam molestiae sit atque tempora eius error excepturi sunt neque eum itaque!</div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-briefcase"></i> {/* Job Placement Assistance */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Job Placement Assistance:</h6>
                                        <p className='text-secondary'>We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-graduation-cap"></i> {/* Support for Nepali Graduates */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Support for Nepali Graduates:</h6>
                                        <p className='text-secondary'>We are dedicated to assisting Nepali individuals holding a bachelor’s degree who aspire to work in Japan. Our services include job placement, visa application guidance, and cultural orientation to help them transition smoothly.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-user-tie"></i> {/* Personalized Career Counseling */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Personalized Career Counseling:</h6>
                                        <p className='text-secondary'>Our experienced counselors offer personalized career advice and support, helping candidates understand the job market, refine their resumes, and prepare for interviews to increase their chances of success.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-regular fa-handshake"></i> {/* Employer Partnerships */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Employer Partnerships:</h6>
                                        <p className='text-secondary'>We have established strong partnerships with a wide range of employers across various industries in Japan. This network allows us to provide our candidates with exclusive job opportunities and a better chance of finding the right fit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="ssw">
                <div className="container">
                    <div className="section">
                        <h3 className="section__title">SSW</h3>
                        <div className="section__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure maxime ab iste. Numquam molestiae sit atque tempora eius error excepturi sunt neque eum itaque!</div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-passport"></i> {/* Comprehensive Support for SSW */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Comprehensive Support for SSW (i) and SSW (ii):</h6>
                                        <p className='text-secondary'>We assist foreign nationals in obtaining both SSW (i) and SSW (ii) visas, ensuring they meet all requirements and pass necessary exams.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-industry"></i> {/* Industry-Specific Expertise */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Industry-Specific Expertise:</h6>
                                        <p className='text-secondary'>Our company specializes in placing workers in the 14 designated industries for SSW (i) and the advanced sectors for SSW (ii), such as construction, shipbuilding, and nursing care.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-clipboard-check"></i> {/* End-to-End Recruitment */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>End-to-End Recruitment Services:</h6>
                                        <p className='text-secondary'>From initial application to job placement, we provide full support, including language training, skill assessments, and cultural orientation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="service-card">
                                    <div className="service-img">
                                        <img src="/resource/cover.jpg" alt="Business Planning" width="100%" />
                                    </div>

                                    <div className="service-icon">
                                        <i className="fa-solid fa-home"></i> {/* Family Support for SSW (ii) */}
                                    </div>

                                    <div className="service-body">
                                        <h6 className='text-primary'>Family Support for SSW (ii) Holders:</h6>
                                        <p className='text-secondary'>For SSW (ii) visa holders, we offer assistance with family relocation and integration, ensuring a smooth transition to life in Japan.</p>
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
