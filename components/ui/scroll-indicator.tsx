"use client"

interface ScrollIndicatorProps {
  itemCount: number
  currentIndex: number
  className?: string
}

export function ScrollIndicator({ itemCount, currentIndex, className = "" }: ScrollIndicatorProps) {
  return (
    <div className={`md:hidden flex justify-center mt-6 ${className}`}>
      <div className="flex space-x-2">
        {Array.from({ length: itemCount }, (_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-6 bg-zinc-400' 
                : 'w-2 bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
