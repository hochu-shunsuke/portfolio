import { MouseFollower } from "@/components/mouse-follower"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProfileSection } from "@/components/profile-section"
import { SkillsSection } from "@/components/skills-section"
import { CodeSection } from "@/components/code-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden">
      <MouseFollower />
      <SiteHeader />
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
      <CodeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

