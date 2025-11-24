import Button from "../ui/Button";
import UserIcon from "../icons/UserIcon";




const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="MaestroIQ Logo" className="h-10 w-auto" />
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-8">
              <a
                href="#funciones"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Funciones
              </a>
              <a
                href="#planes"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Planes
              </a>
              <a
                href="#personalizado"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Personalizado
              </a>
              <a
                href="#ayuda"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Ayuda
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline">Crear Cuenta</Button>
              <Button variant="primary" icon={<UserIcon />}>
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
