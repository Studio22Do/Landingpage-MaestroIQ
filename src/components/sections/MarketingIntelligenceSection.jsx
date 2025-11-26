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
      const animationStart = windowHeight * 1.5; // Comienza más temprano, antes de que entre completamente
      const animationEnd = -windowHeight * 0.3; // Termina después de que salga
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
  // Crear un rango amplio donde la imagen esté completamente visible
  // La imagen debe estar más a la derecha por defecto, cortándose un poco
  const getImageTransform = () => {
    const maxOffset = 15; // Reducido a 15% para que la imagen inicie más visible
    const baseOffset = 10; // Offset base hacia la derecha cuando está más visible
    const visibleStart = 0.25; // Comienza a estar completamente visible
    const visibleEnd = 0.75; // Termina de estar completamente visible
    let translateX = 0;
    
    if (scrollProgress < visibleStart) {
      // Primera parte: moverse desde ligeramente fuera (derecha) hacia la posición base
      // progress 0 -> translateX máximo (15% + baseOffset), progress 0.25 -> translateX baseOffset
      const progress = scrollProgress / visibleStart; // Normalizar de 0-0.25 a 0-1
      translateX = baseOffset + (1 - progress) * maxOffset; // (baseOffset + 15%) a baseOffset
    } else if (scrollProgress > visibleEnd) {
      // Última parte: moverse desde la posición base hacia ligeramente fuera (derecha)
      // progress 0.75 -> translateX baseOffset, progress 1 -> translateX máximo (15% + baseOffset)
      const progress = (scrollProgress - visibleEnd) / (1 - visibleEnd); // Normalizar de 0.75-1 a 0-1
      translateX = baseOffset + progress * maxOffset; // baseOffset a (baseOffset + 15%)
    } else {
      // Zona media: imagen en posición base (más a la derecha, cortándose un poco)
      translateX = baseOffset;
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
          <div className="text-center lg:text-left w-9/12">
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
              className="w-full max-w-5xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingIntelligenceSection;
