import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import shieldIcon from "../../assets/icons/feature-shield.svg";
import laptopIcon from "../../assets/icons/feature-laptop.svg";
import headsetIcon from "../../assets/icons/feature-headset.svg";
import blobSvg from "../../assets/Blob.svg";

const KeyFeaturesSection = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const featureCards = [
    {
      id: "secure-data",
      titleLines: getTranslation(language, "keyFeatures.features.dataSegura.title"),
      icon: shieldIcon,
    },
    {
      id: "easy-access",
      titleLines: getTranslation(language, "keyFeatures.features.facilAcceso.title"),
      icon: headsetIcon,
    },
    {
      id: "support",
      titleLines: getTranslation(language, "keyFeatures.features.soporte24.title"),
      icon: laptopIcon,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.4, // Se activa cuando el 30% de la sección es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="funciones" className="py-40 scroll-mt-24 relative overflow-hidden">
      {/* Blob de fondo con animación de flotamiento */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0">
        <img
          src={blobSvg}
          alt=""
          className="floating-blob w-[281px] h-[288px] opacity-30"
          style={{
            position: "absolute",
            top: "40%",
            right: "-8%",
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden="true"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center flex flex-col relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-20 justify-center items-center flex flex-col">
          <h2 className="text-6xl font-bold leading-tight text-white overflow-hidden">
            {getTranslation(language, "keyFeatures.title").split(" ").map((word, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-all ease-text-in ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[140%] opacity-0"
                  }`}
                  style={{
                    transitionDuration: "0.6s",
                    transitionDelay: `${index * 0.1}s`,
                    transitionProperty: "transform, opacity",
                  }}
                >
                  <span className={word.includes("Conecta") || word.includes("Connect") ? "text-primary" : "text-white"}>
                    {word}
                  </span>
                  {index < getTranslation(language, "keyFeatures.title").split(" ").length - 1 && " "}
                </span>
              </span>
            ))}
          </h2>
          <p
            className={`text-3xl max-w-4xl font-medium text-white mt-6 leading-relaxed transition-all ease-text-in ${
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
            <span className="text-primary">{getTranslation(language, "keyFeatures.descriptionHighlight")}</span>{" "}
            {getTranslation(language, "keyFeatures.description").replace(getTranslation(language, "keyFeatures.descriptionHighlight"), "").trim()}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 w-8/12">
          {featureCards.map(({ id, titleLines, icon }, index) => (
            <article
              key={id}
              className={`rounded-[32px] border-2 border-primary/50 bg-gradient-to-br from-[#2D2350] to-[#1B1630] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] text-center flex flex-col items-center gap-6 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${600 + index * 150}ms` : "0ms",
              }}
              aria-label={`Beneficio: ${titleLines.join(" ")}`}
            >
              <div className="h-28 flex items-center justify-center">
                <img src={icon} alt="" className="h-[6.5rem] w-auto" aria-hidden="true" />
              </div>

              <div>
                {titleLines.map((line) => (
                  <p key={line} className="text-3xl font-bold text-white leading-snug">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;

