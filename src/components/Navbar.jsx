import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h2 className="logo">ZYANIX</h2>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

<li>
          <a href="#services" onClick={closeMenu}>Services</a>
        </li>

       
        <li>
          <a href="#gigs" onClick={closeMenu}>Plans</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>
 

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
        <li>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
        </li>
<li>
          <a href="#team" onClick={closeMenu}>Team</a>
        </li>
        <li className="mobile-btn">
          <a href="#contact" onClick={closeMenu}>
            Start Your Project
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;