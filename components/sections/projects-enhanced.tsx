'use client'

import { motion } from 'framer-motion'
import { TiltCardEnhanced } from '../tilt-card-enhanced'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Concept & Mood',
    description: 'Inspiration and atmosphere',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Design Philosophy',
    description: 'Refined and thoughtful',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Color & Materials',
    description: 'Cohesive palette',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'Layout & Functionality',
    description: 'Spatial harmony',
    image: 'https://images.unsplash.com/photo-1565182999555-8b4b8f7e2b6f?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    title: 'Key Features',
    description: 'Transform in action',
    image: 'https://images.unsplash.com/photo-1557778172-0d91329e28b8?w=500&h=500&fit=crop',
  },
  {
    id: 6,
    title: 'Design Goals',
    description: 'Luxury and comfort',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop',
  },
]

export function ProjectsEnhanced() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Featured projects portfolio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of luxury interior design concepts, each telling a unique story of aesthetic refinement.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <TiltCardEnhanced className="h-full overflow-hidden rounded-lg">
                <div className="relative w-full h-72">
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <motion.h3
                      className="font-display text-2xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-accent text-sm font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>
                </div>
              </TiltCardEnhanced>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
