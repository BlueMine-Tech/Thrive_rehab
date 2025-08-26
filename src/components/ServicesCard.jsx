import React, { useState, useEffect, useRef } from 'react';
import puzzle from '../assets/puzzle.png'

export default function ServiceCard() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after animation triggers
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How We Support You
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We provide comprehensive care through a structured methodology that ensures everyone receives the support they need to flourish.
          </p>
        </div>

        {/* Main content area with animated image */}
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="text-center w-full">
            <div 
              ref={imageRef}
              className={`w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <img 
                src={puzzle} 
                alt="Puzzle Image" 
                className="w-full h-auto rounded mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}