import React, { useEffect, useState } from 'react';
import { Award, CheckCircle, ArrowRight } from 'lucide-react';
import speechTherapyIcon from '../assets/Speech.png';
import occupationalTherapyIcon from '../assets/Occupational Therapy.png';
import behavioralTherapyIcon from '../assets/Behavior.png';
import sensoryIntegrationIcon from '../assets/Psychological Support.png';
import sensory from '../assets/image8.jpeg';
import occupational from '../assets/occupational.png';
import behaviorimg from  '../assets/behaviorimg.jpeg'
import group from '../assets/image12.png';
import image11 from '../assets/image11.png';
import serviceImage from '../assets/Image 2.png'
import hearing from '../assets/hearing.png'
import grouptherapy from '../assets/grouptherapy.png';
import speechimg from '../assets/speechimg.png';
import audio from '../assets/audio.jpeg'
// Add this CSS to your global stylesheet or component CSS file
const cardStyles = `
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

// Move the specializedPrograms array outside the component or use it as default
const defaultSpecializedPrograms = [
    {
      title: "Speech & Language Therapy",
      color: "#4C6FFF",
      iconSrc: speechTherapyIcon,
      backImage: speechimg,
      items: [
        "Articulation & phonological disorders",
        "Language delays & disorders",
        "Social communication skills",
        "Fluency disorders",
        "Voice disorders",
        "Feeding & swallowing issues"
      ]
    },
    {
      title: "Occupational Therapy",
      color: "#10B981",
      iconSrc: occupationalTherapyIcon,
      backImage: occupational,
      items: [
        "Fine & gross motor skills",
        "Visual-motor integration",
        "Sensory processing",
        "Self-care skills",
        "Handwriting development",
        "Adaptive equipment recommendations"
      ]
    },
    {
      title: "Behavioral Therapy",
      color: "#F59E0B",
      iconSrc: behavioralTherapyIcon,
      backImage: behaviorimg,
      items: [
        "Applied behavior analysis (ABA)",
        "Positive behavior support",
        "Cognitive behavioral strategies",
        "Self-regulation skills",
        "Parent training programs",
        "Social skills development"
      ]
    },
     {
    title: "Group Therapy",
    color: "#EF4444",
    iconSrc: grouptherapy,
    backImage: group, 
    items: [
      "Social and pragmatic skills",
      "Thematic groups",
      "Play Therapy groups",
      "Activity groups",
      "Parent-child interactive groups",
      "Emotional regulation groups",
      "Support groups"
    ]
  },
    {
      title: "Sensory Integration",
      color: "#EC4899",
      iconSrc: sensoryIntegrationIcon,
      backImage: sensory,
      items: [
        "Sensory processing assessment",
        "Vestibular & proprioceptive work",
        "Tactile defensiveness treatment",
        "Sensory diet development",
        "Environmental modifications",
        "Home program creation"
      ]
    },
    {
      title: "Audiological Services",
      color: "#8B5CF6",
      iconSrc: hearing,
      backImage: audio,
      items: [
        "Hearing evaluation",
        "Hearing aid fitting and programming",
        "Therapy for Hearing aid users",
        "Therapy for Cochlear implant users",
        "Tinnitus Retraining Therapy",
        "Providing Counselling and regular follow ups"
      ]
    }
  ];

// Your component - use default value in destructuring
const SpecializedTherapySection = ({ 
  specializedPrograms = defaultSpecializedPrograms 
}) => {
  // Manage state internally
  const [flippedCards, setFlippedCards] = useState(Array(specializedPrograms.length).fill(false));

  const handleCardClick = (index) => {
    setFlippedCards(prev => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  // Early return if no programs
  if (!specializedPrograms || specializedPrograms.length === 0) {
    return (
      <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32 p-4">
        <div className="text-center">
          <p className="text-gray-500">No specialized programs available.</p>
        </div>
      </div>
    );
  }

  // Auto-flip effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Flip all cards
      setFlippedCards(prev => prev.map(() => true));
      
      // Flip back after 3 seconds
      setTimeout(() => {
        setFlippedCards(prev => prev.map(() => false));
      }, 3000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Add styles to head or use a CSS file */}
      <style dangerouslySetInnerHTML={{ __html: cardStyles }} />
      
      {/* Specialized Therapy Programs Section */}
      <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32 p-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center p-1.5 sm:p-2 md:p-3 bg-[#F0F9FF] rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-5">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-[#1B3A63]" />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B3A63] mb-2 sm:mb-3 md:mb-4">
            Specialized Therapy Programs
          </h2>
          <div className="h-1 w-10 sm:w-12 md:w-16 bg-[#FBBF24] mx-auto mb-3 sm:mb-4 md:mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">
            Our expert therapists deliver targeted interventions designed to address every one's specific needs.
          </p>
        </div>

        {/* Grid Layout: 2 rows with 3 cards each */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {specializedPrograms.slice(0, 3).map((program, index) => (
              <div
                key={index}
                className="group relative h-96 sm:h-[26rem] md:h-[28rem] perspective-1000 cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards[index] ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute top-4 right-4 text-xs text-gray-400 z-10">
                      Click to flip
                    </div>
                    <div
                      className="p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-300"
                      style={{ backgroundColor: program.color }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 mt-4">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center overflow-hidden p-1.5 sm:p-2 md:p-2.5">
                          <img
                            src={program.iconSrc}
                            alt={`${program.title} Icon`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">{program.title}</h3>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                        {program.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3 md:gap-4">
                            <div className="mt-0.5 sm:mt-1">
                              <CheckCircle 
                                className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" 
                                style={{ color: program.color }}
                              />
                            </div>
                            <span className="text-gray-700 text-xs sm:text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 sm:mt-8 md:mt-10 mb-6">
                        <button
                          className="flex items-center text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg transition-all duration-300 font-medium"
                          style={{
                            backgroundColor: `${program.color}20`,
                            color: program.color
                          }}
                        >
                          Learn more
                          <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <div className="absolute top-4 right-4 text-xs text-white/70 z-10">
                      Click to flip back
                    </div>
                    <div className="relative h-full">
                      <img
                        src={program.backImage}
                        alt={`${program.title} therapy session`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2">
                          {program.title}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base">
                          Professional therapy session in progress
                        </p>
                        <div className="mt-3">
                          <span 
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: program.color }}
                          >
                            Expert Care
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {specializedPrograms.slice(3).map((program, index) => {
              const actualIndex = index + 3;
              return (
                <div
                  key={actualIndex}
                  className="group relative h-96 sm:h-[26rem] md:h-[28rem] perspective-1000 cursor-pointer"
                  onClick={() => handleCardClick(actualIndex)}
                >
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                      flippedCards[actualIndex] ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="absolute top-4 right-4 text-xs text-gray-400 z-10">
                        Click to flip
                      </div>
                      <div
                        className="p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-300"
                        style={{ backgroundColor: program.color }}
                      >
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 mt-4">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center overflow-hidden p-1.5 sm:p-2 md:p-2.5">
                            <img
                              src={program.iconSrc}
                              alt={`${program.title} Icon`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">{program.title}</h3>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 md:p-6">
                        <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                          {program.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                              <div className="mt-0.5 sm:mt-1">
                                <CheckCircle 
                                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" 
                                  style={{ color: program.color }}
                                />
                              </div>
                              <span className="text-gray-700 text-xs sm:text-sm md:text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                      <div className="absolute top-4 right-4 text-xs text-white/70 z-10">
                        Click to flip back
                      </div>
                      <div className="relative h-full">
                        <img
                          src={program.backImage}
                          alt={`${program.title} therapy session`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2">
                            {program.title}
                          </h3>
                          <p className="text-white/90 text-sm sm:text-base">
                            Professional therapy session in progress
                          </p>
                          <div className="mt-3">
                            <span 
                              className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                              style={{ backgroundColor: program.color }}
                            >
                              Expert Care
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedTherapySection;