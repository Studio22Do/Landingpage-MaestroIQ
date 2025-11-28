import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import ButtonLarge from "../ui/ButtonLarge";
import heroImage from "../../assets/Group 237553.png";

const Hero = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animar automáticamente al montar el componente
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        {/* Contenido del lado izquierdo */}
        <div className="text-center lg:text-left z-10 overflow-hidden">
          <h1
            className={`text-6xl font-bold leading-tight mb-8 text-white transition-all ease-text-in ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[140%] opacity-0"
            }`}
            style={{
              transitionDuration: "0.6s",
              transitionDelay: "0s",
              transitionProperty: "transform, opacity",
            }}
          >
            <span className="text-primary font-bold">{getTranslation(language, "hero.titleHighlight")}</span>{" "}
            {language === "ES" 
              ? "todas tus tareas en un solo lugar"
              : "all your tasks in one place"}
          </h1>

          <p
            className={`text-3xl font-medium text-white mb-12 leading-relaxed transition-all ease-text-in ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[140%] opacity-0"
            }`}
            style={{
              transitionDuration: "0.6s",
              transitionDelay: "0.2s",
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
              transitionDelay: "0.4s",
              transitionProperty: "transform, opacity",
            }}
          >
            <ButtonLarge variant="outline">{getTranslation(language, "hero.button")}</ButtonLarge>
          </div>
        </div>

        {/* Lado derecho - imagen */}
        <div className="flex justify-center lg:justify-end relative lg:overflow-visible">
          <img
            src={heroImage}
            alt="Dispositivos MaestroIQ"
            className={`w-full max-w-5xl lg:max-w-none lg:w-[700px] xl:w-[800px] h-auto lg:absolute lg:right-0 lg:translate-x-1/4 lg:top-1/2 lg:-translate-y-1/2 transition-all ease-text-in ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[140%] opacity-0"
            }`}
            style={{
              transitionDuration: "0.8s",
              transitionDelay: "0.3s",
              transitionProperty: "transform, opacity",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
