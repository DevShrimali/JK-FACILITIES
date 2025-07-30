import React from 'react';
import { Shield, Leaf, Clock, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: '100% Satisfaction Guarantee',
      description: 'We stand behind our work with a complete satisfaction guarantee'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Products',
      description: 'Safe, non-toxic cleaning products that protect your family and environment'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service to meet your cleaning needs anytime'
    },
    {
      icon: Shield,
      title: 'Fully Insured & Police Checked',
      description: 'All our staff are thoroughly vetted, insured, and background checked'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose JK Facilities?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With years of experience serving Australia, we've built our reputation on delivering 
              exceptional cleaning services that exceed expectations. Your satisfaction is our priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="stagger-item bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0f5382] to-[#198bbd] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0f5382] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Company Story */}
          <div className="slide-in-left bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  JK Facilities Pty Ltd has been proudly serving Australian homes and businesses 
                  with professional cleaning services. We understand that your time is valuable, 
                  and a clean environment is essential for your comfort and productivity.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our team of experienced professionals uses the latest equipment and eco-friendly 
                  products to deliver spotless results every time. From residential deep cleans to 
                  commercial maintenance, we handle it all with precision and care.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center scale-in">
                    <div className="text-3xl font-bold text-[#0f5382]">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center scale-in">
                    <div className="text-3xl font-bold text-green-600">5★</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center scale-in">
                    <div className="text-3xl font-bold text-[#0f5382]">24/7</div>
                    <div className="text-sm text-gray-600">Service Hours</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Professional cleaning team"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f5382]/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
