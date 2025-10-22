const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="MaestroIQ Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-600 hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-600 hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
