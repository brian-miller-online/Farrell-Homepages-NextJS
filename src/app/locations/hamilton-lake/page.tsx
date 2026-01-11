import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hamilton Lake House Painting | Steuben County IN",
  description: "Professional lake house painting at Hamilton Lake, Indiana. Exterior painting, deck staining, and interior painting for waterfront homes. 5-year warranty. Call (260) 909-0717.",
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Lake House Painting",
  "name": "Hamilton Lake House Painting Services",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Farrell's Painting",
    "@id": "https://www.farrellspainting.com/#business",
    "telephone": "+1-260-909-0717"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Hamilton Lake",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hamilton",
      "addressRegion": "IN",
      "addressCountry": "US"
    }
  },
  "description": "Professional lake house painting services at Hamilton Lake, Indiana. Specializing in exterior painting, deck staining, and interior painting for waterfront properties. 5-year workmanship warranty."
};

export default function HamiltonLakePage() {
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
              Steuben County's Lake House Painting Expert
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hamilton Lake House Painting
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I've painted dozens of homes around Hamilton Lake. I understand the unique challenges of waterfront properties—humidity, sun exposure, and the need for finishes that last.
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

      {/* Why Hamilton Lake Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
              Why Hamilton Lake Homes Need a Specialist
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Hamilton Lake is one of Indiana's most beautiful natural lakes—but that waterfront location creates unique challenges for your home's exterior.
              </p>
              
              <div className="bg-[#f8f6f3] rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">What Lake Living Does to Paint</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">💧</span>
                    <span><strong>Higher Humidity:</strong> Moisture from the lake accelerates paint breakdown if surfaces aren't properly prepared and sealed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">☀️</span>
                    <span><strong>Intense UV Exposure:</strong> Water reflects sunlight, doubling UV exposure on south and west-facing walls.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">🌡️</span>
                    <span><strong>Temperature Swings:</strong> Lake breezes create rapid temperature changes that stress paint adhesion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d4a574] font-bold">🌊</span>
                    <span><strong>Deck & Dock Wear:</strong> Horizontal surfaces near water take a beating from moisture, foot traffic, and freeze-thaw cycles.</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                That's why I use Sherwin-Williams Duration and Emerald paints—premium coatings specifically designed for harsh conditions. And why I spend more time on prep than most painters spend on the entire job.
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
              Services for Hamilton Lake Homeowners
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Exterior Painting</h3>
                <p className="text-gray-700 mb-4">
                  Complete exterior painting with thorough prep work—power washing, scraping, caulking, priming, and two coats of premium paint. Built to withstand lake conditions.
                </p>
                <p className="text-[#d4a574] font-bold">5-Year Workmanship Warranty</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Deck & Dock Staining</h3>
                <p className="text-gray-700 mb-4">
                  Restore and protect your deck, dock, and railings with professional staining. I use penetrating stains that protect from within rather than just sitting on top.
                </p>
                <p className="text-gray-500">Maintenance recommended every 1-3 years</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Interior Painting</h3>
                <p className="text-gray-700 mb-4">
                  Clean, precise interior work with attention to every detail. Perfect for updating your lake house before the season or refreshing after years of use.
                </p>
                <p className="text-[#d4a574] font-bold">5-Year Workmanship Warranty</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Seasonal Maintenance</h3>
                <p className="text-gray-700 mb-4">
                  Annual touch-ups and maintenance to keep your lake house looking great year after year. Catch small issues before they become big problems.
                </p>
                <p className="text-gray-500">Flexible scheduling around your lake season</p>
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
              I Know Hamilton Lake
            </h2>
            <div className="bg-[#1e3a5f] text-white rounded-xl p-8 md:p-12">
              <p className="text-xl leading-relaxed mb-6">
                Hamilton Lake isn't just another job site for me. I've worked on homes all around the lake—from the north shore to the south end, from modest cottages to large family compounds.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                I understand the logistics of lake house painting: coordinating around your visits, working with limited parking and access, and getting the job done efficiently so you can enjoy your time at the lake.
              </p>
              <p className="text-xl leading-relaxed text-[#d4a574] font-semibold">
                When you hire me, you're getting someone who knows the area, knows the challenges, and knows how to deliver results that last.
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
              Ready to Transform Your Hamilton Lake Home?
            </h2>
            <p className="text-xl text-[#1e3a5f] mb-8">
              Get a free, no-obligation quote. I'll come out, look at your project, and give you an honest assessment.
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
