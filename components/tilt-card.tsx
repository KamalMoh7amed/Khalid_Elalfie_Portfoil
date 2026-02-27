'use client'

import React, { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function TiltCard({ children, className, disabled }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.3s ease-out',
  })
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !isLargeScreen) return
    
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((centerX - x) / centerX) * 10

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease-out',
    })
  }

  // Check screen size for 3D effects - only on client side
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative rounded-lg overflow-hidden',
        'transition-all duration-300',
        !disabled && 'hover:shadow-2xl',
        className
      )}
      style={isLargeScreen ? style : {}}
    >
      {/* Glassmorphism background */}
      <div
        className={cn(
          'absolute inset-0 rounded-lg',
          'bg-white/30 dark:bg-white/10',
          'backdrop-blur-xl',
          'border border-white/20 dark:border-white/10',
          'pointer-events-none'
        )}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
