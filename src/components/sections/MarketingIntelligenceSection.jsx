import { useState, useEffect, useRef } from "react";
import ButtonLarge from "../ui/ButtonLarge";
import vectorBg from "../../assets/Vectorbg.png";
import tabletImage from "../../assets/Group 237552.png";

const MarketingIntelligenceSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      
      // Calcular el progreso basado en la posición del centro de la sección
      const sectionCenter = rect.top + rect.height / 2;
      
      // La animación debe comenzar cuando la sección empieza a entrar en el viewport
      // y terminar cuando sale completamente
      // Usamos un rango más amplio para que la animación sea más sensible y comience antes
      const animationStart = windowHeight * 1.2; // Comienza antes de que entre completamente
      const animationEnd = -windowHeight * 0.2; // Termina después de que salga
      const animationRange = animationStart - animationEnd;
      
      // Calcular progreso: 0 cuando empieza a entrar, 0.5 cuando está centrada, 1 cuando sale
      const progress = Math.max(0, Math.min(1, 
        (animationStart - sectionCenter) / animationRange
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcular la posición X de la imagen basada en el progreso
  // 0 -> ligeramente a la derecha (translateX positivo, imagen parcialmente visible)
  // 0.5 -> posición normal (translateX 0, imagen en su lugar)
  // 1 -> ligeramente a la derecha de nuevo (translateX positivo, imagen parcialmente visible)
  const getImageTransform = () => {
    const maxOffset = 30; // Reducido de 100% a 30% para que no esté tan oculta
    let translateX = 0;
    
    if (scrollProgress < 0.5) {
      // Primera mitad: moverse desde ligeramente fuera (derecha) hacia el centro
      // progress 0 -> translateX máximo (30%), progress 0.5 -> translateX 0 (centro)
      const progress = scrollProgress * 2; // Normalizar de 0-0.5 a 0-1
      translateX = (1 - progress) * maxOffset; // 30% a 0% (de derecha a centro)
    } else {
      // Segunda mitad: moverse desde el centro hacia ligeramente fuera (derecha)
      // progress 0.5 -> translateX 0 (centro), progress 1 -> translateX máximo (30%)
      const progress = (scrollProgress - 0.5) * 2; // Normalizar de 0.5-1 a 0-1
      translateX = progress * maxOffset; // 0% a 30% (de centro a derecha)
    }
    
    return translateX;
  };

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
          <div className="text-center lg:text-left w-7/12">
            <h2 className="text-6xl font-bold leading-tight mb-8 text-white ">
              <span className="text-primary">Unifica</span> tus herramientas.{" "}
              <span className="text-primary">Multiplica</span> tu impacto.
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
            className="flex justify-center lg:justify-end relative"
            style={{ 
              transform: `translateX(${getImageTransform()}%)`,
            }}
          >
            <img 
              src={tabletImage} 
              alt="Marketing Intelligence Console" 
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingIntelligenceSection;
