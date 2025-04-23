import React from 'react';
import logo from '../assets/images/SMBF_Logo.png';


const Header: React.FC = () => {
  return (
    <nav
  className="navbar navbar-expand-lg navbar-dark"
  style={{ backgroundColor: '#eaecf0' }}
>
      <div className="container">
      <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">Our Vision</a> 
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">Member Benefits</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">International Trades</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">Support us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">Events</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-dark" href="#">Login</a>
  </li>
  <button className="btn btn-primary ms-3 text-bold" style={{ backgroundColor: '#256ac9' }}>Sign up</button>
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;
