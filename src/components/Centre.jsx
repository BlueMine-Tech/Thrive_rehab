import React from 'react';
import { MapPin, PhoneCall, Mail, ArrowRight } from 'lucide-react';
import centerImage from '../assets/center image.jpg';
import { Link } from 'react-router-dom';

const CenterLocation = ({ customImage, onScheduleVisit = () => {} }) => {
  // Use the imported image by default, but allow overriding via props
  const displayImage = customImage || centerImage;
  
  return (
    <div className="mb-16 sm:mb-24 md:mb-32 bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Column */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
          <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl mb-4 sm:mb-6 w-fit">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">Our Center</h3>
          <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
            Our state-of-the-art facility is designed to provide a safe, welcoming, and stimulating
            environment with all abilities. We've created spaces that support learning, therapy,
            play, and growth at every step of your journey.
          </p>

          {/* Address Info */}
          <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-7 w-7 sm:h-8 sm:w-8 bg-slate-50 rounded-full flex items-center justify-center">
                <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-900" />
              </div>
              <span className="text-gray-700 text-xs sm:text-sm">8248058950</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-7 w-7 sm:h-8 sm:w-8 bg-slate-50 rounded-full flex items-center justify-center">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-900" />
              </div>
              <span className="text-gray-700 text-xs sm:text-sm">thrivetherapyandrehab@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-7 w-7 sm:h-8 sm:w-8 bg-slate-50 rounded-full flex items-center justify-center">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-900" />
              </div>
              <span className="text-gray-700 text-xs sm:text-sm">7A, ground floor, P Block, 18th Street, 6th avenue Anna Nagar, Chennai-600040</span>
            </div>
          </div>

          {/* CTA Button */}
         <Link to="/contact">
          <button 
            onClick={onScheduleVisit}
            className="flex items-center justify-center gap-1.5 sm:gap-2 bg-blue-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:bg-blue-950 transition-all duration-300 w-fit text-sm sm:text-base"
          >
            Schedule a Visit <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
         </Link>        </div>

        {/* Right Column - Responsive Image */}
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-full">
          <img
            src={displayImage}
            alt="Our Rehabilitation Center"
            className="w-full h-full object-cover lg:rounded-r-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CenterLocation;