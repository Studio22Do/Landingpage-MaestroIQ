import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import KeyFeaturesSection from './components/sections/KeyFeaturesSection'
import MarketingIntelligenceSection from './components/sections/MarketingIntelligenceSection'
import PricingSection from './components/sections/PricingSection'
import CustomPlanSection from './components/sections/CustomPlanSection'
import HelpSection from './components/sections/HelpSection'
import TermsPage from './components/pages/TermsPage'

const App = () => {
  const isTermsPage = window.location.pathname.toLowerCase().includes('terminos')

  if (isTermsPage) {
    return (
      <LanguageProvider>
        <div
          className="min-h-screen w-full"
          style={{
            background: '#201C2E',
            backgroundImage:
              'linear-gradient(8deg, rgba(32, 28, 46, 1) 10%, rgba(99, 93, 179, 1) 50%, rgba(32, 28, 46, 1) 90%)',
          }}
        >
          <main className="pt-10 sm:pt-12">
            <TermsPage />
          </main>
        </div>
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <div
        className="min-h-screen w-full"
        style={{
          background: '#201C2E',
          backgroundImage:
            'linear-gradient(8deg, rgba(32, 28, 46, 1) 10%, rgba(99, 93, 179, 1) 50%, rgba(32, 28, 46, 1) 90%)',
        }}
      >
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
    </LanguageProvider>
  )
}

export default App
