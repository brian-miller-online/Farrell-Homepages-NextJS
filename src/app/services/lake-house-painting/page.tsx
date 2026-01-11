import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lake House Painting Specialists | Hamilton Lake, Lake James",
  description: "Professional lake house painting in Northeast Indiana. Specialists at Hamilton Lake, Lake James, Jimerson Lake. UV-resistant paints, moisture barriers, 5-year warranty. Call (260) 909-0717.",
};

export default function LakeHousePainting() {

  const lakeHouseProjects = [
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
      title: "Lake House Living Space",
      location: "Waterfront Property"
    },
    {
      id: 9,
      before: "/portfolio/Joebefore9.jpg",
      after: "/portfolio/Joeafter9.jpg",
      title: "Lakefront Dock & Deck Railings",
      location: "Lake Property"
    },
    {
      id: 10,
      before: "/portfolio/Joeafter10.jpg",
      after: "/portfolio/Joeafter10b.jpg",
      title: "Lakefront Retaining Wall - White Finish",
      location: "Waterfront Property"
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Lake House Painting",
    "name": "Lake House Painting Services",
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
      {"@type": "Place", "name": "Hamilton Lake, Indiana"},
      {"@type": "Place", "name": "Lake James, Indiana"},
      {"@type": "Place", "name": "Jimerson Lake, Indiana"},
      {"@type": "Place", "name": "Crooked Lake, Indiana"},
      {"@type": "City", "name": "Angola", "containedInPlace": {"@type": "State", "name": "Indiana"}},
      {"@type": "Place", "name": "Northeast Indiana"}
    ],
    "description": "Specialized lake house painting for Hamilton Lake, Lake James, Jimerson Lake, Crooked Lake, and Northeast Indiana. Weather-resistant finishes designed for waterfront properties. 200+ lake houses painted. 5-year workmanship warranty.",
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
      "name": "Lake House Painting Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lake House Exterior Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lake House Interior Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dock Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Waterfront Deck Staining"}}
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
                  Lake House Painting That Stands Up to Midwest Weather
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  Your lake house faces challenges regular homes don't. Harsh UV rays. High humidity. Brutal freeze-thaw cycles.
                </p>
                <p className="text-xl md:text-2xl text-gold font-semibold mb-8">
                  I've painted 20+ lake houses. I know what works.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg inline-block">
                  Get Your Free Lake House Quote
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
                    src="/services/lake-house.jpg" 
                    alt="Beautiful lake house with professional paint job"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      Protection Starts with Understanding
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      See that finish? It's designed to handle UV reflection off the water, constant humidity, and Indiana winters.
                    </p>
                    <p className="text-lg text-navy font-semibold">
                      That's what 20+ lake houses have taught me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              Your Lake House Is Up Against More Than You Think
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/problems/uv-damage.jpg" 
                    alt="UV damage on deck showing weathered wood"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">UV Damage</h3>
                  <p className="text-gray-700">
                    Sunlight reflecting off the water doubles UV exposure. Standard paint fades in 2-3 years. You need UV-resistant systems that last.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/problems/humidity-damage.jpg" 
                    alt="Paint damage from high humidity and moisture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">High Humidity</h3>
                  <p className="text-gray-700">
                    Constant moisture from the lake causes paint to peel and blister. Proper prep and moisture barriers are non-negotiable.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/problems/freeze-thaw-damage.jpg" 
                    alt="Freeze-thaw damage showing cracked and damaged surfaces"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">Freeze-Thaw Cycles</h3>
                  <p className="text-gray-700">
                    Water gets into cracks, freezes, expands, and destroys your paint job. You need flexible coatings that move with the wood.
                  </p>
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
              Lake House Transformations
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-navy text-gold px-4 py-2 rounded font-bold z-10">
                    BEFORE
                  </div>
                  <img 
                    src="/portfolio/Joebefore9.jpg" 
                    alt="Lake house dock and railings before painting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-gold text-navy px-4 py-2 rounded font-bold z-10">
                    AFTER
                  </div>
                  <img 
                    src="/portfolio/Joeafter9.jpg" 
                    alt="Lake house dock and railings after professional painting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  This lakefront dock and railing system was weathered and faded from years of sun and water exposure. <strong className="text-navy">Now it's protected with UV-resistant coatings designed for waterfront properties.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Joe Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              Why Lake House Owners Keep Calling Me Back
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  I've painted over <strong className="text-navy">20 lake houses</strong> across Hamilton Lake, Lake James, Crooked Lake, and Jimerson Lake.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  I have one customer on Hamilton Lake who has trusted me with their home <strong className="text-gold">SEVEN times</strong>.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Not because they had problems. Because they know I understand what their investment is up against.
                </p>
                <div className="bg-gold bg-opacity-10 border-l-4 border-gold p-6 my-8">
                  <p className="text-lg text-navy italic">
                    "If you own a lake house in Northeast Indiana, you've probably seen my truck. I'm the guy who shows up, does the work right, and stands behind it for 5 years."
                  </p>
                  <p className="text-navy font-semibold mt-4">— Joe Farrell</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">
              How I Protect Your Lake House Investment
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Thorough Surface Preparation</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I don't cut corners on prep. Power washing, scraping, sanding, and priming. If the surface isn't right, the paint won't last. Period.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Moisture Barrier Protection</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I seal every crack, gap, and joint before painting. Water is your enemy. I make sure it stays out.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">UV-Resistant Paint Systems</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I only use Sherwin-Williams premium exterior coatings designed for high UV exposure. Your color stays vibrant for years, not months.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Flexible, Weather-Resistant Finishes</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I use coatings that expand and contract with temperature changes. No cracking. No peeling. Just a finish that lasts.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">5-Year Warranty</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I stand behind my work longer than anyone in Fort Wayne. If something fails, I fix it. That's not fine print—that's my word.
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
              What's Included in Every Lake House Project
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> UV-Resistant Paint Systems
                </h3>
                <p className="text-gray-700">
                  Premium coatings designed for high sun exposure near water
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Moisture Barrier Protection
                </h3>
                <p className="text-gray-700">
                  Sealing and prep work that keeps water out
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Weather-Resistant Finishes
                </h3>
                <p className="text-gray-700">
                  Flexible coatings that handle freeze-thaw cycles
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> 5-Year Warranty
                </h3>
                <p className="text-gray-700">
                  I stand behind my work longer than anyone
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
              Lake House Projects We've Completed
            </h2>
            <div className="space-y-16">
              {lakeHouseProjects.map((project) => (
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
            Ready to Protect Your Lake House Investment?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's talk about your project. I'll give you an honest assessment, a fair quote, and work that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all inline-block">
              Get Your Free Lake House Quote
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