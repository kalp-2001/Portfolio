"use client"

import { motion } from "framer-motion"
import { useSections } from "./sections-context"
import Navigation from "./navigation"
import { Suspense, lazy } from "react"

// Lazy load sections to improve initial load time
const LazyAboutSection = lazy(() => import("./sections/about-section"))
const LazySkillsSection = lazy(() => import("./sections/skills-section"))
const LazyExperienceSection = lazy(() => import("./sections/experience-section"))
const LazyEducationSection = lazy(() => import("./sections/education-section"))
const LazyCertificationsSection = lazy(() => import("./sections/certifications-section"))
const LazyProjectsSection = lazy(() => import("./sections/projects-section"))
const LazyInternshipSection = lazy(() => import("./sections/internship-section"))
const LazyContactSection = lazy(() => import("./sections/contact-section"))

export default function Interface() {
  const { section } = useSections()

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Navigation className="pointer-events-auto" />

      <div className="absolute inset-0 flex items-center justify-center overflow-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-4xl mx-auto px-4 py-20 pointer-events-auto"
        >
          <Suspense fallback={<div className="p-8 text-center">Loading section...</div>}>
            {section === "about" && <LazyAboutSection />}
            {section === "skills" && <LazySkillsSection />}
            {section === "experience" && <LazyExperienceSection />}
            {section === "education" && <LazyEducationSection />}
            {section === "certifications" && <LazyCertificationsSection />}
            {section === "projects" && <LazyProjectsSection />}
            {section === "internship" && <LazyInternshipSection />}
            {section === "contact" && <LazyContactSection />}
          </Suspense>
        </motion.div>
      </div>
    </div>
  )
}
