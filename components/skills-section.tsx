import { SectionHeading } from "@/components/section-heading"
import { TechStack } from "@/components/tech-stack"

// Tech stack items with logos
const techStackItems = [
  { name: "Next.js", logo: "/icons/nextjs.svg?height=48&width=48" },
  { name: "better-auth", logo: "/icons/better-auth.svg?height=48&width=48" },
  { name: "supabase", logo: "/icons/supabase.svg?height=48&width=48" },
  { name: "TypeScript", logo: "/icons/typescript.svg?height=48&width=48" },
  { name: "Auth0", logo: "/icons/auth0.svg?height=48&width=48" },
  { name: "Python", logo: "/icons/python.svg?height=48&width=48" },
  { name: "Django", logo: "/icons/django.svg?height=48&width=48" },
  { name: "Go", logo: "/icons/go.svg?height=48&width=48" },
  { name: "Dify", logo: "/icons/dify.svg?height=48&width=48" },
  { name: "GAS", logo: "/icons/GAS.svg?height=48&width=48" },
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
      </div>
    </section>
  )
}
