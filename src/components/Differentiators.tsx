import { MessageSquare, Shield, User, Percent } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const differentiators = [
  {
    icon: MessageSquare,
    title: "Daily Communication - Guaranteed",
    description: "You'll never wonder what's happening with your project.\n\nI'll update you every single day.\n\nWhat we accomplished. What's next. When to expect me.\n\nNo chasing. No guessing. No silence.",
  },
  {
    icon: Shield,
    title: "5-Year Warranty on All Work",
    description: "I stand behind my work longer than anyone in Fort Wayne.\n\nIf something fails, I fix it. Period.\n\nThat's not fine print - that's my word.\n\nI only use Sherwin-Williams products.\n\nBecause when you're guaranteeing work for 5 years... you don't cheap out on materials.",
  },
  {
    icon: User,
    title: "Joe Does the Work",
    description: "When you hire Farrell's Painting, you're hiring me.\n\nI personally handle your project from estimate to final walkthrough.\n\nYou'll have my cell phone number.\n\nAnd I'll pick up when you call.",
  },
  {
    icon: Percent,
    title: "20% Down, Balance When You're Satisfied",
    description: "I don't need half your money upfront.\n\nJust 20% to get started.\n\nYou pay the rest after the final walkthrough... when you're completely happy.",
  },
];

export default function Differentiators() {
  return (
    <section 
      id="why-us"
      className="bg-warm-white py-16 md:py-24"
      data-testid="section-differentiators"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-serif text-[25px] md:text-[32px] font-bold text-navy mb-4 leading-tight"
            data-testid="text-why-us-headline"
          >
            What You Can Count On
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={item.title}
              className="bg-light-gray/50 border-light-gray"
              data-testid={`card-differentiator-${index}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-md bg-navy/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-text-gray leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
