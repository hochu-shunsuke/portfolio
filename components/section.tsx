import type { ReactNode } from "react"
import { SectionHeading } from "@/components/section-heading"

interface SectionProps {
  id?: string
  title: string
  subtitle: string
  children: ReactNode
  className?: string
  isDark?: boolean
}

export function Section({ id, title, subtitle, children, className = "", isDark = false }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-24 ${isDark ? "bg-zinc-950" : ""} ${className}`}>
      <div className="container px-4 md:px-6">
        <SectionHeading title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  )
}

