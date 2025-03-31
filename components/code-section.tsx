"use client"

import { SectionHeading } from "@/components/section-heading"
import { CodeSnippet } from "@/components/code-snippet"

export function CodeSection() {
  return (
    <section id="code" className="py-16 md:py-28 bg-zinc-950">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Code" subtitle="Clean, efficient, and maintainable" />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
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
    </section>
  )
}

