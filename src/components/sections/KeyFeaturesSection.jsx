import { useState, useEffect, useRef } from "react";
import shieldIcon from "../../assets/icons/feature-shield.svg";
import laptopIcon from "../../assets/icons/feature-laptop.svg";
import headsetIcon from "../../assets/icons/feature-headset.svg";

const featureCards = [
  {
    id: "secure-data",
    titleLines: ["Data", "Segura"],
    icon: shieldIcon,
  },
  {
    id: "easy-access",
    titleLines: ["Fácil", "Acceso"],
    icon: headsetIcon,
  },
  {
    id: "support",
    titleLines: ["Soporte", "24 horas"],
    icon: laptopIcon,
  },
];

const KeyFeaturesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={sectionRef} id="funciones" className="py-40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center flex flex-col">
        <div className="max-w-6xl mx-auto text-center mb-20 justify-center items-center flex flex-col">
          <h2 className="text-6xl font-bold leading-tight text-white">
            <span className="text-white">Simplifica.</span>{" "}
            <span className="text-primary">Conecta.</span>{" "}
            <span className="text-white">Optimiza.</span>
          </h2>
          <p className="text-3xl max-w-4xl font-medium text-white mt-6 leading-relaxed">
            <span className="text-primary">Centraliza tus operaciones</span> de marketing y comunicación, integra herramientas
            clave y transforma datos en decisiones inteligentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 w-8/12">
          {featureCards.map(({ id, titleLines, icon }, index) => (
            <article
              key={id}
              className={`rounded-[32px] border-2 border-primary/50 bg-gradient-to-br from-[#2D2350] to-[#1B1630] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] text-center flex flex-col items-center gap-6 transition-all duration-900 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 240}ms` : "0ms",
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

