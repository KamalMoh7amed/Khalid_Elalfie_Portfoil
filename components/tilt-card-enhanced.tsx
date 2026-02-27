'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function TiltCardEnhanced({ children, className = '', disabled = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(true)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !isLargeScreen) return

    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotX = ((y - centerY) / centerY) * 8
    const rotY = ((centerX - x) / centerX) * 8

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovering(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    setIsLargeScreen(window.innerWidth >= 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div
      ref={ref}
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovering(true)}
      style={{
        perspective: '1000px',
      }}
      whileHover={
        !disabled
          ? {
              y: -8,
              scale: 1.02,
            }
          : {}
      }
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{
          rotateX: !disabled ? rotateX : 0,
          rotateY: !disabled ? rotateY : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Glassmorphism background */}
        <div
          className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-lg backdrop-blur-md border border-white/20 dark:border-white/10 pointer-events-none group-hover:border-accent/40 transition-colors duration-300"
          style={{
            boxShadow: isHovering
              ? '0 20px 60px rgba(212, 175, 55, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)'
              : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
        />
      </motion.div>
    </motion.div>
  )
}
