'use client'

import { useState } from 'react'
import { TiltCard } from '@/components/tilt-card'
import { GalleryModal } from '@/components/gallery-modal'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Project One',
    category: 'Residential',
    description: 'Premium residential design showcasing contemporary elegance',
    thumbnail: '/Project1/1.jpg',
    images: ['/Project1/1.jpg', '/Project1/2.jpg', '/Project1/3.jpg', '/Project1/4.jpg', '/Project1/5.jpg', '/Project1/6.jpg', '/Project1/7.jpg', '/Project1/8.jpg', '/Project1/9.jpg', '/Project1/10.jpg', '/Project1/11.jpg', '/Project1/12.jpg'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Residential',
    description: 'Sophisticated interior design with modern aesthetics',
    thumbnail: '/Project2/1.jpg',
    images: ['/Project2/1.jpg', '/Project2/5.jpg', '/Project2/10.jpg', '/Project2/15.jpg', '/Project2/20.jpg', '/Project2/30.jpg', '/Project2/35.jpg', '/Project2/45+.jpg', '/Project2/50.jpg', '/Project2/55.jpg', '/Project2/60.jpg', '/Project2/65.jpg', '/Project2/70.jpg'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'Commercial',
    description: 'Elegant commercial space with refined design elements',
    thumbnail: '/Project3/1.jpg',
    images: ['/Project3/1.jpg', '/Project3/3.jpg', '/Project3/4.jpg', '/Project3/8.jpg', '/Project3/12.jpg', '/Project3/13.jpg', '/Project3/a.jpg', '/Project3/b.jpg'],
    year: '2024',
  },
  {
    id: 4,
    title: 'Project Four',
    category: 'Commercial',
    description: 'Professional workspace designed for modern business',
    thumbnail: '/Project4/1.jpg',
    images: ['/Project4/1.jpg', '/Project4/3.jpg', '/Project4/4.jpg', '/Project4/5.jpg', '/Project4/6.jpg', '/Project4/14.jpg', '/Project4/15.jpg', '/Project4/17.jpg'],
    year: '2023',
  },
  {
    id: 5,
    title: 'Project Five',
    category: 'Residential',
    description: 'Luxurious retreat with spa-like tranquility',
    thumbnail: '/Project5/000A.jpg',
    images: ['/Project5/000A.jpg', '/Project5/000B.jpg', '/Project5/000C.jpg', '/Project5/000D.jpg', '/Project5/000E.jpg', '/Project5/000F.jpg', '/Project5/000G.jpg'],
    year: '2023',
  },
  {
    id: 6,
    title: 'Project Six',
    category: 'Commercial',
    description: 'Upscale retail environment with curated aesthetics',
    thumbnail: '/Project6/1.jpg',
    images: ['/Project6/1.jpg', '/Project6/5.jpg', '/Project6/10.jpg', '/Project6/15.jpg', '/Project6/25.jpg', '/Project6/30.jpg', '/Project6/35.jpg', '/Project6/36.jpg', '/Project6/A.jpg'],
    year: '2023',
  },
  {
    id: 7,
    title: 'Project Seven',
    category: 'Residential',
    description: 'Sophisticated living space with timeless appeal',
    thumbnail: '/Project7/1.jpg',
    images: ['/Project7/1.jpg', '/Project7/2.jpg', '/Project7/3.jpg', '/Project7/4.jpg', '/Project7/5.jpg', '/Project7/6.jpg', '/Project7/7.jpg', '/Project7/8.jpg', '/Project7/9.jpg', '/Project7/10.jpg', '/Project7/11.jpg', '/Project7/12.jpg', '/Project7/13.jpg'],
    year: '2023',
  },
  {
    id: 8,
    title: 'Project Eight',
    category: 'Residential',
    description: 'Modern outdoor living with panoramic design',
    thumbnail: '/Project8/01.jpg',
    images: ['/Project8/01.jpg', '/Project8/02.jpg', '/Project8/03.jpg', '/Project8/04.jpg', '/Project8/05.jpg', '/Project8/q1.jpg', '/Project8/q2.jpg'],
    year: '2024',
  },
  {
    id: 9,
    title: 'Project Nine',
    category: 'Residential',
    description: 'Contemporary design with exceptional attention to detail',
    thumbnail: '/Project9/1.jpg',
    images: ['/Project9/1.jpg', '/Project9/2.jpg', '/Project9/3.jpg', '/Project9/4.jpg', '/Project9/4+.jpg'],
    year: '2024',
  },
  {
    id: 10,
    title: 'Project Ten',
    category: 'Residential',
    description: 'Premium wellness space blending comfort and luxury',
    thumbnail: '/Project10/A.jpg',
    images: ['/Project10/A.jpg', '/Project10/B.jpg', '/Project10/C.jpg', '/Project10/D.jpg', '/Project10/E.jpg', '/Project10/G.jpg', '/Project10/H.jpg', '/Project10/I.jpg', '/Project10/J.jpg', '/Project10/K.jpg', '/Project10/L.jpg', '/Project10/M.jpg', '/Project10/d+.jpg'],
    year: '2024',
  },
  {
    id: 11,
    title: 'Formula One Experience',
    category: 'Commercial',
    description: 'Luxury automotive showroom inspired by Formula One aesthetics',
    thumbnail: '/Project11/F1.jpg',
    images: ['/Project11/F1.jpg', '/Project11/F2.jpg', '/Project11/F3.jpg', '/Project11/B+.jpg', '/Project11/E+.jpg', '/Project11/O+.jpg'],
    year: '2024',
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const currentProject = projects.find((p) => p.id === selectedProject)

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId)
    setSelectedImageIndex(0)
  }

  return (
    <>
      <section
        id="projects"
        className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8"
        aria-label="Featured projects portfolio"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-primary font-medium text-lg tracking-widest uppercase">
              Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-balance">
              Featured Projects
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Explore our curated collection of interior design projects that showcase
              timeless elegance and contemporary style.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <TiltCard key={project.id} className="group h-full cursor-pointer">
                <div 
                  className="flex flex-col h-full"
                  onClick={() => handleProjectClick(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleProjectClick(project.id)
                    }
                  }}
                >
                  {/* Image container */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold">View Gallery</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 space-y-4 bg-card/50 dark:bg-card/30">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs text-foreground/50">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold font-display text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-primary/70">
                      <span>📷 {project.images.length} photos</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {currentProject && (
        <GalleryModal
          images={currentProject.images}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          initialIndex={selectedImageIndex}
          projectTitle={currentProject.title}
        />
      )}
    </>
  )
}
