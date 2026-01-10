"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "How much does it cost to paint a house exterior in Northeast Indiana?",
    answer: "Exterior painting costs in Northeast Indiana typically range from $3,500 to $8,000 for an average-sized home, depending on square footage, condition of surfaces, and paint quality. Lake houses often cost more due to additional prep work needed for humidity and weather exposure. I provide free, detailed quotes so you know exactly what to expect."
  },
  {
    question: "What's the best time of year to paint a house exterior in Indiana?",
    answer: "The ideal painting season in Indiana runs from late April through October when temperatures are consistently between 50-85°F. Late spring and early fall are often best because humidity is lower and temperatures are moderate. I don't paint in rain or when temperatures will drop below 50°F within 24 hours of application."
  },
  {
    question: "How long does exterior paint last on a lake house?",
    answer: "With proper preparation and premium paint, exterior paint on a lake house should last 7-10 years. Lake houses face extra challenges—humidity, UV exposure, and temperature swings—which is why surface prep is critical. I use Sherwin-Williams Duration or Emerald paints specifically designed for harsh conditions, backed by my 5-year workmanship warranty."
  },
  {
    question: "Do you offer a warranty on your painting work?",
    answer: "Yes! I offer a 5-year workmanship warranty on all interior and exterior vertical surfaces—one of the longest warranties in Northeast Indiana. If paint peels, blisters, or cracks due to my workmanship, I'll fix it at no cost. Most painters only offer 2-3 years. I can offer 5 because I don't cut corners on prep."
  },
  {
    question: "What paint brands do you use?",
    answer: "I exclusively use Sherwin-Williams premium paints—Duration, Emerald, or SuperPaint depending on the project. When you're guaranteeing work for 5 years, you don't cheap out on materials. These paints offer superior adhesion, color retention, and weather resistance compared to big-box store brands."
  },
  {
    question: "How long does it take to paint a house exterior?",
    answer: "Most exterior painting projects take 3-5 days for an average-sized home. Larger homes or those needing extensive prep work (scraping, repairs, priming) may take 5-7 days. I don't rush—proper preparation is what makes paint last. I'll give you a timeline estimate in your quote."
  },
  {
    question: "Do you paint lake houses at Hamilton Lake and Lake James?",
    answer: "Absolutely! Lake houses are my specialty. I've painted over 200 lake houses around Hamilton Lake, Lake James, Jimerson Lake, Crooked Lake, and throughout Steuben County. I understand the unique challenges of waterfront properties—humidity, sun exposure, and the need for weather-resistant finishes."
  },
  {
    question: "What areas do you serve?",
    answer: "I serve Northeast Indiana, Northwest Ohio, and Southern Michigan. This includes Fort Wayne, Angola, Auburn, Garrett, Kendallville, Columbia City, Waterloo, and all the lake communities around Hamilton Lake, Lake James, Jimerson Lake, and Crooked Lake. If you're within about 45 minutes of Waterloo, IN, I can help."
  },
  {
    question: "Do I need to be home while you paint?",
    answer: "For exterior work, you don't need to be home—just make sure I have access to water and electricity. For interior work, I'll coordinate with you on access. I treat every home like it's my own, and I'll communicate with you throughout the project via call or text."
  },
  {
    question: "How do I get a quote for my painting project?",
    answer: "Just call me directly at (260) 909-0717 or fill out the quote form on this website. I'll schedule a time to look at your project, discuss your needs, and provide a detailed written estimate. There's no pressure and no obligation—I want you to feel confident before we start."
  },
  {
    question: "What's included in your exterior painting service?",
    answer: "My exterior painting service includes: power washing, scraping loose paint, sanding rough areas, caulking gaps and cracks, priming bare wood, two coats of premium paint, and complete cleanup. I don't cut corners on prep because that's what makes paint last."
  },
  {
    question: "Do you do deck staining and refinishing?",
    answer: "Yes! Deck staining and refinishing is one of my core services. I strip old finish if needed, sand the surface, and apply premium deck stain. Note that horizontal surfaces like decks aren't covered under my 5-year warranty due to foot traffic and weather exposure, but I use the best products to maximize longevity."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              Common Questions About House Painting
            </h2>
            <p className="text-lg text-gray-600">
              Answers from 20+ years of painting homes in Northeast Indiana
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-[#1e3a5f] pr-4">{faq.question}</span>
                  <span className="text-[#d4a574] text-2xl flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Have a question that's not answered here?</p>
            <a 
              href="tel:2609090717"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#152b47] transition-colors"
            >
              <span>📞</span>
              <span>Call Joe: (260) 909-0717</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export FAQ data for schema markup
export const faqSchemaData = faqs;
