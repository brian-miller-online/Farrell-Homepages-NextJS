"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/context/QuoteFormContext";
import { Phone } from "lucide-react";
import { useState } from "react";
import { getCloudinaryUrl } from "@/lib/cloudinary";

// Helper to generate Cloudinary URLs for portfolio images
const portfolioImg = (name: string) => getCloudinaryUrl(`Farrell's Painting/portfolio/${name}`, { width: 600, quality: 'auto', format: 'auto' });

// Portfolio data organized by category
const portfolioData = {
  "Lake Houses": [
    {
      id: 3,
      before: portfolioImg("Joebefore3"),
      after: portfolioImg("Joeafter3"),
      title: "Lake House Interior - Sunroom Transformation",
      description: "Fresh white walls and trim with stunning lake views. Perfect for entertaining guests while enjoying the waterfront.",
      location: "Northeast Indiana Lake"
    },
    {
      id: 4,
      before: portfolioImg("Joebefore4"),
      after: portfolioImg("Joeafter4"),
      title: "Lake House Living Space",
      description: "Open concept living area with neutral tones and large windows showcasing the water. Clean, professional finish that lasts.",
      location: "Waterfront Property"
    },
    {
      id: 8,
      before: portfolioImg("Joebefore8"),
      after: portfolioImg("Joeafter8"),
      title: "Lakefront Dock & Deck Railings",
      description: "White and blue paint that stands up to harsh UV rays, high humidity, and freeze-thaw cycles. Built to last on the water.",
      location: "Lake Property"
    },
    {
      id: 10,
      before: portfolioImg("Joeafter10"),
      after: portfolioImg("Joeafter10b"),
      title: "Lakefront Retaining Wall - White Finish",
      description: "Massive retaining wall transformed from textured concrete to clean white finish. Protects against lake erosion while enhancing curb appeal.",
      location: "Waterfront Property"
    }
  ],
  "Deck Refinishing": [
    {
      id: 1,
      before: portfolioImg("Joebefore1"),
      after: portfolioImg("Joeafter1"),
      title: "Deck Flooring & Railings",
      description: "Rich brown stain on deck flooring with clean, even coverage. Protects wood while enhancing natural beauty.",
      location: "Residential Property"
    },
    {
      id: 5,
      before: portfolioImg("Joebefore5"),
      after: portfolioImg("Joeafter5"),
      title: "Deck Floor & White Railings",
      description: "Weathered deck transformed with fresh stain and crisp white railings. Smooth finish that's built to withstand the elements.",
      location: "Residential Property"
    },
    {
      id: 6,
      before: portfolioImg("Joebefore6"),
      after: portfolioImg("Joeafter6"),
      title: "Lakefront Deck Restoration",
      description: "Peeling paint completely removed and refinished with light, modern colors. Lakefront deck that looks brand new.",
      location: "Lake Property"
    },
    {
      id: 7,
      before: portfolioImg("Joebefore7"),
      after: portfolioImg("Joeafter7"),
      title: "Deck & Railing Renewal",
      description: "From weathered and mildewed to pristine white railings and uniform deck floor. Dramatic transformation that adds value.",
      location: "Residential Property"
    },
    {
      id: 9,
      before: portfolioImg("Joebefore9"),
      after: portfolioImg("Joeafter9"),
      title: "Deck Structure - Gray & White",
      description: "Modern two-tone deck with contrasting gray and white. Clean lines and professional finish on all structural elements.",
      location: "Waterfront Property"
    }
  ],
  "Interior Painting": [
    {
      id: 3,
      before: portfolioImg("Joebefore3"),
      after: portfolioImg("Joeafter3"),
      title: "Lake House Interior - Sunroom Transformation",
      description: "Fresh white walls and trim with stunning lake views. Perfect for entertaining guests while enjoying the waterfront.",
      location: "Northeast Indiana Lake"
    },
    {
      id: 4,
      before: portfolioImg("Joebefore4"),
      after: portfolioImg("Joeafter4"),
      title: "Lake House Living Space",
      description: "Open concept living area with neutral tones and large windows showcasing the water. Clean, professional finish that lasts.",
      location: "Waterfront Property"
    }
  ],
  "Exterior Painting": [
    {
      id: 11,
      before: portfolioImg("Joebefore11"),
      after: portfolioImg("Joeafter11"),
      title: "House Siding & Trim",
      description: "Light blue siding with dark trim creates beautiful contrast. Sharp lines and even coverage that protects your investment.",
      location: "Residential Property"
    },
    {
      id: 12,
      before: portfolioImg("Joebefore12"),
      after: portfolioImg("Joeafter12"),
      title: "Siding & Foundation",
      description: "Worn siding restored to smooth, even finish with painted foundation. Complete exterior transformation.",
      location: "Residential Property"
    },
    {
      id: 13,
      before: portfolioImg("Joebefore13"),
      after: portfolioImg("Joeafter13"),
      title: "Stucco Siding & Chimney",
      description: "Contrasting colors on siding and chimney create curb appeal. Professional finish on stucco and window trim.",
      location: "Residential Property"
    }
  ]
};

export default function PortfolioPage() {
  const { openQuoteForm } = useQuoteForm();
  const [activeCategory, setActiveCategory] = useState("Lake Houses");
  const [activeSlider, setActiveSlider] = useState<{[key: number]: number}>({});

  const categories = Object.keys(portfolioData);

  const handleSliderChange = (projectId: number, value: number) => {
    setActiveSlider(prev => ({ ...prev, [projectId]: value }));
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl text-warm-white max-w-3xl mx-auto mb-8">
            Over 200 homes painted across Northeast Indiana. From lake houses to family homes, 
            every project gets the same attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy font-semibold"
              onClick={() => openQuoteForm()}
            >
              Get Your Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy"
              asChild
            >
              <a href="tel:+12609090717">
                <Phone className="mr-2 h-5 w-5" />
                (260) 909-0717
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-navy text-gold"
                    : "bg-white text-navy hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData[activeCategory as keyof typeof portfolioData].map((project) => {
              const sliderValue = activeSlider[project.id] ?? 50;
              return (
                <div key={`${activeCategory}-${project.id}`} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Before/After Slider */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* After Image (Background) */}
                    <img 
                      src={project.after}
                      alt={`${project.title} - After`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
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
                        loading="lazy"
                      />
                    </div>

                    {/* Slider Line */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                      style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-navy font-bold text-sm">↔</span>
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-navy text-gold px-3 py-1 rounded text-sm font-bold">
                      BEFORE
                    </div>
                    <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded text-sm font-bold">
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
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-warm-white max-w-2xl mx-auto mb-8">
            Get a free, no-obligation quote. I'll personally assess your project and give you an honest estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy font-semibold"
              onClick={() => openQuoteForm()}
            >
              Get Your Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy"
              asChild
            >
              <a href="tel:+12609090717">
                <Phone className="mr-2 h-5 w-5" />
                Call Joe: (260) 909-0717
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteFormModal />
    </div>
  );
}
