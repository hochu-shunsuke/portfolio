import { Github, Twitter, Linkedin, Mail, Globe, User, Target, Award, AlertCircle, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileCard() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/20">
      <div className="p-6 md:p-8">
        {/* Mobile Layout - Original Design */}
        <div className="block md:hidden">
          {/* Social Icons */}
          <div className="flex space-x-3 mb-6 justify-center">
            <a href="https://github.com/hochu-shunsuke" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
              >
                <Github className="h-3 w-3" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <a href="mailto:hochu.shunsuke.dev@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
            <a href="https://hochu-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </Button>
            </a>
          </div>

          {/* Name and Title */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-1">Hochu Shunsuke / 宝中俊介</h2>
            <p className="text-zinc-400">Developer, AI enthusiast</p>
            <p className="text-zinc-500">Nagoya, Japan born in 2005</p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://github.com/hochu-shunsuke.png" 
              alt="Profile Picture" 
              className="w-24 h-24 rounded-full border-2 border-zinc-700 hover:border-zinc-600 transition-colors duration-200" 
            />
          </div>
        </div>

        {/* Desktop Layout - New Design */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between mb-8">
            {/* Left Side - Social Icons and Info */}
            <div className="flex-1">
              {/* Social Icons */}
              <div className="flex space-x-3 mb-6">
                <a href="https://github.com/hochu-shunsuke" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <a href="mailto:hochu.shunsuke.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
                <a href="https://hochu-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </Button>
                </a>
              </div>

              {/* Name and Title */}
              <div>
                <h2 className="text-3xl font-bold mb-2">Hochu Shunsuke / 宝中俊介</h2>
                <p className="text-lg text-zinc-400 mb-1">Developer, AI enthusiast</p>
                <p className="text-zinc-500">Nagoya, Japan born in 2005</p>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src="https://github.com/hochu-shunsuke.png" 
                alt="Profile Picture" 
                className="w-32 h-32 rounded-full border-2 border-zinc-700 hover:border-zinc-600 transition-colors duration-200" 
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 my-6"></div>

        {/* Mission Section - Centered */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-zinc-400 leading-relaxed">
            I'm studying to create a communication infrastructure for all to live.
          </p>
        </div>
      </div>
    </div>
  )
}