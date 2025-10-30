import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2, Shield, Users, Clock, ComputerIcon } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Shield,
    title: "High Success Rate",
    description: "Get it all done in just one appointment"
  },
  {
    icon: Clock,
    title: "Transparent Timelines",
    description: "To keep you informed and assured throughout your entire visa journey"
  },
  {
    icon: ComputerIcon,
    title: "Software Solutions",
    description: "To maximize accceptance rate and minimize processing time"
  }
];

export function AboutUsSection() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#edac23' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#267383' }}>
            Your Trusted Guide to Thailand
          </h2>
        </div>

        {/* Image Gallery - Full Width with Hover Effects */}
        <div className="mb-16">
          <div className="flex gap-4 h-96">
            {/* Image 1 - Large */}
            <div 
              className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group transition-all duration-500 ease-out"
              style={{ 
                flex: hoveredImage === 1 ? '3' : hoveredImage === null ? '2' : '1'
              }}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <ImageWithFallback
                src="/founders.jpg"
                alt="Issa Compass team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Decorative corner accent */}
              <div 
                className="absolute top-0 right-0 w-24 h-24"
                style={{ 
                  background: 'linear-gradient(135deg, transparent 50%, #edac23 50%)',
                  opacity: 0.9
                }}
              />
            </div>

            {/* Image 2 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white group transition-all duration-500 ease-out"
              style={{ 
                flex: hoveredImage === 2 ? '3' : hoveredImage === null ? '1' : '0.5'
              }}
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <ImageWithFallback
                src="/communevent.jpg"
                alt="Modern office"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Image 3 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white group transition-all duration-500 ease-out"
              style={{ 
                flex: hoveredImage === 3 ? '3' : hoveredImage === null ? '1' : '0.5'
              }}
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <ImageWithFallback
                src="/peacesign.jpg"
                alt="Passport and visa"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Image 4 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white group transition-all duration-500 ease-out"
              style={{ 
                flex: hoveredImage === 4 ? '3' : hoveredImage === null ? '1' : '0.5'
              }}
              onMouseEnter={() => setHoveredImage(4)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <ImageWithFallback
                src="/Pricillaatevent.jpg"
                alt="Happy clients in Thailand"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Image 5 */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white group transition-all duration-500 ease-out"
              style={{ 
                flex: hoveredImage === 5 ? '3' : hoveredImage === null ? '1' : '0.5'
              }}
              onMouseEnter={() => setHoveredImage(5)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <ImageWithFallback
                src="/aaron.jpeg"
                alt="Professional team"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content - Full Width */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by expats who experienced the challenges of navigating Thailand's visa system firsthand, 
              <span style={{ color: '#267383' }}> Issa Compass </span>
              was born from a simple mission: to make the visa process seamless and stress-free for everyone.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We understand that obtaining a visa is more than just paperwork – it's the gateway to 
              <span style={{ color: '#267383' }}> building the life you want in Thailand</span>. 
              Whether you're pursuing a career, starting a business, retiring in paradise, or continuing your education, 
              our team of experienced professionals is committed to guiding you every step of the way.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With years of expertise and a deep understanding of Thai immigration regulations, we've helped 
              thousands of foreigners successfully obtain their visas. Our commitment to 
              <span style={{ color: '#267383' }}> transparency, efficiency, and personalized service </span>
              sets us apart in the industry.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-lg mb-3" style={{ backgroundColor: '#267383' }}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2" style={{ color: '#267383' }}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#faf8f4] rounded-lg">
                <CheckCircle2 className="w-5 h-5" style={{ color: '#267383' }} />
                <span className="text-sm">Years of expertise</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#faf8f4] rounded-lg">
                <CheckCircle2 className="w-5 h-5" style={{ color: '#267383' }} />
                <span className="text-sm">Modern solutions</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#faf8f4] rounded-lg">
                <CheckCircle2 className="w-5 h-5" style={{ color: '#267383' }} />
                <span className="text-sm">1000+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="relative mt-20">
          <div className="absolute bottom-0 left-0 w-64 h-1" style={{ backgroundColor: '#edac23', opacity: 0.3 }} />
          <div className="absolute bottom-0 right-0 w-48 h-1" style={{ backgroundColor: '#267383', opacity: 0.3 }} />
        </div>
      </div>
    </section>
  );
}
