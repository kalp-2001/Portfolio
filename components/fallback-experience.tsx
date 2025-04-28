"use client"

import { useEffect } from "react"
import { useSections } from "./sections-context"
import Navigation from "./navigation"
import AboutSection from "./sections/about-section"
import SkillsSection from "./sections/skills-section"
import ExperienceSection from "./sections/experience-section"
import EducationSection from "./sections/education-section"
import CertificationsSection from "./sections/certifications-section"
import ProjectsSection from "./sections/projects-section"
import InternshipSection from "./sections/internship-section"
import ContactSection from "./sections/contact-section"

export default function FallbackExperience({ error }: { error?: Error }) {
  const { section } = useSections()

  useEffect(() => {
    // Log the error to console for debugging
    if (error) {
      console.error("3D experience error:", error)
    }
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <Navigation className="sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md" />

      <div className="container mx-auto px-4 py-20">
        {error && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">3D Experience Unavailable</h2>
            <p className="text-red-600 dark:text-red-300">
              The 3D experience couldn't be loaded. Showing alternative view.
            </p>
          </div>
        )}

        <div className="space-y-24">
          {section === "about" && <AboutSection />}
          {section === "skills" && <SkillsSection />}
          {section === "experience" && <ExperienceSection />}
          {section === "education" && <EducationSection />}
          {section === "certifications" && <CertificationsSection />}
          {section === "projects" && <ProjectsSection />}
          {section === "internship" && <InternshipSection />}
          {section === "contact" && <ContactSection />}

          {section === "home" && (
            <div className="text-center py-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Kalpana K</h1>
              <p className="text-lg md:text-xl mb-8 text-neutral-600 dark:text-neutral-400">
                Web Developer | Java Enthusiast | Problem Solver
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
