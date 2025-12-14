import { MouseFollower } from "@/components/mouse-follower"
import { Hero } from "@/components/hero"
import { Profile } from "@/components/profile"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Interests } from "@/components/interests"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full  text-white overflow-hidden">
      <MouseFollower />
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </div>
  )
}

