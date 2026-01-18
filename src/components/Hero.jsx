import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

const Hero = ({ onHover, onLeave }) => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const [currentTime, setCurrentTime] = useState('')

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // 3D Scroll transforms
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.hero-title-line',
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 2.8,
        }
      )

      // Subtitle
      gsap.fromTo(
        '.hero-description',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 3.4, ease: 'power3.out' }
      )

      // CTA
      gsap.fromTo(
        '.hero-cta-wrapper',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 3.7, ease: 'power3.out' }
      )

      // Side info
      gsap.fromTo(
        '.hero-side-info',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 3.9, ease: 'power3.out' }
      )

      // Visual
      gsap.fromTo(
        '.hero-visual-container',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, delay: 3.2, ease: 'power3.out' }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} id="hero" className="hero">

      {/* Top Bar */}
      <div className="hero-top-bar">
        <motion.div 
          className="location-tag"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.6 }}
        >
          <span className="tag-dot" />
          <span>Kerala, India</span>
        </motion.div>
        <motion.div 
          className="time-tag"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.6 }}
        >
          <span className="time-label">IST</span>
          <span className="time-value">{currentTime}</span>
        </motion.div>
      </div>

      <div className="hero-container">
        {/* Main Content */}
        <div className="hero-main">
          <motion.div 
            className="hero-title-wrapper"
            style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
          >
            <div className="hero-label">
              <span className="label-line" />
              <span className="label-text">Robotics Engineer</span>
            </div>
            
            <h1 className="hero-title" ref={titleRef}>
              <div className="title-line-wrapper">
                <span className="hero-title-line">The shape of</span>
              </div>
              <div className="title-line-wrapper">
                <span className="hero-title-line title-accent">intelligent</span>
              </div>
              <div className="title-line-wrapper">
                <span className="hero-title-line">machines</span>
              </div>
            </h1>
          </motion.div>

          <motion.p 
            className="hero-description"
            style={{ y: subtitleY }}
          >
            I design and build robotic systems that bridge the gap between 
            human intention and machine capability.
          </motion.p>

          <div className="hero-cta-wrapper">
            <motion.a
              href="#projects"
              className="hero-btn primary"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Discover Projects</span>
              <span className="btn-icon">→</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="hero-btn secondary"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.a>
          </div>
        </div>
      </div>

      {/* Side Info */}
      <div className="hero-side-info">
        <div className="side-stat">
          <span className="stat-value">4+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="side-divider" />
        <div className="side-stat">
          <span className="stat-value">Noxus</span>
          <span className="stat-label">Dynamics</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} strokeWidth={1.5} />
        </motion.div>
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
