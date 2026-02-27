'use client'

import { Palette, Box, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Luxury Interior Design',
    description: 'Crafting sophisticated spaces with timeless aesthetics and contemporary elegance for high-end residential and commercial projects.',
    features: ['Concept Development', 'Design Planning', 'Space Optimization', 'Material Curation']
  },
  {
    icon: Box,
    title: '3D Visualization & Rendering',
    description: 'Creating photorealistic renders that bring your vision to life before construction begins. High-quality visualizations for presentations and client approvals.',
    features: ['V-Ray Rendering', 'Corona Rendering', 'Realistic Textures', 'Professional Presentations']
  },
  {
    icon: Lightbulb,
    title: 'Optimized Layouts & Planning',
    description: 'From space planning and lifestyle-driven concepts to functional, beautiful layouts. Every element is designed for flow, comfort, and elegance.',
    features: ['Furniture Layouts', 'Circulation Flow', 'Mood Boards', 'Lifestyle Integration']
  }
]

export function Services() {

  return (
    <section
      id="services"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/50"
      aria-label="Services offered"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat mb-3 sm:mb-4">
            Services <span className="text-accent">Offered</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-2">
            Luxury Interior Design & Visualization Services with Optimized Layouts
          </p>
          <p className="text-sm text-foreground/60 mt-2 px-2">
            From space planning and lifestyle-driven concepts to high-quality renders that bring ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="group relative">
                <div className="relative h-full p-4 sm:p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors duration-300">
                  {/* Icon */}
                  <div className="mb-6 sm:mb-8 lg:mb-10 inline-flex p-2 sm:p-3 rounded-lg bg-accent/10">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-montserrat text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/10 rounded-xl transition-all duration-300 pointer-events-none -z-10" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Expertise Highlight */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border">
          <p className="text-center text-sm sm:text-lg text-foreground/70 px-2">
            <span className="font-semibold text-foreground"></span>
          </p>
        </div>
      </div>
    </section>
  )
}
