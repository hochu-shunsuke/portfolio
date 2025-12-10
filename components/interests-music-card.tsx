"use client"

interface InterestsMusicCardProps {
  spotifyUrl: string
}

export function InterestsMusicCard({ spotifyUrl }: InterestsMusicCardProps) {
  return (
    <div className="w-full h-[450px] transition-transform duration-300 hover:scale-[1.02] group">
      <iframe 
        title="Spotify Playlist"
        data-testid="embed-iframe"
        style={{ borderRadius: '12px' }}
        src={spotifyUrl}
        width="100%" 
        height="450" 
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        loading="lazy"
        className="border-none transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zinc-900/20"
      />
    </div>
  )
}
