import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lake James House Painting | Farrell's Painting | Angola IN",
  description: "Professional lake house painting at Lake James, Indiana. Exterior painting, deck staining, and interior painting for waterfront homes. 5-year warranty. Call (260) 909-0717.",
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Lake House Painting",
  "name": "Lake James House Painting Services",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Farrell's Painting",
    "@id": "https://www.farrellspainting.com/#business",
    "telephone": "+1-260-909-0717"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Lake James",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Angola",
      "addressRegion": "IN",
      "addressCountry": "US"
    }
  },
  "description": "Professional lake house painting services at Lake James, Indiana. Specializing in exterior painting, deck staining, and interior painting for waterfront properties. 5-year workmanship warranty."
};

export default function LakeJamesPage() {
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
              Indiana's Third Largest Natural Lake
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lake James House Painting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From Pokagon State Park to the private shores, I've painted homes all around Lake James. Premium finishes that stand up to Indiana's largest natural lake.
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

      {/* Why Lake James Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
              Lake James: Big Lake, Big Challenges
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Lake James is Indiana's third largest natural lake—over 1,000 acres of water that creates a microclimate all its own. That beautiful lakefront location comes with painting challenges most contractors don't understand.
              </p>
              
              <div className="bg-[#f8f6f3] rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Lake James Painting Challenges</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">🌊</span>
                    <span><strong>Wind Exposure:</strong> Lake James generates significant wind, which carries moisture and accelerates paint weathering on exposed surfaces.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">☀️</span>
                    <span><strong>Reflected UV:</strong> The large water surface reflects intense sunlight onto your home's exterior, especially south-facing walls.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">💧</span>
                    <span><strong>Humidity Cycles:</strong> Daily temperature swings near the lake create condensation cycles that stress paint adhesion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">🏠</span>
                    <span><strong>Varied Architecture:</strong> From historic cottages to modern lake homes, each requires different approaches and expertise.</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                I've painted homes on all three basins of Lake James—Otter Lake, Snow Lake, and the main lake. I know which products work best and how to prep surfaces for maximum durability.
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
              Lake James Painting Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Exterior House Painting</h3>
                <p className="text-gray-700 mb-4">
                  Complete exterior painting designed for lake conditions. Thorough prep, premium Sherwin-Williams paints, and attention to every detail.
                </p>
                <p className="text-[#d4a574] font-bold">5-Year Workmanship Warranty</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Deck & Dock Refinishing</h3>
                <p className="text-gray-700 mb-4">
                  Professional deck and dock staining to protect your outdoor living spaces. Essential for Lake James properties with heavy dock usage.
                </p>
                <p className="text-gray-500">Annual maintenance available</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Interior Painting</h3>
                <p className="text-gray-700 mb-4">
                  Update your lake house interior with clean, professional painting. From single rooms to whole-house refreshes.
                </p>
                <p className="text-[#d4a574] font-bold">5-Year Workmanship Warranty</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Boathouse & Outbuilding</h3>
                <p className="text-gray-700 mb-4">
                  Don't forget your boathouse, garage, or shed. I can match your main home or create a coordinated look across your property.
                </p>
                <p className="text-gray-500">Free estimates for all structures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
              Your Lake James Painting Expert
            </h2>
            <div className="bg-[#1e3a5f] text-white rounded-xl p-8 md:p-12">
              <p className="text-xl leading-relaxed mb-6">
                I've been painting homes around Lake James for years. I know the area—from the public beach to the private associations, from the Angola side to Fremont.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                I understand that your lake house is special. It's where your family gathers, where memories are made. You want it to look great and stay protected. That's exactly what I deliver.
              </p>
              <p className="text-xl leading-relaxed text-[#d4a574] font-semibold">
                My name's on the truck. I'm the one doing the work. And I guarantee it for 5 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#d4a574]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
              Get Your Lake James Home Looking Its Best
            </h2>
            <p className="text-xl text-[#1e3a5f] mb-8">
              Free quotes for Lake James homeowners. I'll come out, assess your project, and give you an honest estimate.
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
              <Link href="/locations/hamilton-lake" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Hamilton Lake</Link>
              <span className="text-gray-400">•</span>
              <Link href="/locations/jimerson-lake" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Jimerson Lake</Link>
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
