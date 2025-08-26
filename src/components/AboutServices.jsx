import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const AboutServicesSection = () => {
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

  const services = [
    {
      title: 'Autism Spectrum Disorder',
      description: 'Helping children navigate communication, behavior, and social challenges.',
      icon: '🧩'
    },
    {
      title: 'Cerebral Palsy',
      description: 'Providing therapy to improve movement, posture, and independence.',
      icon: '♿'
    },
    {
      title: 'Stuttering',
      description: 'Enhancing speech fluency and communication confidence.',
      icon: '💬'
    },
    {
      title: 'Hearing Impairment',
      description: 'Supporting speech and language development through specialized therapy.',
      icon: '👂'
    },
    {
      title: 'ADHD',
      description: 'Improving focus, impulse control, and behavior management.',
      icon: '⚡'
    },
    {
      title: 'Cognitive Impairments',
      description: 'Strengthening memory, problem-solving, and learning strategies.',
      icon: '🧠'
    },
    {
      title: 'Developmental Delays',
      description: 'Encouraging milestone achievements in physical, cognitive, and social skills.',
      icon: '🌱'
    },
    {
      title: 'Voice Therapy',
      description: 'Helping individuals improve vocal quality, pitch, and clarity.',
      icon: '🗣️'
    },
    {
      title: 'Down Syndrome',
      description: 'We build motor, communication, and daily living skills, promoting independence and better quality of life through a personalized, team-based approach.',
      icon: '💙'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
 
    

      {/* Main Services Section with scroll-triggered animations */}
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="mb-16 sm:mb-24 md:mb-32">
          {/* Header section - slides in from top */}
          <div 
            className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
              animate ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}
          >
            {/* Icon - scales up */}
            <div 
              className={`inline-flex items-center justify-center p-2 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl mb-4 sm:mb-5 transform transition-all duration-800 ease-out delay-200 ${
                animate ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}
            >
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-900" />
            </div>
            
            {/* Title - slides in from left */}
            <h2 
              className={`text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-3 sm:mb-4 transform transition-all duration-1000 ease-out delay-300 ${
                animate ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              Our Specialized Services
            </h2>
            
            {/* Yellow line - expands from center */}
            <div 
              className={`h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6 transition-all duration-800 ease-out delay-500 ${
                animate ? 'w-12 sm:w-16' : 'w-0'
              }`}
            ></div>
            
            {/* Description - slides in from right */}
            <p 
              className={`text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 transform transition-all duration-1000 ease-out delay-600 ${
                animate ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              At THRIVE, we offer comprehensive support and expert intervention 
              customized for each child's unique needs and potential.
            </p>
          </div>
          
          {/* Services grid - cards slide in from alternating sides */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative bg-white border-2 border-blue-200 hover:border-yellow-400 p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden transform transition-all duration-800 ease-out ${
                  animate ? 'translate-x-0 opacity-100' : 
                  (index % 2 === 0 ? '-translate-x-96 opacity-0' : 'translate-x-96 opacity-0')
                }`}
                style={{ 
                  transitionDelay: `${800 + index * 100}ms` 
                }}
              >
                {/* Subtle gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-yellow-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
                
                <div className="relative">
                  {/* Icon with scale animation */}
                  <div 
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 md:mb-4 transform transition-all duration-500 ease-out group-hover:scale-110 ${
                      animate ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ 
                      transitionDelay: `${1000 + index * 100}ms` 
                    }}
                  >
                    {service.icon}
                  </div>
                  
                  <h3 className="font-semibold text-blue-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2 md:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default AboutServicesSection;