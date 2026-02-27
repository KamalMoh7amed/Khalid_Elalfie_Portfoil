'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement[]>([])
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const cursorX = useRef(0)
  const cursorY = useRef(0)

  useEffect(() => {
    // Disable on mobile and tablet for better performance
    if (window.innerWidth < 1024) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      // Create trail effect less frequently for better performance
      if (Math.random() > 0.7) {
        createTrailParticle(e.clientX, e.clientY)
      }
    }

    const createTrailParticle = (x: number, y: number) => {
      const trail = document.createElement('div')
      trail.className = 'fixed pointer-events-none'
      trail.style.left = x + 'px'
      trail.style.top = y + 'px'
      trail.style.width = '6px'
      trail.style.height = '6px'
      trail.style.backgroundColor = 'var(--accent)'
      trail.style.borderRadius = '50%'
      trail.style.opacity = '0.6'
      trail.style.zIndex = '-1'

      document.body.appendChild(trail)

      // Animate trail fade out
      let opacity = 0.6
      const fadeInterval = setInterval(() => {
        opacity -= 0.05
        trail.style.opacity = opacity.toString()
        if (opacity <= 0) {
          clearInterval(fadeInterval)
          document.body.removeChild(trail)
        }
      }, 20)
    }

    const animateCursor = () => {
      if (cursorRef.current) {
        cursorX.current += (mouseX.current - cursorX.current) * 0.2
        cursorY.current += (mouseY.current - cursorY.current) * 0.2

        cursorRef.current.style.left = cursorX.current - 6 + 'px'
        cursorRef.current.style.top = cursorY.current - 6 + 'px'
      }
      requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animateCursor()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed w-3 h-3 bg-accent rounded-full pointer-events-none mix-blend-screen z-50 hidden lg:block"
      style={{
        boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
      }}
    />
  )
}
