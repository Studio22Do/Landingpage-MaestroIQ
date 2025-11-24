import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import KeyFeaturesSection from './components/sections/KeyFeaturesSection'
import MarketingIntelligenceSection from './components/sections/MarketingIntelligenceSection'
import PricingSection from './components/sections/PricingSection'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <Hero />

        <KeyFeaturesSection />

        <MarketingIntelligenceSection />

        <PricingSection />
      </main>
    </div>
  )
}

export default App
