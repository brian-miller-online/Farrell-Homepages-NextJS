"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/context/QuoteFormContext";
import { Phone } from "lucide-react";
import { useState } from "react";

// Portfolio data organized by category
const portfolioData = {
  "Lake Houses": [
    {
      id: 3,
      before: "/portfolio/Joebefore3.jpg",
      after: "/portfolio/Joeafter3.jpg",
      title: "Lake House Interior - Sunroom Transformation",
      description: "Fresh white walls and trim with stunning lake views. Perfect for entertaining guests while enjoying the waterfront.",
      location: "Northeast Indiana Lake"
    },
    {
      id: 4,
      before: "/portfolio/Joebefore4.jpg",
      after: "/portfolio/Joeafter4.jpg",
      title: "Lake House Living Space",
      description: "Open concept living area with neutral tones and large windows showcasing the water. Clean, professional finish that lasts.",
      location: "Waterfront Property"
    },
    {
      id: 8,
      before: "/portfolio/Joebefore8.jpg",
      after: "/portfolio/Joeafter8.jpg",
      title: "Lakefront Dock & Deck Railings",
      description: "White and blue paint that stands up to harsh UV rays, high humidity, and freeze-thaw cycles. Built to last on the water.",
      location: "Lake Property"
    },
    {
      id: 10,
      before: "/portfolio/Joeafter10.jpg",
      after: "/portfolio/Joeafter10b.jpg",
      title: "Lakefront Retaining Wall - White Finish",
      description: "Massive retaining wall transformed from textured concrete to clean white finish. Protects against lake erosion while enhancing curb appeal.",
      location: "Waterfront Property"
    }
  ],
  "Deck Refinishing": [
    {
      id: 1,
      before: "/portfolio/Joebefore1.jpg",
      after: "/portfolio/Joeafter1.jpg",
      title: "Deck Flooring & Railings",
      description: "Rich brown stain on deck flooring with clean, even coverage. Protects wood while enhancing natural beauty.",
      location: "Residential Property"
    },
    {
      id: 5,
      before: "/portfolio/Joebefore5.jpg",
      after: "/portfolio/Joeafter5.jpg",
      title: "Deck Floor & White Railings",
      description: "Weathered deck transformed with fresh stain and crisp white railings. Smooth finish that's built to withstand the elements.",
      location: "Residential Property"
    },
    {
      id: 6,
      before: "/portfolio/Joebefore6.jpg",
      after: "/portfolio/Joeafter6.jpg",
      title: "Lakefront Deck Restoration",
      description: "Peeling paint completely removed and refinished with light, modern colors. Lakefront deck that looks brand new.",
      location: "Lake Property"
    },
    {
      id: 7,
      before: "/portfolio/Joebefore7.jpg",
      after: "/portfolio/Joeafter7.jpg",
      title: "Deck & Railing Renewal",
      description: "From weathered and mildewed to pristine white railings and uniform deck floor. Dramatic transformation that adds value.",
      location: "Residential Property"
    },
    {
      id: 9,
      before: "/portfolio/Joebefore9.jpg",
      after: "/portfolio/Joeafter9.jpg",
      title: "Deck Structure - Gray & White",
      description: "Modern two-tone deck with contrasting gray and white. Clean lines and professional finish on all structural elements.",
      location: "Waterfront Property"
    }
  ],
  "Interior Painting": [
    {
      id: 3,
      before: "/portfolio/Joebefore3.jpg",
      after: "/portfolio/Joeafter3.jpg",
      title: "Lake House Interior - Sunroom Transformation",
      description: "Fresh white walls and trim with stunning lake views. Perfect for entertaining guests while enjoying the waterfront.",
      location: "Northeast Indiana Lake"
    },
    {
      id: 4,
      before: "/portfolio/Joebefore4.jpg",
      after: "/portfolio/Joeafter4.jpg",
      title: "Lake House Living Space",
      description: "Open concept living area with neutral tones and large windows showcasing the water. Clean, professional finish that lasts.",
      location: "Waterfront Property"
    }
  ],
  "Exterior Painting": [
    {
      id: 11,
      before: "/portfolio/Joebefore11.jpg",
      after: "/portfolio/Joeafter11.jpg",
      title: "House Siding & Trim",
      description: "Light blue siding with dark trim creates beautiful contrast. Sharp lines and even coverage that protects your investment.",
      location: "Residential Property"
    },
    {
      id: 12,
      before: "/portfolio/Joebefore12.jpg",
      after: "/portfolio/Joeafter12.jpg",
      title: "Siding & Foundation",
      description: "Worn siding restored to smooth, even finish with painted foundation. Complete exterior transformation.",
      location: "Residential Property"
    },
    {
      id: 13,
      before: "/portfolio/Joebefore13.jpg",
      after: "/portfolio/Joeafter13.jpg",
      title: "Stucco Siding & Chimney",
      description: "Contrasting colors on siding and chimney create curb appeal. Professional finish on stucco and window trim.",
      location: "Residential Property"
    }
  ]
};

export default function PortfolioPage() {
  const { openQuoteForm } = useQuoteForm();
  const [selectedCategory, setSelectedCategory] = useState<string>("Lake Houses");
  
  const categories = Object.keys(portfolioData);
  const currentProjects = portfolioData[selectedCategory as keyof typeof portfolioData];

  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-navy py-6 md:py-8 mt-[60px] md:mt-[70px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl md:text-2xl text-warm-white mb-8 max-w-3xl mx-auto">
            Over 200 homes transformed across Northeast Indiana. See the quality and craftsmanship that sets Farrell's Painting apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold" onClick={() => openQuoteForm()}>
              Get Your Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy"
            >
              <Phone className="mr-2 h-5 w-5" />
              (260) 909-0717
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-gray-50 sticky top-[60px] md:top-[70px] z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gold text-navy shadow-lg"
                    : "bg-white text-navy hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-6 md:py-8 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {currentProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Project Title & Description */}
                <div className="p-6 md:p-8 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    📍 {project.location}
                  </p>
                </div>

                {/* Before/After Images */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Before Image */}
                  {project.before && (
                    <div className="relative group">
                      <div className="absolute top-4 left-4 z-10 bg-navy text-gold px-4 py-2 rounded-lg font-bold shadow-lg">
                        BEFORE
                      </div>
                      <img
                        src={project.before}
                        alt={`Before: ${project.title}`}
                        className="w-full h-full object-cover aspect-[4/3]"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* After Image */}
                  <div className="relative group">
                    <div className="absolute top-4 left-4 z-10 bg-gold text-navy px-4 py-2 rounded-lg font-bold shadow-lg">
                      AFTER
                    </div>
                    <img
                      src={project.after}
                      alt={`After: ${project.title}`}
                      className="w-full h-full object-cover aspect-[4/3]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-warm-white mb-8">
            Let's talk about your project. I'll provide a free, no-obligation quote and honest advice about what your home needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold" onClick={() => openQuoteForm()}>
              Get Your Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Joe: (260) 909-0717
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Why Homeowners Trust Farrell's Painting
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">200+</div>
              <p className="text-lg text-gray-700">Homes Painted</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">20+</div>
              <p className="text-lg text-gray-700">Lake Houses Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">5-Year</div>
              <p className="text-lg text-gray-700">Warranty on All Work</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}