"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFormModal from '@/components/QuoteFormModal';

export default function WarrantyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Tightened padding */}
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#152b47] text-white py-10 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-[#d4a574] text-[#1e3a5f] font-bold text-sm px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
              Industry-Leading Coverage
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              5-Year Workmanship Warranty
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Most painting contractors in Northeast Indiana offer 2-3 year warranties.
            </p>
            <p className="text-3xl font-bold text-[#d4a574] mt-3">
              Our warranty? 5 full years.
            </p>
          </div>
        </div>

        {/* Intro Section - Tightened spacing */}
        <div className="max-w-3xl mx-auto px-6 py-6">
          <div className="text-center mb-6">
            <p className="text-lg text-slate-600 mb-2">
              Not because we're trying to show off...
            </p>
            <p className="text-xl text-slate-800 font-medium">
              But because we're <span className="text-[#d4a574] font-bold">THAT confident</span> in the quality of our surface prep and application.
            </p>
            <p className="text-2xl font-bold text-slate-900 mt-4">
              If our workmanship fails, we'll fix it. No excuses.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <p className="text-center text-slate-500 text-lg">
              Here's exactly what's covered (and what's not):
            </p>
          </div>
        </div>

        {/* What's Covered Section - Navy blue theme instead of green */}
        <div className="bg-[#f8f6f3] py-8 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a5f]">What's Covered</h2>
            </div>
            
            <p className="text-lg text-slate-700 mb-4">
              If paint applied by Farrell's Painting peels, blisters, chips, or cracks due to our workmanship, we'll repair it at no cost to you.
            </p>
            
            <p className="text-slate-600 font-medium mb-3">This includes:</p>
            
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                { title: 'Peeling', desc: 'from surfaces we properly prepared' },
                { title: 'Blistering', desc: 'caused by application errors' },
                { title: 'Chipping', desc: 'from improper application technique' },
                { title: 'Cracking', desc: 'resulting from workmanship defects' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-slate-200">
                  <span className="font-bold text-[#1e3a5f]">{item.title}</span>
                  <span className="text-slate-600"> {item.desc}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-[#1e3a5f] text-white rounded-lg p-5 text-center">
              <p className="text-lg font-medium">
                We provide all labor and materials necessary to complete valid warranty repairs.
              </p>
              <p className="text-xl font-bold mt-1 text-[#d4a574]">Simple as that.</p>
            </div>
          </div>
        </div>

        {/* Testimonial Section - Social proof for warranty */}
        <div className="py-8 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium text-lg flex-shrink-0">
                  D
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">Dennis Stiverson</span>
                    <div className="flex text-[#d4a574]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700 italic">
                    "Farrell's Painting has always done a fantastic job for us. We have used them several times and have been very happy with the work, and attention to detail. I highly recommend and we will be using them again."
                  </p>
                  <p className="text-slate-500 text-sm mt-2">— Repeat customer, Google Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Not Covered Section - Tightened spacing */}
        <div className="py-8 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">What's Not Covered</h2>
              <p className="text-lg text-slate-600">
                We wish we could guarantee paint would last forever...
              </p>
              <p className="text-lg text-slate-800 font-medium mt-1">
                But Mother Nature has other plans.
              </p>
              <p className="text-slate-500 mt-2">
                Here's what this warranty <span className="font-bold text-[#d4a574]">DOESN'T</span> cover—and why:
              </p>
            </div>

            {/* Horizontal Surfaces */}
            <div className="mb-6 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🏠</span> Horizontal Surfaces & High-Exposure Areas
              </h3>
              
              <p className="text-slate-700 mb-3">
                We don't warranty decks, railings, porch floors, or any horizontal surface.
              </p>
              
              <p className="text-slate-600 font-medium mb-2">Here's why:</p>
              
              <div className="bg-amber-50 border-l-4 border-[#d4a574] p-3 mb-3">
                <p className="text-slate-800 font-medium mb-1">
                  Horizontal surfaces take a <span className="font-bold">BEATING.</span>
                </p>
                <p className="text-slate-600 text-sm">
                  Standing water. Direct UV. Foot traffic. Freeze-thaw cycles. Even the <span className="font-bold">BEST</span> paint can't withstand that forever.
                </p>
              </div>
              
              <p className="text-slate-700 mb-1 text-sm">
                That's why <span className="font-bold">NO</span> professional painting contractor warranties them.
                <span className="text-slate-500 italic"> (Anyone who does is either lying... or setting you up for disappointment.)</span>
              </p>
              
              <p className="text-slate-700 mt-3 mb-3 text-sm">
                We're happy to maintain these surfaces for you every 1-3 years...
                <span className="font-medium"> But we're not gonna promise something we can't deliver.</span>
              </p>
              
              <p className="text-slate-600 font-medium mb-2 text-sm">Excluded surfaces include:</p>
              <ul className="grid md:grid-cols-2 gap-1 text-slate-600 text-sm">
                {[
                  'Decks, deck floors, deck railings',
                  'Stairs and porch floors',
                  'Horizontal handrails',
                  'Roofs and gutters',
                  'Any horizontal surface where moisture collects'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Substrate & Structural */}
            <div className="mb-6 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🔧</span> Substrate & Structural Issues
              </h3>
              
              <p className="text-slate-700 mb-3">
                Our warranty covers our workmanship—not problems with the structure itself.
              </p>
              
              <ul className="space-y-1 text-slate-600 text-sm mb-3">
                {[
                  'Rotting wood, structural defects, or substrate failure',
                  'Settling or movement of the structure',
                  'Moisture intrusion from behind painted surfaces',
                  'Peeling of paint layers that existed before our work'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-slate-700 font-medium text-sm">
                If the surface itself is failing, the paint will fail too. That's not a workmanship issue.
              </p>
            </div>

            {/* Environmental Factors */}
            <div className="mb-6 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🌦️</span> Environmental & External Factors
              </h3>
              
              <p className="text-slate-700 mb-3">
                We can't control the weather or what happens to your property after we leave.
              </p>
              
              <p className="text-slate-600 font-medium mb-2 text-sm">This warranty doesn't cover:</p>
              <ul className="space-y-1 text-slate-600 text-sm mb-3">
                {[
                  'Normal wear and tear or fading over time',
                  'Damage from severe weather, acts of God, fire, flood, or natural disasters',
                  'Damage from pressure washing, abrasive cleaning, or harsh chemicals',
                  'Mold or mildew growth',
                  'Damage from abrasion, mechanical impact, or vandalism'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-slate-700 font-medium text-sm">
                Paint is durable. But it's not indestructible.
              </p>
            </div>

            {/* Materials Not Provided */}
            <div className="mb-6 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🎨</span> Materials & Work Not Provided by Farrell's Painting
              </h3>
              
              <p className="text-slate-700 mb-3">
                If we didn't do the work or supply the materials, we can't warranty it.
              </p>
              
              <ul className="space-y-1 text-slate-600 text-sm">
                {[
                  'Work performed by other contractors',
                  'Paint or materials not supplied by Farrell\'s Painting',
                  'Galvanized metal surfaces (unless specifically included in your contract)',
                  'Varnished surfaces'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paint Product Defects */}
            <div className="mb-6 bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🧪</span> Paint Product Defects
              </h3>
              
              <p className="text-slate-700 mb-2">
                If there's a defect in the paint formula itself, that's covered under the manufacturer's warranty—not ours.
              </p>
              <p className="text-slate-700 mb-2">
                We'll help you file a claim with the manufacturer if needed.
              </p>
              <p className="text-slate-700 mb-2">
                (But in 20+ years, <span className="italic text-[#d4a574] font-medium">we've never had to do that</span>. Sherwin-Williams makes good paint.)
              </p>
              <p className="text-slate-500 text-sm">
                Also: Color matching over time isn't guaranteed. Environmental conditions naturally affect paint color and finish.
              </p>
            </div>
          </div>
        </div>

        {/* Warranty Requirements - Tightened with updated heading */}
        <div className="bg-[#1e3a5f] text-white py-8 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">What You Need to Do <span className="text-[#d4a574]">(It's Simple)</span></h2>
            
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { icon: '💳', text: 'Pay your invoice in full per your contract terms' },
                { icon: '📄', text: 'Keep a copy of your contract and proof of payment' },
                { icon: '✉️', text: 'Notify us IN WRITING after discovering any defect' },
                { icon: '🔑', text: 'Make the property accessible for inspection and repairs' },
              ].map((item, i) => (
                <div key={i} className="bg-[#152b47] rounded-lg p-3 flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-slate-200 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xl font-bold mt-6 text-[#d4a574]">That's it.</p>
          </div>
        </div>

        {/* How to Make a Claim - With 3-step visual */}
        <div className="py-8 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">How to Make a Claim</h2>
            
            <p className="text-lg text-slate-700 text-center mb-6">
              If you notice a problem covered under this warranty, just reach out:
            </p>
            
            <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200 mb-6">
              <p className="text-xl font-bold text-slate-900 mb-2">Farrell's Painting</p>
              <p className="text-slate-600">Waterloo, IN</p>
              <div className="mt-3">
                <p className="text-slate-700"><span className="font-medium">Phone:</span> (260) 909-0717</p>
              </div>
            </div>

            {/* 3-Step Visual Process */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">📞</span>
                </div>
                <p className="font-bold text-slate-900">Reach Out</p>
                <p className="text-slate-500 text-sm">Give us a call</p>
              </div>
              
              <div className="hidden md:block text-[#d4a574] text-3xl font-bold">→</div>
              <div className="md:hidden text-[#d4a574] text-3xl font-bold">↓</div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">🔍</span>
                </div>
                <p className="font-bold text-slate-900">We Inspect</p>
                <p className="text-slate-500 text-sm">Check the issue</p>
              </div>
              
              <div className="hidden md:block text-[#d4a574] text-3xl font-bold">→</div>
              <div className="md:hidden text-[#d4a574] text-3xl font-bold">↓</div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">✅</span>
                </div>
                <p className="font-bold text-slate-900">We Fix It</p>
                <p className="text-slate-500 text-sm">Problem solved</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl font-bold text-slate-900">No runaround. No excuses.</p>
              <p className="text-slate-500 mt-3 text-sm">
                Repairs will be scheduled based on weather conditions and crew availability...
                <span className="font-medium text-slate-700"> But we'll get it handled.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Service Area - Tightened */}
        <div className="bg-[#d4a574] py-6 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-1">Service Area</h2>
            <p className="text-[#1e3a5f]">
              Farrell's Painting proudly serves <span className="font-bold">Northeast Indiana</span>, <span className="font-bold">Northwest Ohio</span>, and <span className="font-bold">Southern Michigan</span>.
            </p>
          </div>
        </div>

        {/* Legal Footer - Tightened */}
        <div className="bg-slate-100 py-8 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Important Legal Stuff</h2>
            
            <div className="text-slate-600 space-y-2 text-sm">
              <p>This page summarizes our warranty in plain English.</p>
              <p>Your signed contract includes the complete legal terms, and those terms govern all warranty claims.</p>
              <p>If there's ever a conflict between this page and your contract, the contract controls.</p>
              <p className="text-slate-500 italic">(But there shouldn't be—we tried to make this as clear as possible.)</p>
              <p>Warranty terms and consumer protections may vary based on the state where services are performed and applicable law.</p>
              <p className="font-medium text-slate-700 mt-4">
                Questions about warranty coverage? Want a copy of the full warranty terms from your contract?
              </p>
              <p className="text-[#d4a574] font-bold">Contact us anytime.</p>
            </div>
          </div>
        </div>

        {/* CTA Section - New section before footer */}
        <div className="bg-[#1e3a5f] py-10 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Questions About Your Warranty?</h2>
            <p className="text-slate-300 mb-6">
              Not sure if something's covered? Want to discuss a project? Joe's happy to help.
            </p>
            <Link href="/contact">
              <button className="bg-[#d4a574] hover:bg-[#c49464] text-[#1e3a5f] font-bold text-lg px-8 py-4 rounded-lg transition-colors">
                Talk to Joe →
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}