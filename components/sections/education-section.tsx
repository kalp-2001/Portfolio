"use client"

import GlassCard from "../glass-card"

interface Education {
  degree: string
  institution: string
  year: string
  description?: string
}

export default function EducationSection() {
  const education: Education[] = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "ABC University",
      year: "2014 - 2018",
      description: "Graduated with distinction, specializing in web development and database management.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "XYZ School",
      year: "2012 - 2014",
      description: "Completed with 90% marks in science stream.",
    },
  ]

  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-black/30 rounded-lg p-5 transition-transform hover:translate-y-[-5px]"
            >
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">{edu.degree}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                <span className="font-medium">{edu.institution}</span>
                <span className="hidden sm:block mx-2">•</span>
                <span>{edu.year}</span>
              </div>
              {edu.description && <p className="mt-2 text-neutral-600 dark:text-neutral-400">{edu.description}</p>}
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
