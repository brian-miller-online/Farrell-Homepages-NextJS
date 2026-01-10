import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "House Painting Fort Wayne IN | Farrell's Painting | 5-Year Warranty",
  description: "Professional house painting in Fort Wayne, Indiana. Exterior and interior painting with 5-year warranty. Owner-operated quality. Call (260) 909-0717.",
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "House Painting",
  "name": "Fort Wayne Indiana House Painting Services",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Farrell's Painting",
    "@id": "https://www.farrellspainting.com/#business",
    "telephone": "+1-260-909-0717"
  },
  "areaServed": {
    "@type": "City",
    "name": "Fort Wayne",
    "containedInPlace": {
      "@type": "State",
      "name": "Indiana"
    }
  },
  "description": "Professional house painting services in Fort Wayne, Indiana. Exterior painting, interior painting, and deck staining with 5-year workmanship warranty. Owner-operated."
};

export default function FortWaynePage() {
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
              Northeast Indiana's Largest City
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              House Painting in Fort Wayne, Indiana
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional painting for Fort Wayne homes. From Aboite to Leo-Cedarville, from historic West Central to new construction in Southwest Allen County.
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

      {/* About Fort Wayne Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
              Serving All of Fort Wayne
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Fort Wayne is Indiana's second-largest city, with neighborhoods ranging from historic Victorian homes to brand-new developments. I've painted homes across the entire metro area.
              </p>
              
              <div className="bg-[#f8f6f3] rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Areas I Serve in Fort Wayne</h3>
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <ul className="space-y-2">
                    <li>• Aboite Township</li>
                    <li>• Southwest Allen County</li>
                    <li>• Leo-Cedarville</li>
                    <li>• Huntertown</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• West Central</li>
                    <li>• North Side</li>
                    <li>• Georgetown</li>
                    <li>• Waynedale</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• New Haven</li>
                    <li>• Grabill</li>
                    <li>• Woodburn</li>
                    <li>• And surrounding areas</li>
                  </ul>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Whether you have a century-old home in West Central or a new build in Aboite, I bring the same attention to detail and quality workmanship to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 md:py-20 bg-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
              Not Your Typical Fort Wayne Painter
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Owner-Operated</h3>
                <p className="text-gray-700 mb-4">
                  When you call Farrell's Painting, you talk to me—Joe Farrell. I'm the one who gives you the quote, does the work, and stands behind it. No sales reps, no random crews.
                </p>
                <p className="text-[#d4a574] font-bold">My name's on the truck. I'm the one doing the work.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">5-Year Warranty</h3>
                <p className="text-gray-700 mb-4">
                  Most Fort Wayne painters offer 2-3 year warranties. I offer 5 years on all interior and exterior vertical surfaces. Why? Because I don't cut corners on prep.
                </p>
                <p className="text-[#d4a574] font-bold">If my workmanship fails, I fix it. No excuses.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Premium Materials</h3>
                <p className="text-gray-700 mb-4">
                  I exclusively use Sherwin-Williams Duration, Emerald, and SuperPaint. When you're guaranteeing work for 5 years, you don't cheap out on materials.
                </p>
                <p className="text-gray-500">No big-box store paint. Ever.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Proper Preparation</h3>
                <p className="text-gray-700 mb-4">
                  I spend more time on prep than most painters spend on the entire job. Power washing, scraping, sanding, caulking, priming—it's what makes paint last.
                </p>
                <p className="text-gray-500">The difference shows in year 5, not day 5.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
              Fort Wayne Painting Services
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Exterior House Painting</h3>
                <p className="text-gray-700 mb-3">
                  Complete exterior painting for Fort Wayne homes. I handle everything from Victorian-era homes with detailed trim to modern construction. Thorough prep, premium paint, lasting results.
                </p>
                <p className="text-[#d4a574] font-semibold">5-Year Workmanship Warranty</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Interior Painting</h3>
                <p className="text-gray-700 mb-3">
                  Clean, precise interior work. I protect your home, work efficiently, and leave everything spotless. From single accent walls to whole-house refreshes.
                </p>
                <p className="text-[#d4a574] font-semibold">5-Year Workmanship Warranty</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Deck & Fence Staining</h3>
                <p className="text-gray-700 mb-3">
                  Restore your outdoor living spaces. Professional deck and fence staining that protects and beautifies. I use quality stains that penetrate and last.
                </p>
                <p className="text-gray-500">Maintenance recommended every 1-3 years</p>
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
              Get Your Free Fort Wayne Quote
            </h2>
            <p className="text-xl text-[#1e3a5f] mb-8">
              I'll come out, look at your project, and give you an honest estimate. No pressure, no obligation—just straight talk about what your home needs.
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
            <p className="text-gray-600 mb-4">Also serving nearby lake communities:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/locations/hamilton-lake" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Hamilton Lake</Link>
              <span className="text-gray-400">•</span>
              <Link href="/locations/lake-james" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Lake James</Link>
              <span className="text-gray-400">•</span>
              <Link href="/locations/jimerson-lake" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Jimerson Lake</Link>
              <span className="text-gray-400">•</span>
              <Link href="/locations/angola" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Angola</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteFormModal />
    </div>
  );
}
