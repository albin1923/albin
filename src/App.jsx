import { useEffect, useState, useRef, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import { DotScreenShader } from './components/ui/DotShaderBackground'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [cursorVariant, setCursorVariant] = useState('default')
  const mainRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  const enterHover = () => setCursorVariant('hover')
  const leaveHover = () => setCursorVariant('default')

  return (
    <div className="app">
      <CustomCursor variant={cursorVariant} />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            {/* Global Dot Shader Background */}
            <div className="global-shader-bg">
              <DotScreenShader 
                dotColor="#FFFFFF"
                bgColor="#050505"
                dotOpacity={0.04}
                gridSize={120}
              />
            </div>
            <Navbar onHover={enterHover} onLeave={leaveHover} />
            <main ref={mainRef}>
              <Hero onHover={enterHover} onLeave={leaveHover} />
              <Projects onHover={enterHover} onLeave={leaveHover} />
              <Experience onHover={enterHover} onLeave={leaveHover} />
              <About onHover={enterHover} onLeave={leaveHover} />
              <Skills />
              <Contact onHover={enterHover} onLeave={leaveHover} />
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
