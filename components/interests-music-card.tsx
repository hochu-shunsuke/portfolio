"use client"

interface InterestsMusicCardProps {
  spotifyUrl: string
}

export function InterestsMusicCard({ spotifyUrl }: InterestsMusicCardProps) {
  return (
    <div className="w-full h-[450px]">
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
      />
    </div>
  )
}
