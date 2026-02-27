'use client'

import { Navigation } from '@/components/navigation'
import { ParticlesEnhanced } from '@/components/particles-enhanced'
import { MagneticCursor } from '@/components/magnetic-cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { ShowcaseHero } from '@/components/sections/showcase-hero'
import { Hero } from '@/components/sections/hero'
import { AboutMe } from '@/components/sections/about-me'
import { Services } from '@/components/sections/services'
import { Portfolio } from '@/components/sections/portfolio'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background effects */}
      <ParticlesEnhanced />
      <MagneticCursor />
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      {/* Main Sections */}
      <ShowcaseHero />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}
