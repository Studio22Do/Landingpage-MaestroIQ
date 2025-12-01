import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";

const EmailForm = ({ isVisible }) => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !email) return;

    const emailToSend = email;
    
    // Iniciar la animación
    setIsSubmitting(true);
    
    // Limpiar el email después de un pequeño delay para que la animación se vea
    setTimeout(() => {
      setEmail("");
    }, 100);

    try {
      // Simular envío del correo
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      
      // Volver al estado normal después de mostrar "Enviado"
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(false);
      }, 1500);
    } catch (error) {
      console.error("Error al enviar:", error);
      setIsSubmitting(false);
      setEmail(emailToSend);
    }
  };

  return (
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
      {/* Contenedor del formulario */}
      <div className="relative w-full sm:w-auto flex flex-col sm:flex-row">
        {/* Input de email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={getTranslation(language, "help.emailPlaceholder")}
          disabled={isSubmitting}
          className="w-full sm:flex-1 h-[65px] px-6 sm:px-10 rounded-t-[20px] rounded-b-0 sm:rounded-none sm:rounded-l-[20px] border-2 border-b-0 sm:border-b-2 sm:border-r-0 border-primary bg-transparent text-white placeholder:text-white/30 text-base sm:text-2xl font-medium focus:outline-none focus:border-primary/50 transition-all duration-700 ease-in-out"
          required
        />
        
        {/* Botón de enviar - En móvil se expande sobre el input */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`h-[65px] px-8 sm:px-12 bg-gradient-to-r from-secondary to-gradient-end text-white text-base sm:text-2xl font-medium border-2 border-primary hover:opacity-90 transition-all duration-700 ease-in-out
            ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}
            ${isSubmitting 
              ? "absolute top-0 left-0 w-full rounded-[15px] border-2 sm:relative sm:w-auto sm:rounded-none sm:rounded-r-[15px] sm:border-t-2 sm:border-l-0" 
              : "relative rounded-b-[15px] rounded-t-0 border-t-0 sm:rounded-none sm:rounded-r-[15px] sm:border-t-2 sm:border-l-0"
            }`}
        >
          <span className="whitespace-nowrap inline-block">
            {isSubmitted
              ? getTranslation(language, "help.sent")
              : isSubmitting
              ? getTranslation(language, "help.sending")
              : getTranslation(language, "help.button")}
          </span>
        </button>
      </div>
    </form>
  );
};

export default EmailForm;

