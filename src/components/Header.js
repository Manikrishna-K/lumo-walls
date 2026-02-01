import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nav">
      {/* Logo */}
      <div className="logo">LUMO WALLS</div>

      {/* Hamburger Menu Icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {/* Simple hamburger using unicode bars */}
        &#9776;
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <button className="nav-link" onClick={() => setMenuOpen(false)}>Home</button>
        <button className="nav-link" onClick={() => setMenuOpen(false)}>Gallery</button>
        <button className="nav-link" onClick={() => setMenuOpen(false)}>Services</button>
        <button className="nav-link" onClick={() => setMenuOpen(false)}>About</button>
        <button className="nav-link" onClick={() => setMenuOpen(false)}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
