import React from "react";

function Header() {
  return (
    <header className="nav">
      <div className="logo">LUMO WALLS</div>
      <nav>
        <button className="nav-link">Home</button>
        <button className="nav-link">Gallery</button>
        <button className="nav-link">Services</button>
        <button className="nav-link">About</button>
        <button className="nav-link">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
