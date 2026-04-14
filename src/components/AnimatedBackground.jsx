import { useEffect, useRef } from 'react'
import './AnimatedBackground.css'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const accentRgb = getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim() || '255, 107, 53'
    const purpleRgb = getComputedStyle(document.documentElement).getPropertyValue('--purple-rgb').trim() || '157, 78, 221'
    const blueRgb = getComputedStyle(document.documentElement).getPropertyValue('--blue-rgb').trim() || '67, 97, 238'
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 60

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 0.5
        this.speedX = Math.random() * 0.6 - 0.3
        this.speedY = Math.random() * 0.6 - 0.3
        this.opacity = Math.random() * 0.6 + 0.2
        this.pulse = Math.random() * Math.PI * 2
        // Assign random color from vibrant palette
        const colors = [accentRgb, purpleRgb, blueRgb]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += 0.02

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        const pulseOpacity = this.opacity * (0.8 + Math.sin(this.pulse) * 0.2)
        ctx.fillStyle = `rgba(${this.color}, ${pulseOpacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        // Add glow effect
        ctx.shadowBlur = 15
        ctx.shadowColor = `rgba(${this.color}, ${pulseOpacity * 0.6})`
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections with gradient
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            const opacity = 0.15 * (1 - distance / 150)
            gradient.addColorStop(0, `rgba(${a.color}, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(${accentRgb}, ${opacity * 0.8})`)
            gradient.addColorStop(1, `rgba(${b.color}, ${opacity * 0.6})`)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="animated-background" />
}
