import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight } from 'lucide-react'
import './Contact.css'

const Contact = ({ onHover, onLeave }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open email client with pre-filled info
    const mailtoLink = `mailto:albinchacko670@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${formState.message}%0D%0A%0D%0AFrom: ${formState.email}`
    window.location.href = mailtoLink
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/albin1923',
      username: '@albin1923',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/albin-chacko-7202b5327/',
      username: 'Albin Chacko',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:albinchacko670@gmail.com',
      username: 'albinchacko670@gmail.com',
    },
  ]

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="contact-bg-gradient"></div>
      
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <span className="section-label">
            <span className="label-number">05</span>
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something</span> Amazing
          </h2>
          <p className="contact-intro">
            Have a robotics project in mind? Let's discuss how we can bring your 
            ideas to life with cutting-edge automation solutions.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="info-text">
              <h3>Let's Connect</h3>
              <p>
                I'm always excited to collaborate on innovative robotics projects, 
                discuss the latest in autonomous systems, or explore new opportunities 
                in the field of automation engineering.
              </p>
              
              <div className="location-info">
                <MapPin size={20} />
                <span>Kerala, India</span>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="social-icon-wrapper">
                    <social.icon size={22} />
                  </div>
                  <div className="social-info">
                    <span className="social-name">{social.name}</span>
                    <span className="social-username">{social.username}</span>
                  </div>
                  <ArrowUpRight size={18} className="social-arrow" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              />
              <span className="input-focus-line"></span>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              />
              <span className="input-focus-line"></span>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              />
              <span className="input-focus-line"></span>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>

        <motion.footer className="footer" variants={itemVariants}>
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">AC</span>
              <span className="logo-dot"></span>
            </div>
            <p className="footer-text">
              Designed & Built with ❤️ by Albin Chacko
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </motion.footer>
      </motion.div>
    </section>
  )
}

export default Contact
