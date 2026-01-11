import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Interior House Painting Fort Wayne | Clean, Precise Work | Farrell's Painting",
  description: "Professional interior painting in Fort Wayne and Northeast Indiana. Clean, precise work with premium paints. 5-year workmanship warranty. Call (260) 909-0717.",
};

export default function InteriorPainting() {

  const interiorProjects = [
    {
      id: 3,
      before: "/portfolio/Joebefore3.jpg",
      after: "/portfolio/Joeafter3.jpg",
      title: "Lake House Interior - Sunroom Transformation",
      location: "Northeast Indiana Lake"
    },
    {
      id: 4,
      before: "/portfolio/Joebefore4.jpg",
      after: "/portfolio/Joeafter4.jpg",
      title: "Lake House Living Space with Detailed Spindle Work",
      location: "Waterfront Property"
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Interior House Painting",
    "name": "Interior Painting Services",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Farrell's Painting",
      "@id": "https://www.farrellspainting.com/#business",
      "telephone": "+1-260-909-0717",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Waterloo",
        "addressRegion": "IN",
        "postalCode": "46793",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {"@type": "City", "name": "Fort Wayne", "containedInPlace": {"@type": "State", "name": "Indiana"}},
      {"@type": "City", "name": "Angola", "containedInPlace": {"@type": "State", "name": "Indiana"}},
      {"@type": "Place", "name": "Northeast Indiana"}
    ],
    "description": "Professional interior painting services in Fort Wayne and Northeast Indiana. Clean, precise work with zero mess. Expert color consultation. 5-year workmanship warranty.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    },
    "termsOfService": "https://www.farrellspainting.com/warranty",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Interior Painting Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wall Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Ceiling Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Trim and Molding Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cabinet Painting"}}
      ]
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      
      {/* Hero Section with Split Layout */}
      <section className="relative bg-navy py-12 md:py-16 lg:py-20 mt-[60px] md:mt-[70px]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Headline & CTAs */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 leading-tight">
                  Interior Painting with Attention to Every Detail
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  Your home's interior deserves more than a quick coat of paint. Clean lines. Smooth finishes. Meticulous trim work.
                </p>
                <p className="text-xl md:text-2xl text-gold font-semibold mb-8">
                  I take the time to do it right—every spindle, every corner, every edge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg inline-block">
                  Get Your Free Interior Quote
                </Link>
                  <a 
                    href="tel:2609090717"
                    className="flex items-center gap-2 text-white hover:text-gold transition-colors text-lg font-semibold"
                  >
                    <span className="text-2xl">📞</span>
                    <span>(260) 909-0717</span>
                  </a>
                </div>
              </div>

              {/* Right Side - Detail Photo & Proof */}
              <div className="relative">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                  <img 
                    src="/services/interior-spindles.jpg" 
                    alt="Hand-painted spindles and railings showing meticulous detail work"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      The Difference Is in the Details
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      See those spindles? Every single one was hand-painted. No spraying. No shortcuts.
                    </p>
                    <p className="text-lg text-navy font-semibold">
                      That's what separates me from other painters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Interior Painting Fails Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              Why Most Interior Paint Jobs Look Cheap
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Most painters rush through interior work. They spray everything, leave drips on the trim, and call it done.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong className="text-navy">That's why you see roller marks, tape lines, and sloppy edges everywhere.</strong>
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Interior painting isn't about speed. It's about precision. When you're painting someone's living room, you don't get to be sloppy. Every baseboard, every door frame, every spindle needs attention.
                </p>
                <div className="bg-gold bg-opacity-10 border-l-4 border-gold p-6 my-8">
                  <p className="text-lg text-navy italic">
                    "Interior painting isn't about speed. It's about precision. When you're painting someone's living room, you don't get to be sloppy."
                  </p>
                  <p className="text-navy font-semibold mt-4">— Joe Farrell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              From Dated to Beautiful
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-navy text-gold px-4 py-2 rounded font-bold z-10">
                    BEFORE
                  </div>
                  <img 
                    src="/portfolio/Joebefore4.jpg" 
                    alt="Interior space before painting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-gold text-navy px-4 py-2 rounded font-bold z-10">
                    AFTER
                  </div>
                  <img 
                    src="/portfolio/Joeafter4.jpg" 
                    alt="Beautiful interior with detailed spindle work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  This living space was transformed with fresh paint and meticulous attention to every spindle and railing. <strong className="text-navy">Clean lines, smooth finishes, and no shortcuts.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">
              How I Paint Interiors the Right Way
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Furniture & Floor Protection</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I cover everything. Furniture, floors, fixtures—nothing gets paint on it. I treat your home like it's my own.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Surface Prep & Repairs</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I patch holes, fill cracks, sand rough spots, and prime as needed. The walls need to be smooth before painting—no exceptions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Detailed Trim & Spindle Work</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Baseboards, crown molding, door frames, window trim, spindles, railings—everything gets hand-brushed for clean, crisp lines. No tape marks. No drips.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Premium Interior Paints</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I use Sherwin-Williams Emerald, Duration, or Cashmere—low-VOC, durable finishes that look great and clean easily. Two coats minimum for full coverage.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Clean, Professional Finish</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    When I'm done, your home looks better than when I started. No mess. No paint splatters. Just clean, beautiful walls and trim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">
              What's Included in Every Interior Painting Project
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Walls, Ceilings & Trim
                </h3>
                <p className="text-gray-700">
                  Complete interior painting with attention to every surface
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Detailed Spindle & Railing Work
                </h3>
                <p className="text-gray-700">
                  Hand-painted for precision and clean lines
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Furniture & Floor Protection
                </h3>
                <p className="text-gray-700">
                  Everything covered and protected during the project
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Clean, Professional Finish
                </h3>
                <p className="text-gray-700">
                  No mess, no drips—just beautiful results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">
              Interior Painting Projects We've Completed
            </h2>
            <div className="space-y-16">
              {interiorProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative">
                      <div className="absolute top-4 left-4 bg-navy text-gold px-4 py-2 rounded font-bold z-10">
                        BEFORE
                      </div>
                      <img 
                        src={project.before} 
                        alt={`Before: ${project.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative">
                      <div className="absolute top-4 left-4 bg-gold text-navy px-4 py-2 rounded font-bold z-10">
                        AFTER
                      </div>
                      <img 
                        src={project.after} 
                        alt={`After: ${project.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-navy mb-2">{project.title}</h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <span>📍</span>
                      <span>{project.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gold mb-4">
            Ready to Transform Your Interior?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's talk about your project. I'll give you an honest assessment, a fair quote, and work that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all inline-block">
              Get Your Free Interior Quote
            </Link>
            <a 
              href="tel:2609090717"
              className="flex items-center gap-2 text-white hover:text-gold transition-colors text-lg font-semibold"
            >
              Call Joe: (260) 909-0717
            </a>
          </div>
          <p className="text-white mt-6 text-sm">
            <Link href="/services">
              <a className="hover:text-gold transition-colors">← Back to All Services</a>
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}