"use client"

import { Html } from "@react-three/drei"
import { useState, useEffect } from "react"

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    let interval: NodeJS.Timeout

    const simulateProgress = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 10
          return newProgress > 100 ? 100 : newProgress
        })
      }, 200)
    }

    simulateProgress()

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-24 h-1 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-neutral-800 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-neutral-600">{Math.round(progress)}%</p>
      </div>
    </Html>
  )
}
