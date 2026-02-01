import { MouseFollower } from "@/components/mouse-follower"
import { Hero } from "@/components/hero"
import { Profile } from "@/components/profile"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Hobby } from "@/components/hobby"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white overflow-hidden">
      <MouseFollower />
      <Hero />
      <main>
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Hobby />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

