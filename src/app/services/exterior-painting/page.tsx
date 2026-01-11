import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Exterior House Painting Fort Wayne | 5-Year Warranty",
  description: "Professional exterior house painting in Fort Wayne and Northeast Indiana. Premium Sherwin-Williams paints, thorough prep work, and a 5-year workmanship warranty. Call (260) 909-0717.",
};

export default function ExteriorPainting() {

  const exteriorProjects = [
    {
      id: 11,
      before: "https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joebefore11",
      after: "https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joeafter11",
      title: "Complete Exterior Transformation",
      location: "Northeast Indiana"
    },
    {
      id: 6,
      before: "https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joebefore6",
      after: "https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joeafter6",
      title: "Home Exterior Refresh",
      location: "Residential Property"
    },
    {
      id: 5,
      before: "https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joebefore5",
      after: "https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joeafter5",
      title: "Siding & Trim Painting",
      location: "Fort Wayne Area"
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Exterior House Painting",
    "name": "Exterior Painting Services",
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
      {"@type": "City", "name": "Auburn", "containedInPlace": {"@type": "State", "name": "Indiana"}},
      {"@type": "Place", "name": "Northeast Indiana"},
      {"@type": "Place", "name": "Hamilton Lake, Indiana"},
      {"@type": "Place", "name": "Lake James, Indiana"}
    ],
    "description": "Professional exterior house painting services in Fort Wayne and Northeast Indiana. Expert surface preparation, premium Sherwin-Williams paints, and a 5-year workmanship warranty. Owner-operated with 20+ years experience.",
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
      "name": "Exterior Painting Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "House Exterior Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Siding Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Trim Painting"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Garage Painting"}}
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
                  Exterior Painting That Protects Your Home for Years
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  Your home's exterior is its first line of defense against weather. Faded paint. Peeling trim. Cracked siding.
                </p>
                <p className="text-xl md:text-2xl text-gold font-semibold mb-8">
                  I've painted 200+ homes. I know what lasts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg inline-block">
                    Get Your Free Exterior Quote
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
                    src="https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joeafter11" 
                    alt="Professionally painted home exterior with crisp lines and even coverage"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      Protection Starts with Preparation
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      See those clean lines? That crisp trim? That even color?
                    </p>
                    <p className="text-lg text-navy font-semibold">
                      That's what happens when you don't rush the prep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Exterior Paint Matters Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              Your Home's Exterior Does More Than Look Good
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Most people think exterior painting is about curb appeal. And it is—but that's not all.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <strong className="text-navy">Your paint is your home's armor.</strong> It protects your siding, trim, and wood from moisture, UV damage, and rot. When paint fails, water gets in. Wood swells, cracks, and decays. What starts as a cosmetic issue becomes a structural problem.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  That's why I don't cut corners on prep. If the surface isn't right, the paint won't bond. And if the paint doesn't bond, you're repainting in 3 years instead of 7.
                </p>
                <div className="bg-gold bg-opacity-10 border-l-4 border-gold p-6 my-8">
                  <p className="text-lg text-navy italic">
                    "I've seen too many homeowners pay twice—once for a cheap paint job, and again to fix the damage it caused. Do it right the first time."
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
              Your Home's Exterior Transformation
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-navy text-gold px-4 py-2 rounded font-bold z-10">
                    BEFORE
                  </div>
                  <img 
                    src="https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joebefore11" 
                    alt="Faded exterior paint before professional painting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-gold text-navy px-4 py-2 rounded font-bold z-10">
                    AFTER
                  </div>
                  <img 
                    src="https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joeafter11" 
                    alt="Fresh, protected exterior after professional painting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Faded paint. Cracked trim. Exposed wood. <strong className="text-navy">This home was vulnerable to moisture damage and rot.</strong> After proper prep and premium Sherwin-Williams paint, it's protected for the next 7+ years.
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
              How I Paint Exteriors the Right Way
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
                    Power washing, scraping, sanding, and caulking. I remove loose paint, fill cracks, and seal gaps. If the surface isn't clean and smooth, the paint won't last.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Priming Bare Wood & Repairs</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Any bare wood or repaired areas get primed before painting. This seals the wood, prevents moisture intrusion, and ensures even color coverage.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Sherwin-Williams Premium Paints</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I only use Sherwin-Williams Duration, Emerald, or SuperPaint—premium exterior coatings with superior adhesion, color retention, and weather resistance. No cheap paint. Ever.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">Two-Coat Application</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Two coats minimum on all surfaces. Siding, trim, fascia, soffits, doors, shutters—everything gets full coverage for maximum protection and color depth.
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
                    I stand behind my work with a 5-year warranty. If the paint fails due to workmanship or materials, I fix it. No questions asked.
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
              Protection Starts with Preparation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_600/v1/Farrell's%20Painting/portfolio/Joeafter6" 
                  alt="Clean, professional exterior paint finish with sharp trim lines"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    See those clean lines? That crisp trim? That even color?
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    <strong className="text-navy">That's what happens when you don't rush the prep.</strong>
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    I scrape every inch of loose paint. I caulk every crack and gap. I prime bare wood. I use premium Sherwin-Williams coatings. Two coats, minimum. Your home deserves more than a quick spray job.
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
              What's Included in Every Exterior Painting Project
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Complete Surface Prep
                </h3>
                <p className="text-gray-700">
                  Power washing, scraping, sanding, caulking, and repairs
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Premium Sherwin-Williams Paint
                </h3>
                <p className="text-gray-700">
                  Duration, Emerald, or SuperPaint—the best in the industry
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> Siding, Trim & Accent Work
                </h3>
                <p className="text-gray-700">
                  All exterior surfaces painted with precision and care
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3 flex items-center gap-2">
                  <span className="text-gold">✓</span> 5-Year Warranty
                </h3>
                <p className="text-gray-700">
                  Backed by my personal guarantee—longer than anyone else
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
              Exterior Painting Projects We've Completed
            </h2>
            <div className="space-y-16">
              {exteriorProjects.map((project) => (
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
            Ready to Protect Your Home's Exterior?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's talk about your project. I'll give you an honest assessment, a fair quote, and work that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all inline-block">
              Get Your Free Exterior Quote
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