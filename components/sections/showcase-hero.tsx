'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const showcaseSlides = [
  {
    title: 'Experience\nThe\nQuality',
    image: '/COVERS/2.jpg',
    label: null,
  },
  {
    title: 'Luxurious\nLiving Room',
    image: '/COVERS/4.jpg',
    label: null,
  },
]

export function ShowcaseHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const scrollToProjects = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="showcase"
      className="relative w-full h-screen overflow-hidden bg-background"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <Image
            src={showcaseSlides[currentSlide].image}
            alt={showcaseSlides[currentSlide].title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

          {/* Top label (if exists) */}
          {showcaseSlides[currentSlide].label && (
            <motion.div
              className="absolute top-8 md:top-16 lg:top-24 left-8 md:left-16 lg:left-24"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs md:text-sm font-semibold text-white/60 uppercase tracking-widest">
                {showcaseSlides[currentSlide].label}
              </p>
            </motion.div>
          )}

          {/* Main content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-16 lg:pl-24">
            <motion.div
              className="flex items-center gap-6 md:gap-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Vertical decorative line */}
              <div className="h-24 md:h-32 lg:h-40 w-1 bg-white/60" />

              {/* Text content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight whitespace-pre-line max-w-2xl">
                  {showcaseSlides[currentSlide].title}
                </h1>
              </div>
            </motion.div>
          </div>

          {/* Bottom project link */}
          {currentSlide === 1 && (
            <motion.button
              onClick={scrollToProjects}
              className="absolute bottom-8 md:bottom-16 lg:bottom-24 left-8 md:left-16 lg:left-24 group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              <span className="text-sm md:text-base font-medium uppercase tracking-wider">
                View Project
              </span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Scroll indicator - bottom center */}
      <motion.div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Left line */}
        <div className="w-6 md:w-8 h-0.5 bg-white/60" />

        {/* Center dot - accent color */}
        <motion.div
          className="w-3 h-3 rounded-full bg-primary"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Right line */}
        <div className="w-6 md:w-8 h-0.5 bg-white/60" />
      </motion.div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 flex gap-2 z-20">
        {showcaseSlides.map((_, index) => (
          <motion.button
            key={index}
            className={`h-1 rounded-full transition-all ${index === currentSlide
              ? 'bg-white w-8'
              : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
            onClick={() => {
              setCurrentSlide(index)
              setAutoPlay(false)
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  )
}
