import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import Button from "../ui/Button";
import UserIcon from "../icons/UserIcon";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el menú móvil está abierto, mantener el header visible
      if (isMobileMenuOpen) {
        setIsVisible(true);
        return;
      }

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
  }, [lastScrollY, isMobileMenuOpen]);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      handleCloseMobileMenu();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isMobileMenuOpen
            ? "bg-background border-b border-gray-700"
            : isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-gray-700"
            : "bg-transparent border-b border-transparent"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          <div className="flex items-center">
              <a href="#inicio" className="cursor-pointer" onClick={handleNavClick}>
                <img src="/logo.png" alt="MaestroIQ Logo" className="h-7 sm:h-8 lg:h-9 w-auto" />
              </a>
          </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 h-full">
              <nav className="flex space-x-8">
              <a
                href="#funciones"
                  className="text-white hover:text-primary transition-colors"
                  onClick={handleNavClick}
              >
                  {getTranslation(language, "header.funciones")}
              </a>
              <a
                href="#planes"
                  className="text-white hover:text-primary transition-colors"
                  onClick={handleNavClick}
              >
                  {getTranslation(language, "header.planes")}
              </a>
              <a
                href="#personalizado"
                  className="text-white hover:text-primary transition-colors"
                  onClick={handleNavClick}
              >
                  {getTranslation(language, "header.personalizado")}
              </a>
              <a
                href="#ayuda"
                  className="text-white hover:text-primary transition-colors"
                  onClick={handleNavClick}
              >
                  {getTranslation(language, "header.ayuda")}
              </a>
            </nav>

              <div className="flex flex-col items-end justify-center gap-2 h-full">
                <LanguageSwitcher />
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    className="inline-flex"
                    onClick={() => window.open('https://dashboard.maestroiq.io/register', '_blank')}
                  >
                    {getTranslation(language, "header.crearCuenta")}
                  </Button>
                  <Button
                    variant="primary"
                    icon={<UserIcon />}
                    className="inline-flex"
                    onClick={() => window.open('https://dashboard.maestroiq.io/login', '_blank')}
                  >
                    {getTranslation(language, "header.iniciarSesion")}
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Actions */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={handleToggleMobileMenu}
                className="text-white hover:text-primary transition-colors p-2"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 sm:top-20 lg:hidden left-0 right-0 bottom-0 z-40 bg-background border-b border-gray-700 transition-all duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full overflow-hidden pointer-events-none"
        }`}
      >
        <nav className="px-4 sm:px-6 py-6 space-y-4 flex-1 overflow-y-auto">
          <a
            href="#funciones"
            className="block text-white hover:text-primary transition-colors py-2 text-lg"
            onClick={handleNavClick}
          >
            {getTranslation(language, "header.funciones")}
          </a>
          <a
            href="#planes"
            className="block text-white hover:text-primary transition-colors py-2 text-lg"
            onClick={handleNavClick}
          >
            {getTranslation(language, "header.planes")}
          </a>
          <a
            href="#personalizado"
            className="block text-white hover:text-primary transition-colors py-2 text-lg"
            onClick={handleNavClick}
          >
            {getTranslation(language, "header.personalizado")}
          </a>
          <a
            href="#ayuda"
            className="block text-white hover:text-primary transition-colors py-2 text-lg"
            onClick={handleNavClick}
          >
            {getTranslation(language, "header.ayuda")}
          </a>
          <div className="pt-4 space-y-3 border-t border-gray-700 mt-4">
            <Button 
              variant="outline" 
              className="w-full justify-center"
              onClick={() => window.open('https://m-aestro-i-qfrontendcompleto.vercel.app/register', '_blank')}
            >
              {getTranslation(language, "header.crearCuenta")}
            </Button>
            <Button 
              variant="primary" 
              icon={<UserIcon />} 
              className="w-full justify-center"
              onClick={() => window.open('https://m-aestro-i-qfrontendcompleto.vercel.app/login', '_blank')}
            >
              {getTranslation(language, "header.iniciarSesion")}
            </Button>
          </div>
        </nav>
        <div className="px-4 sm:px-6 pb-0">
          <div className="flex justify-end">
            <LanguageSwitcher roundedTop={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
