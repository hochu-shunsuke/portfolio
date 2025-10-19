import { Github, Mail, Twitter, Linkedin, Globe, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

// ソーシャルリンクの設定
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hochu-shunsuke",
    icon: Github,
  },
  {
    name: "Instagram", 
    href: "https://www.instagram.com/macho_hochu",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hochu-shunsuke", 
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:hochu.shunsuke.dev@gmail.com",
    icon: Mail,
  },
  {
    name: "Website",
    href: "https://hochu-portfolio.vercel.app",
    icon: Globe,
  }
]

// ソーシャルリンクボタンコンポーネント（コンタクト用）
const SocialLinkButton = ({ link }: { link: typeof socialLinks[0] }) => {
  const IconComponent = link.icon
  
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        size="icon"
        className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all"
      >
        <IconComponent className="h-4 w-4" />
        <span className="sr-only">{link.name}</span>
      </Button>
    </a>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Contact" subtitle="Get in touch for collaborations" />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
          <div className="space-y-4">
            <p className="text-zinc-400">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <small className="text-zinc-400">
            新しいプロジェクトやアイデア，一緒に何かできそうなことがあれば，お気軽にご連絡ください！
            </small>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialLinkButton key={link.name} link={link} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <p className="text-sm font-medium text-zinc-400">Email</p>
                <p className="font-mono text-sm">hochu.shunsuke.dev@gmail.com</p>
              </div>
              <div className="grid gap-2">
                <p className="text-sm font-medium text-zinc-400">Location</p>
                <p className="font-mono text-sm">Nagoya, Japan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

