"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useSections } from "./sections-context"
import { cn } from "@/lib/utils"

interface NavigationProps {
  className?: string
}

export default function Navigation({ className }: NavigationProps) {
  const { section, setSection } = useSections()
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "internship", label: "Internship" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className={cn("fixed top-0 left-0 w-full z-50 p-4", className)}>
      <div className="flex justify-between items-center">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSection("home")}
          className="text-xl font-bold text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
        >
          K.K
        </motion.button>

        <div className="hidden md:flex space-x-6">
          {sections.map((item) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * sections.indexOf(item) }}
              onClick={() => setSection(item.id)}
              className={cn(
                "text-sm font-medium transition-colors",
                section === item.id
                  ? "text-neutral-800 dark:text-neutral-200"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200",
              )}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-800 dark:text-neutral-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </motion.button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4"
        >
          <div className="flex flex-col space-y-3">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSection(item.id)
                  setIsOpen(false)
                }}
                className={cn(
                  "text-sm font-medium py-2 transition-colors",
                  section === item.id
                    ? "text-neutral-800 dark:text-neutral-200"
                    : "text-neutral-500 dark:text-neutral-400",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
