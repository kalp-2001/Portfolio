"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GlassCard from "../glass-card"

interface Project {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
}

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      title: "ClickToBill",
      description: "A comprehensive billing software solution for small businesses.",
      technologies: ["Java", "MySQL", "JavaFX"],
      highlights: [
        "Automated invoice generation",
        "Inventory management",
        "Financial reporting",
        "User authentication and role-based access",
      ],
    },
    {
      title: "E-commerce Website",
      description: "A fully functional e-commerce platform with payment integration.",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      highlights: [
        "Product catalog with search and filter",
        "User accounts and order history",
        "Payment gateway integration",
        "Admin dashboard for inventory management",
      ],
    },
    {
      title: "Billing Software",
      description: "Desktop application for managing billing operations.",
      technologies: ["Java", "MySQL"],
      highlights: ["Customer management", "Product inventory", "Invoice generation", "Sales reporting"],
    },
  ]

  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveProject(activeProject === index ? null : index)}
              className={`cursor-pointer bg-white/50 dark:bg-black/30 rounded-lg p-4 border-2 transition-all ${
                activeProject === index
                  ? "border-neutral-800 dark:border-neutral-200"
                  : "border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"
              }`}
            >
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">{project.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/50 dark:bg-black/30 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {projects[activeProject].title}
            </h3>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">Key Features</h4>
              <ul className="space-y-1">
                {projects[activeProject].highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="mr-2 text-neutral-500 dark:text-neutral-400">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </GlassCard>
    </div>
  )
}
