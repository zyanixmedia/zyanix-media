import { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">ZYANIX</h2>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

<li>
          <a href="#team">Team</a>
        </li>
        
        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;