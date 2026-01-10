"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/context/QuoteFormContext";
import { Phone, Clock, MessageCircle, PaintBucket, Home, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const { openQuoteForm } = useQuoteForm();

  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-navy py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Joe's Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/joe-farrell-headshot.jpg" 
                  alt="Joe Farrell, Owner of Farrell's Painting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Hero Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6">
                My Name's on the Truck. And I'm the One Doing the Work.
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold" onClick={() => openQuoteForm()}>
                  Get Your Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (260) 909-0717
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            I Started Farrell's Painting Because I Was Sick of Hearing Contractor Horror Stories
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Twenty years ago, someone told me about a painting job at a factory in Auburn.
            </p>
            
            <p>
              I wasn't a business owner back then.
            </p>
            
            <p>
              Just a guy who showed up. Did the work. And realized I was pretty darn good at it.
            </p>
            
            <p>
              Fast forward to 2019...
            </p>
            
            <p>
              I'm sitting at a BBQ.
            </p>
            
            <p>
              And THREE different people tell me about getting screwed by painters.
            </p>
            
            <p>
              Jobs that were rushed.
            </p>
            
            <p>
              Deposits that disappeared.
            </p>
            
            <p>
              Contractors who never returned calls.
            </p>
            
            <p>
              And I thought... "It doesn't have to be that way."
            </p>
            
            <p className="text-xl font-semibold text-navy">
              So I started Farrell's Painting with one SIMPLE promise:
            </p>
            
            <p className="text-2xl font-bold text-gold">
              Treat every home like it's my own.
            </p>
            
            <p>
              That's it.
            </p>
            
            <p>
              No gimmicks. No runaround.
            </p>
            
            <p>
              Just honest work. Fair pricing. And accountability.
            </p>
            
            <p>
              If I say I'll be there at 8am, I'm there at 8am.
            </p>
            
            <p>
              If something changes, you'll be the first to know.
            </p>
            
            <p>
              And if you call me at 7 o'clock at night because you have a question?
            </p>
            
            <p>
              I'll pick up.
            </p>
            
            <p>
              Because my name's on the truck.
            </p>
            
            <p className="text-xl font-semibold text-navy">
              And my reputation's on the line.
            </p>
          </div>
        </div>
      </section>

      {/* Lake House Specialization Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            The Lake House Specialist for Northeast Indiana
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              If you own a lake house, you've probably seen my truck.
            </p>
            
            <p>
              I've painted over 20 homes across Hamilton Lake, Lake James, Crooked Lake, and Jimerson Lake.
            </p>
            
            <p>
              I understand what your investment is up against.
            </p>
            
            <p>
              Harsh UV rays reflecting off the water.
            </p>
            
            <p>
              High humidity.
            </p>
            
            <p>
              Brutal freeze-thaw cycles.
            </p>
            
            <p>
              Protecting these homes requires more than just a standard coat of paint.
            </p>
            
            <p>
              It requires specific preparation. The right materials. And a deep understanding of how to prevent moisture damage and premature fading.
            </p>
            
            <p className="text-xl font-semibold text-navy">
              I have one customer on Hamilton Lake who has trusted me with their home SEVEN times.
            </p>
            
            <p>
              That's the kind of relationship I build.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-12 text-center">
            The Farrell's Painting Promise: 5 Commitments to Every Customer
          </h2>
          
          <div className="space-y-8">
            {/* Commitment 1 */}
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gold mb-2">1. Daily Updates</h3>
                <p className="text-warm-white">
                  You'll hear from me every single day your project is active. What we accomplished. What's next. When to expect me. No chasing. No guessing. No silence.
                </p>
              </div>
            </div>

            {/* Commitment 2 */}
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gold mb-2">2. A 5-Year Warranty</h3>
                <p className="text-warm-white">
                  I stand behind my work longer than anyone in Fort Wayne. If something fails, I fix it. Period. That's not fine print—that's my word.
                </p>
              </div>
            </div>

            {/* Commitment 3 */}
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gold mb-2">3. My Personal Cell Phone Number</h3>
                <p className="text-warm-white">
                  When you have a question, you call me directly. Not a call center. Not an office manager. You get the owner, every time.
                </p>
              </div>
            </div>

            {/* Commitment 4 */}
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gold mb-2">4. Fair Upfront Pricing</h3>
                <p className="text-warm-white">
                  We require just 20% down to schedule your project, not 50%. The price I quote is the price you pay. No surprises. No hidden fees.
                </p>
              </div>
            </div>

            {/* Commitment 5 */}
            <div className="flex gap-4 items-start">
              <CheckCircle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gold mb-2">5. Joe on Every Job Site</h3>
                <p className="text-warm-white">
                  When you hire Farrell's Painting, you're hiring me. I personally manage every project from the initial estimate to the final walkthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Around Here, a Handshake Still Means Something
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Reliability */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Reliability</h3>
              <p className="text-gray-700">
                If I say I'll be there at 8am, I'm there at 8am. If something changes, you'll be the first to know. I respect your time, and I finish what I start. No excuses.
              </p>
            </div>

            {/* Communication */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Communication</h3>
              <p className="text-gray-700">
                You get my personal cell number from day one. I've been known to talk with customers at 9 o'clock at night to answer a question. You will never be left in the dark.
              </p>
            </div>

            {/* Quality Craftsmanship */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <PaintBucket className="w-10 h-10 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Quality Craftsmanship</h3>
              <p className="text-gray-700">
                With 20 years of experience, I know what good work looks like—and I know what corners other painters cut to save time. I don't cut them. My goal is a finish that lasts.
              </p>
            </div>

            {/* Respect for Your Home */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Respect for Your Home</h3>
              <p className="text-gray-700">
                Your home is your sanctuary. We treat it that way. We protect your furniture, cover your floors, and clean up every single day. We leave your home cleaner than we found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-6">
            Let's Talk About Your Project
          </h2>
          <p className="text-xl text-warm-white mb-4">
            I'll give you a free quote.
          </p>
          <p className="text-xl text-warm-white mb-8">
            No pressure. No sales pitch.
          </p>
          <p className="text-xl text-warm-white mb-8">
            Just an honest conversation about what your home needs—and whether I'm the right guy for the job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold" onClick={() => openQuoteForm()}>
              Get Your Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-navy"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Joe: (260) 909-0717
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}