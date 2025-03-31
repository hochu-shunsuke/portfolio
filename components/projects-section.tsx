import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Selected works and experiments" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          <ProjectCard
            title="3D Portfolio Visualizer"
            description="An immersive 3D web experience built with Three.js and React"
            tags={["Three.js", "React", "WebGL"]}
            imageUrl="/placeholder.svg?height=400&width=600"
          />
          <ProjectCard
            title="E-Commerce Platform"
            description="A modern e-commerce solution with seamless checkout experience"
            tags={["Next.js", "Stripe", "Tailwind"]}
            imageUrl="/placeholder.svg?height=400&width=600"
          />
          <ProjectCard
            title="AI Dashboard"
            description="Data visualization dashboard for AI analytics"
            tags={["TypeScript", "D3.js", "API"]}
            imageUrl="/placeholder.svg?height=400&width=600"
          />
        </div>
      </div>
    </section>
  )
}

