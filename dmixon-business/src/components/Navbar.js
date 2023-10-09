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
              <NavLink to="/" exact={true} className="welcome-link">Welcome</NavLink> {/* Add a specific class */}
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active-link"
                onClick={() => handleLinkClick("/about")}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
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
