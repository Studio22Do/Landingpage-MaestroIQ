import ButtonLarge from "../ui/ButtonLarge";
import layerImage from "../../assets/Layer.png";

const CustomPlanSection = () => {
  return (
    <section id="personalizado" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Contenido del lado izquierdo */}
          <div className="text-center lg:text-left flex-[1.2]">
            <h2 className="text-6xl font-bold leading-tight mb-8 text-white">
              ¿Necesitas un plan{" "}
              <span className="text-primary">personalizado?</span>
            </h2>

            <p className="text-3xl font-medium text-white mb-12 leading-relaxed">
              Reúne todo lo que necesitas en un solo espacio, una herramienta
              clara, eficiente y flexible para gestionar como prefieras.
            </p>

            <div className="flex justify-center lg:justify-start">
              <ButtonLarge variant="outline">Empieza ya</ButtonLarge>
            </div>
          </div>

          {/* Lado derecho - imagen */}
          <div className="flex -mb-20 justify-center lg:justify-end flex-[0.8] lg:mt-16">
            <img
              src={layerImage}
              alt="Infraestructura de datos personalizada"
              className="w-full max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPlanSection;
