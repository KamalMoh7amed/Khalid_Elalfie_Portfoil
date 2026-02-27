'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'

function CountUpAnimation({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = target / (duration * 60)
    const interval = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [inView, target, duration])

  return <span ref={ref}>{count}+</span>
}

export function AboutEnhanced() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const stats = [
    { label: 'Projects Completed', value: 150 },
    { label: 'Satisfied Clients', value: 200 },
    { label: 'Years Experience', value: 15 },
    { label: 'Awards Won', value: 45 },
  ]

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      aria-label="About our design philosophy"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent">
                About Us
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="font-display text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Design <span className="text-accent">Philosophy</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe in creating spaces that transcend mere aesthetics. Every project is a harmonious blend of functionality, elegance, and personal expression. Our approach prioritizes understanding our clients' vision and transforming it into reality with meticulous attention to detail.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From concept to completion, we ensure that every element—from color palettes to spatial flow—reflects sophistication and timeless appeal. Our designs celebrate the intersection of form and function, creating environments that inspire and endure.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="font-display text-4xl font-bold text-accent mb-2">
                    <CountUpAnimation target={stat.value} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-96 lg:h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop"
                alt="Design studio"
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Design values */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { title: 'Timeless Elegance', description: 'Designs that transcend trends and remain beautiful for years to come.' },
            { title: 'Functional Beauty', description: 'Every aesthetic choice serves a purpose in creating usable, comfortable spaces.' },
            { title: 'Personal Expression', description: 'We celebrate individuality through custom designs tailored to each client.' },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-accent/20 hover:border-accent/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="font-display text-xl font-bold mb-3 text-accent">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
