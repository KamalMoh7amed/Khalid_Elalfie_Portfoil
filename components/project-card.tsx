'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  id: number
  title: string
  description: string
  category: string
  thumbnail: string
  behanceUrl: string
  imageCount: number
  onClick: () => void
}

export function ProjectCard({
  id,
  title,
  description,
  category,
  thumbnail,
  imageCount,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (id - 1) * 0.1 }}
      className="group h-full"
    >
      <div className="flex flex-col h-full bg-card/50 dark:bg-card/30 backdrop-blur rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-xl">
        {/* Image Container */}
        <div 
          className="relative h-64 overflow-hidden bg-muted cursor-pointer"
          onClick={onClick}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex items-center gap-3 text-white w-full">
              <div className="flex-1">
                <p className="text-sm font-semibold">{imageCount} photos</p>
              </div>
            </div>
          </div>

          {/* View Gallery Badge */}
          <motion.div
            className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur text-primary-foreground text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            View Gallery
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-display text-foreground line-clamp-2">
              {title}
            </h3>
            <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
              {category}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/70 line-clamp-3 leading-relaxed flex-1">
            {description}
          </p>

          {/* Footer */}
          <div className="flex items-center gap-2 pt-4 border-t border-border/30">
            <motion.button
              onClick={onClick}
              className="flex-1 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
