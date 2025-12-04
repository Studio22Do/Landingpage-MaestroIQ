import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import ButtonLarge from "../ui/ButtonLarge";
import vectorBg from "../../assets/Vectorbg.webp";
import bgMovil from "../../assets/bgmovil.svg";
import tabletImage from "../../assets/Group 237552.png";
import blobSvg from "../../assets/Blob.svg";

const MarketingIntelligenceSection = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const blobContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const targetTranslateX = useRef(40); // Valor objetivo (usando ref para evitar problemas de closure)
  const currentTranslateX = useRef(40); // Valor actual que se suaviza
  const blobParallaxY = useRef(0); // Parallax Y para el blob
  const blobCurrentY = useRef(0); // Valor actual del parallax Y
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

    // Interpolar el parallax del blob
    blobCurrentY.current = lerp(
      blobCurrentY.current,
      blobParallaxY.current,
      smoothFactor
    );

    // Aplicar la transformación directamente al DOM (solo en desktop)
    if (imageRef.current && window.innerWidth >= 1024) {
      imageRef.current.style.transform = `translateX(${currentTranslateX.current}%)`;
    } else if (imageRef.current) {
      imageRef.current.style.transform = 'none';
    }

    // Aplicar parallax al contenedor del blob (para no interferir con la animación CSS)
    if (blobContainerRef.current) {
      blobContainerRef.current.style.transform = `translateY(${blobCurrentY.current}px)`;
    }

    // Continuar animando si hay diferencias significativas
    const needsUpdate = 
      Math.abs(currentTranslateX.current - targetTranslateX.current) > 0.01 ||
      Math.abs(blobCurrentY.current - blobParallaxY.current) > 0.01;

    if (needsUpdate) {
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

      // Calcular parallax del blob (se mueve más lento que el scroll)
      const parallaxSpeed = 0.3; // Velocidad del parallax (0.3 = se mueve más lento)
      
      // Calcular el parallax basado en la posición de la sección en el viewport
      // Cuando haces scroll hacia abajo, el blob debe subir (moverse hacia arriba)
      const sectionTop = rect.top;
      const viewportCenter = windowHeight / 2;
      
      // Calcular el offset del parallax: cuando haces scroll hacia abajo, el blob se mueve hacia arriba
      // Invertimos el signo para que el blob suba cuando haces scroll hacia abajo
      const parallaxOffset = (sectionTop - viewportCenter) * parallaxSpeed;
      blobParallaxY.current = parallaxOffset;

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
      {/* Background para móvil */}
      <div className="absolute inset-0 w-full sm:hidden overflow-hidden" style={{ background: 'transparent' }}>
        <img 
          src={bgMovil} 
          alt="" 
          className="w-full h-full object-cover object-center"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            display: 'block'
          }}
          aria-hidden="true"
        />
      </div>
      {/* Background para desktop */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat w-full h-full hidden sm:block"
        style={{ backgroundImage: `url(${vectorBg})` }}
      />
      {/* Blob de fondo con animación de flotamiento y parallax */}
      <div 
        ref={blobContainerRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-5"
      >
        <img
          src={blobSvg}
          alt=""
          className="floating-blob w-[200px] h-[203px] sm:w-[300px] sm:h-[305px] md:w-[400px] md:h-[406px] lg:w-[481px] lg:h-[488px] opacity-100 absolute top-[30%] left-[40%] lg:left-[40%] translate-x-[-50%] translate-y-[-50%]"
          aria-hidden="true"
        />
      </div>
      <div
        className="relative z-10 py-[9rem] lg:py-40 xl:py-80 2xl:py-[30rem] flex items-center justify-center px-4 sm:px-6 lg:pl-24 w-full overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center justify-center lg:justify-between w-full max-w-7xl mx-auto">
          {/* Contenido del lado izquierdo */}
          <div ref={textContainerRef} className="text-center lg:text-left w-full lg:w-9/12 overflow-hidden order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 text-white">
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
                  <span className="text-primary">{getTranslation(language, "marketingIntelligence.titleHighlight1")}</span>{" "}
                  {language === "ES" ? "tus herramientas." : "your tools."}
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
                  <span className="text-primary">{getTranslation(language, "marketingIntelligence.titleHighlight2")}</span>{" "}
                  {language === "ES" ? "tu impacto." : "your impact."}
                </span>
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white mb-8 sm:mb-12 leading-relaxed">
              {getTranslation(language, "marketingIntelligence.description")}
            </p>

            <div className="flex justify-center lg:justify-start">
              <ButtonLarge variant="outline" className="text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-3 sm:py-4">
                {getTranslation(language, "marketingIntelligence.button")}
              </ButtonLarge>
            </div>
          </div>

          {/* Lado derecho - imagen de la tablet */}
          <div 
            ref={imageRef}
            className="flex justify-center relative transition-none w-full lg:w-auto order-1 lg:order-2"
            style={{ 
              transform: `translateX(${currentTranslateX.current}%)`,
            }}
          >
            <img 
              src={tabletImage} 
              alt="Marketing Intelligence Console" 
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingIntelligenceSection;
