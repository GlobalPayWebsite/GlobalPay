/* eslint-disable @next/next/no-img-element */
const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="container">
        <div className="section">
          <h3 className="section__title">About Us</h3>
          <p className="section__subtitle">We provide expert consulting services in Recruitment, SSW visas, Real Estate, Education, and Travel, ensuring personalized support and guidance for all our clients.</p>

          <div className="row align-items-center">
            <div className="col-md-12 col-xl-6 splash">
              <img src="assets/cover.jpg" alt="Cover" width="100%" className="img-thumbnail" />
            </div>
            <div className="col-md-12 col-xl-6 ">
              <div className="row about__container">
                <div className="col-6">
                  <div className="about__item">
                    <div className="icon">
                      <img src="/resource/icons/human-resources-svgrepo-com.svg" alt="Recruitment" width="32px" height="32px" />
                    </div>
                    <h5 className="text-primary">Recruitment</h5>
                    <p>Helping individuals secure jobs under the SSW program and beyond.</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="about__item">
                    <div className="icon">
                      <img src="/resource/icons/human-resources-svgrepo-com.svg" alt="SSW" width="32px" height="32px" />
                    </div>
                    <h5 className="text-primary">SSW</h5>
                    <p>Assisting with the SSW visa process to work in Japan.</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="about__item">
                    <div className="icon">
                      <img src="/resource/icons/human-resources-svgrepo-com.svg" alt="Real Estate" width="32px" height="32px" />
                    </div>
                    <h5 className="text-primary">Real Estate</h5>
                    <p>Providing rental assistance with multilingual support in Japan.</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="about__item">
                    <div className="icon">
                      <img src="/resource/icons/human-resources-svgrepo-com.svg" alt="Education" width="32px" height="32px" />
                    </div>
                    <h5 className="text-primary">Education</h5>
                    <p>Guiding students for abroad study to the USA, Australia, and Canada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
