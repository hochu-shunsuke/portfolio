import { SectionHeading } from "@/components/section-heading"
import { ProfileCard } from "@/components/profile-card"

export function ProfileSection() {
  return (
    <section id="profile" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Profile" subtitle="About me and my approach" />

        {/* Profile Card */}
        <div className="mt-12 mb-8">
          <ProfileCard />
        </div>
      </div>
    </section>
  )
}

