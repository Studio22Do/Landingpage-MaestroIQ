import { useState } from "react";
import ButtonLarge from "../ui/ButtonLarge";

const HelpSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el correo
    console.log("Email enviado:", email);
  };

  return (
    <section id="ayuda" className="py-40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white mb-8">
            ¿Necesitas <span className="text-primary">ayuda?</span>
          </h2>

          <p className="text-3xl font-medium text-white mb-12 max-w-4xl mx-auto leading-relaxed">
            ¿Tienes dudas o no sabes por dónde empezar? No te preocupes, nuestros
            expertos están disponibles para ayudarte cuando lo necesites.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo"
              className="w-full sm:flex-1 h-[65px] px-10 rounded-l-[20px] rounded-r-0 border-2 border-r-0 border-primary bg-transparent text-white placeholder:text-white/30 text-2xl font-medium focus:outline-none focus:border-primary/50"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto h-[65px] px-12 rounded-r-[15px] rounded-l-0 bg-gradient-to-r from-secondary to-gradient-end text-white text-2xl font-medium border border-l-0 border-primary hover:opacity-90 transition-opacity duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;

