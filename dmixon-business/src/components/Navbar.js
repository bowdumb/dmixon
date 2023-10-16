import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const isWelcomeLinkActive = (match, location) => {
    if (!match) {
      return location.pathname === "/";
    }
    return match;
  }

  return (
    <div>
      <section className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-title">D.Mixon Practices</h1>
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
              <NavLink
                to="/individuals"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick("/individuals")}
                >
                For Individuals
                </NavLink>
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
                onClick={() => handleLinkClick("/contact")}
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
