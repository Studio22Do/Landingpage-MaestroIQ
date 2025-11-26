const Footer = () => {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="MaestroIQ"
              className="h-12 w-auto"
            />
          </div>

          {/* Enlaces */}
          <div className="mb-4">
            <a
              href="#terminos"
              className="text-xl font-medium text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Términos y Condiciones
            </a>
            <span className="text-xl font-medium text-gray-300 mx-2">|</span>
            <a
              href="#privacidad"
              className="text-xl font-medium text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Política de Privacidad
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xl font-medium text-gray-300">
            Copyright © 2025.{" "}
            <span className="underline">Powered by Studio 22 SRL</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

