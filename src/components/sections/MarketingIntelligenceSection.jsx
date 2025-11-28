import { useEffect, useRef, useState } from "react";
import ButtonLarge from "../ui/ButtonLarge";
import vectorBg from "../../assets/Vectorbg.png";
import tabletImage from "../../assets/Group 237552.png";

const MarketingIntelligenceSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textContainerRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const targetTranslateX = useRef(40); // Valor objetivo (usando ref para evitar problemas de closure)
  const currentTranslateX = useRef(40); // Valor actual que se suaviza
  const rafId = useRef(null);

  // Función de interpolación lineal (lerp) para suavizar el movimiento
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  // Calcular la posición X objetivo basada en el scroll
  const calculateTargetTransform = (progress) => {
    const maxOffset = 30;
    const baseOffset = 10;
    const visibleStart = 0.25;
    const visibleEnd = 0.75;
    let translateX = 0;
    
    if (progress < visibleStart) {
      const normalizedProgress = progress / visibleStart;
      translateX = baseOffset + (1 - normalizedProgress) * maxOffset;
    } else if (progress > visibleEnd) {
      const normalizedProgress = (progress - visibleEnd) / (1 - visibleEnd);
      translateX = baseOffset + normalizedProgress * maxOffset;
    } else {
      translateX = baseOffset;
    }
    
    return translateX;
  };

  // Función de animación suave usando requestAnimationFrame
  const animate = () => {
    // Factor de suavizado (0.08 = más suave pero más lento, 0.15 = más rápido pero menos suave)
    // Similar al scrub de GSAP, valores más bajos = más suave
    const smoothFactor = 0.08;
    
    // Interpolar el valor actual hacia el objetivo
    currentTranslateX.current = lerp(
      currentTranslateX.current,
      targetTranslateX.current,
      smoothFactor
    );

    // Aplicar la transformación directamente al DOM
    if (imageRef.current) {
      imageRef.current.style.transform = `translateX(${currentTranslateX.current}%)`;
    }

    // Continuar animando si la diferencia es significativa
    if (Math.abs(currentTranslateX.current - targetTranslateX.current) > 0.01) {
      rafId.current = requestAnimationFrame(animate);
    } else {
      rafId.current = null; // Limpiar el ID cuando termine
    }
  };

  // Observer para detectar cuando la sección entra en el viewport y activar animación de texto
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTextVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Se activa cuando el 30% de la sección es visible
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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionCenter = rect.top + rect.height / 2;
      const animationStart = windowHeight * 1.3;
      const animationEnd = -windowHeight * 0.3;
      const animationRange = animationStart - animationEnd;
      
      const progress = Math.max(0, Math.min(1, 
        (animationStart - sectionCenter) / animationRange
      ));
      
      // Calcular el valor objetivo
      const target = calculateTargetTransform(progress);
      targetTranslateX.current = target;

      // Iniciar la animación suave si no está corriendo
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Llamar una vez al montar

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative" style={{ minHeight: "100vh" }}>
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url(${vectorBg})` }}
      />
      <div
        className="relative z-10 py-80 xl:py-[30rem] flex items-center justify-center pl-4 sm:pl-6 w-full overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className=" pl-24 flex flex-col lg:flex-row gap-12 items-center justify-between w-full">
          {/* Contenido del lado izquierdo */}
          <div ref={textContainerRef} className="text-center lg:text-left w-9/12 overflow-hidden">
            <h2 className="text-6xl font-bold leading-tight mb-8 text-white">
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-all ease-text-in ${
                    isTextVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[140%] opacity-0"
                  }`}
                  style={{ 
                    transitionDuration: "0.6s",
                    transitionDelay: "0s",
                    transitionProperty: "transform, opacity"
                  }}
                >
                  <span className="text-primary">Unifica</span> tus herramientas.
                </span>
              </span>
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-all ease-text-in ${
                    isTextVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[140%] opacity-0"
                  }`}
                  style={{ 
                    transitionDuration: "0.6s",
                    transitionDelay: "0.15s",
                    transitionProperty: "transform, opacity"
                  }}
                >
                  {" "}
                  <span className="text-primary">Multiplica</span> tu impacto.
                </span>
              </span>
            </h2>

            <p className="text-3xl font-medium text-white mb-12 leading-relaxed">
              Accede a información clave en medios, marketing y análisis de
              mercado para impulsar decisiones estratégicas más rápidas y
              efectivas.
            </p>

            <div className="flex justify-center lg:justify-start">
              <ButtonLarge variant="outline">Regístrate</ButtonLarge>
            </div>
          </div>

          {/* Lado derecho - imagen de la tablet */}
          <div 
            ref={imageRef}
            className="flex justify-center lg:justify-end relative transition-none"
            style={{ 
              transform: `translateX(${currentTranslateX.current}%)`,
            }}
          >
            <img 
              src={tabletImage} 
              alt="Marketing Intelligence Console" 
              className="w-full max-w-5xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingIntelligenceSection;
