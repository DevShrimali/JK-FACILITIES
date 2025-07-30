import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'End of Lease Clean',
    'Commercial Deep Clean',
    'Builders Clean',
    'Carpet Steam Clean',
    'Floor Scrubbing',
    'Deep Clean',
    'Windows Clean',
    'Oven Clean'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Book Now', href: 'tel:0470373719' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/JK-Logo-Package/white-bg.png"
                alt="JK Facilities"
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Australia's trusted cleaning service provider. We deliver professional,
              reliable, and eco-friendly cleaning solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a target='_blank' href="https://www.facebook.com/Nikjcleaning?mibextid=wwXIfr&mibextid=wwXIfr" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4a75'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4a75'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4a75'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:0470373719" className="text-white hover:text-blue-400 transition-colors">
                    Dinesh Chaudhary<br />0470 373 719
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@jkfacilities.net" className="text-white hover:text-blue-400 transition-colors">
                    info@jkfacilities.net
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Service Area</p>
                  <p className="text-white">All major cities across Australia</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg" style={{backgroundColor: '#0d4a75'}}>
              <h5 className="font-semibold mb-2">24/7 Emergency Service</h5>
              <p className="text-blue-100 text-sm">
                Available round the clock for urgent cleaning needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} JK Facilities Pty Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">ABN: 12 345 678 901</span>
              <span className="text-gray-400 text-sm">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;