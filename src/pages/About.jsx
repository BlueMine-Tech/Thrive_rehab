import { CheckCircle, Users, Heart, Target, Sparkles, Award, ArrowRight, MapPin, Book, Star, PhoneCall, Mail, Clock, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import VisionSection from '../components/OurVision'
import { Link } from 'react-router-dom'
import puzzle from '../assets/puzzle.jpeg'
import development from '../assets/development.png'
import down from '../assets/down.png'
import adhd from '../assets/adhd.png';
import AboutServicesSection from '../components/AboutServices'

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Fixed animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-24 w-24 rounded-full bg-[#10B981] opacity-[0.03] transform -translate-x-1/2 -translate-y-1/2" 
             style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)` }}></div>
        <div className="absolute top-2/3 left-3/4 h-36 w-36 rounded-full bg-[#FBBF24] opacity-[0.03] transform -translate-x-1/2 -translate-y-1/2"
             style={{ transform: `translate(-50%, -50%) translateY(${scrollY * -0.05}px)` }}></div>
        <div className="absolute top-1/2 right-1/6 h-48 w-48 rounded-full bg-[#1B3A63] opacity-[0.02] transform -translate-x-1/2 -translate-y-1/2"
             style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.07}px)` }}></div>
      </div>

      {/* Main content */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header with Parallax Effect */}
          <div className="relative text-center mb-16 sm:mb-24 md:mb-32">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <div className="relative h-24">
                <div className="absolute top-0 left-1/4 h-16 w-16 rounded-full bg-[#10B981] opacity-10"></div>
                <div className="absolute top-10 left-1/3 h-8 w-8 rounded-full bg-[#FBBF24] opacity-20"></div>
                <div className="absolute top-4 right-1/3 h-12 w-12 rounded-full bg-[#1B3A63] opacity-10"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#F0F9FF] rounded-full mb-4 sm:mb-6 shadow-sm">
                <span className="text-[#1B3A63] font-medium text-xs sm:text-sm">Our Story</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3A63] mb-4 sm:mb-6 tracking-tight">
                About <span className="text-[#10B981]">THRIVE</span>
              </h1>
              
              <div className="h-1 sm:h-1.5 w-12 sm:w-16 md:w-24 bg-orange-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
                A place where every child thrives! Our mission is to empower children with special needs 
                by providing them with the support they need to learn, communicate, and socialize.
              </p>
              
              <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[#FBBF24]" />
                  <span className="text-gray-700 text-sm">Expert Care</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-[#10B981]" />
                  <span className="text-gray-700 text-sm">Compassionate Support</span>
                </div>
              </div>
            </div>
          </div>

<VisionSection/>


<AboutServicesSection/>


          {/* Call to Action Section with 3D Depth */}
          <div className="bg-gradient-to-r from-[#1B3A63] to-[#2A4A7F] p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white opacity-5"></div>
              <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-white opacity-5"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white opacity-5"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-white bg-opacity-10 rounded-full mb-6 sm:mb-8">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-[#FBBF24]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Join Us in Our Mission</h3>
              <p className="text-gray-100 mb-6 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
                At THRIVE, we believe that every child deserves the opportunity to flourish. Join us in our mission 
                to create a future without barriers for children with special needs!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-[#1B3A63] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-medium shadow-lg hover:bg-[#FBBF24] hover:text-white transition-all duration-300 text-sm sm:text-base">
                  Get Involved
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}