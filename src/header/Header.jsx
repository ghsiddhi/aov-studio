import React from "react";
import "./headerStyles.css";

export const Header = () => {
  return (
    <header className="contained">
      <h1 className="visually-hidden">
        An architecture and interior design firm
      </h1>
      <a href="#" className="logo">
        Architect
      </a>

      <span className="menu-icon hamburger-menu">&#9776;</span>
      <nav>
        <span className="menu-icon close-menu">&#215;</span>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
