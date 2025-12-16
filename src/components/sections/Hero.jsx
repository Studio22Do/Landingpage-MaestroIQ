import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import ButtonLarge from "../ui/ButtonLarge";
import heroImage from "../../assets/Group 237553.png";
import blobSvg from "../../assets/Blob.svg";

const Hero = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animar automáticamente al montar el componente
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Blob de fondo con animación de flotamiento */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src={blobSvg}
          alt=""
          className="floating-blob w-[301px] h-[308px] opacity-80 absolute top-[10%] -right-[35%] lg:right-0 lg:translate-x-[-50%] lg:translate-y-[-50%]"
          aria-hidden="true"
        />
      </div>
      
      <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5  sm:gap-12 lg:gap-16 items-center relative z-10 pt-14 sm:pt-32 lg:pt-0">
        {/* Imagen - aparece primero en móvil */}
        <div className=" flex justify-center lg:justify-end relative lg:overflow-visible order-1 lg:order-2 lg:col-span-2">
          <img
            src={heroImage}
            alt="Dispositivos MaestroIQ"
            className={`w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none lg:w-[600px] xl:w-[700px] h-auto lg:absolute lg:right-0 lg:translate-x-1/4 lg:top-1/2 lg:-translate-y-1/2 transition-all ease-text-in ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[140%] opacity-0"
            }`}
            style={{
              transitionDuration: "0.8s",
              transitionDelay: "0.2s",
              transitionProperty: "transform, opacity",
            }}
          />
        </div>

        {/* Contenido del lado izquierdo - aparece después en móvil */}
        <div className="text-center lg:text-left z-10 overflow-hidden order-2 lg:order-1 lg:col-span-3">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 sm:mb-8 text-white transition-all ease-text-in ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[140%] opacity-0"
            }`}
            style={{
              transitionDuration: "0.6s",
              transitionDelay: "0.4s",
              transitionProperty: "transform, opacity",
            }}
          >
            <span className="text-primary font-bold">{getTranslation(language, "hero.titleHighlight")}</span>{" "}
            {getTranslation(language, "hero.title").replace(getTranslation(language, "hero.titleHighlight"), "").trim()}
          </h1>

          <p
            className={`text-xl sm:text-2xl md:text-3xl lg:pr-16 font-medium text-white mb-8 sm:mb-12 leading-relaxed transition-all ease-text-in ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[140%] opacity-0"
            }`}
            style={{
              transitionDuration: "0.6s",
              transitionDelay: "0.5s",
              transitionProperty: "transform, opacity",
            }}
          >
            {getTranslation(language, "hero.description").split(getTranslation(language, "hero.descriptionHighlight"))[0]}
            <span className="text-primary">{getTranslation(language, "hero.descriptionHighlight")}</span>
            {getTranslation(language, "hero.description").split(getTranslation(language, "hero.descriptionHighlight"))[1]}
          </p>

          <div
            className={`flex justify-center lg:justify-start transition-all ease-text-in ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[140%] opacity-0"
            }`}
            style={{
              transitionDuration: "0.6s",
              transitionDelay: "0.6s",
              transitionProperty: "transform, opacity",
            }}
          >
            <ButtonLarge 
              variant="outline" 
              className="text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-3 sm:py-4"
              onClick={() => window.open('https://m-aestro-i-qfrontendcompleto.vercel.app/register', '_blank')}
            >
              {getTranslation(language, "hero.button")}
            </ButtonLarge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
