/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <a className="navbar-brand mb-2 d-inline-block" href="/#home">
              <img src="/assets/logo.png" alt="Global Pay" width="40" height="40" />
              <span style={{ display: "inline-block", marginLeft: 8, fontSize: 22, fontWeight: "bold" }}>Global Pay</span>
            </a>

            <em className="d-block pb-2">1-chōme-20-17 Hyakuninchō, <br />Shinjuku City, Tokyo 169-0073</em>

            <p>
              <strong>Mobile: </strong> 03-6687-7736<br />
              <strong>Email: </strong>info@globalpay.co.jp<br />
            </p>

            <div>
              <a className="social-link" href="https://www.facebook.com" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a className="social-link" href="https://www.facebook.com" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a className="social-link" href="https://www.facebook.com" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 footer__useful-links">
            <h5>Useful Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About us</a></li>
              <li><a href="/services/recruitment">Recruitment Service</a></li>
              <li><a href="/services/others">Other Service</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-lg-4 footer__useful-links">
            <h5>Our Services</h5>
            <ul>
              <li><a href="/services/recruitment">Recruitment</a></li>
              <li><a href="/services/recruitment">SSW</a></li>
              <li><a href="/services/others">Real Estate Consultant</a></li>
              <li><a href="/services/others">Educational Consultant</a></li>
              <li><a href="/services/others">Travel Consultant</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Global Pay. All Rights Reserved.</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
