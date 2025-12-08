import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const targetTranslateX = useRef(40); // Valor objetivo (usando ref para evitar problemas de closure)
  const currentTranslateX = useRef(40); // Valor actual que se suaviza
  const blobParallaxY = useRef(0); // Parallax Y para el blob
  const blobCurrentY = useRef(0); // Valor actual del parallax Y
  const rafId = useRef(null);
  const slideIntervalRef = useRef(null);
  
  // Tiempo entre slides en milisegundos
  const SLIDE_INTERVAL_TIME = 9000;

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

  // Función para iniciar el auto-play del slider
  const startSlideInterval = () => {
    const slides = getTranslation(language, "marketingIntelligence.slides");
    if (!slides || slides.length === 0) return;

    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }

    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const slides = getTranslation(language, "marketingIntelligence.slides");
        return (prev + 1) % slides.length;
      });
    }, SLIDE_INTERVAL_TIME);
  };

  // Auto-play del slider
  useEffect(() => {
    startSlideInterval();

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [language]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    // Reiniciar el auto-play
    startSlideInterval();
  };

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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-white">
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-all ease-text-in leading-tight ${
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
                  {(() => {
                    const title = getTranslation(language, "marketingIntelligence.title");
                    const parts = title.split("MaestroIQ");
                    if (parts.length === 2) {
                      return (
                        <>
                          {parts[0]}
                          <span className="text-primary">MaestroIQ</span>
                          {parts[1]}
                        </>
                      );
                    }
                    return title;
                  })()}
                </span>
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed">
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-all ease-text-in ${
                    isTextVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[140%] opacity-0"
                  }`}
                  style={{ 
                    transitionDuration: "0.6s",
                    transitionDelay: "0.2s",
                    transitionProperty: "transform, opacity"
                  }}
                >
                  {getTranslation(language, "marketingIntelligence.subtitle")}
                </span>
              </span>
            </p>

            {/* Slider */}
            <div className="relative min-h-[160px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] mb-5 sm:mb-6 md:mb-8 lg:mb-10">
              {(() => {
                const slides = getTranslation(language, "marketingIntelligence.slides");
                if (!slides || slides.length === 0) return null;

                return slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Navegación del slider (dots) */}
            {(() => {
              const slides = getTranslation(language, "marketingIntelligence.slides");
              if (!slides || slides.length === 0) return null;

              return (
                <div className="flex justify-center lg:justify-start gap-2 sm:gap-2.5 md:gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSlideChange(index);
                        }
                      }}
                      aria-label={language === "ES" ? `Ir al slide ${index + 1}` : `Go to slide ${index + 1}`}
                      tabIndex={0}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? "w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10 h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-primary"
                          : "w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              );
            })()}
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
