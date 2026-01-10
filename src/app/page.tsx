import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import MeetJoe from "@/components/MeetJoe";
import Differentiators from "@/components/Differentiators";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuoteFormModal from "@/components/QuoteFormModal";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.farrellspainting.com/#organization",
    "name": "Farrell's Painting",
    "image": "https://www.farrellspainting.com/joe-farrell-headshot.jpg",
    "telephone": "+1-260-909-0717",
    "email": "joe@farrellspainting.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fort Wayne",
      "addressRegion": "IN",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0793,
      "longitude": -85.1394
    },
    "url": "https://www.farrellspainting.com",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "29",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Fort Wayne, IN" },
      { "@type": "Place", "name": "Hamilton Lake, IN" },
      { "@type": "Place", "name": "Lake James, IN" },
      { "@type": "Place", "name": "Northeast Indiana" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exterior Painting",
            "description": "Professional exterior house painting with premium Sherwin-Williams paints and 5-year warranty"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Painting",
            "description": "Clean, precise interior painting with expert color consultation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deck & Fence Staining",
            "description": "Deck refinishing and fence staining to restore and protect outdoor spaces"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Reviews />
        <MeetJoe />
        <Differentiators />
        <FinalCTA />
      </main>
      <Footer />
      <QuoteFormModal />
    </div>
  );
}
