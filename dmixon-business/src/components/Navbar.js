import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div>
      <section className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-title">Haven Therapy & Consulting</h1>
          <nav>
            <div className="navbar-links">
              <div className="spacer"></div>
              <NavLink
                to="/"
                exact
                className={`welcome-link ${activeLink === '/' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('/')}
              >
                Welcome
              </NavLink>
              <NavLink
                to="/about"
                className={`nav-link ${activeLink === '/about' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('/about')}
              >
                About Danielle
              </NavLink>
              <div
                className="nav-link-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/individuals"
                  className={`nav-link ${activeLink === '/individuals' ? 'active-link' : ''}`}
                  onClick={() => handleLinkClick('/individuals')}
                >
                  Services
                </NavLink>
                {dropdownVisible && (
                  <ul className="dropdown">
                    <li className="dropdown-item">
                      <NavLink
                        to="/individuals/service1"
                        className={`dropdown-link ${activeLink === '/individuals/service1' ? 'active-link' : ''}`}
                        onClick={() => handleLinkClick('/individuals/service1')}
                      >
                        Trauma Therapy For Individuals
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink
                        to="/individuals/service2"
                        className={`dropdown-link ${activeLink === '/individuals/service2' ? 'active-link' : ''}`}
                        onClick={() => handleLinkClick('/individuals/service2')}
                      >
                        Clinical Supervision For Social Workers
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink
                        to="/individuals/service3"
                        className={`dropdown-link ${activeLink === '/individuals/service3' ? 'active-link' : ''}`}
                        onClick={() => handleLinkClick('/individuals/service3')}
                      >
                        Consulting For Businesses/Communities
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
              <NavLink
                to="/organizations"
                className={`nav-link ${activeLink === '/organizations' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('/organizations')}
              >
                For Organizations
              </NavLink>
              <NavLink
                to="/resources"
                className={`nav-link ${activeLink === '/resources' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('/resources')}
              >
                Resources
              </NavLink>
              <NavLink
                to="/contact"
                className={`nav-link-contact ${activeLink === '/contact' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('/contact')}
              >
                Contact
              </NavLink>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Navbar;