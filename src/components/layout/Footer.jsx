import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="MaestroIQ"
              className="h-12 w-auto"
            />
          </div>

          {/* Enlaces */}
          <div className="mb-4">
            <a
              href="#terminos"
              className="text-xl font-medium text-gray-300 hover:text-primary transition-colors duration-200"
            >
              {getTranslation(language, "footer.terms")}
            </a>
            <span className="text-xl font-medium text-gray-300 mx-2">|</span>
            <a
              href="#privacidad"
              className="text-xl font-medium text-gray-300 hover:text-primary transition-colors duration-200"
            >
              {getTranslation(language, "footer.privacy")}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xl font-medium text-gray-300">
            {getTranslation(language, "footer.copyright")}{" "}
            <span className="underline">{getTranslation(language, "footer.poweredBy")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

