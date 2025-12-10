import { Button } from "@/components/ui/button"
import Image from "next/image"
import { socialLinks } from "@/lib/data"

// ソーシャルリンクボタンコンポーネント
const SocialLinkButton = ({ 
  link, 
  isMobile = false 
}: { 
  link: typeof socialLinks[0], 
  isMobile?: boolean 
}) => {
  const IconComponent = link.icon
  const iconSize = isMobile ? link.iconSize.mobile : link.iconSize.desktop
  const buttonSize = isMobile ? "h-8 w-8" : "h-10 w-10"
  
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="ghost"
        size="icon"
        className={`${buttonSize} rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors duration-200`}
      >
        <IconComponent className={iconSize} />
        <span className="sr-only">{link.name}</span>
      </Button>
    </a>
  )
}
export function ProfileCard() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/20">
      <div className="p-6 md:p-8">
        {/* Mobile Layout - Original Design */}
        <div className="block md:hidden">
          {/* Social Icons */}
          <div className="flex space-x-3 mb-6 justify-center">
            {socialLinks.map((link) => (
              <SocialLinkButton key={link.name} link={link} isMobile={true} />
            ))}
          </div>

          {/* Name and Title */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold mb-1">Hochu Shunsuke</h2>
            <p className="text-zinc-400">Web Developer, AI enthusiast</p>
            <p className="text-zinc-500">Nagoya, Japan born in 2005</p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <Image
              src="https://github.com/hochu-shunsuke.png"
              alt="Profile Picture"
              width={96}
              height={96}
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
                {socialLinks.map((link) => (
                  <SocialLinkButton key={link.name} link={link} isMobile={false} />
                ))}
              </div>

              {/* Name and Title */}
              <div>
                <h2 className="text-3xl font-bold mb-2">Hochu Shunsuke</h2>
                <p className="text-lg text-zinc-400 mb-1">Web Developer, AI enthusiast</p>
                <p className="text-zinc-500">Nagoya, Japan born in 2005</p>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex-shrink-0">
              <Image
                src="https://github.com/hochu-shunsuke.png"
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full border-2 border-zinc-700 hover:border-zinc-600 transition-colors duration-200"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 my-6"></div>

        {/* Mission Section - Centered */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="space-y-3">
            <p className="text-zinc-400 leading-relaxed">
              Web開発，イベントの企画運営，コンテンツ作成など広く取り組んでおります．
            </p>
            <p className="text-zinc-400 leading-relaxed">
              現在は人材系ベンチャーのエンジニアとして求人サイトの開発を担当しています．
            </p>
            <p className="text-zinc-400 leading-relaxed">
              貧困国における通信インフラの改善に強く関心があります．
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-800">
            <div className="space-y-3 text-sm">
              <p className="text-zinc-400 leading-relaxed">
                貧困や紛争，情報格差のある環境で人々が生きるために必要な情報基盤を技術で支えたいと考えています．
              </p>
              <p className="text-zinc-400 leading-relaxed">
                自身でも楽しみながら，誰かの心に触れるようなプロダクトをつくりたいと考えています．
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
