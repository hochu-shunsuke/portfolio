"use client"

interface InterestsMusicCardProps {
  spotifyUrl: string
}

export function InterestsMusicCard({ spotifyUrl }: InterestsMusicCardProps) {
  return (
    <div className="w-full h-[450px] transition-transform duration-300 hover:scale-[1.02] group">
      <iframe 
        data-testid="embed-iframe"
        style={{ borderRadius: '12px' }}
        src={spotifyUrl}
        width="100%" 
        height="450" 
        frameBorder="0" 
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        className="transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zinc-900/20"
      />
    </div>
  )
}
