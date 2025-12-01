import { useLanguage } from "../../contexts/LanguageContext";

const LanguageSwitcher = ({ roundedTop = false }) => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  const borderRadius = roundedTop ? "6px 6px 0px 0px" : "0px 0px 6px 6px";
  const containerBorderRadius = roundedTop ? "6px 6px 0px 0px" : "0px 0px 6px 6px";

  return (
    <div className="relative overflow-hidden" style={{ width: "60px", height: "32px", borderRadius: containerBorderRadius }}>
        {/* Rectángulo de fondo para la opción seleccionada */}
        <div
          className="absolute transition-all duration-300"
          style={{
            width: "30px",
            height: "32px",
            backgroundColor: "#502F7C",
            borderRadius: borderRadius,
            left: language === "EN" ? "0px" : "30px",
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

