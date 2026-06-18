import { useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import FeatureBar from '../components/sections/FeatureBar'
import AboutSection from '../components/sections/AboutSection'
import FocusAreas from '../components/sections/FocusAreas'
import DevelopmentWorks from '../components/sections/DevelopmentWorks'
import LatestUpdates from '../components/sections/LatestUpdates'
import ConnectWithUs from '../components/sections/ConnectWithUs'
import LoginModal from '../components/auth/LoginModal'

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={() => setLoginOpen(true)} />
      <main>
        <Hero />
        <FeatureBar />

        <section className="border-b border-border py-10">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-3">
            <AboutSection />
            <FocusAreas />
            <DevelopmentWorks />
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-8 lg:flex-row">
            <LatestUpdates />
            <ConnectWithUs />
          </div>
        </section>
      </main>
      <Footer />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  )
}
