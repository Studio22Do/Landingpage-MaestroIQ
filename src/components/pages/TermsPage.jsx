import { useMemo } from "react";

const TermsPage = () => {
  const sections = useMemo(
    () => [
      {
        title: "1. Definiciones",
        content: [
          "Usuario/Cliente: Persona natural o jurídica que accede, usa o se registra en la Plataforma.",
          "Servicios: Herramientas, funciones, suscripciones y contenidos disponibles en MaestroIQ.",
          "Cuenta: Perfil personal del usuario registrado para acceder a los servicios.",
          "Suscripción: Plan pago elegido por el usuario para acceder a servicios de la Plataforma.",
        ],
      },
      {
        title: "2. Aceptación de los Términos",
        content: [
          "El uso de la Plataforma está condicionado a la aceptación de estos Términos. Si no estás de acuerdo con ellos, no deberás usar ni acceder a MaestroIQ.",
        ],
      },
      {
        title: "3. Registro y Cuenta",
        content: [
          "Para acceder a ciertos servicios, deberás registrarte y crear una cuenta.",
          "Debes proporcionar datos verdaderos y actualizados.",
          "Eres responsable por la seguridad de tu cuenta y cualquier actividad que ocurra en ella.",
        ],
      },
      {
        title: "4. Servicios y Uso Permitido",
        content: [
          "La Plataforma ofrece herramientas tecnológicas (software, dashboards, APIs u otros servicios relacionados con IA, datos y automatización, según corresponda).",
          "El uso debe ser conforme a la ley, respetando derechos de propiedad intelectual y sin intentar acceder a funciones no autorizadas.",
        ],
      },
      {
        title: "5. Suscripciones y Pagos",
        content: [
          "El acceso a funciones avanzadas o completas de MaestroIQ requiere una suscripción.",
          "Los usuarios autorizan a MaestroIQ a cobrar las cuotas mediante el método de pago proporcionado.",
          "Los pagos no son reembolsables, salvo que la ley indique lo contrario o se acuerde por escrito.",
          "Los precios de las suscripciones pueden cambiar, pero los cambios se notificarán con anticipación adecuada.",
        ],
      },
      {
        title: "6. Renovación y Cancelación",
        content: [
          "Las suscripciones se renovarán automáticamente al final del periodo a menos que el usuario cancele anticipadamente.",
          "El usuario puede cancelar su suscripción desde la configuración de la cuenta o contactando el soporte.",
          "La cancelación detiene futuras renovaciones, pero no reembolsa cuotas ya cobradas.",
        ],
      },
      {
        title: "7. Propiedad Intelectual",
        content: [
          "Todos los derechos de la plataforma, software, documentación, marca, y contenidos pertenecen a MaestroIQ o sus licenciantes.",
          "El uso de MaestroIQ no transfiere propiedad intelectual al usuario.",
        ],
      },
      {
        title: "8. Privacidad de Datos",
        content: [
          "La información personal se trata conforme a la Política de Privacidad de MaestroIQ.",
          "El usuario consiente la recolección, uso y almacenamiento de datos según esa política (incluyendo uso para análisis y mejoras del servicio).",
        ],
      },
      {
        title: "9. Uso Prohibido",
        content: [
          "Los usuarios no pueden:",
          "Compartir credenciales o sublicenciar el acceso.",
          "Usar la Plataforma para actividades ilegales o que afecten a terceros.",
          "Modificar, reproducir o distribuir nuestros sistemas sin permiso.",
        ],
      },
      {
        title: "10. Limitación de Responsabilidad",
        content: [
          "La Plataforma se ofrece “tal cual” y no garantiza resultados específicos de negocio.",
          "MaestroIQ no será responsable por daños indirectos, pérdida de datos, ingresos o reputación.",
        ],
      },
      {
        title: "11. Modificaciones a los Términos",
        content: [
          "MaestroIQ puede modificar estos términos.",
          "Las actualizaciones serán publicadas y, en casos importantes, notificadas.",
          "El uso continuo tras cambios implica aceptación de los nuevos términos.",
        ],
      },
      {
        title: "12. Ley Aplicable y Jurisdicción",
        content: [
          "Estos términos se rigen por las leyes de [país/estado correspondiente].",
          "Cualquier disputa será resuelta en tribunales competentes de esa jurisdicción.",
        ],
      },
      {
        title: "13. Contacto",
        content: [
          "Si tienes dudas sobre estos términos o quieres soporte, puedes escribir a: soporte@maestroiq.io.",
        ],
      },
    ],
    []
  );

  const handleBackHome = () => {
    window.location.href = "/";
  };

  const handleKeyDownBackHome = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleBackHome();
    }
  };

  return (
    <div className="min-h-screen w-full text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white/70">Términos y Condiciones</p>
              <img
                src="/logo.png"
                alt="MaestroIQ Logo"
                className="h-9 w-auto"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleBackHome}
            onKeyDown={handleKeyDownBackHome}
            className="text-sm sm:text-base px-4 py-2 rounded-lg border border-white/20 hover:border-primary hover:text-primary transition-colors"
            aria-label="Volver al inicio"
          >
            Volver al inicio
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg backdrop-blur-sm">
          <p className="text-base sm:text-lg leading-relaxed text-white/80 mb-8">
            MaestroIQ (en adelante, la “Plataforma”), operada por Studio22
            Digital Marketing, SRL. Estos Términos y Condiciones regulan el uso
            de la Plataforma, los servicios ofrecidos y los pagos asociados. Al
            registrarte, acceder o utilizar la Plataforma, aceptas estar
            legalmente obligado por estos términos.
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  {section.title}
                </h2>
                <div className="space-y-2">
                  {section.content.map((paragraph, index) => (
                    <p
                      key={paragraph + index}
                      className="text-base sm:text-lg leading-relaxed text-white/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
