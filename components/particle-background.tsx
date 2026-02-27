'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
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
    
    // Earthy warm colors for particles
    const colors = [
      'rgba(139, 115, 85, ',  // tan-brown
      'rgba(45, 42, 38, ',     // dark-brown
      'rgba(245, 240, 230, ',  // cream (for dark mode)
      'rgba(166, 139, 108, ',  // lighter tan
    ]
    
    // Create particles
    const particles: Particle[] = []
    const particleCount = 50
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    // Animation loop
    const animate = () => {
      // Clear canvas with background color (light theme)
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--background').trim()
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Check for dark mode
      const isDark = document.documentElement.classList.contains('dark')
      if (isDark) {
        ctx.fillStyle = 'rgba(26, 24, 21, 1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      
      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Bounce off edges with damping
        if (particle.x - particle.size < 0 || particle.x + particle.size > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(particle.size, Math.min(canvas.width - particle.size, particle.x))
        }
        
        if (particle.y - particle.size < 0 || particle.y + particle.size > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(particle.size, Math.min(canvas.height - particle.size, particle.y))
        }
        
        // Slow down over time
        particle.vx *= 0.99
        particle.vy *= 0.99
        
        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        
        gradient.addColorStop(0, particle.color + particle.opacity * 0.8 + ')')
        gradient.addColorStop(1, particle.color + '0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw core
        ctx.fillStyle = particle.color + particle.opacity + ')'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    // Handle window resize
    const handleResize = () => {
      resizeCanvas()
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
    />
  )
}
