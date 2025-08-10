"use client"

import { useRef, useEffect, useState } from 'react'

interface UseMouseDragProps {
  onScroll?: () => void
}

export function useMouseDrag({ onScroll }: UseMouseDragProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const [isGrabbing, setIsGrabbing] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      startX.current = e.pageX - element.offsetLeft
      scrollLeft.current = element.scrollLeft
      setIsGrabbing(true)
      element.style.cursor = 'grabbing'
      e.preventDefault()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      const x = e.pageX - element.offsetLeft
      const walk = (x - startX.current) * 2 // スクロール速度の調整
      element.scrollLeft = scrollLeft.current - walk
    }

    const handleMouseUp = () => {
      isDragging.current = false
      setIsGrabbing(false)
      element.style.cursor = 'grab'
    }

    const handleMouseLeave = () => {
      isDragging.current = false
      setIsGrabbing(false)
      element.style.cursor = 'grab'
    }

    // タッチイベント対応
    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true
      startX.current = e.touches[0].pageX - element.offsetLeft
      scrollLeft.current = element.scrollLeft
      setIsGrabbing(true)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return
      const x = e.touches[0].pageX - element.offsetLeft
      const walk = (x - startX.current) * 2
      element.scrollLeft = scrollLeft.current - walk
    }

    const handleTouchEnd = () => {
      isDragging.current = false
      setIsGrabbing(false)
    }

    const handleScroll = () => {
      onScroll?.()
    }

    // イベントリスナーの追加
    element.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    element.addEventListener('mouseleave', handleMouseLeave)
    
    element.addEventListener('touchstart', handleTouchStart)
    element.addEventListener('touchmove', handleTouchMove)
    element.addEventListener('touchend', handleTouchEnd)
    
    element.addEventListener('scroll', handleScroll)

    // 初期カーソル設定
    element.style.cursor = 'grab'

    return () => {
      element.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      element.removeEventListener('mouseleave', handleMouseLeave)
      
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
      
      element.removeEventListener('scroll', handleScroll)
    }
  }, [onScroll])

  const scrollTo = (direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 300
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return {
    ref,
    isGrabbing,
    scrollTo
  }
}
