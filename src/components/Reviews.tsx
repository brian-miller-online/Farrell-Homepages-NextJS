import { Star } from "lucide-react";

// Google "G" logo as inline SVG
const GoogleLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

interface Review {
  name: string;
  reviewCount: string;
  timeAgo: string;
  text: string;
  avatarColor: string;
  avatarInitial: string;
  hasPhoto?: boolean;
}

const reviews: Review[] = [
  {
    name: "Dennis Stiverson",
    reviewCount: "2 reviews",
    timeAgo: "4 months ago",
    text: "Farrell's Painting has always done a fantastic job for us. we have used them several times and have been very happy with the work, and attention to detail. I highly recommend and we will be using them again.",
    avatarColor: "bg-gray-600",
    avatarInitial: "D",
    hasPhoto: true,
  },
  {
    name: "Mike French",
    reviewCount: "1 review",
    timeAgo: "5 months ago",
    text: "They did exterior painting for me. Good work, efficient and, they didn't leave a mess behind when they were finished! It's nice to have someone do such a good job and, clean up after themselves when finished!",
    avatarColor: "bg-teal-500",
    avatarInitial: "M",
  },
  {
    name: "Todd Betts",
    reviewCount: "3 reviews",
    timeAgo: "5 months ago",
    text: "Joe is a great painter. Results looked great and he is very meticulous and cleans up after himself. Highly recommend joes painting.",
    avatarColor: "bg-green-600",
    avatarInitial: "T",
  },
  {
    name: "Stacey Jones",
    reviewCount: "1 review",
    timeAgo: "5 months ago",
    text: "We have used Joe for a variety of painting projects. He does high quality work at a fair price. Would highly recommend him to anyone!",
    avatarColor: "bg-orange-500",
    avatarInitial: "S",
  },
  {
    name: "Eric Clabaugh",
    reviewCount: "2 reviews",
    timeAgo: "5 months ago",
    text: "Did a great job painting the exterior of our home. Great attention to detail. Responded to texts and calls quickly.",
    avatarColor: "bg-gray-500",
    avatarInitial: "E",
  },
  {
    name: "Mike Woodfill",
    reviewCount: "Local Guide · 17 reviews",
    timeAgo: "5 months ago",
    text: "Joe does great work! Have used him on several projects and he always goes above and beyond! Keep it up Joe!",
    avatarColor: "bg-gray-600",
    avatarInitial: "M",
    hasPhoto: true,
  },
  {
    name: "Dawn Davis",
    reviewCount: "7 reviews",
    timeAgo: "5 months ago",
    text: "Joe is an Experienced painter who does great work ! Highly recommend",
    avatarColor: "bg-red-500",
    avatarInitial: "D",
  },
  {
    name: "Paul Bojrab",
    reviewCount: "8 reviews",
    timeAgo: "5 months ago",
    text: "Thorough and efficient! Does a great job at a reasonable rate. Definitely would recommend.",
    avatarColor: "bg-red-400",
    avatarInitial: "P",
    hasPhoto: true,
  },
];

function StarRating({ size = "sm" }: { size?: "sm" | "lg" }) {
  const starClass = size === "lg" ? "w-6 h-6 md:w-7 md:h-7" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`${starClass} fill-amber-400 text-amber-400`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div 
      className="bg-white rounded-md border border-gray-200 p-5 md:p-6 flex flex-col gap-3 h-full min-h-[220px]"
    >
      <div className="flex items-start gap-3">
        <div 
          className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-medium text-sm flex-shrink-0`}
        >
          {review.avatarInitial}
        </div>
        <div className="min-w-0">
          <p className="font-sans font-medium text-gray-900 text-sm md:text-base truncate">
            {review.name}
          </p>
          <p className="font-sans text-xs text-gray-500">
            {review.reviewCount}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <StarRating />
        <span className="font-sans text-xs text-gray-500">{review.timeAgo}</span>
      </div>
      
      <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
        {review.text}
      </p>
    </div>
  );
}

export default function Reviews() {
  return (
    <section 
      data-testid="section-reviews"
    >
      <div className="bg-navy py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 
            className="font-serif text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white text-center"
            data-testid="text-reviews-headline"
          >
            When you treat every lake house like your own, customers don't just hire you once. They keep calling you back.
          </h2>
        </div>
      </div>
      
      <div className="bg-warm-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Google Reviews Header */}
          <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
            <div className="flex items-center gap-3 md:gap-4">
              <GoogleLogo className="w-10 h-10 md:w-12 md:h-12" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-800">Google Reviews</span>
                <div className="flex items-center gap-2 mt-1">
                  <StarRating size="lg" />
                  <span className="text-xl md:text-2xl font-bold text-gray-800">4.9</span>
                </div>
                <span className="text-sm md:text-base text-gray-500 mt-1">Based on 29 five-star reviews across Google & Facebook</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {reviews.map((review, index) => (
              <div key={index} data-testid={`review-card-${index}`}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
