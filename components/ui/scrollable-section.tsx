"use client"

import { ReactNode } from 'react'
import { ScrollButton } from "@/components/ui/scroll-button"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { useUnifiedScroll } from "@/hooks/use-unified-scroll"

interface ScrollableSectionProps {
  itemCount: number
  itemWidth?: number
  scrollAmount?: number
  enableDrag?: boolean
  showIndicator?: boolean
  children: ReactNode
  className?: string
}

export function ScrollableSection({
  itemCount,
  itemWidth = 320,
  scrollAmount = 300,
  enableDrag = false,
  showIndicator = true,
  children,
  className = ""
}: ScrollableSectionProps) {
  const {
    scrollRef,
    showLeftArrow,
    showRightArrow,
    currentIndex,
    scrollLeft,
    scrollRight,
    checkArrows,
    isGrabbing,
    dragProps
  } = useUnifiedScroll({
    itemCount,
    itemWidth,
    scrollAmount,
    enableDrag
  })

  return (
    <div className="relative">
      <ScrollButton direction="left" onClick={scrollLeft} show={showLeftArrow} />
      
      <div 
        ref={scrollRef}
        className={`overflow-x-auto pb-6 scrollbar-hide ${isGrabbing ? 'select-none' : ''} ${className}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        {...dragProps}
      >
        {children}
      </div>
      
      <ScrollButton direction="right" onClick={scrollRight} show={showRightArrow} />
      
      {showIndicator && (
        <ScrollIndicator 
          itemCount={itemCount}
          currentIndex={currentIndex}
        />
      )}
    </div>
  )
}
