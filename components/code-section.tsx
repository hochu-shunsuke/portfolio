"use client"

import { SectionHeading } from "@/components/section-heading"
import { CodeSnippet } from "@/components/code-snippet"

export function CodeSection() {
  return (
    <section id="code" className="py-16 md:py-28 bg-zinc-950">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Code" subtitle="Clean, efficient, and maintainable" />
        <div className="mt-12 relative">
          <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-track]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:bg-zinc-700">
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
        </div>
      </div>
    </section>
  )
}
