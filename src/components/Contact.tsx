import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: 'Dinesh Chaudhary - 0470 373 719',
      link: 'tel:0470373719'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@jkfacilities.net',
      link: 'mailto:info@jkfacilities.net'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      content: '24 hours a day, 7 days a week',
      link: null
    },
    {
      icon: MapPin,
      title: 'Service Area',
      content: 'All major cities across Australia',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience professional cleaning? Contact us today for a free, 
              no-obligation quote tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:scale-105"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:scale-105"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:scale-105"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:scale-105"
                    >
                      <option value="">Select a service</option>
                      <option value="end-of-lease">End of Lease Clean</option>
                      <option value="commercial">Commercial Deep Clean</option>
                      <option value="builders">Builders Clean</option>
                      <option value="carpet">Carpet Steam Clean</option>
                      <option value="floor-pressure">Floor Scrubbing & High-Pressure</option>
                      <option value="deep-clean">Deep Clean</option>
                      <option value="windows">Windows Clean</option>
                      <option value="oven">Oven Clean</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 focus:scale-105 resize-none"
                    placeholder="Tell us about your property size, specific requirements, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 shadow-lg group"
                >
                  <Send className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="group-hover:animate-pulse">Send My Quote Request</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="slide-in-right">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-100 mb-8">
                  Get in touch with us today! We're here to answer your questions and provide 
                  you with the best cleaning solutions.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 hover:bg-white/10 p-3 rounded-lg transition-all duration-300 cursor-pointer group">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                        <info.icon className="w-5 h-5 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-blue-100 hover:text-white transition-colors group-hover:underline"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-blue-100">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  <h4 className="font-semibold mb-2">Emergency & After Hours</h4>
                  <p className="text-blue-100 text-sm">
                    Need urgent cleaning services? We offer 24/7 emergency cleaning for 
                    water damage, post-event cleanup, and urgent commercial needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;