import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
const passportLargeImage = "/Thai Visa.png";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    text: "The process was incredibly smooth. Issa Compass handled everything professionally and I got my work visa in record time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italy",
    text: "Best visa service in Thailand. They made my retirement visa application stress-free and straightforward.",
    rating: 5,
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    country: "Japan",
    text: "Excellent communication and support throughout the entire process. Highly recommend for any visa needs.",
    rating: 5,
  },
];

const rotatingTexts = [
  "Backed by software, not by paperwork",
  "No hidden fees, no hassle",
  "Timelines and transparency"
];

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [passportSlideIn, setPassportSlideIn] = useState(false);
  const [starsAnimating, setStarsAnimating] = useState(false);
  const [boxesVisible, setBoxesVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Start passport slide in
    const passportTimer = setTimeout(() => {
      setPassportSlideIn(true);
    }, 500);

    // Start stars dragging out
    const starsTimer = setTimeout(() => {
      setStarsAnimating(true);
    }, 1500);

    // Show white boxes
    const boxesTimer = setTimeout(() => {
      setBoxesVisible(true);
    }, 3500);

    // Show text content
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 4000);

    return () => {
      clearTimeout(passportTimer);
      clearTimeout(starsTimer);
      clearTimeout(boxesTimer);
      clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#faf8f4' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1651670213051-4ced39e62eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHByb2Zlc3Npb25hbHMlMjBUaGFpbGFuZCUyMGNpdHl8ZW58MXx8fHwxNzYxNzEzNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Happy professionals in Thailand"
          className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf8f4]/50 to-[#faf8f4]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Headline with Image */}
        <div className="mb-12 max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Passport Image */}
            <div className="flex justify-center md:justify-start animate-slide-in-left">
              <img
                src={"/Thai Visa.png"}
                alt="Passport"
                className="w-84 h-84 sm:w-80 sm:h-80 object-contain" />
            </div>

            {/* Right: Headline */}
            <div className="text-center md:text-right">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4" style={{ fontFamily: 'Georgia, serif', color: '#000000' }}>
                Issa Compass: Your Visa, your freedom
              </h1>
              <p
                className="text-base sm:text-lg italic transition-opacity duration-500"
                style={{
                  color: '#267383',
                  opacity: isVisible ? 1 : 0
                }}
              >
                {rotatingTexts[currentTextIndex]}
              </p>
            </div>
          </div>
        </div>




        {/* Reviews with animated stars - single line */}
        <div className="flex justify-center gap-6 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-12">
          {reviews.map((review, reviewIndex) => (
            <div
              key={review.id}
              className="relative w-64 flex-shrink-0"
            >
              {/* Stars - animate from passport position */}
              <div className="mb-3 flex gap-1">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-4 h-4 fill-[#edac23] text-[#edac23] transition-all duration-1000 ease-out ${starsAnimating ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      transform: starsAnimating
                        ? 'translate(0, 0)'
                        : `translate(${-300 + reviewIndex * 100}px, ${-100 - reviewIndex * 50}px)`,
                      transitionDelay: `${reviewIndex * 200 + starIndex * 100}ms`
                    }} />
                ))}
              </div>

              {/* White box - fades in after stars land */}
              <div
                className={`bg-white rounded-lg p-6 shadow-sm border border-[#267383]/10 transition-all duration-500 ${boxesVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* Review text - appears after box */}
                <div className={`transition-opacity duration-500 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="mb-4 text-gray-700 italic">"{review.text}"</p>
                  <div className="border-t pt-3" style={{ borderColor: '#267383' }}>
                    <div style={{ color: '#267383' }}>{review.name}</div>
                    <div className="text-sm text-gray-500">{review.country}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mt-12">
          <Button
            onClick={() => scrollToSection('visa-types')}
            className="w-full sm:w-auto px-8 py-6 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#267383', color: 'white' }}
          >
            Visa Types
          </Button>
          <Button
            onClick={() => scrollToSection('get-started')}
            className="w-full sm:w-auto px-8 py-6 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#edac23', color: 'white' }}
          >
            Get Started
          </Button>
          <Button
            onClick={() => scrollToSection('about-us')}
            className="w-full sm:w-auto px-8 py-6 bg-white transition-all duration-300 hover:scale-105 border-2"
            style={{ borderColor: '#267383', color: '#267383' }}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-[#267383]/20 rounded-full hidden md:block" />
      <div className="absolute bottom-40 left-10 w-16 h-16 border-2 border-[#edac23]/30 hidden md:block" style={{ transform: 'rotate(45deg)' }} />
      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
