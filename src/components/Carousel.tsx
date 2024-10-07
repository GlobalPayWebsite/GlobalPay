/* eslint-disable @next/next/no-img-element */
const Carousel = () => {
  return (
    <div id="home" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#home" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#home" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#home" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="img-container"><img src="/assets/cover.jpg" className="d-block w-100" style={{ height: 420, objectFit: "cover" }} alt="..." /></div>
          <div className="carousel-caption d-md-block">
            <div className="container">
              <h1>Your Global <br />Partner</h1>
              <p>
                At Global Pay, we offer seamless solutions across recruitment, real estate, and educational consulting.
                Let us help you navigate your journey to success with tailored services for your needs.
              </p>
              <a className="btn btn-primary m-auto" href="/services">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-container"><img src="/assets/cover.jpg" className="d-block w-100" style={{ height: 420, objectFit: "cover" }} alt="..." /></div>
          <div className="carousel-caption d-md-block">
            <div className="container">
              <h1>Real Estate Solutions</h1>
              <p>
                Find your perfect home in Japan with our expert real estate consultancy. From cozy rentals to spacious family homes,
                we provide personalized, multilingual support to meet your needs.
              </p>
              <a className="btn btn-primary m-auto" href="/real-estate">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-container"><img src="/assets/cover.jpg" className="d-block w-100" style={{ height: 420, objectFit: "cover" }} alt="..." /></div>
          <div className="carousel-caption d-md-block">
            <div className="container">
              <h1>Abroad Education Guidance</h1>
              <p>
                We assist students in pursuing their academic dreams abroad, providing support from university selection to visa processing.
                Your future starts here.
              </p>
              <a className="btn btn-primary m-auto" href="/education-consulting">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  );
};

export default Carousel;
