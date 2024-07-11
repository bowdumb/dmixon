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
              <NavLink to="/" exact={true} className="welcome-link">Welcome</NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick("/about")}
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
                  className="nav-link"
                  activeClassName="active-link"
                  onClick={() => handleLinkClick("/individuals")}
                >
                  Services
                </NavLink>
                {dropdownVisible && (
                  <ul className="dropdown">
                    <li className="dropdown-item"><NavLink to="/individuals/service1" className="dropdown-link">Trauma Therapy For Individuals</NavLink></li>
                    <li className="dropdown-item"><NavLink to="/individuals/service2" className="dropdown-link">Clinical Supervision For Social Workers</NavLink></li>
                    <li className="dropdown-item"><NavLink to="/individuals/service3" className="dropdown-link">Consulting For Businesses/Communities</NavLink></li>
                  </ul>
                )}
              </div>
              <NavLink
                to="/organizations"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick("/organizations")}
              >
                For Organizations
              </NavLink>
              <NavLink
                to="/resources"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick("/resources")}
              >
                Resources
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link-contact"
                activeClassName="active-link"
                onClick={() => handleLinkClick("/contact")}
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
