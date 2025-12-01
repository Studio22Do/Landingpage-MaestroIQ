import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Obtener el idioma guardado en localStorage o usar ES por defecto
    return localStorage.getItem("language") || "ES";
  });

  useEffect(() => {
    // Guardar el idioma en localStorage cuando cambie
    localStorage.setItem("language", language);
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

