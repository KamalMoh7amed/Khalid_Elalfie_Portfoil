'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const showcaseImages = [
  { src: '/COVERS/2.jpg', title: 'Experience' },
  { src: '/COVERS/4.jpg', title: 'The Quality' },

]

export function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseImages.length)
    }, 5000) // Change image every 5 seconds

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
      className="relative w-full h-screen overflow-hidden"
      aria-label="Portfolio showcase carousel"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Carousel container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={showcaseImages[currentIndex].src}
            alt={`Showcase ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Text overlay with geometric frame */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 pointer-events-none">
            <motion.div
              className="relative pointer-events-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Geometric frame */}
              <div className="absolute -inset-8 md:-inset-12 border-2 border-white" />

              {/* Text content */}
              <div className="relative px-8 md:px-12">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-center">
                  {showcaseImages[currentIndex].title}
                </h2>
              </div>
            </motion.div>

            {/* VIEW PROJECT Button */}
            <motion.button
              onClick={scrollToProjects}
              className="group relative px-6 md:px-10 py-2 md:py-3 bg-white/25 hover:bg-white/40 backdrop-blur-md text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 border border-white/50 hover:border-white/80 pointer-events-auto shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                View My Project
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* CTA Button - Hidden on small screens */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button
          onClick={scrollToProjects}
          className="group relative px-8 md:px-12 py-3 md:py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 border border-white/30 hover:border-white/50"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Go to More Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </button>
      </motion.div>

      {/* Carousel indicators */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {showcaseImages.map((_, index) => (
          <motion.button
            key={index}
            className={`h-1 rounded-full transition-all ${index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
            onClick={() => {
              setCurrentIndex(index)
              setAutoPlay(false)
            }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  )
}
