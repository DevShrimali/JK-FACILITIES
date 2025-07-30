import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Basic Clean',
      price: '$99',
      description: 'Perfect for regular maintenance cleaning',
      features: [
        'Kitchen cleaning',
        'Bathroom sanitization',
        'Vacuuming & mopping',
        'Dusting surfaces',
        'Trash removal'
      ],
      popular: false
    },
    {
      name: 'Deep Clean',
      price: '$199',
      description: 'Comprehensive cleaning for thorough results',
      features: [
        'Everything in Basic Clean',
        'Inside appliances',
        'Light fixtures',
        'Baseboards & window sills',
        'Cabinet fronts',
        'Detailed bathroom clean'
      ],
      popular: true
    },
    {
      name: 'Premium Service',
      price: '$299',
      description: 'Complete cleaning solution with extras',
      features: [
        'Everything in Deep Clean',
        'Inside refrigerator',
        'Oven deep clean',
        'Window cleaning',
        'Carpet spot treatment',
        'Garage/outdoor areas'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that fits your needs. All prices are starting rates - 
              contact us for a customized quote based on your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`fade-in relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? 'border-2 border-[#0f5382]' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#0f5382] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2" style={{color: '#0f5382'}}>{pkg.price}</div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Pricing;
