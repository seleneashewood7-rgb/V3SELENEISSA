import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#000000', color: 'white' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4" style={{ color: '#edac23' }}>
              Issa Compass
            </h3>
            <p className="text-sm opacity-90 mb-4">
              Your trusted partner in navigating Thailand's visa process. Building bridges to your dream life in Thailand.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4" style={{ color: '#edac23' }}>
              Contact Us
            </h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Sukhumvit Road, Bangkok, Thailand 10110</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+66 (0) 2-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@issacompass.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ color: '#edac23' }}>
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm opacity-90 mt-6">
              Business Hours:<br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 1:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Issa Compass. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
