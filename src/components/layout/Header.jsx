import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import Button from "../ui/Button";
import UserIcon from "../icons/UserIcon";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar si se ha hecho scroll suficiente para cambiar el fondo
      setIsScrolled(currentScrollY > 50);
      
      // Detectar dirección del scroll
      if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba - mostrar header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll hacia abajo y más de 100px - ocultar header
        setIsVisible(false);
      }
      
      // Si estamos en la parte superior, siempre mostrar el header
      if (currentScrollY <= 0) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-gray-700"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <a href="#inicio" className="cursor-pointer">
              <img src="/logo.png" alt="MaestroIQ Logo" className="h-9 w-auto" />
            </a>
          </div>

          <div className="flex items-center space-x-8 h-full">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#funciones"
                className="text-white hover:text-primary transition-colors"
              >
                {getTranslation(language, "header.funciones")}
              </a>
              <a
                href="#planes"
                className="text-white hover:text-primary transition-colors"
              >
                {getTranslation(language, "header.planes")}
              </a>
              <a
                href="#personalizado"
                className="text-white hover:text-primary transition-colors"
              >
                {getTranslation(language, "header.personalizado")}
              </a>
              <a
                href="#ayuda"
                className="text-white hover:text-primary transition-colors"
              >
                {getTranslation(language, "header.ayuda")}
              </a>
            </nav>

            <div className="flex items-center space-x-4 h-full">
              <Button variant="outline">{getTranslation(language, "header.crearCuenta")}</Button>
              <Button variant="primary" icon={<UserIcon />}>
                {getTranslation(language, "header.iniciarSesion")}
              </Button>
              <div className="self-start">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
