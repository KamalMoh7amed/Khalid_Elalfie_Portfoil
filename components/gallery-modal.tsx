'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface GalleryModalProps {
  images: string[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
  projectTitle: string
}

export function GalleryModal({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  projectTitle,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, currentIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsLoading(true)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsLoading(true)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
        aria-label="Close gallery"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main container */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image container */}
        <div className="relative w-full max-w-5xl aspect-square mb-6 bg-black/50 rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
            onLoadingComplete={() => setIsLoading(false)}
          />

          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between w-full max-w-5xl gap-4">
          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="group p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Info section */}
          <div className="flex-1 text-center">
            <h3 id="gallery-modal-title" className="text-white text-lg font-semibold mb-2">
              {projectTitle}
            </h3>
            <div className="flex items-center justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsLoading(true)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-white/60 text-sm mt-3">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="group p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Keyboard hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm text-center">
          <p>Use arrow keys to navigate • ESC to close</p>
        </div>
      </div>
    </div>
  )
}
