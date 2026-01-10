"use client";

import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/context/QuoteFormContext";

export default function FinalCTA() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section 
      className="bg-navy py-16 md:py-24"
      data-testid="section-final-cta"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="font-serif text-[25px] md:text-[32px] font-bold text-warm-white mb-4 leading-tight"
          data-testid="text-cta-headline"
        >Ready to Stop Putting This Off?</h2>
        
        <p 
          className="font-sans text-lg md:text-xl text-warm-white/80 mb-4"
          data-testid="text-cta-subheadline"
        >
          I'll give you an honest quote, a clear timeline, and work that lasts.
        </p>

        <p 
          className="font-serif text-[25px] md:text-[32px] font-bold text-warm-white mb-8 leading-tight"
        >
          Or skip the form and call me directly:<br />
          <a href="tel:260-909-0717" className="text-warm-white hover:underline">(260) 909-0717</a>
        </p>

        <div className="flex flex-col items-center gap-6">
          <Button 
            size="lg"
            className="bg-gold text-navy font-sans font-semibold text-base px-8 py-6 border-gold"
            data-testid="button-quote-final"
            onClick={() => openQuoteForm()}
          >
            Get Your Free Quote
          </Button>

          <div className="flex flex-wrap justify-center gap-4 text-warm-white/70 font-sans text-sm">
            <span>4.9 Stars</span>
            <span>|</span>
            <span>5-Year Warranty</span>
            <span>|</span>
            <span>Joe Answers His Phone</span>
          </div>
        </div>
      </div>
    </section>
  );
}
