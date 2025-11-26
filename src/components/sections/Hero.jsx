import ButtonLarge from "../ui/ButtonLarge";
import heroImage from "../../assets/Group 237553.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        {/* Contenido del lado izquierdo */}
        <div className="text-center lg:text-left z-10">
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

        {/* Lado derecho - imagen */}
        <div className="flex justify-center lg:justify-end relative lg:overflow-visible">
          <img
            src={heroImage}
            alt="Dispositivos MaestroIQ"
            className="w-full max-w-5xl lg:max-w-none lg:w-[800px] xl:w-[900px] h-auto lg:absolute lg:right-0 lg:translate-x-1/4 lg:top-1/2 lg:-translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
