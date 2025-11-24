import ButtonLarge from "../ui/ButtonLarge";

const MarketingIntelligenceSection = () => {
  return (
    <section className="py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Contenido del lado izquierdo */}
        <div className="text-center lg:text-left w-7/12">
          <h2 className="text-6xl font-bold leading-tight mb-8 text-white ">
            <span className="text-primary">Unifica</span> tus herramientas.{" "}
            <span className="text-primary">Multiplica</span> tu impacto.
          </h2>

          <p className="text-3xl font-medium text-white mb-12 leading-relaxed">
            Accede a información clave en medios, marketing y análisis de mercado para impulsar decisiones estratégicas más rápidas y efectivas.
          </p>

          <div className="flex justify-center lg:justify-start">
            <ButtonLarge variant="outline">Regístrate</ButtonLarge>
          </div>
        </div>

        {/* Lado derecho - se agregará la imagen */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-lg">
            {/* Aquí irá la imagen de la consola de marketing intelligence */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center text-gray-400">
              <p>Imagen de consola</p>
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

export default MarketingIntelligenceSection;

