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
          <div className="carousel-caption d-none d-md-block">
            <h1>First slide label</h1>
            <p>Some representative placeholder content for the first slide.Some representative placeholder content for the first slide. Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-container"><img src="/assets/cover.jpg" className="d-block w-100" style={{ height: 420, objectFit: "cover" }} alt="..." /></div>
          <div className="carousel-caption d-none d-md-block">
            <h1>Second slide label</h1>
            <p>Some representative placeholder content for the first slide.Some representative placeholder content for the first slide. Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-container"><img src="/assets/cover.jpg" className="d-block w-100" style={{ height: 420, objectFit: "cover" }} alt="..." /></div>
          <div className="carousel-caption d-none d-md-block">
            <h1>Third slide label</h1>
            <p>Some representative placeholder content for the first slide.Some representative placeholder content for the first slide. Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
