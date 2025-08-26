import React, { useState } from 'react';
import { CheckCircle, BrainCircuit, ChevronDown, ChevronUp } from 'lucide-react';

import multidisciplinaryIcon from '../assets/Multi.png';
import clientCenteredIcon from '../assets/individual.png';
import groupTherapyIcon from '../assets/Group.png';


export default function LightModernServicesSection() {
  // State to track which card's details are visible
  const [visibleCard, setVisibleCard] = useState(null);

  // Toggle visibility of a card's details
  const toggleCardDetails = (cardIndex) => {
    if (visibleCard === cardIndex) {
      setVisibleCard(null);
    } else {
      setVisibleCard(cardIndex);
    }
  };

  // Service card data
  const servicesData = [
    {
      title: "Multidisciplinary Interventional Care",
      icon: multidisciplinaryIcon,
      iconAlt: "Multidisciplinary Care Icon",
      description: "A collaborative approach bringing specialists together from different disciplines to provide comprehensive care.",
      points: [
        "Assessment and Identification",
        "Team composition",
        "Goal setting",
        "Interventional strategies",
        "Implementation of activities",
        "Monitoring",
        "Follow up",
        "Support and Counselling"
      ]
    },
    {
      title: "Individualized Client-Centered Approach",
      icon: clientCenteredIcon,
      iconAlt: "Client-Centered Approach Icon",
      description: "Tailoring therapy to each individual's unique needs, strengths, and preferences to enhance engagement and progress.",
      points: [
        "Comprehensive Assessment",
        "Personalized Goal Setting",
        "Active Client Participation",
        "Strengths-Based Approach",
        "Flexible & Adaptive Interventions",
        "Holistic Support",
        "Transparent & Supportive Communication"
      ]
    },
    {
      title: "Thematic Group Therapy Approaches",
      icon: groupTherapyIcon,
      iconAlt: "Group Therapy Icon",
      description: "Structured group sessions that foster interaction while focusing on specific developmental goals.",
      points: [
        "Motivation",
        "Emphasize in gestalt language development",
        "Developing social skills",
        "Develop Pragmatics",
        "Regulate emotions",
        "Theme based learning environment"
      ]
    }
  ];

  return (
    <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32 relative">
      
      <div className="absolute -bottom-10 -left-10 h-20 w-20 md:h-24 md:w-24 bg-[#FBBF24] opacity-5 rounded-full hidden lg:block"></div>
      
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <div className="inline-flex items-center justify-center p-1.5 sm:p-2 md:p-3 bg-[#F0F9FF] rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-5">
          <BrainCircuit className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-[#1B3A63]" />
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B3A63] mb-2 sm:mb-3 md:mb-4">Innovative Treatment Approaches</h2>
        <div className="h-1 w-10 sm:w-12 md:w-16 bg-[#FBBF24] mx-auto mb-3 sm:mb-4 md:mb-6"></div>
        <p className="text-gray-700 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">
          We employ cutting-edge therapeutic approaches that are evidence-based and tailored to maximize each individual's development.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {servicesData.map((service, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-bl from-[#b8ecbe] to-[#85d7be] opacity-70 rounded-bl-full"></div>

            
            {/* Icon Image */}
            <div className="flex justify-center mb-4">
              <img 
                src={service.icon} 
                alt={service.iconAlt} 
                className="h-20 w-20 md:h-24 md:w-24 object-contain"
              />
            </div>
            
            {/* Title and Toggle Button */}
            <div 
              className="flex justify-between items-center cursor-pointer group"
              onClick={() => toggleCardDetails(index)}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1B3A63] mb-3 sm:mb-4 text-center flex-1">
                {service.title}
              </h3>
              <div className="text-[#1B3A63] group-hover:text-[#10B981] transition-colors">
                {visibleCard === index ? 
                  <ChevronUp className="h-5 w-5" /> : 
                  <ChevronDown className="h-5 w-5" />
                }
              </div>
            </div>
            
            {/* Description always visible */}
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5">
              {service.description}
            </p>
            
            {/* Points that toggle visibility */}
            {visibleCard === index && (
              <ul className="space-y-1.5 sm:space-y-2">
                {service.points.map((item, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-1.5 sm:gap-2">
                    <div className="mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#10B981]" />
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}