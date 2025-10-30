import { Check, Clock, FileCheck, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const visaTypes = [
  {
    id: 1,
    name: "Destination Thailand Visa",
    subheading: "For digital nomads and remote workers",
    image: "https://images.unsplash.com/photo-1653907696261-be994f43ffbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbm9tYWQlMjBsYXB0b3B8ZW58MXx8fHwxNzYxNzE1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      { icon: Clock, text: "Up to 5 years duration" },
      { icon: FileCheck, text: "Instant application" },
      { icon: TrendingUp, text: "99.4% acceptance rate" },
    ],
  },
  {
    id: 2,
    name: "Non-B Work Visa",
    subheading: "For professionals and businesspeople",
    image: "https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NjE2ODY2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      { icon: Clock, text: "Indefinitely renewable" },
      { icon: FileCheck, text: "Instant application" },
      { icon: TrendingUp, text: "99.4% acceptance rate" },
    ],
  },
  {
    id: 3,
    name: "SMART Visa",
    subheading: "For high-skilled talent, investors, executives, and entrepreneurs",
    image: "https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzYxNzE1NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      { icon: Clock, text: "Indefinitely renewable" },
      { icon: FileCheck, text: "Instant application" },
      { icon: TrendingUp, text: "95% acceptance rate" },
    ],
  },
  {
    id: 4,
    name: "Long-Term Residence Visa",
    subheading: "For wealthy global citizens and highly-skilled professionals",
    image: "https://images.unsplash.com/photo-1649147391870-a170da925530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGUlMjB0cmF2ZWx8ZW58MXx8fHwxNzYxNjgzODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: [
      { icon: Clock, text: "Renewable every 10 years" },
      { icon: FileCheck, text: "Instant application" },
      { icon: TrendingUp, text: "98% acceptance rate" },
    ],
  },
];

export function VisaTypesSection() {
  return (
    <section id="visa-types" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#faf8f4' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#edac23' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#267383' }}>
            Our Visa Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guidance for every type of visa in Thailand
          </p>
        </div>

        {/* Visa Columns - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaTypes.map((visa) => (
            <div
              key={visa.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#267383]"
              onClick={() => {
                const element = document.getElementById('get-started');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              {/* Image Header */}
              <div className="relative h-32 overflow-hidden">
                <ImageWithFallback
                  src={visa.image}
                  alt={visa.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"
                />
                {/* Top accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: '#267383' }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="mb-3 transition-colors duration-300 group-hover:text-[#edac23]" style={{ color: '#267383' }}>
                    {visa.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {visa.subheading}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-6">
                  {visa.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: '#267383' }}
                      >
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm text-gray-700 pt-1">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <button 
                    className="w-full py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-md"
                    style={{ 
                      backgroundColor: '#267383',
                      color: 'white'
                    }}
                  >
                    <span className="transition-colors duration-300 group-hover:text-[#edac23]">
                      Learn More
                    </span>
                  </button>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className="absolute bottom-0 right-0 w-20 h-20 opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                  style={{ 
                    background: 'linear-gradient(135deg, transparent 50%, #edac23 50%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need help choosing the right visa?{" "}
            <a 
              href="#get-started"
              className="transition-colors duration-300 hover:text-[#edac23]"
              style={{ color: '#267383' }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('get-started');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Contact us today
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
