import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah Thompson",
    role: "Landlord – Single Residential Property",
    rating: 5,
    avatar: "src/assets/revimg.png", // update to your real image paths
    review:
      "Focus Insurance made arranging Property Owners Insurance straightforward and clear. They explained the cover in plain language and helped me find a suitable option for my rental house.",
  },
  {
    name: "James Patel",
    role: "Portfolio Owner – Multiple Flats",
    rating: 5,
    avatar: "src/assets/revimg.jpg",
    review:
      "The team took time to understand my portfolio and came back with options that matched my requirements. The process felt professional and I always knew what was and wasn’t included.",
  },
  {
    name: "Emily Carter",
    role: "HMO & Mixed-Use Property Owner",
    rating: 5,
    avatar: "src/assets/revimg.png",
    review:
      "Helpful, responsive and knowledgeable about landlord cover. I appreciated having one point of contact who could guide me through different insurers and policy features.",
  },
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 px-4 lg:px-8 bg-[#001d3d]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-white mb-6">
            <span className="text-sm font-medium text-accent">Customer Reviews</span>
          </div>

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Property owners who{" "}
            <span className="accent-gradient bg-clip-text text-transparent">
              trust our team
            </span>
          </h2>

          <p className="text-white text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of feedback from landlords, investors and property owners
            we&apos;ve supported with Property Owners Insurance.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={review.name}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-card rounded-2xl border border-card-border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 md:p-8">
                    {/* Avatar + Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-accent/40 bg-surface/60 flex-shrink-0">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.role}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "text-accent fill-accent" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-2">
                        {review.rating}.0 / 5.0
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-base text-foreground leading-relaxed">
                      “{review.review}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-6 bg-accent"
                      : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-card-border bg-card flex items-center justify-center hover:border-accent hover:text-accent hover:-translate-x-0.5 transition-all"
                aria-label="Previous review"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-card-border bg-card flex items-center justify-center hover:border-accent hover:text-accent hover:translate-x-0.5 transition-all"
                aria-label="Next review"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Optional CTA under reviews */}
        <div className="text-center mt-16">
          <p className="text-white/80">
            Want to discuss your own property cover?{" "}
            <button className="text-white hover:text-accent-glow">
              Get in touch with our team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
