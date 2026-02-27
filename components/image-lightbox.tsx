'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex: number
}

export function ImageLightbox({
  isOpen,
  onClose,
  images,
  initialIndex,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [dragStart, setDragStart] = useState(0)
  const [dragEnd, setDragEnd] = useState(0)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images.length, onClose])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
  }

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX
    setDragEnd(clientX)
    handleSwipe(dragStart, clientX)
  }

  const handleSwipe = (start: number, end: number) => {
    const distance = start - end
    const threshold = 50 // minimum swipe distance

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        // Swiped left, go to next image
        handleNext()
      } else {
        // Swiped right, go to previous image
        handlePrevious()
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Lightbox Container */}
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 md:top-8 right-4 md:right-8 z-60 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </motion.button>

            {/* Image and Controls Container */}
            <div className="flex flex-col items-center gap-6 w-full h-full max-w-6xl">
              {/* Main Image Container */}
              <motion.div
                className="relative w-full flex-1 flex items-center justify-center cursor-grab active:cursor-grabbing"
                onClick={(e) => e.stopPropagation()}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, 90vw"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Navigation Controls Below Image */}
              <div className="flex flex-col items-center gap-6 w-full pb-4">
                {/* Navigation Buttons - Horizontal Layout */}
                {images.length > 1 && (
                  <div className="flex items-center justify-center gap-8 md:gap-12">
                    {/* Previous Button */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrevious()
                      }}
                      className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-50"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={images.length <= 1}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </motion.button>

                    {/* Dot Indicators */}
                    <div className="flex gap-2 flex-wrap justify-center max-w-xs">
                      {images.map((_, idx) => (
                        <motion.button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentIndex(idx)
                          }}
                          className={`rounded-full transition-all ${
                            idx === currentIndex
                              ? 'bg-white w-3 h-3'
                              : 'bg-white/30 w-2 h-2 hover:bg-white/60'
                          }`}
                          whileHover={{ scale: 1.3 }}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Next Button */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNext()
                      }}
                      className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-50"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={images.length <= 1}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </motion.button>
                  </div>
                )}

                {/* Counter */}
                <motion.p
                  className="text-sm md:text-base text-white/70 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentIndex + 1} / {images.length}
                </motion.p>

                {/* Keyboard Hint */}
                <motion.p
                  className="text-xs md:text-sm text-white/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Use arrow keys • Press ESC to close
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
