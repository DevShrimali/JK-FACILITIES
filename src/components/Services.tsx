import React from 'react';
import { Home, Building, Hammer, Car as Carpet, Waves, Sparkles, Square, Pen as Oven } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'End of Lease Clean',
      description: 'Complete bond cleaning to ensure you get your full deposit back',
      features: ['Kitchen deep clean', 'Bathroom sanitization', 'Carpet cleaning', 'Window cleaning']
    },
    {
      icon: Building,
      title: 'Commercial Deep Clean',
      description: 'Professional cleaning for offices, retail spaces, and commercial buildings',
      features: ['Floor maintenance', 'Restroom sanitization', 'Waste management', 'Surface disinfection']
    },
    {
      icon: Hammer,
      title: 'Builders Clean',
      description: 'Post-construction cleanup for new builds and renovation projects',
      features: ['Dust removal', 'Paint splatter cleanup', 'Window washing', 'Floor preparation']
    },
    {
      icon: Carpet,
      title: 'Carpet Steam Clean',
      description: 'Deep steam cleaning to remove stains, odors, and allergens',
      features: ['Stain removal', 'Odor elimination', 'Fabric protection', 'Fast drying']
    },
    {
      icon: Waves,
      title: 'Floor Scrubbing & High-Pressure Cleaning',
      description: 'Professional floor maintenance and high-pressure exterior cleaning',
      features: ['Tile restoration', 'Grout cleaning', 'Driveway cleaning', 'Deck maintenance']
    },
    {
      icon: Sparkles,
      title: 'Deep Clean',
      description: 'Comprehensive deep cleaning for homes and offices',
      features: ['Every room cleaned', 'Appliance cleaning', 'Light fixture cleaning', 'Baseboard cleaning']
    },
    {
      icon: Square,
      title: 'Windows Clean',
      description: 'Crystal clear windows inside and out for residential and commercial',
      features: ['Interior cleaning', 'Exterior cleaning', 'Screen cleaning', 'Sill cleaning']
    },
    {
      icon: Oven,
      title: 'Oven Clean',
      description: 'Specialized oven and appliance cleaning service',
      features: ['Oven deep clean', 'Stovetop cleaning', 'Range hood cleaning', 'Microwave cleaning']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning solutions tailored to your needs. From residential deep cleans 
              to commercial maintenance, we deliver exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="stagger-item bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0f5382] to-[#198bbd] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#0f5382'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center group-hover:text-gray-600 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full mr-2 group-hover:bg-green-500 transition-colors duration-300" style={{backgroundColor: '#0f5382'}}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <a
              href="tel:0470373719"
              className="bg-[#0f5382] hover:bg-[#0d4a75] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group inline-block"
            >
              <span className="group-hover:animate-pulse">Book Now - Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
