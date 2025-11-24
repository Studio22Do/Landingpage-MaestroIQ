import ButtonLarge from "../ui/ButtonLarge";
import vectorBg from "../../assets/Vectorbg.png";
import tabletImage from "../../assets/Group 237552.png";

const MarketingIntelligenceSection = () => {
  return (
    <section className="w-full relative" style={{ minHeight: "100vh" }}>
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url(${vectorBg})` }}
      />
      <div
        className="relative z-10 py-80 xl:py-[30rem] flex items-center justify-center pl-4 sm:pl-6 w-full overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className=" pl-24 flex flex-col lg:flex-row gap-12 items-center justify-between w-full">
          {/* Contenido del lado izquierdo */}
          <div className="text-center lg:text-left w-7/12">
            <h2 className="text-6xl font-bold leading-tight mb-8 text-white ">
              <span className="text-primary">Unifica</span> tus herramientas.{" "}
              <span className="text-primary">Multiplica</span> tu impacto.
            </h2>

            <p className="text-3xl font-medium text-white mb-12 leading-relaxed">
              Accede a información clave en medios, marketing y análisis de
              mercado para impulsar decisiones estratégicas más rápidas y
              efectivas.
            </p>

            <div className="flex justify-center lg:justify-start">
              <ButtonLarge variant="outline">Regístrate</ButtonLarge>
            </div>
          </div>

          {/* Lado derecho - imagen de la tablet */}
          <div className="flex justify-center lg:justify-end relative -right-24">
            <img 
              src={tabletImage} 
              alt="Marketing Intelligence Console" 
              className="w-full max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingIntelligenceSection;
