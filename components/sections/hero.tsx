'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TypingText } from '@/components/typing-text'

export function Hero() {
  const fullText = "KHALID ELALFIE"

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center pt-16 sm:pt-20 overflow-hidden"
      aria-label="Hero section with greeting"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm sm:text-base font-medium text-primary mb-4 tracking-widest uppercase">
            Welcome to my portfolio
          </p>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-montserrat mb-4 sm:mb-6 text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TypingText text={fullText} speed={60} delay={600} />
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Interior Designer
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-semibold text-foreground/70 uppercase tracking-widest">
            Social Links
          </p>
          <div className="flex gap-4 sm:gap-6">

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/96550531121"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center border border-white/20 group-hover:border-white/40">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/khalidelalfie/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center border border-white/20 group-hover:border-white/40">
                <Image
                  src="/business.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
            </motion.a>

            {/* Behance */}
            <motion.a
              href="https://www.behance.net/KhalidElAlfie"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors flex items-center justify-center border border-white/20 group-hover:border-white/40">
                <Image
                  src="/behance.png"
                  alt="Behance"
                  width={24}
                  height={24}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-3 sm:gap-4 justify-center flex-wrap px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#portfolio"
            className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Parallax background text - FIXED */}
      <motion.div
        className="absolute inset-0 -z-10 flex items-center justify-center text-9xl font-bold opacity-5 pointer-events-none select-none"
        initial={{ y: 0 }}
        animate={{ y: '20%' }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      >
        Design
      </motion.div>
    </section>
  )
}
