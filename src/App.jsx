import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import ServicesSection from './components/sections/ServicesSection'
import CTASection from './components/sections/CTASection'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <Hero />

        <ServicesSection />
        <CTASection />
      </main>
    </div>
  )
}

export default App
