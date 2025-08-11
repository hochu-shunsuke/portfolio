import { MouseFollower } from "@/components/mouse-follower"
import { HeroSection } from "@/components/hero-section"
import { ProfileSection } from "@/components/profile-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full  text-white overflow-hidden">
      <MouseFollower />
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

