/* eslint-disable @next/next/no-img-element */
const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <div className="section">
          <h3 className="section__title">Our Services</h3>
          <p className="section__subtitle">We provide a range of expert services tailored to support your career and life abroad, including job placements, SSW visa assistance, and much more.</p>

          <div className="row service-container">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div>
                      <h5 className="text-primary">Job Placement Assistance</h5>
                      <p>Helping individuals find the right job opportunities under the SSW program.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-user-graduate"></i>
                    </div>
                    <div>
                      <h5 className="text-primary">Support for Nepali Graduates</h5>
                      <p>Dedicated services for Nepali graduates seeking global career paths.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-chalkboard-teacher"></i>
                    </div>
                    <div>
                      <h5 className="text-primary">Personalized Career Counseling</h5>
                      <p>One-on-one career guidance tailored to your goals and needs.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-handshake"></i>
                    </div>
                    <div>
                      <h5 className="text-primary">Employer Partnerships</h5>
                      <p>We partner with employers to match candidates with suitable roles.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-passport"></i>
                    </div>
                    <div>
                      <h5 className="text-primary">Comprehensive Support for SSW (i) and SSW (ii)</h5>
                      <p>Assistance for those pursuing SSW visas and the transition process.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-industry"></i>
                    </div>
                    <div>
                      <h5 className="text-primary">Industry-Specific Expertise</h5>
                      <p>Expert guidance in various industries, matching you with relevant roles.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div>
                      <h5 className="text-primary">End-to-End Recruitment Services</h5>
                      <p>Full recruitment services to simplify the hiring and onboarding process.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="icon">
                      <i className="fa-solid fa-home"></i>
                    </div>
                    <div>
                      <h5 className="text-primary">Family Support for SSW (ii) Holders</h5>
                      <p>Comprehensive support for families of SSW holders moving abroad.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex mt-4">
            <a className="btn btn-primary m-auto" href="/services">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
