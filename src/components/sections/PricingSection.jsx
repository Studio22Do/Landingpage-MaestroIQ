import { useState } from "react";
import ButtonLarge from "../ui/ButtonLarge";

const pricingPlans = [
  {
    id: "allegro",
    name: "Allegro",
    monthlyPrice: "$19.95/month",
    features: [
      "10 apps included",
      "Access to basic features",
      "Email support",
      "Monthly usage report",
    ],
    isPopular: false,
  },
  {
    id: "andante",
    name: "Andante",
    monthlyPrice: "$39.95/month",
    features: [
      "15 apps included",
      "Access to advanced features",
      "Priority email support",
      "Weekly usage insights",
      "Early access to new features",
    ],
    isPopular: true,
  },
  {
    id: "fortissimo",
    name: "Fortissimo",
    monthlyPrice: "$69.95/month",
    features: [
      "25 apps included",
      "Full feature set",
      "Dedicated account manager",
      "Real-time analytics",
    ],
    isPopular: false,
  },
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-8">
            Descubre herramientas poderosas
          </h2>
          <p className="text-3xl font-medium text-white max-w-4xl mx-auto leading-relaxed">
            Una consola centralizada de inteligencia y automatización diseñada
            para optimizar tus operaciones, agilizar flujos de contenido y
            ofrecerte insights que realmente impulsan decisiones.
          </p>
        </div>

        {/* Toggle Mensual/Anual */}
        <div className="flex justify-center gap-4 mb-12">
          <ButtonLarge
            onClick={() => setIsAnnual(false)}
            variant={!isAnnual ? "primary" : "outline"}
            className={`${
              !isAnnual ? "bg-primary" : ""
            }`}
            aria-label="Plan mensual"
          >
            Mensual
          </ButtonLarge>
          <ButtonLarge
            onClick={() => setIsAnnual(true)}
            variant={isAnnual ? "primary" : "outline"}
            className={`${
              isAnnual ? "bg-primary" : ""
            }`}
            aria-label="Plan anual"
          >
            Anual
          </ButtonLarge>
        </div>

        {/* Tarjetas de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <article
              key={plan.id}
              className={`rounded-[30px] bg-gradient-to-br from-[#342A5B] to-[#201C2E] p-8 flex flex-col ${
                plan.isPopular
                  ? "border-2 border-primary shadow-lg"
                  : "border border-primary/50"
              }`}
            >
              <h3 className="text-4xl font-bold text-white text-center mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-medium text-white text-center mb-8">
                {plan.monthlyPrice}
              </p>

              <ul className="flex-1 space-y-1 mb-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-xl font-medium text-primary text-center"
                  >
                    - {feature}
                  </li>
                ))}
              </ul>

              {plan.isPopular ? (
                <ButtonLarge
                  variant="outline"
                  className="w-full h-20 rounded-[15px] bg-gradient-to-r from-secondary to-gradient-end border-0 hover:opacity-90"
                >
                  Adquirir Plan
                </ButtonLarge>
              ) : (
                <ButtonLarge
                  variant="outline"
                  className="w-full h-20 rounded-[15px] "
                >
                  Adquirir Plan
                </ButtonLarge>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

