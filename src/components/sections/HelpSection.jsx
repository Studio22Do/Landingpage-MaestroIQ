import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";
import ButtonLarge from "../ui/ButtonLarge";
import blobSvg from "../../assets/Blob.svg";

const HelpSection = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
        threshold: 0.3,
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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !email) return;

    setIsSubmitting(true);

    // Simular envío del correo (aquí iría la lógica real)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simular delay de envío
      
      setIsSubmitted(true);
      
      // Después de mostrar "Enviado", volver a la normalidad
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(false);
        setEmail("");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="ayuda" className="py-16 sm:py-24 md:py-32 lg:py-40 scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden">
      {/* Blob de fondo con animación de flotamiento */}
      <div className="absolute inset-0 flex items-end justify-end pointer-events-none z-0">
        <img
          src={blobSvg}
          alt=""
          className="floating-blob w-[200px] h-[205px] sm:w-[240px] sm:h-[246px] lg:w-[281px] lg:h-[288px] opacity-100 absolute bottom-[5%] -right-[10%] sm:-right-[8%] lg:right-[-8%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
          aria-hidden="true"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center overflow-hidden">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 transition-all ease-text-in ${
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
            {language === "ES" ? "¿Necesitas" : "Need"}{" "}
            <span className="text-primary">{getTranslation(language, "help.titleHighlight")}</span>
            {language === "ES" ? "?" : "?"}
          </h2>

          <p
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed transition-all ease-text-in ${
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
            {getTranslation(language, "help.description")}
          </p>

          <form
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row justify-center items-stretch sm:items-center max-w-md mx-auto transition-all ease-text-in ${
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
            <div
              className={`transition-all duration-500 ${
                isSubmitting && isMobile
                  ? "opacity-0 h-0 mb-0 overflow-hidden"
                  : "opacity-100"
              }`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={getTranslation(language, "help.emailPlaceholder")}
                disabled={isSubmitting}
                className="w-full sm:flex-1 h-[65px] px-6 sm:px-10 rounded-t-[20px] rounded-b-0 sm:rounded-none sm:rounded-l-[20px] border-2 border-b-0 sm:border-b-2 sm:border-r-0 border-primary bg-transparent text-white placeholder:text-white/30 text-base sm:text-2xl font-medium focus:outline-none focus:border-primary/50"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto h-[65px] px-8 sm:px-12 rounded-b-[15px] rounded-t-0 sm:rounded-none sm:rounded-r-[15px] bg-gradient-to-r from-secondary to-gradient-end text-white text-base sm:text-2xl font-medium border-2 border-t-0 sm:border-t-2 sm:border-l-0 border-primary hover:opacity-90 transition-all duration-500 ${
                isSubmitting && isMobile
                  ? "rounded-[15px] -mt-[65px]"
                  : ""
              } ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitted
                ? getTranslation(language, "help.sent")
                : isSubmitting
                ? getTranslation(language, "help.sending")
                : getTranslation(language, "help.button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;

