"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type SectionType =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "education"
  | "certifications"
  | "projects"
  | "internship"
  | "contact"

interface SectionsContextType {
  section: SectionType
  setSection: (section: SectionType) => void
}

const SectionsContext = createContext<SectionsContextType>({
  section: "home",
  setSection: () => {},
})

export function SectionsProvider({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<SectionType>("home")

  // Save current section to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem("currentSection", section)
    } catch (e) {
      console.error("Error saving section to sessionStorage:", e)
    }
  }, [section])

  // Restore section from sessionStorage on mount
  useEffect(() => {
    try {
      const savedSection = sessionStorage.getItem("currentSection") as SectionType | null
      if (savedSection) {
        setSection(savedSection)
      }
    } catch (e) {
      console.error("Error reading section from sessionStorage:", e)
    }
  }, [])

  return <SectionsContext.Provider value={{ section, setSection }}>{children}</SectionsContext.Provider>
}

export function useSections() {
  const context = useContext(SectionsContext)
  if (!context) {
    throw new Error("useSections must be used within a SectionsProvider")
  }
  return context
}
