import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import heroimg from '../assets/heroimg.png' 

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = "We empower Children and Adults with special needs"
  const typingSpeed = 80 // milliseconds per character
  
  useEffect(() => {
    // Typing animation
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, typingSpeed)
      
      return () => clearTimeout(timer)
    } else {
      // Hide cursor after typing is complete
      setTimeout(() => setShowCursor(false), 1000)
    }
  }, [currentIndex, fullText])
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="transform translate-x-0 opacity-100 animate-slide-in-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3A63] leading-tight min-h-[120px] sm:min-h-[140px] lg:min-h-[180px]">
            {displayedText.split(' ').map((word, index) => {
              const isHighlighted = word === 'Children' || word === 'Adults'
              return (
                <span key={index}>
                  <span className={isHighlighted ? 'text-[#FBBF24]' : ''}>
                    {word}
                  </span>
                  {index < displayedText.split(' ').length - 1 && ' '}
                </span>
              )
            })}
            {showCursor && currentIndex <= fullText.length && (
              <span className="animate-pulse text-[#1B3A63]">|</span>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 opacity-0 animate-fade-in-up animation-delay-2">
            At THRIVE Rehab Centre, we empower everyone  to grow, learn, and connect with the world through compassionate care and expert support.
          </p>

          <div className="opacity-0 animate-fade-in-up animation-delay-3">
            <Link to="/contact">
              <button className="mt-8 bg-[#1B3A63] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#142a4b] hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:shadow-lg">
                Book an Appointment <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image/Illustration */}
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96  rounded-2xl flex items-center justify-center text-[#1B3A63] font-semibold text-xl transform translate-x-0 opacity-100 animate-slide-in-right">
          {/* Replace this with actual image later */}

            <img src={heroimg} alt="Hero Illustration" className="object-cover rounded-2xl" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slide-in-right {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fade-in-up {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-2 {
          animation-delay: 2s;
        }
        
        .animation-delay-3 {
          animation-delay: 2.5s;
        }
      `}</style>
    </section>
  )
}