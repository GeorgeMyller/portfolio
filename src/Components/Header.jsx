/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <nav
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        backdropFilter: "blur(6px)",
      }}
      aria-label="Navegação principal"
    >
      <a href="#home" tabIndex="0">Home</a>
      <a href="#about" tabIndex="0">About</a>
      <a href="#portfolio" tabIndex="0">Portfolio</a>
      <a href="#footer" tabIndex="0">Contact</a>
    </nav>
  );
};

export default Header;
