"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GlassCard from "../glass-card"

interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "database" | "tools" | "soft"
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const skills: Skill[] = [
    { name: "Java", level: 90, category: "backend" },
    { name: "PHP", level: 85, category: "backend" },
    { name: "Laravel", level: 80, category: "backend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 75, category: "frontend" },
    { name: "Bootstrap", level: 85, category: "frontend" },
    { name: "MySQL", level: 80, category: "database" },
    { name: "Git", level: 70, category: "tools" },
    { name: "Problem Solving", level: 90, category: "soft" },
    { name: "Communication", level: 85, category: "soft" },
    { name: "Teamwork", level: 90, category: "soft" },
  ]

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
    { id: "soft", label: "Soft Skills" },
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Technical Skills</h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-neutral-800 text-white dark:bg-white dark:text-neutral-800"
                  : "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/50 dark:bg-black/30 rounded-lg p-4"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-neutral-800 dark:text-neutral-200">{skill.name}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-neutral-500 to-neutral-700 dark:from-neutral-400 dark:to-neutral-200"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
