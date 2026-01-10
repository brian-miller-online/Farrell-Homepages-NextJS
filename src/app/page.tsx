import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import MeetJoe from "@/components/MeetJoe";
import Differentiators from "@/components/Differentiators";
import HomeGallery from "@/components/HomeGallery";
import HomeFAQ from "@/components/HomeFAQ";
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.farrellspainting.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to paint a house exterior in Northeast Indiana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Exterior painting costs in Northeast Indiana typically range from $3,500 to $8,000 for an average-sized home, depending on square footage, condition of surfaces, and paint quality. Lake houses often cost more due to additional prep work needed for humidity and weather exposure. I provide free, detailed quotes so you know exactly what to expect."
            }
          },
          {
            "@type": "Question",
            "name": "What's the best time of year to paint a house exterior in Indiana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The ideal painting season in Indiana runs from late April through October when temperatures are consistently between 50-85°F. Late spring and early fall are often best because humidity is lower and temperatures are moderate. I don't paint in rain or when temperatures will drop below 50°F within 24 hours of application."
            }
          },
          {
            "@type": "Question",
            "name": "How long does exterior paint last on a lake house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With proper preparation and premium paint, exterior paint on a lake house should last 7-10 years. Lake houses face extra challenges—humidity, UV exposure, and temperature swings—which is why surface prep is critical. I use Sherwin-Williams Duration or Emerald paints specifically designed for harsh conditions, backed by my 5-year workmanship warranty."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer a warranty on your painting work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! I offer a 5-year workmanship warranty on all interior and exterior vertical surfaces—one of the longest warranties in Northeast Indiana. If paint peels, blisters, or cracks due to my workmanship, I'll fix it at no cost. Most painters only offer 2-3 years. I can offer 5 because I don't cut corners on prep."
            }
          },
          {
            "@type": "Question",
            "name": "What paint brands do you use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I exclusively use Sherwin-Williams premium paints—Duration, Emerald, or SuperPaint depending on the project. When you're guaranteeing work for 5 years, you don't cheap out on materials. These paints offer superior adhesion, color retention, and weather resistance compared to big-box store brands."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to paint a house exterior?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most exterior painting projects take 3-5 days for an average-sized home. Larger homes or those needing extensive prep work (scraping, repairs, priming) may take 5-7 days. I don't rush—proper preparation is what makes paint last. I'll give you a timeline estimate in your quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you paint lake houses at Hamilton Lake and Lake James?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Lake houses are my specialty. I've painted over 200 lake houses around Hamilton Lake, Lake James, Jimerson Lake, Crooked Lake, and throughout Steuben County. I understand the unique challenges of waterfront properties—humidity, sun exposure, and the need for weather-resistant finishes."
            }
          },
          {
            "@type": "Question",
            "name": "What areas do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I serve Northeast Indiana, Northwest Ohio, and Southern Michigan. This includes Fort Wayne, Angola, Auburn, Garrett, Kendallville, Columbia City, Waterloo, and all the lake communities around Hamilton Lake, Lake James, Jimerson Lake, and Crooked Lake. If you're within about 45 minutes of Waterloo, IN, I can help."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to be home while you paint?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For exterior work, you don't need to be home—just make sure I have access to water and electricity. For interior work, I'll coordinate with you on access. I treat every home like it's my own, and I'll communicate with you throughout the project via call or text."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get a quote for my painting project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Just call me directly at (260) 909-0717 or fill out the quote form on this website. I'll schedule a time to look at your project, discuss your needs, and provide a detailed written estimate. There's no pressure and no obligation—I want you to feel confident before we start."
            }
          },
          {
            "@type": "Question",
            "name": "What's included in your exterior painting service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "My exterior painting service includes: power washing, scraping loose paint, sanding rough areas, caulking gaps and cracks, priming bare wood, two coats of premium paint, and complete cleanup. I don't cut corners on prep because that's what makes paint last."
            }
          },
          {
            "@type": "Question",
            "name": "Do you do deck staining and refinishing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Deck staining and refinishing is one of my core services. I strip old finish if needed, sand the surface, and apply premium deck stain. Note that horizontal surfaces like decks aren't covered under my 5-year warranty due to foot traffic and weather exposure, but I use the best products to maximize longevity."
            }
          }
        ]
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
        <HomeGallery />
        <MeetJoe />
        <Differentiators />
        <HomeFAQ />
        <FinalCTA />
      </main>
      <Footer />
      <QuoteFormModal />
    </div>
  );
}
