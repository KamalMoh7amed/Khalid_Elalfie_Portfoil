'use client'

import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

export function ParticlesEnhanced() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      const isMobile = window.innerWidth < 768
      const particleCount = isMobile ? Math.floor(window.innerWidth / 150) : Math.floor(window.innerWidth / 100)

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          opacity: Math.random() * 0.5 + 0.2,
          color: `hsl(${Math.random() * 40 + 30}, 70%, ${Math.random() * 20 + 60}%)`,
        })
      }
    }

    initParticles()

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off walls
        if (particle.x - particle.size < 0 || particle.x + particle.size > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y - particle.size < 0 || particle.y + particle.size > canvas.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw lines between nearby particles (skip on mobile for performance)
        if (window.innerWidth >= 768) {
          particlesRef.current.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 100) {
                ctx.strokeStyle = particle.color
                ctx.globalAlpha = (particle.opacity * (100 - distance)) / 100
                ctx.lineWidth = 0.5
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                ctx.stroke()
              }
            }
          })
        }
      })

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity: 0.3 }}
    />
  )
}
