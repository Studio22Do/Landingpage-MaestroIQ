import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import KeyFeaturesSection from './components/sections/KeyFeaturesSection'
import MarketingIntelligenceSection from './components/sections/MarketingIntelligenceSection'
import PricingSection from './components/sections/PricingSection'
import CustomPlanSection from './components/sections/CustomPlanSection'
import HelpSection from './components/sections/HelpSection'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <Hero />

        <KeyFeaturesSection />

        <MarketingIntelligenceSection />

        <PricingSection />

        <CustomPlanSection />

        <HelpSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
