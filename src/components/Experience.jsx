import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react'
import './Experience.css'

const Experience = ({ onHover, onLeave }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Noxus Dynamics',
      role: 'Co-Founder & Chief Technical Officer',
      period: 'Present',
      location: 'Kerala, India',
      description: 'Co-founded a robotics-driven innovation studio pushing boundaries in agritech, prosthetics, and autonomous systems. We engineer next-generation robotic systems for industries ready to evolve.',
      highlights: [
        'Building precision agricultural drones',
        'Developing biomechanical prosthetics',
        'Creating intelligent machines that extend human capability',
        'Leading engineering-first approach to hard problems',
      ],
      link: 'https://noxusdynamics.tech',
    },
    {
      company: 'Baja SAE India',
      role: 'Automation Engineer',
      period: '2024 - Present',
      location: 'Kerala, India',
      description: 'Working on automation systems for the Baja SAE competition vehicle, implementing control systems and sensor integration for off-road vehicle performance.',
      highlights: [
        'Vehicle automation systems design',
        'Sensor integration and data acquisition',
        'Control algorithms development',
        'Team collaboration on racing vehicle',
      ],
      link: '#',
    },
    {
      company: 'Saintgits College of Engineering',
      role: 'B.Tech Robotics & Automation',
      period: 'Current',
      location: 'Kottayam, Kerala',
      description: 'Pursuing Bachelor of Technology in Robotics and Automation Engineering, focusing on embedded systems, control theory, and autonomous systems.',
      highlights: [
        'Capstone: Agri-Rover Simulation',
        'Research in autonomous harvesting',
        'Hands-on robotics projects',
        'Technical leadership roles',
      ],
      link: '#',
    },
    {
      company: 'Open Source Hardware (OSHW)',
      role: 'Intern - ESP32 Development',
      period: '2025',
      location: 'Remote',
      description: 'Completed ESP32 emulation task demonstrating embedded development skills using QEMU and ESP-IDF for hardware-free prototyping.',
      highlights: [
        'ESP32 virtual environment setup',
        'GPIO simulation projects',
        'FreeRTOS implementation',
        'Documentation and reporting',
      ],
      link: 'https://github.com/albin1923/ESP32-QEMU',
    },
  ]

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
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="experience-bg-lines">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-line" style={{ '--line-delay': `${i * 0.5}s` }}></div>
        ))}
      </div>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="experience-header" variants={itemVariants}>
          <span className="section-label">
            <span className="label-number">02</span>
            Experience & Education
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line">
            <motion.div
              className="timeline-progress"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="timeline-dot">
                <motion.div
                  className="dot-ring"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                />
              </div>

              <motion.div
                className="timeline-card"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                whileHover={{ y: -5 }}
              >
                <div className="card-header">
                  <div className="company-info">
                    <Building2 size={20} className="company-icon" />
                    <span className="company-name">{exp.company}</span>
                  </div>
                  {exp.link !== '#' && (
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>

                <h3 className="role-title">{exp.role}</h3>

                <div className="card-meta">
                  <span className="meta-item">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="meta-item">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <p className="card-description">{exp.description}</p>

                <div className="card-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="highlight-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                    >
                      <span className="highlight-dot"></span>
                      {highlight}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
