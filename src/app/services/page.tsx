"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import { useQuoteForm } from "@/context/QuoteFormContext";

export default function Services() {
  const { openQuoteForm } = useQuoteForm();

  const services = [
    {
      id: "lake-house",
      title: "Lake House Painting",
      image: "/services/lake-house.jpg",
      description: "Specialized painting for waterfront properties that face harsh UV rays, high humidity, and freeze-thaw cycles.",
      features: [
        "UV-resistant paint systems",
        "Moisture barrier protection",
        "Weather-resistant finishes",
        "20+ lake houses completed"
      ],
      cta: "Learn More About Lake House Painting",
      link: "/services/lake-house-painting"
    },
    {
      id: "deck-refinishing",
      title: "Deck Refinishing & Staining",
      image: "/services/deck.jpg",
      description: "Transform weathered decks into beautiful outdoor spaces with professional refinishing and staining services.",
      features: [
        "Complete surface preparation",
        "Premium stains and sealers",
        "Railing and trim painting",
        "Long-lasting protection"
      ],
      cta: "Learn More About Deck Refinishing",
      link: "/services/deck-refinishing"
    },
    {
      id: "exterior",
      title: "Exterior Painting",
      image: "/services/exterior.jpg",
      description: "Professional exterior painting that protects your home and enhances curb appeal for years to come.",
      features: [
        "Thorough surface preparation",
        "Sherwin-Williams premium paints",
        "Siding, trim, and accent work",
        "5-year warranty included"
      ],
      cta: "Learn More About Exterior Painting",
      link: "/services/exterior-painting"
    },
    {
      id: "interior",
      title: "Interior Painting",
      image: "/services/interior-spindles.jpg",
      description: "Meticulous interior painting with attention to detail that transforms your living spaces.",
      features: [
        "Walls, ceilings, and trim",
        "Detailed spindle and railing work",
        "Furniture and floor protection",
        "Clean, professional finish"
      ],
      cta: "Learn More About Interior Painting",
      link: "/services/interior-painting"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-navy py-8 md:py-12 mt-[60px] md:mt-[70px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-4">
            Professional Painting Services
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-6">
            Specialized painting for lake houses and fine homes across Northeast Indiana.
            <br />
            Every project backed by 20 years of experience and a 5-year warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all" onClick={() => openQuoteForm()}>
              Get Your Free Quote
            </button>
            <a 
              href="tel:2609090717"
              className="flex items-center gap-2 text-white hover:text-gold transition-colors text-lg"
            >
              <span className="text-2xl">📞</span>
              <span>(260) 909-0717</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-gold text-xl mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.link}>
                  <a className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    {service.cta} →
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Farrell's Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-navy mb-6">
              Why Choose Farrell's Painting?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl text-gold mb-4">20+</div>
                <h3 className="text-xl font-bold text-navy mb-2">Years Experience</h3>
                <p className="text-gray-700">
                  Two decades of professional painting expertise
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-gold mb-4">5</div>
                <h3 className="text-xl font-bold text-navy mb-2">Year Warranty</h3>
                <p className="text-gray-700">
                  We stand behind our work longer than anyone
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl text-gold mb-4">200+</div>
                <h3 className="text-xl font-bold text-navy mb-2">Homes Painted</h3>
                <p className="text-gray-700">
                  Trusted by homeowners across Northeast Indiana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Farrell's Difference */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              The Farrell's Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3">Daily Communication</h3>
                <p className="text-gray-700">
                  You'll hear from me every single day your project is active. What we accomplished, what's next, when to expect me.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3">Owner on Every Job</h3>
                <p className="text-gray-700">
                  When you hire Farrell's Painting, you get me—Joe—personally managing your project from estimate to final walkthrough.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3">Fair Pricing</h3>
                <p className="text-gray-700">
                  Just 20% down to schedule your project, not 50%. The price I quote is the price you pay. No surprises.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-navy mb-3">Premium Materials</h3>
                <p className="text-gray-700">
                  I only use Sherwin-Williams products. When you're guaranteeing work for 5 years, you don't cheap out on materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let's talk about your project. I'll give you an honest quote, a clear timeline, and work that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all" onClick={() => openQuoteForm()}>
              Get Your Free Quote
            </button>
            <a 
              href="tel:2609090717"
              className="flex items-center gap-2 text-white hover:text-gold transition-colors text-lg font-semibold"
            >
              Call Joe: (260) 909-0717
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}