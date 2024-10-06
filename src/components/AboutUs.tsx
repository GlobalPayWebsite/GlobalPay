/* eslint-disable @next/next/no-img-element */
// components/AboutUs.tsx
const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="container">
        <div className="section">
          <h3 className="section__title">About Us</h3>
          <p className="section__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint minima modi tempora nihil voluptatem aperiam enim. Cum, quasi dolorem!</p>


          <div className="row align-items-center">
            <div className="col-6">
              <img src="assets/cover.jpg" alt="Cover" width="100%" className="img-thumbnail" />
            </div>
            <div className="col-6">
              <div className="row about__container">
                <div className="col-6">
                  <div className="about__item">
                    <div className="icon"><img src="/resource/icons/human-resources-svgrepo-com.svg" alt="Recruitment" width="32px" height="32px" /></div>
                    <h5 className="text-primary">Recruitment</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="about__item">
                    <div className="icon"><img src="/resource/icons/human-resources-svgrepo-com.svg" alt="Recruitment" width="32px" height="32px" /></div>
                    <h5 className="text-primary">SSW</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="about__item">
                    <div className="icon"><img src="/resource/icons/human-resources-svgrepo-com.svg" alt="Recruitment" width="32px" height="32px" /></div>
                    <h5 className="text-primary">Real Estate Consultant</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="about__item">
                    <div className="icon"><img src="/resource/icons/human-resources-svgrepo-com.svg" alt="Recruitment" width="32px" height="32px" /></div>
                    <h5 className="text-primary">Educational Consultant</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>
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
