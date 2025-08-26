import React, { useState, useEffect,useRef } from 'react';

import image3 from '../assets/Image 3.png';
import image5 from '../assets/Image 5.png';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.jpeg';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import image13 from '../assets/image13.png';
import image14 from '../assets/image14.png';
import image15 from '../assets/image15.png';
import image16 from '../assets/image16.png';

const galleryImages = [
 
  { id: 2, src: image3, alt: "THRIVE Moment" },

  { id: 4, src: image5, alt: "THRIVE Moment" },
  { id: 5, src: image6, alt: "THRIVE Moment" },
  { id: 6, src: image7, alt: "THRIVE Moment" },
  { id: 7, src: image8, alt: "THRIVE Moment" },
   { id: 1, src: image15, alt: "THRIVE Moment" },
  { id: 8, src: image10, alt: "THRIVE Moment" },
  { id: 9, src: image11, alt: "THRIVE Moment" },
 { id: 1, src: image16, alt: "THRIVE Moment" },
  { id: 11, src: image13, alt: "THRIVE Moment" },
  { id: 12, src: image14, alt: "THRIVE Moment" },
];

export default function ImageGallery() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(new Set());
  const imageRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];
    
    imageRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleImages(prev => new Set([...prev, index]));
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '50px 0px -50px 0px'
          }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setLightboxImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === lightboxImage.id);
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setLightboxImage(galleryImages[prevIndex]);
  };

  const getAnimationClass = (index) => {
    const isVisible = visibleImages.has(index);
    const animationType = index % 4; // Different animation types
    
    if (!isVisible) {
      switch (animationType) {
        case 0:
          return 'translate-y-12 opacity-0 scale-95';
        case 1:
          return '-translate-y-12 opacity-0 scale-95';
        case 2:
          return 'translate-x-12 opacity-0 rotate-3';
        case 3:
          return '-translate-x-12 opacity-0 rotate-3';
        default:
          return 'translate-y-12 opacity-0 scale-95';
      }
    }
    
    return 'translate-y-0 translate-x-0 opacity-100 scale-100 rotate-0';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-8">
      {/* Header with scroll animation */}
      <div className="text-center mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium tracking-wider mb-3 animate-pulse">
          OUR MOMENTS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
          Gallery
        </h2>
        <div className="w-24 h-1 bg-blue-700 mx-auto mb-6 transform scale-x-0 animate-scale-x"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Glimpses of the wonderful memories and impactful events at <span className="text-blue-800 font-semibold">THRIVE</span>.
        </p>
      </div>

      {/* Masonry Grid Layout with Scroll Animations */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              ref={el => imageRefs.current[index] = el}
              className={`break-inside-avoid mb-4 group cursor-pointer transform transition-all duration-700 ease-out ${getAnimationClass(index)}`}
              style={{ 
                transitionDelay: `${(index % 4) * 100}ms`
              }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Overlay with enhanced animations */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300 group-hover:rotate-12">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8 text-white animate-pulse" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Animated particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>

                {/* Floating Number with bounce animation */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:animate-bounce">
                  {image.id}
                </div>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with enhanced animations */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-screen w-full animate-scale-in" onClick={e => e.stopPropagation()}>
            {/* Main Image */}
            <div className="relative flex items-center justify-center h-full">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"
              />
            </div>
            
            {/* Close Button with rotation animation */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group hover:rotate-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons with enhanced hover effects */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter with slide animation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full animate-slide-up">
              <span className="text-white text-sm font-medium">
                {galleryImages.findIndex(img => img.id === lightboxImage.id) + 1} / {galleryImages.length}
              </span>
            </div>

            {/* Thumbnail Navigation with stagger animation */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-xs overflow-x-auto">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setLightboxImage(img)}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-110 ${
                    img.id === lightboxImage.id 
                      ? 'ring-2 ring-white scale-110 animate-pulse' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    animationDelay: `${idx * 50}ms`
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s both;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}