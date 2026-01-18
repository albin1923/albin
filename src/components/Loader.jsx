import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  const containerVariants = {
    exit: {
      y: '-100vh',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2,
      },
    },
  }

  const textVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.1,
      },
    }),
  }

  const lineVariants = {
    initial: { width: 0 },
    animate: {
      width: '100%',
      transition: {
        duration: 2,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5,
      },
    },
  }

  const codeIconVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  }

  const letters = 'ALBIN'.split('')

  return (
    <motion.div
      className="loader"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="loader-content">
        <motion.div className="code-icon" variants={codeIconVariants} animate="animate">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect
              x="15"
              y="15"
              width="70"
              height="70"
              rx="12"
              stroke="#ffffff"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.path
              d="M35 40 L25 50 L35 60"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.path
              d="M65 40 L75 50 L65 60"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
            <motion.path
              d="M55 35 L45 65"
              stroke="#a0a0a0"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
          </svg>
        </motion.div>

        <div className="loader-text">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className="loader-subtitle">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Robotics Engineer
          </motion.span>
        </div>

        <div className="loader-line-container">
          <motion.div
            className="loader-line"
            variants={lineVariants}
            initial="initial"
            animate="animate"
          />
        </div>

        <motion.div
          className="loader-percentage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Counter />
        </motion.div>
      </div>

      <div className="loader-grid">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="grid-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2500
    const startTime = Date.now()
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out function
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(easeOut * 100))
      
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }
    
    requestAnimationFrame(updateCount)
  }, [])

  return (
    <span>{count}%</span>
  )
}

export default Loader
