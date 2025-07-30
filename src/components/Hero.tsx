import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Phone, Calendar, Star } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo('.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo('.hero-buttons',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo('.hero-features .feature-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
        "-=0.2"
      );
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f5382]/80 to-[#198bbd]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Professional Cleaning
            <span className="block text-[#87ceeb]">Services in Australia</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-[#b3d9f2] font-light">
            Affordable. Reliable. Spotless.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:0470373719"
              className="bg-white hover:bg-gray-100 text-[#0f5382] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-block text-center"
            >
              To Book - Call Now 
            </a>
          </div>

          {/* Hero Features */}
          <div className="hero-features grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="feature-item flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Star className="w-6 h-6 text-yellow-400" />
              <span className="font-medium">100% Satisfaction Guarantee</span>
            </div>
            <div className="feature-item flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="w-6 h-6 text-green-400" />
              <span className="font-medium">24/7 Availability</span>
            </div>
            <div className="feature-item flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calendar className="w-6 h-6 text-[#198bbd]" />
              <span className="font-medium">Same Day Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
