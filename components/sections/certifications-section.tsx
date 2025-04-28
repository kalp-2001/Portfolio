"use client"
import { motion } from "framer-motion"
import GlassCard from "../glass-card"

interface Certification {
  name: string
  issuer: string
  date: string
  description: string
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      name: "Java Programming Certification",
      issuer: "Oracle",
      date: "2021",
      description: "Advanced Java programming concepts and best practices.",
    },
    {
      name: "Laravel Developer Certification",
      issuer: "Laravel",
      date: "2020",
      description: "Comprehensive knowledge of Laravel framework and PHP development.",
    },
    {
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2019",
      description: "Full-stack web development using modern technologies.",
    },
  ]

  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/50 dark:bg-black/30 rounded-lg p-4 border border-white/20 dark:border-white/10"
            >
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">{cert.name}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                <span className="font-medium">{cert.issuer}</span>
                <span className="hidden sm:block mx-2">•</span>
                <span>{cert.date}</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
