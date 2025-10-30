import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { CheckCircle2 } from "lucide-react";
const greenLine1 = "/Greenline1.png";
const greenLine2 = "/Greenline2.png";

const nationalities = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", 
  "Italy", "Spain", "Japan", "South Korea", "China", "India", "Singapore", 
  "Malaysia", "Indonesia", "Philippines", "Vietnam", "New Zealand", "Netherlands",
  "Sweden", "Norway", "Denmark", "Switzerland", "Belgium", "Ireland", "Other"
];

const visaTypes = [
  "Tourist Visa",
  "Non-B (Work Visa)",
  "Non-O (Retirement)",
  "ED (Education Visa)",
  "Smart Visa",
  "Dependent Visa",
  "Business Visa",
  "Not Sure Yet"
];

const contactChannels = ["Email", "Phone", "WhatsApp", "LINE"];

export function GetStartedSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    nationality: "",
    visaType: "",
    contactChannel: "",
    contactInfo: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showGreenLine1, setShowGreenLine1] = useState(true);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.nationality) {
      newErrors.nationality = "Please select your nationality";
    }
    if (!formData.visaType) {
      newErrors.visaType = "Please select a visa type";
    }
    if (!formData.contactChannel) {
      newErrors.contactChannel = "Please select a contact channel";
    }
    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = "Contact information is required";
    } else if (formData.contactChannel === "Email" && !formData.contactInfo.includes("@")) {
      newErrors.contactInfo = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          nationality: "",
          visaType: "",
          contactChannel: "",
          contactInfo: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  // Blinking animation for green line
  useEffect(() => {
    const interval = setInterval(() => {
      setShowGreenLine1(prev => !prev);
    }, 1000); // Blink every 2 second

    return () => clearInterval(interval);
  }, []);

  if (isSubmitted) {
    return (
      <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#faf8f4' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="mb-6 flex justify-center">
              <CheckCircle2 className="w-20 h-20" style={{ color: '#267383' }} />
            </div>
            <h2 className="text-3xl mb-4" style={{ color: '#267383' }}>
              Thank You!
            </h2>
            <p className="text-lg text-gray-600">
              We've received your inquiry and will contact you shortly via {formData.contactChannel}.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#faf8f4' }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 mx-auto mb-6" style={{ backgroundColor: '#edac23' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#267383' }}>
            Begin Your Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Let us help you navigate your visa process with confidence and ease
          </p>
          
          {/* Blinking Green Line Images */}
          <div className="flex justify-center items-center mb-8 relative h-32">
            <img 
              src={greenLine1}
              alt="Progress Line" 
              className={`w-full max-w-3xl object-contain absolute transition-opacity duration-400 ${
                showGreenLine1 ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <img 
              src={greenLine2}
              alt="Progress Line" 
              className={`w-full max-w-3xl object-contain absolute transition-opacity duration-400 ${
                showGreenLine1 ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-2 border-[#267383]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" style={{ color: '#267383' }}>
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`transition-all duration-300 focus:ring-2 ${
                    errors.fullName ? 'border-red-500' : 'focus:ring-[#267383]/20'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Nationality */}
              <div className="space-y-2">
                <Label htmlFor="nationality" style={{ color: '#267383' }}>
                  Nationality *
                </Label>
                <Select value={formData.nationality} onValueChange={(value) => handleInputChange('nationality', value)}>
                  <SelectTrigger className={errors.nationality ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select your nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    {nationalities.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.nationality && (
                  <p className="text-sm text-red-500">{errors.nationality}</p>
                )}
              </div>

              {/* Visa Type */}
              <div className="space-y-2">
                <Label htmlFor="visaType" style={{ color: '#267383' }}>
                  Visa Type of Interest *
                </Label>
                <Select value={formData.visaType} onValueChange={(value) => handleInputChange('visaType', value)}>
                  <SelectTrigger className={errors.visaType ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select visa type" />
                  </SelectTrigger>
                  <SelectContent>
                    {visaTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.visaType && (
                  <p className="text-sm text-red-500">{errors.visaType}</p>
                )}
              </div>

              {/* Contact Channel */}
              <div className="space-y-2">
                <Label htmlFor="contactChannel" style={{ color: '#267383' }}>
                  Preferred Contact Channel *
                </Label>
                <Select value={formData.contactChannel} onValueChange={(value) => handleInputChange('contactChannel', value)}>
                  <SelectTrigger className={errors.contactChannel ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactChannels.map((channel) => (
                      <SelectItem key={channel} value={channel}>
                        {channel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.contactChannel && (
                  <p className="text-sm text-red-500">{errors.contactChannel}</p>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <Label htmlFor="contactInfo" style={{ color: '#267383' }}>
                  {formData.contactChannel === 'Email' ? 'Email Address' : 'Contact Number'} *
                </Label>
                <Input
                  id="contactInfo"
                  type={formData.contactChannel === 'Email' ? 'email' : 'text'}
                  value={formData.contactInfo}
                  onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                  className={`transition-all duration-300 focus:ring-2 ${
                    errors.contactInfo ? 'border-red-500' : 'focus:ring-[#267383]/20'
                  }`}
                  placeholder={
                    formData.contactChannel === 'Email' 
                      ? 'your.email@example.com' 
                      : 'Enter your contact number'
                  }
                />
                {errors.contactInfo && (
                  <p className="text-sm text-red-500">{errors.contactInfo}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ backgroundColor: '#edac23', color: 'white' }}
              >
                Submit Your Inquiry
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to be contacted by Issa Compass regarding your visa inquiry.
              </p>
            </form>
          </div>

          {/* Decorative element */}
          <div className="relative mt-8">
            <div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
              style={{ 
                background: `linear-gradient(135deg, #edac23 0%, #267383 100%)`,
                filter: 'blur(60px)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
