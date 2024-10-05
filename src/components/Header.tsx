// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Your Company Logo</div>
        <ul className="nav-links">
          <li><a href="#recruitment">Recruitment</a></li>
          <li><a href="#ssw">SSW</a></li>
          <li><a href="#real-estate">Real Estate</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#travel">Travel</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
