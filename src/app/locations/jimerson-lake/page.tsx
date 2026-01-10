import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jimerson Lake House Painting | Farrell's Painting | Steuben County IN",
  description: "Professional lake house painting at Jimerson Lake, Indiana. Exterior painting, deck staining, and interior painting for waterfront homes. 5-year warranty. Call (260) 909-0717.",
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Lake House Painting",
  "name": "Jimerson Lake House Painting Services",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Farrell's Painting",
    "@id": "https://www.farrellspainting.com/#business",
    "telephone": "+1-260-909-0717"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Jimerson Lake",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Angola",
      "addressRegion": "IN",
      "addressCountry": "US"
    }
  },
  "description": "Professional lake house painting services at Jimerson Lake, Indiana. Specializing in exterior painting, deck staining, and interior painting for waterfront properties. 5-year workmanship warranty."
};

export default function JimersonLakePage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] py-16 md:py-24 mt-[60px] md:mt-[70px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#d4a574] text-[#1e3a5f] font-bold text-sm px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
              Connected to Lake James
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Jimerson Lake House Painting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Jimerson Lake offers the best of both worlds—connected to Lake James but with its own peaceful character. I've painted homes throughout this beautiful lake community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:2609090717"
                className="bg-[#d4a574] text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
              >
                Call Joe: (260) 909-0717
              </a>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1e3a5f] transition-all"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Jimerson Lake Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
              Jimerson Lake Painting Specialist
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Jimerson Lake is connected to Lake James through a channel, giving homeowners access to Indiana's third-largest natural lake while maintaining a quieter, more intimate lakefront experience.
              </p>
              
              <div className="bg-[#f8f6f3] rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Why Jimerson Lake Homes Need Special Care</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">🌲</span>
                    <span><strong>Tree Coverage:</strong> Many Jimerson Lake properties have significant tree cover, which can trap moisture and create ideal conditions for mold and mildew on painted surfaces.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">💧</span>
                    <span><strong>Lake Humidity:</strong> Like all lake properties, Jimerson Lake homes face higher humidity levels that can stress paint adhesion over time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">🏡</span>
                    <span><strong>Varied Architecture:</strong> From cozy cottages to larger family homes, each property has unique painting needs and challenges.</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                I understand these challenges and use products and techniques specifically suited for lake house conditions. That's why I can offer a 5-year warranty on my workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
              Services for Jimerson Lake Homeowners
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Exterior Painting</h3>
                <p className="text-gray-700 mb-4">
                  Complete exterior painting with thorough surface preparation. I use mildew-resistant primers and premium paints designed for humid lake environments.
                </p>
                <p className="text-[#d4a574] font-bold">5-Year Workmanship Warranty</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Deck & Dock Staining</h3>
                <p className="text-gray-700 mb-4">
                  Protect your deck and dock from the elements. Professional staining that penetrates and protects, keeping your outdoor spaces looking great.
                </p>
                <p className="text-gray-500">Annual maintenance available</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Interior Painting</h3>
                <p className="text-gray-700 mb-4">
                  Refresh your lake house interior with clean, professional painting. Perfect for updating before the season or giving your home a new look.
                </p>
                <p className="text-[#d4a574] font-bold">5-Year Workmanship Warranty</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Seasonal Prep & Touch-Up</h3>
                <p className="text-gray-700 mb-4">
                  Get your lake house ready for the season with touch-ups and minor repairs. I can address small issues before they become big problems.
                </p>
                <p className="text-gray-500">Flexible scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#d4a574]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Ready to Update Your Jimerson Lake Home?
            </h2>
            <p className="text-xl text-[#1e3a5f] mb-8">
              Get a free quote. I'll come out, assess your project, and give you an honest estimate with no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:2609090717"
                className="bg-[#1e3a5f] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#152b47] transition-all shadow-lg"
              >
                📞 (260) 909-0717
              </a>
              <Link 
                href="/contact"
                className="bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Request a Quote Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-4">Also serving nearby areas:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/locations/lake-james" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Lake James</Link>
              <span className="text-gray-400">•</span>
              <Link href="/locations/hamilton-lake" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Hamilton Lake</Link>
              <span className="text-gray-400">•</span>
              <Link href="/locations/angola" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Angola</Link>
              <span className="text-gray-400">•</span>
              <Link href="/locations/fort-wayne" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Fort Wayne</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteFormModal />
    </div>
  );
}
