const servicesData = [
  {
    title: "Desarrollo Web",
    description: "Creamos sitios modernos, responsivos y optimizados para impulsar tu negocio.",
    accentBackgroundClass: "bg-primary/20",
    accentDotClass: "bg-primary",
  },
  {
    title: "Consultoría IT",
    description: "Optimizamos tus procesos tecnológicos para mejorar la eficiencia operativa.",
    accentBackgroundClass: "bg-secondary/20",
    accentDotClass: "bg-secondary",
  },
  {
    title: "Soporte Técnico",
    description: "Mantenemos tus sistemas funcionando con soporte especializado 24/7.",
    accentBackgroundClass: "bg-primary/20",
    accentDotClass: "bg-primary",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-futura">Nuestros Servicios</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-futura font-medium">
            Soluciones integrales para potenciar tu negocio con tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map(({ title, description, accentBackgroundClass, accentDotClass }) => (
            <article
              key={title}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className={`w-16 h-16 ${accentBackgroundClass} rounded-lg flex items-center justify-center mb-6`}>
                <div className={`w-8 h-8 ${accentDotClass} rounded`}></div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-futura">{title}</h3>
              <p className="text-gray-300 mb-6 font-futura font-medium">{description}</p>
              <a
                href="#"
                className="text-primary hover:text-secondary font-semibold font-futura transition-colors duration-200"
              >
                Conocer más →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

