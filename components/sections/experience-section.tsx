"use client"
import { motion } from "framer-motion"
import GlassCard from "../glass-card"

interface Experience {
  title: string
  company: string
  duration: string
  responsibilities: string[]
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Web Developer",
      company: "ABC Technologies",
      duration: "2020 - Present",
      responsibilities: [
        "Developed and maintained web applications using PHP and Laravel",
        "Implemented responsive designs using HTML, CSS, and Bootstrap",
        "Collaborated with cross-functional teams to define, design, and ship new features",
        "Optimized applications for maximum speed and scalability",
      ],
    },
    {
      title: "Junior Developer",
      company: "XYZ Solutions",
      duration: "2018 - 2020",
      responsibilities: [
        "Assisted in developing web applications using Java and PHP",
        "Created and maintained documentation",
        "Participated in code reviews and implemented feedback",
        "Troubleshot and resolved bugs in existing applications",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">Professional Experience</h2>

        <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-neutral-300 dark:before:bg-neutral-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-8 last:mb-0 before:content-[''] before:absolute before:left-[-8px] before:top-2 before:w-3.5 before:h-3.5 before:rounded-full before:border-2 before:border-neutral-800 dark:before:border-neutral-200 before:bg-white dark:before:bg-neutral-900"
            >
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">{exp.title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                <span className="font-medium">{exp.company}</span>
                <span className="hidden sm:block mx-2">•</span>
                <span>{exp.duration}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-neutral-500 dark:text-neutral-400">•</span>
                    <span className="text-neutral-600 dark:text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
