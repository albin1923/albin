import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronRight, Cpu, Bot, Gauge, Microchip } from 'lucide-react'
import './Projects.css'

const Projects = ({ onHover, onLeave }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'ROS2 Fault Recovery System',
      subtitle: 'Intelligent System Health Monitoring',
      description: 'A ROS 2 (Humble) multi-node simulation demonstrating fault detection, system health monitoring, and automatic recovery using a supervisor architecture. Implements state-based recovery logic with NORMAL, DEGRADED, and CRITICAL states.',
      longDescription: 'This project models how real robotic systems detect degraded components and transition between operational states. Features include multi-node coordination, time-based fault detection, supervisor/watchdog design pattern, and state-based recovery logic applicable to autonomous robots and industrial automation.',
      tech: ['ROS 2', 'C++', 'Python', 'CMake'],
      icon: Bot,
      github: 'https://github.com/albin1923/ros2-fault-recovery-system',
      color: '#ffffff',
      features: ['Multi-node coordination', 'Fault detection', 'Auto recovery', 'State management'],
    },
    {
      id: 2,
      title: 'Agri-Rover Simulation',
      subtitle: 'Autonomous Coconut Harvesting Dashboard',
      description: 'Visualizes mission plans for an autonomous coconut-harvesting rover. Integrates kinematics, dynamics, thermal limits, and mission planning with interactive controls and telemetry output.',
      longDescription: 'A comprehensive dashboard that stitches together rover kinematics, dynamics, thermal management, and mission planning. Features include play/pause controls, speed adjustment, obstacle avoidance, and CSV telemetry export for offline analysis.',
      tech: ['Python', 'SCSS', 'Matplotlib', 'NumPy'],
      icon: Gauge,
      github: 'https://github.com/albin1923/Agri-Rover-Simulation',
      color: '#a0a0a0',
      features: ['Mission planning', 'Thermal simulation', 'Obstacle avoidance', 'Telemetry export'],
    },
    {
      id: 3,
      title: 'Robotic Hand Control',
      subtitle: 'Multi-Modal Gesture & Audio Control',
      description: 'Multi-modal robotic hand control system using Arduino, servos, OpenCV/Mediapipe for hand tracking, and audio-reactive control. Future integration planned with EMG control using BioAmp Biscute.',
      longDescription: 'Controls a 5-servo robotic hand with MG995 and MG90S servos. Hand Mode uses computer vision for finger tracking while Audio Mode maps sound amplitude to servo positions. Features real-time waveform visualization and seamless mode switching.',
      tech: ['Python', 'OpenCV', 'Arduino', 'Mediapipe'],
      icon: Cpu,
      github: 'https://github.com/albin1923/hand',
      color: '#d4d4d4',
      features: ['Hand tracking', 'Audio reactive', 'Servo control', 'EMG planned'],
    },
    {
      id: 4,
      title: 'ESP32 QEMU Emulation',
      subtitle: 'Hardware-Free Embedded Development',
      description: 'Complete ESP32 emulation environment using QEMU and ESP-IDF. Demonstrates LED blink and temperature simulation running entirely in a virtual environment.',
      longDescription: 'Set up for OSHW Internship Screening, this project demonstrates hardware-free embedded development. Includes GPIO simulation for LED control and simulated temperature readings, enabling rapid prototyping without physical hardware.',
      tech: ['C', 'ESP-IDF', 'QEMU', 'FreeRTOS'],
      icon: Microchip,
      github: 'https://github.com/albin1923/ESP32-QEMU',
      color: '#ffffff',
      features: ['Virtual hardware', 'GPIO simulation', 'FreeRTOS', 'ESP-IDF'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="projects-bg-text">WORK</div>
      
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="projects-header" variants={itemVariants}>
          <span className="section-label">
            <span className="label-number">01</span>
            Featured Projects
          </span>
          <h2 className="section-title">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="projects-intro">
            From web applications to complex systems, each project 
            represents a step towards building better software.
          </p>
        </motion.div>

        <div className="projects-showcase">
          <motion.div className="projects-list" variants={itemVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-item ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                whileHover={{ x: 10 }}
              >
                <span className="project-number">0{index + 1}</span>
                <div className="project-item-content">
                  <h3 className="project-item-title">{project.title}</h3>
                  <p className="project-item-subtitle">{project.subtitle}</p>
                </div>
                <ChevronRight className="project-arrow" size={20} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="project-details" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                className="project-detail-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ '--project-color': projects[activeProject].color }}
              >
                <div className="project-detail-header">
                  <div className="project-icon-wrapper">
                    {(() => {
                      const IconComponent = projects[activeProject].icon
                      return <IconComponent size={32} />
                    })()}
                  </div>
                  <div className="project-links">
                    <motion.a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={projects[activeProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="project-detail-title">{projects[activeProject].title}</h3>
                <p className="project-detail-description">
                  {projects[activeProject].longDescription}
                </p>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <div className="features-grid">
                    {projects[activeProject].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="feature-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="feature-dot"></span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="project-tech">
                  {projects[activeProject].tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div className="view-all-projects" variants={itemVariants}>
          <motion.a
            href="https://github.com/albin1923?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-btn"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            whileHover={{ scale: 1.05 }}
          >
            View All Projects on GitHub
            <ExternalLink size={18} style={{ marginLeft: '10px' }} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
