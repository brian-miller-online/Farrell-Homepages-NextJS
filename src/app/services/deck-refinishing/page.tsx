import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';
import { getCloudinaryUrl } from '@/lib/cloudinary';

export const metadata: Metadata = {
  title: "Deck Staining & Refinishing Fort Wayne",
  description: "Professional deck staining and refinishing in Fort Wayne and Northeast Indiana. Restore and protect your deck with quality stains. Call (260) 909-0717.",
};

export default function DeckRefinishing() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Deck Staining and Refinishing",
    "name": "Deck and Fence Staining Services",
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
      {"@type": "Place", "name": "Northeast Indiana"},
      {"@type": "Place", "name": "Hamilton Lake, Indiana"},
      {"@type": "Place", "name": "Lake James, Indiana"}
    ],
    "description": "Expert deck staining and fence refinishing in Fort Wayne and Northeast Indiana. Restore and protect your outdoor spaces with premium stains. Lake house specialists.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Deck and Fence Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Deck Staining"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Deck Refinishing"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fence Staining"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Deck Sealing"}}
      ]
    }
  };

  const deckProjects = [
    {
      id: 1,
      before: "/portfolio/Joebefore1.jpg",
      after: "/portfolio/Joeafter1.jpg",
      title: "Deck Refinishing - Complete Transformation",
      location: "Northeast Indiana"
    },
    {
      id: 7,
      before: "/portfolio/Joebefore7.jpg",
      after: "/portfolio/Joeafter7.jpg",
      title: "Weathered Deck Restoration",
      location: "Residential Property"
    },
    {
      id: 8,
      before: "/portfolio/Joebefore8.jpg",
      after: "/portfolio/Joeafter8.jpg",
      title: "Deck Staining & Sealing",
      location: "Lake House Property"
    },
    {
      id: 12,
      before: "/portfolio/Joebefore12.jpg",
      after: "/portfolio/Joeafter12.jpg",
      title: "Deck Railing & Surface Refinishing",
      location: "Waterfront Deck"
    },
    {
      id: 13,
      before: "/portfolio/Joebefore13.jpg",
      after: "/portfolio/Joeafter13.jpg",
      title: "Complete Deck Makeover",
      location: "Residential Property"
    }
  ];

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
                  Deck Refinishing That Brings Your Outdoor Space Back to Life
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  Your deck takes a beating from sun, rain, snow, and foot traffic. Weathered wood. Faded stain. Splintering boards.
                </p>
                <p className="text-xl md:text-2xl text-gold font-semibold mb-8">
                  I've refinished dozens of decks. I know how to make them last.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg inline-block">
                    Get Your Free Deck Quote
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
                    src={getCloudinaryUrl("Farrell's Painting/portfolio/Joeafter1", { width: 800, quality: 'auto', format: 'auto' })} 
                    alt="Beautifully refinished deck showing expert craftsmanship"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      Protection Starts with Preparation
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      See that smooth, even finish? Those rich, consistent colors?
                    </p>
                    <p className="text-lg text-navy font-semibold">
                      That's what happens when you don't rush the prep work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Decks Fail Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              Why Most Deck Stains Fail in 2-3 Years
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Most homeowners think deck refinishing is simple: slap on some stain and you're done.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong className="text-navy">That's why their decks look terrible again in 2 years.</strong>
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The problem isn't the stain. It's the prep work. If you don't remove old finish, clean the wood properly, and let it dry completely, the new stain won't bond. It'll peel, flake, and look worse than when you started.
                </p>
                <div className="bg-gold bg-opacity-10 border-l-4 border-gold p-6 my-8">
                  <p className="text-lg text-navy italic">
                    "I spend more time prepping decks than I do staining them. That's the difference between a deck that lasts 2 years and one that lasts 7."
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
              From Weathered to Beautiful
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-navy text-gold px-4 py-2 rounded font-bold z-10">
                    BEFORE
                  </div>
                  <img 
                    src={getCloudinaryUrl("Farrell's Painting/portfolio/Joebefore7", { width: 600, quality: 'auto', format: 'auto' })} 
                    alt="Weathered, gray deck before refinishing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-gold text-navy px-4 py-2 rounded font-bold z-10">
                    AFTER
                  </div>
                  <img 
                    src={getCloudinaryUrl("Farrell's Painting/portfolio/Joeafter7", { width: 600, quality: 'auto', format: 'auto' })} 
                    alt="Beautiful refinished deck with rich stain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  This deck was gray, splintered, and faded from years of sun and rain. <strong className="text-navy">Three days later, it looked brand new.</strong> That's what proper prep and premium stain can do.
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
              How I Refinish Decks the Right Way
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Power Washing & Cleaning</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I power wash the entire deck to remove dirt, mildew, and loose finish. Then I use a wood cleaner to neutralize the pH and open the wood grain so it accepts stain properly.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Sanding & Surface Prep</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I sand down rough spots, splinters, and any remaining old finish. The surface needs to be smooth and clean—no shortcuts.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Proper Drying Time</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I let the wood dry completely (usually 48-72 hours depending on weather). Staining wet wood is the #1 reason deck finishes fail. I don't rush this step.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Premium Stain & Sealer Application</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I use Sherwin-Williams premium deck stains and sealers. Two coats minimum. I work the stain into the wood, not just on top of it. Railings, spindles, posts—everything gets the same attention.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Long-Lasting Protection</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    A properly refinished deck should last 5-7 years, not 2-3. I use products and techniques that protect against UV damage, moisture, and mildew. Your deck will look great for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Work Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              It's the Details That Make the Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={getCloudinaryUrl("Farrell's Painting/portfolio/Joeafter1", { width: 800, quality: 'auto', format: 'auto' })} 
                  alt="Close-up of refinished deck showing smooth, even finish"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Most painters rush the prep work. They power wash, wait a day, and slap on stain.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    <strong className="text-navy">That's why their decks look terrible in 2 years.</strong>
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    I sand every surface smooth. I let the wood dry completely. I work the stain into the grain, not just on top of it. Railings, spindles, posts—everything gets the same attention.
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
              What's Included in Every Deck Refinishing Project
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Complete Surface Preparation
                </h3>
                <p className="text-gray-700">
                  Power washing, cleaning, sanding, and repairs as needed
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Premium Stains & Sealers
                </h3>
                <p className="text-gray-700">
                  Sherwin-Williams products designed for maximum durability
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Railing & Trim Painting
                </h3>
                <p className="text-gray-700">
                  Spindles, posts, caps, and trim all get professional attention
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> UV & Moisture Protection
                </h3>
                <p className="text-gray-700">
                  Coatings that resist sun damage, water, and mildew
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
              Deck Refinishing Projects We've Completed
            </h2>
            <div className="space-y-16">
              {deckProjects.map((project) => (
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
            Ready to Bring Your Deck Back to Life?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's talk about your deck. I'll give you an honest assessment, a fair quote, and work that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all inline-block">
              Get Your Free Deck Quote
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