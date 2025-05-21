/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import { useLanguage } from "./i18n";


import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import { LanguageProvider } from "./i18n";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "George Myller",
  title: "AI Agent Developer",
  email: "george.myller@ua.pt",
  gitHub: "GeorgeMyller",
  instagram: "georgemyller",
  linkedIn: "https://www.linkedin.com/in/george-m-souza/",
  twitter: "@GeorgeMyller",
  youTube: "@PT.AcessoIA",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";


// Light/Dark mode toggle logic
import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <LanguageProvider>
      <AppWithLang theme={theme} toggleTheme={toggleTheme} siteProps={siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </LanguageProvider>
  );

};

const AppWithLang = ({ theme, toggleTheme, siteProps, primaryColor, secondaryColor }) => {
  const { t } = useLanguage();
  return (
    <div id="main">
      <button
        className={`theme-toggle${theme === "dark" ? " dark" : ""}`}
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t("themeLight") : t("themeDark")}
        title={theme === "dark" ? t("themeLight") : t("themeDark")}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};


export default App;
