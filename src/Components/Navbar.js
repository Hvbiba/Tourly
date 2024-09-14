import React from 'react';
import Logo from './Logo';
import Icons from './Media';

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg lg bg-light fixed-top">
      <div className="container-fluid">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About-section">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#package-section">
                PACKAGES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery-section">
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us ">
                CONTACT US
              </a>
            </li>  
          </ul>
          <Icons />
        </div>
      </div>
    </nav>
  );
};

