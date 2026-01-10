"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/context/QuoteFormContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuoteForm } = useQuoteForm();

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    openQuoteForm();
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-navy h-[60px] md:h-[70px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          <a 
            href="/" 
            className="flex items-center flex-shrink-0"
            data-testid="link-logo"
          >
            <span className="text-gold font-bold text-xl md:text-2xl tracking-tight">
              Farrell's Painting
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6" data-testid="nav-desktop">
            <a 
              href="/" 
              className="text-white font-sans text-base hover:text-white/80 transition-colors"
              data-testid="link-home"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-white font-sans text-base hover:text-white/80 transition-colors"
              data-testid="link-about"
            >
              About
            </a>
            <a 
              href="/portfolio" 
              className="text-white font-sans text-base hover:text-white/80 transition-colors"
              data-testid="link-portfolio"
            >
              Portfolio
            </a>
            <a 
              href="/services" 
              className="text-white font-sans text-base hover:text-white/80 transition-colors"
              data-testid="link-services"
            >
              Services
            </a>
            <a 
              href="/contact" 
              className="text-white font-sans text-base hover:text-white/80 transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
            <a 
              href="/warranty" 
              className="text-white font-sans text-base hover:text-white/80 transition-colors"
              data-testid="link-warranty"
            >
              Warranty
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:260-909-0717" 
              className="flex items-center gap-2 text-white font-sans font-semibold"
              data-testid="link-phone-desktop"
            >
              <Phone className="w-4 h-4" />
              <span>(260) 909-0717</span>
            </a>
            <Button 
              variant="ghost"
              className="text-white border border-white font-sans font-semibold px-5 hover:bg-white/10"
              data-testid="button-quote-header"
              onClick={handleQuoteClick}
            >
              Request Quote
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-warm-white border-b border-light-gray shadow-lg"
          data-testid="nav-mobile"
        >
          <nav className="flex flex-col p-4 gap-4">
            <a 
              href="/" 
              className="text-text-gray font-sans text-lg py-2 hover:text-navy transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-home-mobile"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-text-gray font-sans text-lg py-2 hover:text-navy transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-about-mobile"
            >
              About
            </a>
            <a 
              href="/portfolio" 
              className="text-text-gray font-sans text-lg py-2 hover:text-navy transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-portfolio-mobile"
            >
              Portfolio
            </a>
            <a 
              href="/services" 
              className="text-text-gray font-sans text-lg py-2 hover:text-navy transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-services-mobile"
            >
              Services
            </a>
            <a 
              href="/contact" 
              className="text-text-gray font-sans text-lg py-2 hover:text-navy transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-contact-mobile"
            >
              Contact
            </a>
            <a 
              href="/warranty" 
              className="text-text-gray font-sans text-lg py-2 hover:text-navy transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-warranty-mobile"
            >
              Warranty
            </a>
            <a 
              href="tel:260-909-0717" 
              className="flex items-center gap-2 text-navy font-sans font-semibold text-lg py-2"
              data-testid="link-phone-mobile"
            >
              <Phone className="w-5 h-5" />
              <span>(260) 909-0717</span>
            </a>
            <Button 
              variant="outline"
              className="w-full text-navy border-navy font-sans font-semibold"
              data-testid="button-quote-mobile"
              onClick={handleQuoteClick}
            >
              Request Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
