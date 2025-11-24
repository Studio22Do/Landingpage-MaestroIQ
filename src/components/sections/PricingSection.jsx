import { useState } from "react";
import Button from "../ui/Button";

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

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

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
        <div className="flex justify-center mb-12">
          <div className="flex rounded-[10px] border-2 border-primary overflow-hidden">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-4 rounded-[10px] font-medium text-xl transition-all duration-200 ${
                !isAnnual
                  ? "bg-primary text-white"
                  : "bg-transparent text-white"
              }`}
              aria-label="Plan mensual"
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-4 rounded-[10px] font-medium text-xl transition-all duration-200 ${
                isAnnual
                  ? "bg-primary text-white"
                  : "bg-transparent text-white"
              }`}
              aria-label="Plan anual"
            >
              Anual
            </button>
          </div>
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

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-xl font-medium text-primary text-center"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.isPopular ? (
                <button
                  className="w-full h-20 rounded-[15px] font-medium text-lg transition-all duration-300 bg-gradient-to-r from-[#9256E2] to-[#502F7C] text-white border border-primary hover:opacity-90"
                >
                  Adquirir Plan
                </button>
              ) : (
                <button
                  className="w-full h-20 rounded-[15px] font-medium text-lg transition-all duration-300 border border-primary text-white bg-transparent hover:border-primary/50"
                >
                  Adquirir Plan
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

