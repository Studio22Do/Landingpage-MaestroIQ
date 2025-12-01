import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getTranslation } from "../../translations";

const EmailForm = ({ isVisible }) => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      // Simular envío del correo
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("Email enviado:", email);
      setStatus("success");
      setEmail("");
      
      // Resetear estado después de 3 segundos
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
      
      // Resetear estado después de 3 segundos
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col sm:flex-row justify-center items-stretch sm:items-center transition-all ease-text-in ${
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
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={getTranslation(language, "help.emailPlaceholder")}
          disabled={status === "loading"}
          className="w-full sm:flex-1 h-[65px] px-6 sm:px-10 rounded-t-[20px] rounded-b-0 sm:rounded-none sm:rounded-l-[20px] border-2 border-b-0 sm:border-b-2 sm:border-r-0 border-primary bg-transparent text-white placeholder:text-white/30 text-base sm:text-2xl font-medium focus:outline-none focus:border-primary/50 disabled:opacity-50"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto h-[65px] px-8 sm:px-12 rounded-b-[15px] rounded-t-0 sm:rounded-none sm:rounded-r-[15px] bg-gradient-to-r from-secondary to-gradient-end text-white text-base sm:text-2xl font-medium border-2 border-t-0 sm:border-t-2 sm:border-l-0 border-primary hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading"
            ? getTranslation(language, "help.sending")
            : getTranslation(language, "help.button")}
        </button>
      </form>

      {/* Mensajes de estado */}
      {status === "success" && (
        <div
          className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-400 text-center transition-all ease-text-in"
          style={{
            transitionDuration: "0.3s",
          }}
        >
          {getTranslation(language, "help.sent")}
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-4 p-4 rounded-lg bg-red-500/20 border border-red-500 text-red-400 text-center transition-all ease-text-in"
          style={{
            transitionDuration: "0.3s",
          }}
        >
          {language === "ES"
            ? "Error al enviar. Intenta de nuevo."
            : "Error sending. Please try again."}
        </div>
      )}
    </div>
  );
};

export default EmailForm;

