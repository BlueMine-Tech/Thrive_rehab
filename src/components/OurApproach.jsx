import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, CheckCircle, ArrowRight } from 'lucide-react'

import approach from '../assets/approach.png';
const OurApproach = () => {
  return (
    <>

  {/* Image Section - With responsive height */}
          <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Image */}
              <div className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-full order-2 lg:order-1">
                <img
                  src={approach}
                  alt="Child receiving therapy"
                  className="w-full h-full object-cover lg:rounded-l-3xl"
                />
              </div>
              
              {/* Right Column */}
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col justify-center order-1 lg:order-2">
                <div className="inline-flex items-center justify-center p-1.5 sm:p-2 md:p-3 bg-[#F0F9FF] rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-6 w-fit">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#1B3A63]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B3A63] mb-3 sm:mb-4 md:mb-6">Our Approach</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                  At THRIVE, we provide evidence-based interventions delivered by specialized professionals in a supportive, 
                  child-friendly environment. Our multidisciplinary approach ensures comprehensive care that addresses all 
                  aspects of every one development.
                </p>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {[
                    "Expert team of specialized therapists",
                    "Personalized care plans for every individual",
                    "State-of-the-art therapeutic equipment",
                    "Supportive and nurturing environment",
                    "Regular progress updates and consultations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                      <div className="mt-0.5 sm:mt-1">
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#10B981]" />
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link to="/contact">
  <button className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 bg-[#1B3A63] text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg md:rounded-xl shadow-md hover:bg-[#142a4b] transition-all duration-300 w-fit text-xs sm:text-sm md:text-base">
    Schedule an Assessment <ArrowRight size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
  </button>
</Link>
              </div>
            </div>
          </div>
              </>

  )
}

export default OurApproach
