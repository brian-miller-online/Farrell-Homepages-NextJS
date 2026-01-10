import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import MeetJoe from "@/components/MeetJoe";
import Differentiators from "@/components/Differentiators";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuoteFormModal from "@/components/QuoteFormModal";

export default function Home() {
  // Comprehensive schema markup following SEO/AEO audit recommendations
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.farrellspainting.com/#business",
        "name": "Farrell's Painting",
        "alternateName": "Farrell's Painting",
        "description": "Professional painting contractor serving Northeast Indiana, Northwest Ohio, and Southern Michigan. Specializing in lake houses and fine homes with a 5-year workmanship warranty. Owner-operated by Joe Farrell with 20+ years experience.",
        "url": "https://www.farrellspainting.com",
        "telephone": "+1-260-909-0717",
        "email": "joe@farrellspainting.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Waterloo",
          "addressRegion": "IN",
          "postalCode": "46793",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "41.4319",
          "longitude": "-85.0209"
        },
        "areaServed": [
          {"@type": "City", "name": "Fort Wayne", "containedInPlace": {"@type": "State", "name": "Indiana"}},
          {"@type": "City", "name": "Angola", "containedInPlace": {"@type": "State", "name": "Indiana"}},
          {"@type": "City", "name": "Auburn", "containedInPlace": {"@type": "State", "name": "Indiana"}},
          {"@type": "City", "name": "Garrett", "containedInPlace": {"@type": "State", "name": "Indiana"}},
          {"@type": "City", "name": "Kendallville", "containedInPlace": {"@type": "State", "name": "Indiana"}},
          {"@type": "City", "name": "Columbia City", "containedInPlace": {"@type": "State", "name": "Indiana"}},
          {"@type": "City", "name": "Waterloo", "containedInPlace": {"@type": "State", "name": "Indiana"}},
          {"@type": "Place", "name": "Hamilton Lake, Indiana"},
          {"@type": "Place", "name": "Lake James, Indiana"},
          {"@type": "Place", "name": "Jimerson Lake, Indiana"},
          {"@type": "Place", "name": "Crooked Lake, Indiana"}
        ],
        "priceRange": "$$",
        "image": "https://www.farrellspainting.com/Farrells-painting-lake-house-1_1766774717727.png",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "29",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
            "author": {"@type": "Person", "name": "Dennis Stiverson"},
            "reviewBody": "Farrell's Painting has always done a fantastic job for us. We have used them several times and have been very happy with the work, and attention to detail. I highly recommend and we will be using them again."
          },
          {
            "@type": "Review",
            "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
            "author": {"@type": "Person", "name": "Mike French"},
            "reviewBody": "They did exterior painting for me. Good work, efficient and they didn't leave a mess behind when they were finished! It's nice to have someone do such a good job and clean up after themselves when finished!"
          },
          {
            "@type": "Review",
            "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
            "author": {"@type": "Person", "name": "Todd Betts"},
            "reviewBody": "Joe is a great painter. Results looked great and he is very meticulous and cleans up after himself. Highly recommend Joe's painting."
          },
          {
            "@type": "Review",
            "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
            "author": {"@type": "Person", "name": "Stacey Jones"},
            "reviewBody": "We have used Joe for a variety of painting projects. He does high quality work at a fair price. Would highly recommend him to anyone!"
          },
          {
            "@type": "Review",
            "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
            "author": {"@type": "Person", "name": "Eric Clabaugh"},
            "reviewBody": "Did a great job painting the exterior of our home. Great attention to detail. Responded to texts and calls quickly."
          },
          {
            "@type": "Review",
            "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
            "author": {"@type": "Person", "name": "Mike Woodfill"},
            "reviewBody": "Joe does great work! Have used him on several projects and he always goes above and beyond! Keep it up Joe!"
          },
          {
            "@type": "Review",
            "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
            "author": {"@type": "Person", "name": "Dawn Davis"},
            "reviewBody": "Joe is an experienced painter who does great work! Highly recommend."
          },
          {
            "@type": "Review",
            "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
            "author": {"@type": "Person", "name": "Paul Bojrab"},
            "reviewBody": "Thorough and efficient! Does a great job at a reasonable rate. Definitely would recommend."
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Painting Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Exterior House Painting",
                "description": "Professional exterior painting with 5-year workmanship warranty using Sherwin-Williams paints"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Interior Painting",
                "description": "Interior painting services for homes with expert color consultation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Deck and Fence Staining",
                "description": "Deck staining and fence staining services to restore and protect outdoor spaces"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lake House Painting",
                "description": "Specialized painting services for lake houses and waterfront properties in Northeast Indiana"
              }
            }
          ]
        },
        "knowsAbout": ["exterior painting", "interior painting", "deck staining", "fence staining", "lake house painting", "residential painting", "house painting"],
        "slogan": "If our workmanship fails, we'll fix it. No excuses.",
        "foundingDate": "2019",
        "founder": {
          "@type": "Person",
          "name": "Joe Farrell",
          "jobTitle": "Owner",
          "telephone": "+1-260-909-0717"
        },
        "sameAs": [
          "https://www.facebook.com/farrellspainting"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.farrellspainting.com/#website",
        "url": "https://www.farrellspainting.com",
        "name": "Farrell's Painting",
        "publisher": {"@id": "https://www.farrellspainting.com/#business"}
      },
      {
        "@type": "WebPage",
        "@id": "https://www.farrellspainting.com/#webpage",
        "url": "https://www.farrellspainting.com",
        "name": "Farrell's Painting | Professional Painting Contractor in Fort Wayne & Northeast Indiana",
        "isPartOf": {"@id": "https://www.farrellspainting.com/#website"},
        "about": {"@id": "https://www.farrellspainting.com/#business"},
        "description": "Professional painting contractor serving Northeast Indiana. 5-year warranty on all work. Lake house specialists. Call Joe at (260) 909-0717."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-warm-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
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
