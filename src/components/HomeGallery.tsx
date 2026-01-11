"use client";

import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 11,
    before: "/portfolio/Joebefore11.jpg",
    after: "/portfolio/Joeafter11.jpg",
    title: "Complete Exterior Transformation",
    location: "Northeast Indiana",
    type: "Exterior Painting"
  },
  {
    id: 1,
    before: "/portfolio/Joebefore1.jpg",
    after: "/portfolio/Joeafter1.jpg",
    title: "Deck Refinishing",
    location: "Lake House Property",
    type: "Deck Staining"
  },
  {
    id: 3,
    before: "/portfolio/Joebefore3.jpg",
    after: "/portfolio/Joeafter3.jpg",
    title: "Lake House Sunroom",
    location: "Hamilton Lake Area",
    type: "Interior Painting"
  },
  {
    id: 6,
    before: "/portfolio/Joebefore6.jpg",
    after: "/portfolio/Joeafter6.jpg",
    title: "Home Exterior Refresh",
    location: "Fort Wayne Area",
    type: "Exterior Painting"
  }
];

export default function HomeGallery() {
  const [activeSlider, setActiveSlider] = useState<{[key: number]: number}>({});

  const handleSliderChange = (projectId: number, value: number) => {
    setActiveSlider(prev => ({ ...prev, [projectId]: value }));
  };

  return (
    <section className="py-16 md:py-20 bg-[#f8f6f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            See the Difference Quality Makes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Drag the slider to compare before and after. These are real projects from homes around Northeast Indiana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => {
            const sliderValue = activeSlider[project.id] ?? 50;
            return (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Before/After Slider */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* After Image (Background) */}
                  <img 
                    src={project.after}
                    alt={`${project.title} - After`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Before Image (Clipped) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderValue}%` }}
                  >
                    <img 
                      src={project.before}
                      alt={`${project.title} - Before`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ 
                        width: `${100 / (sliderValue / 100)}%`,
                        maxWidth: 'none'
                      }}
                    />
                  </div>

                  {/* Slider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                    style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-[#1e3a5f] font-bold text-sm">↔</span>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-[#1e3a5f] text-white px-3 py-1 rounded text-sm font-bold">
                    BEFORE
                  </div>
                  <div className="absolute top-4 right-4 bg-[#d4a574] text-[#1e3a5f] px-3 py-1 rounded text-sm font-bold">
                    AFTER
                  </div>

                  {/* Slider Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => handleSliderChange(project.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[#1e3a5f]">{project.title}</h3>
                      <p className="text-gray-500 text-sm">{project.location}</p>
                    </div>
                    <span className="bg-[#f8f6f3] text-[#1e3a5f] px-3 py-1 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#152b47] transition-colors"
          >
            View Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
