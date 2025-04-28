"use client"

import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { AnimatePresence, motion } from "framer-motion"
import { ErrorBoundary } from "react-error-boundary"

import Loader from "@/components/loader"
import Scene from "@/components/scene"
import Interface from "@/components/interface"
import CustomCursor from "@/components/custom-cursor"
import { SectionsProvider } from "@/components/sections-context"
import FallbackExperience from "@/components/fallback-experience"

export default function Home() {
  const [started, setStarted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Set loaded state after a short delay to ensure components are mounted
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearTimeout(timer)
    }
  }, [])

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      {!started && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500 dark:from-neutral-200 dark:to-neutral-400">
              Kalpana K
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-600 dark:text-neutral-400">
              Web Developer | Java Enthusiast | Problem Solver
            </p>
            <button
              onClick={() => setStarted(true)}
              className="px-6 py-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors"
            >
              Explore Portfolio
            </button>
          </motion.div>
        </div>
      )}

      {started && !isMobile && <CustomCursor />}

      <SectionsProvider>
        <AnimatePresence>
          {started && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <ErrorBoundary FallbackComponent={FallbackExperience}>
                <Canvas
                  gl={{ antialias: true, alpha: true, powerPreference: "default" }}
                  dpr={[1, 1.5]} // Reduced DPR for better performance
                  style={{ position: "absolute" }}
                  camera={{ position: [0, 0, 5], fov: 50 }}
                >
                  <Suspense fallback={<Loader />}>
                    <Scene />
                    <Environment preset="studio" />
                    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                  </Suspense>
                </Canvas>
                <Interface />
              </ErrorBoundary>
            </motion.div>
          )}
        </AnimatePresence>
      </SectionsProvider>
    </main>
  )
}
