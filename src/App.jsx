import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import KeyFeaturesSection from './components/sections/KeyFeaturesSection'
import MarketingIntelligenceSection from './components/sections/MarketingIntelligenceSection'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <Hero />

        <KeyFeaturesSection />

        <MarketingIntelligenceSection />
      </main>
    </div>
  )
}

export default App
