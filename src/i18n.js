import React, { createContext, useContext, useState } from "react";
import ptBR from "./translations/pt-BR/portfolio.json";
import enUS from "./translations/en/portfolio.json";

const translations = {
  "pt-BR": ptBR,
  en: enUS,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt-BR");
  const t = (key) => {
    return translations[language][key] || key;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
