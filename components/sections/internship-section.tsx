"use client"

import GlassCard from "../glass-card"

export default function InternshipSection() {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">AI Internship</h2>

        <div className="bg-white/50 dark:bg-black/30 rounded-lg p-5">
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">AI Research Intern</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            <span className="font-medium">Tech Innovations Lab</span>
            <span className="hidden sm:block mx-2">•</span>
            <span>Summer 2019</span>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Participated in a 3-month intensive internship focused on artificial intelligence and machine learning
            applications in web development.
          </p>

          <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">Key Responsibilities</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-neutral-500 dark:text-neutral-400">•</span>
              <span className="text-neutral-600 dark:text-neutral-400">
                Assisted in developing AI-powered recommendation systems
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-neutral-500 dark:text-neutral-400">•</span>
              <span className="text-neutral-600 dark:text-neutral-400">
                Collaborated with senior developers on integrating ML models with web applications
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-neutral-500 dark:text-neutral-400">•</span>
              <span className="text-neutral-600 dark:text-neutral-400">
                Participated in weekly research discussions and knowledge-sharing sessions
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-neutral-500 dark:text-neutral-400">•</span>
              <span className="text-neutral-600 dark:text-neutral-400">
                Documented research findings and implementation processes
              </span>
            </li>
          </ul>
        </div>
      </GlassCard>
    </div>
  )
}
