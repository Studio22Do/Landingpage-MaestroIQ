import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import KeyFeaturesSection from './components/sections/KeyFeaturesSection'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <Hero />

        <KeyFeaturesSection />
      </main>
    </div>
  )
}

export default App
