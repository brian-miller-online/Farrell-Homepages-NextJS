"use client";

import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/context/QuoteFormContext";
// Cloudinary URL with auto-format and quality optimization
const vanImage = "https://res.cloudinary.com/dlnb17xz7/image/upload/f_auto,q_auto,w_700/v1/Farrell's%20Painting/Farrell's-Painting-Van_1766778063353";

export default function MeetJoe() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <section 
      id="meet-joe"
      className="bg-navy py-16 md:py-24"
      data-testid="section-meet-joe"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative">
              <div className="aspect-[4/3] rounded-md overflow-hidden bg-navy-light">
                <img
                  src={vanImage}
                  alt="Farrell's Painting work van"
                  className="w-full h-full object-cover"
                  data-testid="img-van"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-warm-white px-4 py-2 rounded-md">
                <span className="font-serif text-navy font-bold text-sm">
                  20 Years Experience
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 
              className="font-serif text-[25px] md:text-[32px] font-bold text-warm-white mb-4 md:mb-6 leading-tight"
              data-testid="text-meet-joe-headline"
            >
              My Name's on the Truck. And I'm the One Doing the Work.
            </h2>
            
            <div className="space-y-4 text-warm-white/90 font-sans text-base md:text-lg leading-relaxed">
              <p data-testid="text-meet-joe-body-1">I've been painting for 20 years and running my own business for 5. When you hire Farrell's Painting, you get me, not a random crew, not a subcontractor you've never met.</p>
              <p data-testid="text-meet-joe-body-2">I answer my phone. I return calls at 7 o'clock at night if that's when you're available.</p>
              <p data-testid="text-meet-joe-body-3">
                I'll <strong>give you my personal cell number</strong> from day one, because I'd rather you reach me directly than wonder what's happening with your project.
              </p>
              <p data-testid="text-meet-joe-body-4">
                I've <strong>painted over 20 lake houses</strong> across Hamilton Lake, Lake James, Jimerson, and Crooked Lake. I've got customers <strong>who've called me back seven times</strong>.
              </p>
              <p data-testid="text-meet-joe-body-5">
                Not because they had problems. <strong>Because they trust me.</strong>
              </p>
              <p data-testid="text-meet-joe-body-6">
                <strong>I treat their home the way I'd treat my own.</strong>
              </p>
            </div>

            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-gold text-navy font-sans font-semibold text-base px-8 py-6 border-gold"
                data-testid="button-quote-meet-joe"
                onClick={() => openQuoteForm()}
              >
                Talk to Joe - Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
