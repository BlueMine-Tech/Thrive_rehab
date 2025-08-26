import React, { useState, useEffect, useRef } from 'react';
import { Target, CheckCircle } from 'lucide-react';

const VisionSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when section comes into view
            setAnimate(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the section is fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const visionItems = [
    'Learn and develop essential life skills',
    'Communicate effectively with confidence',
    'Socialize and integrate into society',
    'Thrive in a supportive and accessible environment',
    'Build confidence and independence through personalized support',
    'Develop emotional resilience and self-advocacy skills'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
  

      {/* Main Vision Section with scroll-triggered animations */}
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="mb-16 sm:mb-24 md:mb-32 relative">
          {/* Background circles - slide in from corners */}
          <div 
            className={`absolute -top-10 -left-10 h-20 w-20 bg-yellow-400 opacity-10 rounded-full hidden lg:block transform transition-all duration-1000 ease-out ${
              animate ? 'translate-x-0 translate-y-0 scale-100' : '-translate-x-20 -translate-y-20 scale-0'
            }`}
          ></div>
          <div 
            className={`absolute -bottom-10 -right-10 h-24 w-24 bg-green-500 opacity-10 rounded-full hidden lg:block transform transition-all duration-1000 ease-out delay-200 ${
              animate ? 'translate-x-0 translate-y-0 scale-100' : 'translate-x-20 translate-y-20 scale-0'
            }`}
          ></div>
          
          {/* Main container - slides in from left */}
          <div 
            className={`bg-white backdrop-blur-lg bg-opacity-80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden transform transition-all duration-1200 ease-out ${
              animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            {/* Gradient overlay - slides in from top right */}
            <div 
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 opacity-70 rounded-bl-full transform transition-all duration-800 ease-out delay-500 ${
                animate ? 'translate-x-0 translate-y-0' : 'translate-x-32 -translate-y-32'
              }`}
            ></div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 lg:gap-16">
              {/* Icon section - slides in from left */}
              <div 
                className={`flex-shrink-0 mx-auto md:mx-0 transform transition-all duration-1000 ease-out delay-300 ${
                  animate ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'
                }`}
              >
                <div className="bg-blue-50 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm inline-flex items-center justify-center transform hover:scale-110 hover:rotate-3 transition-all duration-300 hover:shadow-lg">
                  <Target className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-900" />
                </div>
              </div>
              
              {/* Content section - slides in from right */}
              <div 
                className={`flex-grow transform transition-all duration-1000 ease-out delay-600 ${
                  animate ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'
                }`}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-6 text-center md:text-left">
                  Our Vision & Mission
                </h2>
                <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                  To thrive means to grow, develop, and succeed despite challenges. At THRIVE, we nurture each individual's unique abilities
                  and guide them toward a fulfilling life where they can confidently engage with the world around them.
                </p>
                
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4 sm:mb-6 text-center md:text-left">
                  We strive to help everyone with special needs:
                </h3>
                
                {/* Vision items - alternating slide directions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {visionItems.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-sm group hover:shadow-md hover:bg-white hover:scale-105 hover:-translate-y-1 transform transition-all duration-800 ease-out ${
                        animate ? 'translate-x-0 opacity-100' : 
                        (index % 2 === 0 ? '-translate-x-96 opacity-0' : 'translate-x-96 opacity-0')
                      }`}
                      style={{ 
                        transitionDelay: `${900 + index * 100}ms` 
                      }}
                    >
                      <div className="mr-3 sm:mr-4 mt-1">
                        <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default VisionSection;