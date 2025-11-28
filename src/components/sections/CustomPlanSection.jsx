import { useEffect, useRef } from "react";
import ButtonLarge from "../ui/ButtonLarge";
import layerImage from "../../assets/Layer.png";

const CustomPlanSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  // Refs para valores objetivo y actuales (para suavizado con lerp)
  const titleTarget = useRef({ translateX: -100, opacity: 0 });
  const titleCurrent = useRef({ translateX: -100, opacity: 0 });
  const descriptionTarget = useRef({ translateX: -100, opacity: 0 });
  const descriptionCurrent = useRef({ translateX: -100, opacity: 0 });
  const buttonTarget = useRef({ translateX: -100, opacity: 0 });
  const buttonCurrent = useRef({ translateX: -100, opacity: 0 });
  const imageTarget = useRef({ translateX: 100, opacity: 0 });
  const imageCurrent = useRef({ translateX: 100, opacity: 0 });
  const rafId = useRef(null);

  // Función de interpolación lineal (lerp)
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  // Función de animación suave usando requestAnimationFrame
  const animate = () => {
    const smoothFactor = 0.08;

    // Título
    titleCurrent.current.translateX = lerp(
      titleCurrent.current.translateX,
      titleTarget.current.translateX,
      smoothFactor
    );
    titleCurrent.current.opacity = lerp(
      titleCurrent.current.opacity,
      titleTarget.current.opacity,
      smoothFactor
    );

    // Descripción
    descriptionCurrent.current.translateX = lerp(
      descriptionCurrent.current.translateX,
      descriptionTarget.current.translateX,
      smoothFactor
    );
    descriptionCurrent.current.opacity = lerp(
      descriptionCurrent.current.opacity,
      descriptionTarget.current.opacity,
      smoothFactor
    );

    // Botón
    buttonCurrent.current.translateX = lerp(
      buttonCurrent.current.translateX,
      buttonTarget.current.translateX,
      smoothFactor
    );
    buttonCurrent.current.opacity = lerp(
      buttonCurrent.current.opacity,
      buttonTarget.current.opacity,
      smoothFactor
    );

    // Imagen
    imageCurrent.current.translateX = lerp(
      imageCurrent.current.translateX,
      imageTarget.current.translateX,
      smoothFactor
    );
    imageCurrent.current.opacity = lerp(
      imageCurrent.current.opacity,
      imageTarget.current.opacity,
      smoothFactor
    );

    // Aplicar transformaciones
    if (titleRef.current) {
      titleRef.current.style.transform = `translateX(${titleCurrent.current.translateX}%)`;
      titleRef.current.style.opacity = titleCurrent.current.opacity;
    }
    if (descriptionRef.current) {
      descriptionRef.current.style.transform = `translateX(${descriptionCurrent.current.translateX}%)`;
      descriptionRef.current.style.opacity = descriptionCurrent.current.opacity;
    }
    if (buttonRef.current) {
      buttonRef.current.style.transform = `translateX(${buttonCurrent.current.translateX}%)`;
      buttonRef.current.style.opacity = buttonCurrent.current.opacity;
    }
    if (imageRef.current) {
      imageRef.current.style.transform = `translateX(${imageCurrent.current.translateX}%)`;
      imageRef.current.style.opacity = imageCurrent.current.opacity;
    }

    // Continuar animando si hay diferencias significativas
    const needsUpdate =
      Math.abs(titleCurrent.current.translateX - titleTarget.current.translateX) > 0.01 ||
      Math.abs(titleCurrent.current.opacity - titleTarget.current.opacity) > 0.01 ||
      Math.abs(descriptionCurrent.current.translateX - descriptionTarget.current.translateX) > 0.01 ||
      Math.abs(descriptionCurrent.current.opacity - descriptionTarget.current.opacity) > 0.01 ||
      Math.abs(buttonCurrent.current.translateX - buttonTarget.current.translateX) > 0.01 ||
      Math.abs(buttonCurrent.current.opacity - buttonTarget.current.opacity) > 0.01 ||
      Math.abs(imageCurrent.current.translateX - imageTarget.current.translateX) > 0.01 ||
      Math.abs(imageCurrent.current.opacity - imageTarget.current.opacity) > 0.01;

    if (needsUpdate) {
      rafId.current = requestAnimationFrame(animate);
    } else {
      rafId.current = null;
    }
  };

  // Calcular valores objetivo basados en scroll (desde la izquierda)
  const calculateTargets = (progress) => {
    const maxOffset = -100; // Desde la izquierda
    const visibleStart = 0.2;
    const visibleEnd = 0.8;

    let translateX = maxOffset;
    let opacity = 0;

    if (progress < visibleStart) {
      // Antes de entrar: completamente oculto a la izquierda
      // progress 0 -> translateX = -100, progress visibleStart -> translateX = 0
      const normalizedProgress = progress / visibleStart;
      translateX = maxOffset + normalizedProgress * Math.abs(maxOffset);
      opacity = normalizedProgress;
    } else if (progress > visibleEnd) {
      // Después de salir: moverse hacia la izquierda y desaparecer
      // progress visibleEnd -> translateX = 0, progress 1 -> translateX = -100
      const normalizedProgress = (progress - visibleEnd) / (1 - visibleEnd);
      translateX = -normalizedProgress * Math.abs(maxOffset);
      opacity = 1 - normalizedProgress;
    } else {
      // En el rango visible: completamente visible
      translateX = 0;
      opacity = 1;
    }

    return { translateX, opacity };
  };

  // Calcular valores objetivo basados en scroll (desde la derecha)
  const calculateImageTargets = (progress) => {
    const maxOffset = 100; // Desde la derecha
    const visibleStart = 0.2;
    const visibleEnd = 0.8;

    let translateX = maxOffset;
    let opacity = 0;

    if (progress < visibleStart) {
      // Antes de entrar: completamente oculto a la derecha
      // progress 0 -> translateX = 100, progress visibleStart -> translateX = 0
      const normalizedProgress = progress / visibleStart;
      translateX = maxOffset - normalizedProgress * Math.abs(maxOffset);
      opacity = normalizedProgress;
    } else if (progress > visibleEnd) {
      // Después de salir: moverse hacia la derecha y desaparecer
      // progress visibleEnd -> translateX = 0, progress 1 -> translateX = 100
      const normalizedProgress = (progress - visibleEnd) / (1 - visibleEnd);
      translateX = normalizedProgress * Math.abs(maxOffset);
      opacity = 1 - normalizedProgress;
    } else {
      // En el rango visible: completamente visible
      translateX = 0;
      opacity = 1;
    }

    return { translateX, opacity };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Calcular progreso basado en la posición de la sección
      const animationStart = windowHeight * 0.8;
      const animationEnd = -sectionHeight * 0.2;
      const animationRange = animationStart - animationEnd;

      const progress = Math.max(0, Math.min(1, (animationStart - sectionTop) / animationRange));

      // Calcular valores objetivo para cada elemento con delays
      const titleProgress = Math.max(0, Math.min(1, progress));
      const descriptionProgress = Math.max(0, Math.min(1, progress - 0.1));
      const buttonProgress = Math.max(0, Math.min(1, progress - 0.2));
      const imageProgress = Math.max(0, Math.min(1, progress - 0.1)); // Delay similar a descripción

      titleTarget.current = calculateTargets(titleProgress);
      descriptionTarget.current = calculateTargets(descriptionProgress);
      buttonTarget.current = calculateTargets(buttonProgress);
      imageTarget.current = calculateImageTargets(imageProgress);

      // Iniciar animación si no está corriendo
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
    <section ref={sectionRef} id="personalizado" className="py-20 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between ">
          {/* Contenido del lado izquierdo */}
          <div className="text-center lg:text-left flex-[1.2]">
            <h2
              ref={titleRef}
              className="text-6xl font-bold leading-tight mb-8 text-white"
              style={{
                transform: `translateX(${titleCurrent.current.translateX}%)`,
                opacity: titleCurrent.current.opacity,
              }}
            >
              ¿Necesitas un plan{" "}
              <span className="text-primary">personalizado?</span>
            </h2>

            <p
              ref={descriptionRef}
              className="text-3xl font-medium text-white mb-12 leading-relaxed"
              style={{
                transform: `translateX(${descriptionCurrent.current.translateX}%)`,
                opacity: descriptionCurrent.current.opacity,
              }}
            >
              Reúne todo lo que necesitas en un solo espacio, una herramienta
              clara, eficiente y flexible para gestionar como prefieras.
            </p>

            <div
              ref={buttonRef}
              className="flex justify-center lg:justify-start"
              style={{
                transform: `translateX(${buttonCurrent.current.translateX}%)`,
                opacity: buttonCurrent.current.opacity,
              }}
            >
              <ButtonLarge variant="outline">Empieza ya</ButtonLarge>
            </div>
          </div>

          {/* Lado derecho - imagen */}
          <div className="flex -mb-20 justify-center lg:justify-end flex-[0.8] lg:mt-16 ">
            <img
              ref={imageRef}
              src={layerImage}
              alt="Infraestructura de datos personalizada"
              className="w-full max-w-xl h-auto"
              style={{
                transform: `translateX(${imageCurrent.current.translateX}%)`,
                opacity: imageCurrent.current.opacity,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPlanSection;
