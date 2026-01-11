"use client";

import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/context/QuoteFormContext";
import { Star } from "lucide-react";
const heroImage = "/Farrells-painting-lake-house-1_1766774717727.png";

// Google "G" logo as inline SVG for credibility
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Hero() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section 
      className="pt-[60px] md:pt-[70px]"
      data-testid="section-hero"
    >
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-70px)]">
        <div className="w-full md:w-[60%] bg-warm-white px-6 sm:px-8 lg:px-12 xl:px-16 pt-4 md:pt-4 pb-4 flex flex-col justify-start">
          <div className="max-w-xl">

            <h1 
              className="font-serif text-[26px] md:text-[32px] lg:text-[35px] leading-tight font-bold text-navy mb-2 md:mb-2"
              data-testid="text-hero-headline"
            >I've Painted Over 200 Lake Houses And Homes In Northeast Indiana.</h1>
            
            <p 
              className="font-sans text-lg md:text-xl text-text-gray mb-2 md:mb-2 leading-relaxed font-normal"
              data-testid="text-hero-subheadline"
            >
              Homeowners don't just hire me once. They keep calling me back.
            </p>
            
            <ul className="font-sans text-base md:text-lg text-text-gray mb-4 md:mb-3 space-y-0.5">
              <li>• Exterior Painting</li>
              <li>• Deck & Fence Staining</li>
              <li>• Interior Painting</li>
            </ul>

            <Button 
              size="lg"
              className="bg-gold text-navy font-sans font-semibold text-base px-6 py-3 border-gold w-fit mb-1"
              data-testid="button-quote-hero"
              onClick={() => openQuoteForm()}
            >
              Get Your Free Quote
            </Button>

            <a 
              href="tel:260-909-0717"
              className="font-sans text-navy hover:text-navy/80 transition-colors block mb-2"
              data-testid="link-call-hero"
            >
              Or call Joe direct: <span className="font-semibold">(260) 909-0717</span>
            </a>

            {/* Compact Google Review Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-2.5 mb-2 max-w-md shadow-sm">
              <div className="flex items-center gap-2 mb-1.5">
                <GoogleLogo />
                <span className="text-xs font-semibold text-gray-700">Google</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-700">4.9</span>
              </div>
              <p className="text-sm text-gray-800 leading-snug">
                "Joe does great work! Used him on several projects... always goes above and beyond!"
              </p>
              <p className="text-xs text-gray-600 mt-0.5">Mike W.</p>
            </div>

            {/* Trust badges in one line - fixed to prevent wrapping */}
            <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base flex-wrap md:flex-nowrap">
              <div className="flex items-center gap-1">
                <span className="font-serif text-base md:text-lg font-bold text-navy">Insured</span>
              </div>
              <span className="text-text-gray/30">|</span>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="font-serif text-base md:text-lg font-bold text-navy">4.9</span>
                <span className="font-sans text-xs md:text-sm text-text-gray whitespace-nowrap">Stars on Google</span>
              </div>
              <span className="text-text-gray/30">|</span>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="font-serif text-sm md:text-base font-bold text-navy whitespace-nowrap">5-Year</span>
                <span className="font-sans text-[11px] md:text-xs text-text-gray whitespace-nowrap">Workmanship Guarantee</span>
                <span className="font-sans text-[9px] md:text-[10px] text-text-gray italic whitespace-nowrap">(One of the longest in the area)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] h-[300px] md:h-auto md:mr-0 relative">
          <img 
            src={heroImage} 
            alt="Beautiful lake house deck painted by Farrell's Painting"
            className="w-full h-full object-cover"
          />
          
          {/* Customer Reviews Overlay */}
          <div className="absolute bottom-4 right-4 left-4 md:bottom-8 md:right-8 md:left-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 md:p-5">
            {/* Header with Google branding */}
            <div className="flex items-center gap-2 mb-3">
              <GoogleLogo />
              <span className="text-xs md:text-sm font-semibold text-gray-700">Google Reviews</span>
              <div className="flex items-center gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-3 h-3 md:w-3.5 md:h-3.5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-700">4.9</span>
            </div>
            
            {/* Single Review */}
            <div>
              <p className="text-sm md:text-base text-gray-800 font-bold leading-snug">
                "Fantastic job. Great attention to detail... and they didn't leave a mess behind when finished!"
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Dennis S. & Mike F.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
