const cookieTypes = [
  {
    type: "Cookies necesarias / esenciales",
    duration: "De sesión",
    administered: "Nosotros",
    purpose: "Esenciales para proporcionar los servicios del sitio web.",
  },
  {
    type: "Cookies de preferencias",
    duration: "Persistentes",
    administered: "Nosotros",
    purpose: "Recuerdan elecciones y preferencias del usuario.",
  },
  {
    type: "Cookies de estadísticas",
    duration: "Persistentes",
    administered: "Terceros",
    purpose: "Recopilan información sobre el uso del sitio web.",
  },
  {
    type: "Cookies de marketing",
    duration: "Persistentes",
    administered: "Terceros",
    purpose: "Rastreo de hábitos de navegación para mostrar publicidad personalizada.",
  },
];

const PrivacyPage = () => {
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
              <p className="text-sm text-white/70">Política de Privacidad</p>
              <img src="/logo.png" alt="MaestroIQ Logo" className="h-9 w-auto" />
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

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg backdrop-blur-sm space-y-8">
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            En MaestroIQ nos comprometemos a proteger la privacidad de nuestros clientes y usuarios. Toda la información personal recopilada a través de nuestro sitio web será utilizada para la gestión de usuarios, la comunicación con el cliente y el cumplimiento de obligaciones legales. No compartiremos, venderemos ni alquilaremos su información personal a terceros no autorizados.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            Los datos personales que recopilamos incluyen, entre otros: nombre, dirección, teléfono, correo electrónico, información de pago y cualquier otra información que el cliente nos proporcione voluntariamente. Estos datos se almacenan en servidores seguros y se procesan conforme a la Ley No. 172-13 de Protección de Datos Personales de la República Dominicana.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            El cliente tiene derecho a acceder, rectificar, actualizar y solicitar la eliminación de sus datos personales en cualquier momento, contactándonos a través del correo soporte@maestroiq.io. Asimismo, el usuario puede oponerse al uso de sus datos para fines de marketing directo.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            Al utilizar nuestro sitio web y proporcionarnos sus datos personales, usted acepta nuestra Política de Privacidad y nos autoriza a tratarlos conforme a lo aquí descrito.
          </p>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-primary">Política de Cookies</h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/80">
              La seguridad de sus datos personales es primordial. Nuestras cookies cumplen con normativas globales de privacidad. Algunas son esenciales para la navegación y funciones del sitio. Otras, no esenciales, nos ayudan a entender el uso del sitio para mejorarlo.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-white/10">
                  <tr className="text-sm sm:text-base">
                    <th className="px-4 py-3 sm:px-5 sm:py-3">Tipo de cookie</th>
                    <th className="px-4 py-3 sm:px-5 sm:py-3">Duración</th>
                    <th className="px-4 py-3 sm:px-5 sm:py-3">Administradas</th>
                    <th className="px-4 py-3 sm:px-5 sm:py-3">Propósito</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {cookieTypes.map((cookie) => (
                    <tr key={cookie.type} className="text-sm sm:text-base">
                      <td className="px-4 py-3 sm:px-5 sm:py-4">{cookie.type}</td>
                      <td className="px-4 py-3 sm:px-5 sm:py-4">{cookie.duration}</td>
                      <td className="px-4 py-3 sm:px-5 sm:py-4">{cookie.administered}</td>
                      <td className="px-4 py-3 sm:px-5 sm:py-4">{cookie.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-white/80">
              El usuario puede configurar su navegador para rechazar todas o algunas cookies no esenciales, sin que ello afecte el funcionamiento básico del sitio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

