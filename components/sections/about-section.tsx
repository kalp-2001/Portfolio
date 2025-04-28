"use client"

import GlassCard from "../glass-card"

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <GlassCard>
        <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">About Me</h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I am a passionate Web Developer with expertise in Java, PHP, and Laravel. With a strong foundation in both
          front-end and back-end technologies, I create efficient, scalable, and user-friendly web applications. I am
          dedicated to continuous learning and staying updated with the latest industry trends.
        </p>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard delay={0.1}>
          <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">My Approach</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            I believe in writing clean, maintainable code and following best practices. My problem-solving skills allow
            me to tackle complex challenges efficiently.
          </p>
        </GlassCard>

        <GlassCard delay={0.2}>
          <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Personal Values</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            I value collaboration, continuous improvement, and delivering high-quality work. I am committed to creating
            solutions that make a positive impact.
          </p>
        </GlassCard>
      </div>
    </div>
  )
}
