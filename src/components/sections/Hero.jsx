import ButtonLarge from "../ui/ButtonLarge";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contenido del lado izquierdo */}
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold leading-tight mb-8 text-white">
            <span className="text-primary font-bold">Centraliza</span> todas tus tareas en un solo lugar
          </h1>

          <p className="text-3xl font-medium text-white mb-12 leading-relaxed">
            Una <span className="text-primary">aplicación simple, intuitiva y poderosa</span> para organizar tu
            trabajo.
          </p>

          <div className="flex justify-center lg:justify-start">
            <ButtonLarge variant="outline">Empieza ya</ButtonLarge>
          </div>
        </div>

        {/* Lado derecho - se agregará la imagen */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-lg">
            {/* Aquí irá la imagen de los dispositivos */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center text-gray-400">
              <p>Imagen de dispositivos</p>
              <p className="text-sm mt-2">
                Se agregará cuando envíes la imagen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
