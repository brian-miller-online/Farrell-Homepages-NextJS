import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service Areas | Farrell's Painting | Northeast Indiana",
  description: "Farrell's Painting serves Northeast Indiana, Northwest Ohio, and Southern Michigan. Lake house specialists at Hamilton Lake, Lake James, and more. Call (260) 909-0717.",
};

const locations = [
  {
    name: "Hamilton Lake",
    slug: "hamilton-lake",
    description: "Lake house painting specialist for Hamilton Lake properties",
    type: "Lake"
  },
  {
    name: "Lake James",
    slug: "lake-james",
    description: "Professional painting for Indiana's third largest natural lake",
    type: "Lake"
  },
  {
    name: "Jimerson Lake",
    slug: "jimerson-lake",
    description: "Connected to Lake James, with its own peaceful character",
    type: "Lake"
  },
  {
    name: "Angola",
    slug: "angola",
    description: "Serving Steuben County's county seat and surrounding areas",
    type: "City"
  },
  {
    name: "Fort Wayne",
    slug: "fort-wayne",
    description: "Northeast Indiana's largest city - all neighborhoods served",
    type: "City"
  }
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#1e3a5f] py-16 md:py-24 mt-[60px] md:mt-[70px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Areas We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional painting services throughout Northeast Indiana, Northwest Ohio, and Southern Michigan. Lake house specialists with 20+ years experience.
            </p>
            <a 
              href="tel:2609090717"
              className="inline-block bg-[#d4a574] text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Call Joe: (260) 909-0717
            </a>
          </div>
        </div>
      </section>

      {/* Lake Communities */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 text-center">
              Lake Communities
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              I've painted over 200 lake houses. I understand the unique challenges of waterfront properties.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {locations.filter(l => l.type === "Lake").map((location) => (
                <Link 
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="text-3xl mb-4">🏠</div>
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <span className="text-[#d4a574] font-semibold">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 md:py-20 bg-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 text-center">
              Cities & Towns
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From historic homes to new construction, I serve communities throughout the region.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {locations.filter(l => l.type === "City").map((location) => (
                <Link 
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <span className="text-[#d4a574] font-semibold">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">
              Additional Areas Served
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                I also serve these communities within about 45 minutes of Waterloo, IN:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                <span className="bg-gray-100 px-4 py-2 rounded-full">Auburn</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Garrett</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Kendallville</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Columbia City</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Waterloo</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Fremont</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Crooked Lake</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Clear Lake</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Northwest Ohio</span>
                <span className="bg-gray-100 px-4 py-2 rounded-full">Southern Michigan</span>
              </div>
              <p className="text-gray-500 mt-6">
                Not sure if you're in my service area? Just call—I'm happy to discuss your project.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#1e3a5f] mb-8">
              No matter where you are in Northeast Indiana, I'll come out and give you a free, no-obligation quote.
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

      <Footer />
      <QuoteFormModal />
    </div>
  );
}
