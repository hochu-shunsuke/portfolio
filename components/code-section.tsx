"use client"

import { SectionHeading } from "@/components/section-heading"
import { CodeSnippet } from "@/components/code-snippet"
import { ScrollButton } from "@/components/ui/scroll-button"
import { useRef, useState, useEffect } from "react"

export function CodeSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkArrows = () => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      setShowLeftArrow(current.scrollLeft > 0)
      setShowRightArrow(current.scrollLeft < current.scrollWidth - current.clientWidth - 10)
    }
  }

  useEffect(() => {
    checkArrows()
    window.addEventListener("resize", checkArrows)
    return () => window.removeEventListener("resize", checkArrows)
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
      setTimeout(checkArrows, 300)
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
      setTimeout(checkArrows, 300)
    }
  };

  return (
    <section id="code" className="py-16 md:py-28 bg-zinc-950">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Code" subtitle="Clean, efficient, and maintainable" />
        <div className="mt-12 relative">
          <ScrollButton direction="left" onClick={scrollLeft} show={showLeftArrow} />

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 hide-scrollbar"
            onScroll={checkArrows}
          >
            <div className="flex gap-6 min-w-max">
              <div className="w-[600px] shrink-0">
                <CodeSnippet
                  title="React Hook: useMousePosition"
                  language="typescript"
                  code={`import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ 
    x: 0, 
    y: 0 
  });
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ 
        x: e.clientX, 
        y: e.clientY 
      });
    };
    
    window.addEventListener('mousemove', updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);
  
  return position;
}`}
                />
              </div>
              <div className="w-[600px] shrink-0">
                <CodeSnippet
                  title="Animation Utility"
                  language="typescript"
                  code={`import { useRef, useEffect, useState } from 'react';

export function useIntersectionObserver(
  options = { threshold: 0.1 }
) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);
  
  return [ref, isVisible];
}`}
                />
              </div>
              <div className="w-[600px] shrink-0">
                <CodeSnippet
                  title="Animation Utility"
                  language="typescript"
                  code={`import { useRef, useEffect, useState } from 'react';

export function useIntersectionObserver(
  options = { threshold: 0.1 }
) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);
  
  return [ref, isVisible];
}`}
                />
              </div>
            </div>
          </div>

          <ScrollButton direction="right" onClick={scrollRight} show={showRightArrow} />
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
