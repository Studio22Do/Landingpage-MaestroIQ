import Header from './components/Header'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Bienvenido a MaestroIQ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transformamos ideas en soluciones inteligentes que impulsan el crecimiento de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Comenzar Ahora
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Saber Más
              </button>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos soluciones integrales para potenciar tu negocio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Desarrollo Web</h3>
                <p className="text-gray-600 mb-6">
                  Creamos sitios web modernos, responsivos y optimizados para el éxito de tu negocio.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold">
                  Conocer más →
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-secondary rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consultoría IT</h3>
                <p className="text-gray-600 mb-6">
                  Te ayudamos a optimizar tus procesos tecnológicos y mejorar la eficiencia operativa.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold">
                  Conocer más →
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Soporte Técnico</h3>
                <p className="text-gray-600 mb-6">
                  Mantenemos tus sistemas funcionando perfectamente con soporte 24/7.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold">
                  Conocer más →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contactar Ahora
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
