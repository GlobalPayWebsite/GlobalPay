// components/Services.tsx
const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <div className="section">
          <h3 className="section__title">Our Services</h3>
          <p className="section__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint minima modi tempora nihil voluptatem aperiam enim. Cum, quasi dolorem!</p>


          <div className="row service-container">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src="assets/cover.jpg" alt="Cover" width="150px" height="150px" />
                    </div>
                    <div>
                      <h4 className="text-primary">Job Placement Assistance</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src="assets/cover.jpg" alt="Cover" width="150px" height="150px" />
                    </div>
                    <div>
                      <h4 className="text-primary">Support for Nepali Graduates</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src="assets/cover.jpg" alt="Cover" width="150px" height="150px" />
                    </div>
                    <div>
                      <h4 className="text-primary">Personalized Career Counseling</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src="assets/cover.jpg" alt="Cover" width="150px" height="150px" />
                    </div>
                    <div>
                      <h4 className="text-primary">Employer Partnerships</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src="assets/cover.jpg" alt="Cover" width="150px" height="150px" />
                    </div>
                    <div>
                      <h4 className="text-primary">Comprehensive Support for SSW (i) and SSW (ii)</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src="assets/cover.jpg" alt="Cover" width="150px" height="150px" />
                    </div>
                    <div>
                      <h4 className="text-primary">Industry-Specific Expertise</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src="assets/cover.jpg" alt="Cover" width="150px" height="150px" />
                    </div>
                    <div>
                      <h4 className="text-primary">End-to-End Recruitment Services</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="service-item">
                    <div className="service-img">
                      <img src="assets/cover.jpg" alt="Cover" width="150px" height="150px" />
                    </div>
                    <div>
                      <h4 className="text-primary">Family Support for SSW (ii) Holders:</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
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
