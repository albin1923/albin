import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import './Navbar.css'

const Navbar = ({ onHover, onLeave }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="nav-container">
          <motion.a
            href="#hero"
            className="logo"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            whileHover={{ scale: 1.05 }}
          >
            <span className="logo-text">AC</span>
            <span className="logo-dot"></span>
          </motion.a>

          <div className="nav-links desktop-nav">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="nav-link-number">0{index + 1}</span>
                <span className="nav-link-text">{item.name}</span>
              </motion.a>
            ))}
          </div>

          <div className="nav-socials desktop-nav">
            <motion.a
              href="https://github.com/albin1923"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/albin-chacko-7202b5327/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          <motion.button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-menu-content">
              <div className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="mobile-nav-link"
                    custom={index}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    <span className="mobile-link-number">0{index + 1}</span>
                    <span className="mobile-link-text">{item.name}</span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mobile-socials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="https://github.com/albin1923"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/albin-chacko-7202b5327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  <Linkedin size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
