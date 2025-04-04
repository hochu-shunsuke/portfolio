import { Github, Twitter, Linkedin, Mail, Globe, User, Target, Award, AlertCircle, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileCard() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/20">
      <div className="p-6 md:p-8">
        {/* Social Icons */}
        <div className="flex space-x-3 mb-6">
          <a href="https://github.com/hochu-shunsuke" target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
          >
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Button>
          <a href="https://hochu-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"
          >
            <Globe className="h-4 w-4" />
            <span className="sr-only">Website</span>
          </Button>
          </a>
        </div>

        {/* Name and Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">Hochu Shunsuke / 宝中俊介</h2>
          <p className="text-zinc-400">Full-stack Developer, network engineer, AI enthusiast</p>
          <p className="text-zinc-500">Nagoya, Japan born in 2005</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 my-6"></div>

        {/* Profile Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {/* Mission */}
            <div className="space-y-2">
              <div className="flex items-center text-zinc-300">
                <User className="h-4 w-4 mr-2" />
                <h3 className="font-medium">Mission</h3>
              </div>
              <p className="text-sm text-zinc-400 pl-6">
                To create digital experiences that blend technical excellence with intuitive design, making technology
                more accessible and enjoyable for everyone.
              </p>
            </div>

            {/* Goals */}
            <div className="space-y-2">
              <div className="flex items-center text-zinc-300">
                <Target className="h-4 w-4 mr-2" />
                <h3 className="font-medium">Goals</h3>
              </div>
              <p className="text-sm text-zinc-400 pl-6">
                Continuously expand my technical skills, contribute to open-source projects, and build solutions that
                positively impact users' lives.
              </p>
            </div>

            {/* Strengths */}
            <div className="space-y-2">
              <div className="flex items-center text-zinc-300">
                <Award className="h-4 w-4 mr-2" />
                <h3 className="font-medium">Strengths</h3>
              </div>
              <ul className="text-sm text-zinc-400 pl-6 space-y-1">
                <li>• Problem-solving with creative solutions</li>
                <li>• Attention to detail in both code and design</li>
                <li>• Quick adaptation to new technologies</li>
                <li>• Effective communication of complex concepts</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            {/* Areas for Growth */}
            <div className="space-y-2">
              <div className="flex items-center text-zinc-300">
                <AlertCircle className="h-4 w-4 mr-2" />
                <h3 className="font-medium">Areas for Growth</h3>
              </div>
              <ul className="text-sm text-zinc-400 pl-6 space-y-1">
                <li>• Delegating tasks more effectively</li>
                <li>• Balancing perfectionism with pragmatism</li>
                <li>• Public speaking and presentations</li>
              </ul>
            </div>

            {/* Approach */}
            <div className="space-y-2">
              <div className="flex items-center text-zinc-300">
                <ThumbsUp className="h-4 w-4 mr-2" />
                <h3 className="font-medium">My Approach</h3>
              </div>
              <p className="text-sm text-zinc-400 pl-6">
                I blend technical precision with creative design to build digital experiences that are both functional
                and beautiful. My work is characterized by attention to detail, clean code, and intuitive user
                interfaces.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="mt-auto pt-4">
              <div className="bg-zinc-800 rounded-lg p-3 text-sm">
                <p className="text-zinc-300 font-medium">Nagoya, Japan</p>
                <p className="text-zinc-400 text-xs mt-1">Available for freelance projects and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

