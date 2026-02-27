'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { ImageLightbox } from './image-lightbox'

interface ProjectGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: number
    title: string
    category: string
    description: string
    images: string[]
  }
}

export function ProjectGalleryModal({
  isOpen,
  onClose,
  project,
}: ProjectGalleryModalProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      setLoadedImages(new Set())
      // Simulate loading delay for dramatic effect
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set([...prev, src]))
  }

  return (
    <>
      <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Loading State */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-background to-background/50"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated Loading Spinner */}
                  <motion.div
                    className="relative w-24 h-24 mb-6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <motion.div
                      className="absolute inset-0 border-2 border-accent rounded-full"
                      style={{
                        borderRightColor: 'transparent',
                        borderTopColor: 'transparent',
                      }}
                    />
                    <motion.div
                      className="absolute inset-4 border-2 border-primary rounded-full"
                      style={{
                        borderLeftColor: 'transparent',
                        borderBottomColor: 'transparent',
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>

                  {/* Loading Text */}
                  <motion.p
                    className="text-foreground/70 text-lg font-medium"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Loading photos...
                  </motion.p>

                  {/* Project Info */}
                  <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h2>
                    <p className="text-accent text-sm font-medium uppercase tracking-wide">
                      {project.category}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gallery Content */}
            {!isLoading && (
              <motion.div
                className="w-full h-full bg-background overflow-auto flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border p-6 flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {project.title}
                    </h2>
                    <p className="text-accent text-sm font-medium uppercase tracking-wide mt-1">
                      {project.category} • {project.images.length} photos
                    </p>
                  </motion.div>
                  <motion.button
                    onClick={onClose}
                    className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </motion.button>
                </div>

                {/* Gallery Grid */}
                <div className="flex-1 p-6 overflow-auto">
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
                  >
                    {project.images.map((image, index) => (
                      <motion.div
                        key={`${image}-${index}`}
                        className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        {/* Skeleton Loading */}
                        {!loadedImages.has(image) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-lg"
                            animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}

                        {/* Image */}
                        <Image
                          src={image}
                          alt={`${project.title} image ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          onLoad={() => handleImageLoad(image)}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white text-sm font-medium">
                            Photo {index + 1} of {project.images.length}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Footer with scroll indicator */}
                <motion.div
                  className="sticky bottom-0 flex justify-center pb-4 text-foreground/50"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
      </AnimatePresence>

      {/* Image Lightbox */}
      {selectedImageIndex !== null && (
        <ImageLightbox
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          images={project.images}
          initialIndex={selectedImageIndex}
        />
      )}
    </>
  )
}
