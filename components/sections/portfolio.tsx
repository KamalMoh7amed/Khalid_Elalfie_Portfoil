'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard } from '@/components/project-card'
import { ProjectGalleryModal } from '@/components/project-gallery-modal'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Modern Residential',
    description: 'Contemporary residential design that seamlessly blends elegance with practicality. This project showcases meticulous attention to detail and premium quality materials throughout.',
    category: 'Residential',
    thumbnail: '/Project1/1.jpg',
    images: ['/Project1/1.jpg', '/Project1/2.jpg', '/Project1/3.jpg', '/Project1/4.jpg', '/Project1/5.jpg', '/Project1/6.jpg', '/Project1/7.jpg', '/Project1/8.jpg', '/Project1/9.jpg', '/Project1/10.jpg', '/Project1/11.jpg', '/Project1/12.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-1',
  },
  {
    id: 2,
    title: 'Luxury Living',
    description: 'Luxurious residential design focused on comfort and sophistication. Every element was carefully selected to create a harmonious and beautiful living space.',
    category: 'Residential',
    thumbnail: '/Project2/1.jpg',
    images: ['/Project2/1.jpg', '/Project2/5.jpg', '/Project2/10.jpg', '/Project2/15.jpg', '/Project2/20.jpg', '/Project2/30.jpg', '/Project2/35.jpg', '/Project2/45+.jpg', '/Project2/50.jpg', '/Project2/55.jpg', '/Project2/60.jpg', '/Project2/65.jpg', '/Project2/70.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-2',
  },
  {
    id: 3,
    title: 'Commercial Space',
    description: 'Modern commercial space with intelligent design that combines aesthetics with functionality. Perfect for retail stores and professional presentations.',
    category: 'Commercial',
    thumbnail: '/Project3/1.jpg',
    images: ['/Project3/1.jpg', '/Project3/3.jpg', '/Project3/4.jpg', '/Project3/8.jpg', '/Project3/12.jpg', '/Project3/13.jpg', '/Project3/a.jpg', '/Project3/b.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-3',
  },
  {
    id: 8,
    title: 'Executive Office',
    description: 'Premium executive office designed to enhance productivity and professionalism. Features modern design and high-quality furniture throughout.',
    category: 'Commercial',
    thumbnail: '/Project4/1.jpg',
    images: ['/Project4/1.jpg', '/Project4/3.jpg', '/Project4/4.jpg', '/Project4/5.jpg', '/Project4/6.jpg', '/Project4/14.jpg', '/Project4/15.jpg', '/Project4/17.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-4',
  },
  {
    id: 5,
    title: 'Spa Bathroom',
    description: 'Luxury bathroom that resembles a private spa retreat. Designed for relaxation and tranquility with natural elements and soft lighting.',
    category: 'Residential',
    thumbnail: '/Project5/000A.jpg',
    images: ['/Project5/000A.jpg', '/Project5/000B.jpg', '/Project5/000C.jpg', '/Project5/000D.jpg', '/Project5/000E.jpg', '/Project5/000F.jpg', '/Project5/000G.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-5',
  },
  {
    id: 6,
    title: 'Luxury Boutique',
    description: 'Upscale retail shop with carefully curated displays. Design combines luxury with modernity to attract discerning customers.',
    category: 'Commercial',
    thumbnail: '/Project6/1.jpg',
    images: ['/Project6/1.jpg', '/Project6/5.jpg', '/Project6/10.jpg', '/Project6/15.jpg', '/Project6/25.jpg', '/Project6/30.jpg', '/Project6/35.jpg', '/Project6/36.jpg', '/Project6/A.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-6',
  },
  {
    id: 7,
    title: 'Reading Library',
    description: 'Elegant library designed for reading and relaxation. Combines aesthetics with functionality to create comfortable reading spaces.',
    category: 'Residential',
    thumbnail: '/Project7/1.jpg',
    images: ['/Project7/1.jpg', '/Project7/2.jpg', '/Project7/3.jpg', '/Project7/4.jpg', '/Project7/5.jpg', '/Project7/6.jpg', '/Project7/7.jpg', '/Project7/8.jpg', '/Project7/9.jpg', '/Project7/10.jpg', '/Project7/11.jpg', '/Project7/12.jpg', '/Project7/13.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-7',
  },
  {
    id: 4,
    title: 'Rooftop Terrace',
    description: 'Luxurious rooftop terrace with panoramic views. Modern design for outdoor entertainment and enjoying the open air.',
    category: 'Residential',
    thumbnail: '/Project8/01.jpg',
    images: ['/Project8/01.jpg', '/Project8/02.jpg', '/Project8/03.jpg', '/Project8/04.jpg', '/Project8/05.jpg', '/Project8/q1.jpg', '/Project8/q2.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-8',
  },
  {
    id: 9,
    title: 'Statement Dining',
    description: 'Elegant dining room with striking lighting features. Contemporary design that combines comfort and luxury for dining experiences.',
    category: 'Residential',
    thumbnail: '/Project9/1.jpg',
    images: ['/Project9/1.jpg', '/Project9/2.jpg', '/Project9/3.jpg', '/Project9/4.jpg', '/Project9/4+.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-9',
  },
  {
    id: 10,
    title: 'Wellness Retreat',
    description: 'Premium health and wellness space designed for relaxation and wellbeing. Combines technology with modern design for the ultimate retreat.',
    category: 'Residential',
    thumbnail: '/Project10/A.jpg',
    images: ['/Project10/A.jpg', '/Project10/B.jpg', '/Project10/C.jpg', '/Project10/D.jpg', '/Project10/E.jpg', '/Project10/G.jpg', '/Project10/H.jpg', '/Project10/I.jpg', '/Project10/J.jpg', '/Project10/K.jpg', '/Project10/L.jpg', '/Project10/M.jpg', '/Project10/d+.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-10',
  },
  {
    id: 11,
    title: 'Formula One Experience',
    description: 'Luxury automotive showroom inspired by Formula One aesthetics. High-performance design meets luxury hospitality in this exclusive space.',
    category: 'Commercial',
    thumbnail: '/Project11/F1.jpg',
    images: ['/Project11/F1.jpg', '/Project11/F2.jpg', '/Project11/F3.jpg', '/Project11/B+.jpg', '/Project11/E+.jpg', '/Project11/O+.jpg'],
    behanceUrl: 'https://www.behance.net/gallery/project-11',
  },
]

export function Portfolio() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const selectedProject = projects.find(p => p.id === selectedProjectId)

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNextImage()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrevImage()
      } else if (e.key === 'Escape') {
        setSelectedProjectId(null)
      }
    }

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <>
      <section
        id="portfolio"
        className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8"
        aria-label="Portfolio"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <p className="text-primary font-medium text-lg tracking-widest uppercase">
              Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-balance">
              Featured Projects
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              A curated collection of luxury interior design projects showcasing our creativity and expertise
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                imageCount={project.images.length}
                onClick={() => {
                  setSelectedProjectId(project.id)
                  setCurrentImageIndex(0)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedProject && (
        <ProjectGalleryModal
          isOpen={selectedProjectId !== null}
          onClose={() => {
            setSelectedProjectId(null)
            setCurrentImageIndex(0)
          }}
          project={selectedProject}
        />
      )}
    </>
  )
}

