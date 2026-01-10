import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "House Painting Angola IN | Farrell's Painting | Steuben County",
  description: "Professional house painting in Angola, Indiana. Exterior and interior painting with 5-year warranty. Serving Steuben County and the lakes region. Call (260) 909-0717.",
};

const locationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "House Painting",
  "name": "Angola Indiana House Painting Services",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Farrell's Painting",
    "@id": "https://www.farrellspainting.com/#business",
    "telephone": "+1-260-909-0717"
  },
  "areaServed": {
    "@type": "City",
    "name": "Angola",
    "containedInPlace": {
      "@type": "State",
      "name": "Indiana"
    }
  },
  "description": "Professional house painting services in Angola, Indiana. Exterior painting, interior painting, and deck staining with 5-year workmanship warranty."
};

export default function AngolaPage() {
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
              Steuben County's Trusted Painter
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              House Painting in Angola, Indiana
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional painting services for Angola homes and businesses. From historic downtown properties to new construction—quality work with a 5-year warranty.
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

      {/* About Angola Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8 text-center">
              Your Local Angola Painting Contractor
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Angola is the heart of Steuben County—home to Trine University, the historic downtown square, and gateway to Indiana's lake country. I've been painting homes throughout Angola and the surrounding area for years.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#f8f6f3] rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Residential Painting</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Exterior house painting</li>
                    <li>• Interior painting</li>
                    <li>• Deck and fence staining</li>
                    <li>• Garage and outbuilding painting</li>
                  </ul>
                </div>
                <div className="bg-[#f8f6f3] rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Property Types</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Historic homes</li>
                    <li>• New construction</li>
                    <li>• Lake houses nearby</li>
                    <li>• Rental properties</li>
                  </ul>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                Whether you're in downtown Angola, out by the fairgrounds, or anywhere in between, I provide the same quality work with the same 5-year warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 bg-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
              Why Angola Homeowners Choose Farrell's Painting
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Local & Accountable</h3>
                <p className="text-gray-700">
                  I'm based right here in Northeast Indiana. My name's on the truck, and I stand behind every job.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">4.9 Star Rating</h3>
                <p className="text-gray-700">
                  29 Google reviews from satisfied customers. I earn my reputation one job at a time.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">5-Year Warranty</h3>
                <p className="text-gray-700">
                  One of the longest warranties in the area. If my workmanship fails, I fix it free.
                </p>
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
              Painting Services in Angola
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Exterior Painting</h3>
                <p className="text-gray-700 mb-3">
                  Complete exterior painting including power washing, scraping, caulking, priming, and two coats of premium Sherwin-Williams paint. I prep surfaces properly so paint lasts.
                </p>
                <p className="text-[#d4a574] font-semibold">Typical project: 3-5 days | 5-Year Warranty</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Interior Painting</h3>
                <p className="text-gray-700 mb-3">
                  Clean, precise interior work. I protect your floors and furniture, work efficiently, and leave your home spotless. From single rooms to whole-house projects.
                </p>
                <p className="text-[#d4a574] font-semibold">Free color consultation | 5-Year Warranty</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">Deck & Fence Staining</h3>
                <p className="text-gray-700 mb-3">
                  Restore and protect your outdoor spaces. I strip old finish if needed, sand properly, and apply quality stain that penetrates and protects.
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
              Ready for a Fresh Look?
            </h2>
            <p className="text-xl text-[#1e3a5f] mb-8">
              Get a free quote for your Angola home. I'll come out, look at your project, and give you an honest estimate—no pressure, no obligation.
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
              <Link href="/locations/lake-james" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Lake James</Link>
              <span className="text-gray-400">•</span>
              <Link href="/locations/jimerson-lake" className="text-[#1e3a5f] hover:text-[#d4a574] font-medium">Jimerson Lake</Link>
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
