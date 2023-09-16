import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <section className="navbar">
        <div className="navbar-content">
          <h1 className="navbar-title">D.Mixon Practices</h1>
          <nav>
            <div className="navbar-links">
              <NavLink to="/" exact="true">Home</NavLink>

              <NavLink
                to="/about"
                className="nav-link"
                activeclassname="active-link"
                onClick={() => handleLinkClick("/about")}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeclassname="active-link"
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
