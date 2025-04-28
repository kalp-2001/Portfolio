"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={cn(
        "backdrop-blur-md bg-white/30 dark:bg-black/20 rounded-xl p-6 shadow-lg border border-white/20 dark:border-white/10",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
