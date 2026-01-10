import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="bg-navy-dark py-12 md:py-16"
      data-testid="section-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-serif text-xl font-bold text-warm-white mb-4">
              Farrell's Painting
            </h3>
            <p className="font-sans text-warm-white/70 leading-relaxed mb-4">
              Premium painting services for lake houses and fine homes. Owned and operated by Joe Farrell since 2019.
            </p>
            <p className="font-sans text-warm-white/70 leading-relaxed mb-4">
              Over 20 lake houses painted. Every one of them done right.
            </p>
            <p className="font-sans text-sm text-warm-white/50">
              Licensed & Insured
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-warm-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:260-909-0717"
                  className="flex items-center gap-3 font-sans text-warm-white/80 hover:text-warm-white transition-colors"
                  data-testid="link-phone-footer"
                >
                  <Phone className="w-4 h-4 text-warm-white/60" />
                  <span>(260) 909-0717</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:joe@farrellspainting.com"
                  className="flex items-center gap-3 font-sans text-warm-white/80 hover:text-warm-white transition-colors"
                  data-testid="link-email-footer"
                >
                  <Mail className="w-4 h-4 text-warm-white/60" />
                  <span>joe@farrellspainting.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-sans text-warm-white/80">
                  <MapPin className="w-4 h-4 text-warm-white/60 mt-0.5" />
                  <span>Serving the Greater Lake Region</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-warm-white mb-4">Serving All the Lakes and Northeast Indiana</h3>
            <ul className="space-y-2 font-sans text-warm-white/70 text-sm mb-4">
              <li>Hamilton Lake</li>
              <li>Lake James</li>
              <li>Jimerson Lake</li>
              <li>Crooked Lake</li>
              <li>Angola</li>
              <li>Fort Wayne</li>
              <li>Auburn</li>
              <li>Garrett</li>
              <li>Kendallville</li>
              <li>Columbia City</li>
              <li>Leo</li>
              <li>New Haven</li>
            </ul>
            <p className="font-serif text-lg font-bold text-warm-white">
              If you're near the lakes or anywhere in northeast Indiana, I've probably painted there.
            </p>
          </div>
        </div>

        <div className="border-t border-warm-white/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-warm-white/50">
              &copy; {new Date().getFullYear()} Farrell's Painting. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="/warranty" 
                className="font-sans text-sm text-warm-white/50 hover:text-warm-white transition-colors"
                data-testid="link-warranty-footer"
              >
                Warranty
              </a>
              <a 
                href="#" 
                className="font-sans text-sm text-warm-white/50 hover:text-warm-white transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="font-sans text-sm text-warm-white/50 hover:text-warm-white transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
