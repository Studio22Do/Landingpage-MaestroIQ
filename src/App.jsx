const App = () => {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          ¡Tailwind CSS Funciona!
        </h1>
        <p className="text-2xl text-white mb-8">
          Si ves este texto en blanco sobre fondo rojo, Tailwind está funcionando correctamente.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl">
          Botón de Prueba
        </button>
      </div>
    </div>
  )
}

export default App
