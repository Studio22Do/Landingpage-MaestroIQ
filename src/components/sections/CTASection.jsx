const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 font-futura">¿Listo para transformar tu negocio?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-futura font-medium">
          Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
        <button 
          className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 font-futura"
          onClick={() => window.open('https://m-aestro-i-qfrontendcompleto.vercel.app/register', '_blank')}
        >
          Contactar Ahora
        </button>
      </div>
    </section>
  );
};

export default CTASection;

