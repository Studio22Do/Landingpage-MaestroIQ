import { useState } from "react";

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState("ES");

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    // Aquí puedes agregar la lógica para cambiar el idioma
  };

  return (
    <div className="relative" style={{ width: "60px", height: "32px" }}>
        {/* Rectángulo de fondo para la opción seleccionada */}
        <div
          className="absolute transition-all duration-300"
          style={{
            width: "30px",
            height: "32px",
            backgroundColor: "#502F7C",
            borderRadius: "0px 0px 6px 6px",
            left: selectedLang === "EN" ? "0px" : "30px",
          }}
        />
        
        {/* Botones de idioma */}
        <div className="relative flex items-center h-full">
          <button
            onClick={() => handleLanguageChange("EN")}
            className="w-1/2 h-full flex items-center justify-center text-white font-medium text-sm transition-colors z-10"
            style={{
              fontFamily: "Futura, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange("ES")}
            className="w-1/2 h-full flex items-center justify-center text-white font-medium text-sm transition-colors z-10"
            style={{
              fontFamily: "Futura, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
              fontWeight: 500,
            }}
          >
            ES
          </button>
        </div>
    </div>
  );
};

export default LanguageSwitcher;

