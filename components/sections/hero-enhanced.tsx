'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export function HeroEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden"
      aria-label="Hero section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/50" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent mb-6">
            Welcome to Luxury Design
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Interior
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Design Concept
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Experience sophisticated spaces where contemporary aesthetics meet timeless elegance. Every detail thoughtfully crafted for refined living.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#projects"
            className="inline-flex flex-col items-center gap-2 text-primary hover:text-primary/70 transition-colors"
            aria-label="Scroll down to see more projects"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
