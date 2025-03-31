import { SectionHeading } from "@/components/section-heading"
import { SkillBar } from "@/components/skill-bar"
import { TechStack } from "@/components/tech-stack"

// Tech stack items with logos
const techStackItems = [
  { name: "React", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Next.js", logo: "/placeholder.svg?height=48&width=48" },
  { name: "TypeScript", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Tailwind CSS", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Three.js", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Node.js", logo: "/placeholder.svg?height=48&width=48" },
  { name: "GraphQL", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Docker", logo: "/placeholder.svg?height=48&width=48" },
  { name: "AWS", logo: "/placeholder.svg?height=48&width=48" },
  { name: "Firebase", logo: "/placeholder.svg?height=48&width=48" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Skills" subtitle="Technical proficiency and expertise" />

        {/* Tech Stack Heading */}
        <div className="max-w-2xl mx-auto text-center mt-12 mb-12">
          <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
          <p className="text-zinc-400">
            I work with modern technologies to create performant and scalable applications. My toolkit includes frontend
            frameworks, backend technologies, and design tools.
          </p>
        </div>

        {/* Full-width Tech Stack */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-20">
          <div className="max-w-[90vw] mx-auto">
            <TechStack items={techStackItems} />
          </div>
        </div>

        {/* Skill Bars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-8 text-center">Proficiency</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <SkillBar name="Frontend Development" percentage={95} />
              <SkillBar name="Backend Development" percentage={85} />
              <SkillBar name="UI/UX Design" percentage={80} />
              <SkillBar name="DevOps" percentage={75} />
            </div>
            <div className="space-y-6">
              <SkillBar name="React/Next.js" percentage={98} />
              <SkillBar name="TypeScript" percentage={90} />
              <SkillBar name="Node.js" percentage={88} />
              <SkillBar name="Three.js/WebGL" percentage={82} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

