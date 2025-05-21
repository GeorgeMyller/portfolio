/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import { useLanguage } from "../i18n";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <nav
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
      <a href="#home" tabIndex="0">{t("navHome")}</a>
      <a href="#about" tabIndex="0">{t("navAbout")}</a>
      <a href="#portfolio" tabIndex="0">{t("navPortfolio")}</a>
      <a href="#footer" tabIndex="0">{t("navContact")}</a>
      <select
        value={language}
        onChange={e => setLanguage(e.target.value)}
        style={{ marginLeft: "2rem", padding: "0.3rem 0.7rem", borderRadius: 4, border: "1px solid #ccc" }}
        aria-label="Select language"
      >
        <option value="pt-BR">Português</option>
        <option value="en">English</option>
      </select>
    </nav>
  );
};

export default Header;
