import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <Hero />

        {/* Servicios Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 font-futura">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-futura font-medium">
                Ofrecemos soluciones integrales para potenciar tu negocio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-futura">Desarrollo Web</h3>
                <p className="text-gray-300 mb-6 font-futura font-medium">
                  Creamos sitios web modernos, responsivos y optimizados para el éxito de tu negocio.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold font-futura">
                  Conocer más →
                </a>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-secondary rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-futura">Consultoría IT</h3>
                <p className="text-gray-300 mb-6 font-futura font-medium">
                  Te ayudamos a optimizar tus procesos tecnológicos y mejorar la eficiencia operativa.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold font-futura">
                  Conocer más →
                </a>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-futura">Soporte Técnico</h3>
                <p className="text-gray-300 mb-6 font-futura font-medium">
                  Mantenemos tus sistemas funcionando perfectamente con soporte 24/7.
                </p>
                <a href="#" className="text-primary hover:text-secondary font-semibold font-futura">
                  Conocer más →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-futura">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-futura font-medium">
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 font-futura">
              Contactar Ahora
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
