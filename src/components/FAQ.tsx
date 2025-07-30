import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you bring your own cleaning products and equipment?',
      answer: 'Yes, we bring all necessary cleaning products and professional-grade equipment. We use eco-friendly, non-toxic products that are safe for your family and pets. If you have specific product preferences or allergies, please let us know and we can accommodate your needs.'
    },
    {
      question: 'Are you insured and do you do background checks?',
      answer: 'Absolutely! All our staff are fully insured, bonded, and undergo comprehensive background checks including police clearances. We take security and safety seriously, so you can have complete peace of mind when we\'re in your home or business.'
    },
    {
      question: 'Do you offer same-day cleaning services?',
      answer: 'Yes, we offer same-day service subject to availability. We understand that urgent cleaning needs can arise, so we do our best to accommodate last-minute requests. Contact us as early as possible for the best chance of same-day scheduling.'
    },
    {
      question: 'What is your satisfaction guarantee policy?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely satisfied with our service, we\'ll return within 24 hours to re-clean any areas of concern at no additional cost. Your happiness with our work is our top priority.'
    },
    {
      question: 'How do you calculate pricing for cleaning services?',
      answer: 'Our pricing is based on several factors including property size, service type, frequency, and specific requirements. We provide transparent, upfront pricing with no hidden fees. Contact us for a free, personalized quote based on your exact needs.'
    },
    {
      question: 'Can you clean while I\'m away from home?',
      answer: 'Yes, many of our clients prefer to have cleaning done while they\'re at work or away. We can arrange secure key collection or work with your property manager. All our staff are trusted, insured, and background-checked for your security.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers. Here are the most common questions 
              our customers ask about our cleaning services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="stagger-item bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-102"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4 transition-colors duration-300" style={{'--hover-color': '#0f5382'}} onMouseEnter={(e) => e.currentTarget.style.color = '#0f5382'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{color: '#0f5382'}} />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:scale-110 transition-all duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#0f5382'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <div className="rounded-xl p-8 text-white transition-colors duration-500 scale-in" style={{backgroundColor: '#0f5382'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4a75'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0f5382'}>
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6">
                Can't find the answer you're looking for? Our friendly team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <a
                  href="mailto:info@jkfacilities.net"
                  className="border-2 border-white text-white hover:bg-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group" onMouseEnter={(e) => e.currentTarget.style.color = '#0f5382'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  <span className="group-hover:animate-pulse">Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;