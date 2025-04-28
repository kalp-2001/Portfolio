"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show cursor after it's been moved
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Add event listeners with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const links = document.querySelectorAll("a, button")
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleLinkHoverStart)
        link.addEventListener("mouseleave", handleLinkHoverEnd)
      })
    }, 1000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      clearTimeout(timer)

      // Clean up link event listeners
      const links = document.querySelectorAll("a, button")
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverStart)
        link.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border-2 border-neutral-800 dark:border-neutral-200 mix-blend-difference"
      animate={{
        x: position.x - (linkHovered ? 24 : clicked ? 12 : 16),
        y: position.y - (linkHovered ? 24 : clicked ? 12 : 16),
        width: linkHovered ? 48 : clicked ? 24 : 32,
        height: linkHovered ? 48 : clicked ? 24 : 32,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      }}
    />
  )
}
