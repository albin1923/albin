import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'
import albinImg from '../assets/Albin.png'
import './About.css'

const About = ({ onHover, onLeave }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

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

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="about-bg-text">ABOUT</div>
      
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="about-header" variants={itemVariants}>
          <span className="section-label">
            <span className="label-number">03</span>
            About Me
          </span>
          <h2 className="section-title">
            Building <span className="gradient-text">Digital</span> Solutions
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-image-container" variants={itemVariants}>
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>
                <div className="about-image-actual">
                  <img src={albinImg} alt="Albin" />
                </div>
              </div>
              <div className="about-image-decoration">
                <motion.div
                  className="decoration-circle"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="circle-dot" style={{ '--i': i }}></span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-intro">
              I'm an <span className="highlight">Engineering</span> student 
              at Saintgits College of Engineering, Kottayam, with a deep passion for building 
              modern applications and scalable software solutions.
            </p>
            
            <p className="about-description">
              My expertise spans across <span className="highlight">full-stack development</span>, 
              system design, and software architecture. 
              I specialize in creating efficient, maintainable code and 
              building applications that deliver exceptional user experiences.
            </p>

            <p className="about-description">
              Currently working at <span className="highlight">Noxus Dynamics</span>, 
              I'm focused on developing cutting-edge software solutions while continuously 
              exploring new technologies and best practices.
            </p>

            <div className="about-info-cards">
              <motion.div 
                className="info-card"
                whileHover={{ scale: 1.02, y: -5 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <MapPin className="info-icon" size={24} />
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <span className="info-value">Kerala, India</span>
                </div>
              </motion.div>

              <motion.div 
                className="info-card"
                whileHover={{ scale: 1.02, y: -5 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <GraduationCap className="info-icon" size={24} />
                <div className="info-content">
                  <span className="info-label">Education</span>
                  <span className="info-value">B.Tech Engineering</span>
                </div>
              </motion.div>

              <motion.div 
                className="info-card"
                whileHover={{ scale: 1.02, y: -5 }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <Briefcase className="info-icon" size={24} />
                <div className="info-content">
                  <span className="info-label">Company</span>
                  <span className="info-value">Noxus Dynamics</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
