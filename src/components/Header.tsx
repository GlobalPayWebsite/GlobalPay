"use client"; // This line marks the component as a Client Component

/* eslint-disable @next/next/no-img-element */
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname(); // This hook replaces useRouter for getting the current path

  // Function to check if the current path matches the link path
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/#home">
          <img src="/assets/logo.png" alt="Global Pay" width="30" height="30" />
          <span style={{ display: "inline-block", marginLeft: 8, fontWeight: "bold" }}>Global Pay</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <a className="navbar-brand" href="#">
                <img src="/assets/logo.png" alt="Global Pay" width="30" height="30" />
              </a>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <a className={`nav-link ${isActive('/') ? 'active' : ''}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${isActive('/about-us') ? 'active' : ''}`} href="/about-us">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${pathname.includes('/services') ? 'active' : ''}`} href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/services/recruitment">Recruitment</a></li>
                  <li><a className="dropdown-item" href="/services/others">Other Services</a></li>
                </ul>
              </li>
              {/* Uncomment when needed
              <li className="nav-item">
                <a className={`nav-link ${isActive('/why-us') ? 'active' : ''}`} href="/why-us">Why Us</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${isActive('/team') ? 'active' : ''}`} href="/team">Team</a>
              </li> */}
              <li className="nav-item">
                <a className={`nav-link ${isActive('/contact') ? 'active' : ''}`} href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
