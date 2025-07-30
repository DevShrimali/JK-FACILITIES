import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0f5382] to-[#198bbd]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for a Spotless Clean?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait any longer! Book your professional cleaning service today and 
            experience the JK Facilities difference. Your satisfaction is guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0470373719"
              className="bg-white text-[#0f5382] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 shadow-lg group"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span className="group-hover:animate-pulse">Call Now: 0470 373 719</span>
            </a>
          
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span className="text-sm">Same Day Service</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span className="text-sm">Free Quotes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
