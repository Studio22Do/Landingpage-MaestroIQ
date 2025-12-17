import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="MaestroIQ"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Enlaces */}
          <div className="mb-3 sm:mb-4">
            <a
              href="/terminos"
              aria-label="Ver Términos y Condiciones"
              className="text-base sm:text-lg md:text-xl font-medium text-gray-300 hover:text-primary transition-colors duration-200"
            >
              {getTranslation(language, "footer.terms")}
            </a>
            <span className="text-base sm:text-lg md:text-xl font-medium text-gray-300 mx-2">|</span>
            <a
              href="#privacidad"
              className="text-base sm:text-lg md:text-xl font-medium text-gray-300 hover:text-primary transition-colors duration-200"
            >
              {getTranslation(language, "footer.privacy")}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300">
            {getTranslation(language, "footer.copyright")}{" "}
            <a 
              href="https://studio22.com.do/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors duration-200"
            >
              {getTranslation(language, "footer.poweredBy")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

