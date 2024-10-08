import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
        document.body.style.paddingTop = `${navbarHeight}px`; // Apply padding to avoid content being cut off
      } else {
        setIsSticky(false);
        document.body.style.paddingTop = '0px'; // Remove padding at the top of the page
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={`navbar ${isSticky ? 'sticky' : ''}`}>
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
                to="/people"
                className={`nav-link ${activeLink === '/people' ? 'active-link' : ''}`}
                onClick={() => handleLinkClick('/about')}
              >
                People
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
