import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Sydney, NSW',
      rating: 5,
      text: 'JK Facilities exceeded our expectations! Their end-of-lease cleaning was so thorough that we got our full bond back. The team was professional, punctual, and incredibly detail-oriented.',
      service: 'End of Lease Clean'
    },
    {
      name: 'David Chen',
      location: 'Melbourne, VIC',
      rating: 5,
      text: 'Outstanding commercial cleaning service! Our office has never looked better. The team works efficiently and always maintains the highest standards. Highly recommend for any business.',
      service: 'Commercial Deep Clean'
    },
    {
      name: 'Emma Thompson',
      location: 'Brisbane, QLD',
      rating: 5,
      text: 'After our home renovation, JK Facilities did an amazing builders clean. They removed all the dust and debris, making our new space spotless. Fantastic attention to detail!',
      service: 'Builders Clean'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say 
              about our professional cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="stagger-item bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-200 mr-2 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#0f5382'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium" style={{color: '#0f5382'}}>{testimonial.service}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" 
                          alt="Google" 
                          className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="text-xs text-gray-500">Verified Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto hover:shadow-2xl transition-shadow duration-500 scale-in">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current hover:animate-spin" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              </div>
              <p className="text-gray-600">
                Based on <span className="font-semibold">127+ reviews</span> across Google and Facebook
              </p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" 
                  alt="Google Reviews" 
                  className="w-6 h-6 hover:scale-125 transition-transform duration-300"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" 
                  alt="Facebook Reviews" 
                  className="w-6 h-6 hover:scale-125 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;