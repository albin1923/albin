import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Robotics & Control',
      skills: ['ROS 2 (Humble)', 'Robot Kinematics', 'Motion Planning', 'Control Systems', 'SLAM'],
    },
    {
      title: 'Programming',
      skills: ['Python', 'C++', 'C', 'JavaScript', 'MATLAB'],
    },
    {
      title: 'Embedded Systems',
      skills: ['Arduino', 'ESP32', 'Raspberry Pi', 'FreeRTOS', 'STM32'],
    },
    {
      title: 'Computer Vision & AI',
      skills: ['OpenCV', 'Mediapipe', 'TensorFlow', 'Sensor Fusion', 'Image Processing'],
    },
  ]

  const tools = [
    'Git', 'Linux', 'Docker', 'VS Code', 'Gazebo', 'RViz', 
    'SolidWorks', 'Fusion 360', 'QEMU', 'CMake', 'PyTest', 'NumPy'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="skills-bg-pattern">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="pattern-dot" style={{ '--delay': `${i * 0.1}s` }}></div>
        ))}
      </div>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="skills-header" variants={itemVariants}>
          <span className="section-label">
            <span className="label-number">04</span>
            Skills & Expertise
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill} 
                    className="skill-item-simple"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <span className="skill-dot"></span>
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="tools-section" variants={itemVariants}>
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <motion.div
                key={tool}
                className="tool-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1 + i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
