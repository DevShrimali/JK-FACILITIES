import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      before: '/cleaning/1before.jpg',
      after: '/cleaning/1after.jpg',
      title: 'Kitchen Deep Clean',
      description: 'Complete kitchen transformation with appliance cleaning'
    },
    {
      before: '/cleaning/2before.jpg',
      after: '/cleaning/2after.jpg',
      title: 'Stove Deep Clean',
      description: 'Intensive stove cleaning to remove grease and restore shine'
    },
    {
      before: '/cleaning/3before.jpg',
      after: '/cleaning/3after.jpg',
      title: 'Carpet Steam Cleaning',
      description: 'Deep carpet cleaning with stain removal'
    },
    {
      before: '/cleaning/4before.jpg',
      after: '/cleaning/4after.jpg',
      title: 'Bedroom Deep Clean',
      description: 'Thorough bedroom refresh with dusting, vacuuming, and linen change'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Before & After Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformation power of our professional cleaning services.
              These real results showcase the quality and attention to detail we bring to every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="stagger-item bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="grid grid-cols-2 h-64">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt={`${item.title} - Before`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium group-hover:animate-pulse">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={`${item.title} - After`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium group-hover:animate-pulse">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-6 group-hover:bg-white transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#0f5382'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="max-w-4xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <img
                      src={galleryImages[selectedImage].before}
                      alt="Before"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={galleryImages[selectedImage].after}
                      alt="After"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">
                    {galleryImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
