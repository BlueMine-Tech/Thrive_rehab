import { CheckCircle, Users, Heart, Target, Notebook,AudioLines, Award, ArrowRight, MapPin, Book, Star, PhoneCall, Mail, Clock, Zap, BarChart, Bookmark, BrainCircuit, Calendar,Phone ,TrendingUp,FileText} from 'lucide-react'
import { useState, useEffect } from 'react'

import MapView from '../components/MapView'



import SpecializedTherapySection from '../components/SpecializedTherapySection'
import ServiceCard from '../components/ServicesCard'
export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const phoneNumber = "8248058950";
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    handleResize()
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])



  

   const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
    
    const handleCall = () => {
      window.location.href = `tel:${phoneNumber}`;
    };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Fixed animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#10B981] opacity-[0.03] transform -translate-x-1/2 -translate-y-1/2" 
             style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)` }}></div>
        <div className="absolute top-2/3 left-3/4 h-24 w-24 sm:h-36 sm:w-36 rounded-full bg-[#FBBF24] opacity-[0.03] transform -translate-x-1/2 -translate-y-1/2"
             style={{ transform: `translate(-50%, -50%) translateY(${scrollY * -0.05}px)` }}></div>
        <div className="absolute top-1/2 right-1/6 h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-[#1B3A63] opacity-[0.02] transform -translate-x-1/2 -translate-y-1/2"
             style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.07}px)` }}></div>
      </div>

      {/* Main content */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header with Parallax Effect */}
          <div className="relative text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              <div className="relative h-16 sm:h-24">
                <div className="absolute top-0 left-1/4 h-10 w-10 sm:h-16 sm:w-16 rounded-full bg-[#10B981] opacity-10"></div>
                <div className="absolute top-6 sm:top-10 left-1/3 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-[#FBBF24] opacity-20"></div>
                <div className="absolute top-2 sm:top-4 right-1/3 h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#1B3A63] opacity-10"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-[#F0F9FF] rounded-full mb-3 sm:mb-4 md:mb-6 shadow-sm">
                <span className="text-[#1B3A63] font-medium text-xs sm:text-sm">How We Help</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1B3A63] mb-3 sm:mb-4 md:mb-6 tracking-tight">
                Our <span className="text-[#10B981]">Services</span>
              </h1>
              
              <div className="h-1 sm:h-1.5 w-12 sm:w-16 md:w-24 bg-orange-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>

              
              <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-1 sm:px-2">
                Comprehensive therapeutic services tailored to help individuals with special needs develop essential skills and thrive in all areas of life.
              </p>
              
              <div className="mt-6 sm:mt-8 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#FBBF24]" />
                  <span className="text-gray-700 text-xs sm:text-sm">Specialized Care</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#10B981]" />
                  <span className="text-gray-700 text-xs sm:text-sm">Personalized Approach</span>
                </div>
              </div>
            </div>
          </div>

<ServiceCard/>
<SpecializedTherapySection/>
          


          {/* Getting Started Steps Section */}
    <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <div className="inline-flex items-center justify-center p-1.5 sm:p-2 md:p-3 bg-[#F0F9FF] rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-5">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-[#1B3A63]" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B3A63] mb-2 sm:mb-3 md:mb-4">Getting Started</h2>
              <div className="h-1 w-10 sm:w-12 md:w-16 bg-[#FBBF24] mx-auto mb-3 sm:mb-4 md:mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">
                Begin your journey with THRIVE with our simple onboarding process designed to understand your child's needs.
              </p>
            </div>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
                {[
                  {
                    step: 1,
                    title: "Initial Consultation",
                    description: "Schedule a meeting with our team to discuss your individual's needs and learn about our services.",
                    icon: <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />,
                    position: "right"
                  },
                  {
                    step: 2,
                    title: "Comprehensive Assessment",
                    description: "Our specialists will conduct evaluations to understand your individual's strengths and challenges.",
                    icon: <Bookmark className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />,
                    position: "left"
                  },
                  {
                    step: 3,
                    title: "Personalized Plan",
                    description: "Receive a detailed intervention strategy tailored to your individual's specific requirements.",
                    icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />,
                    position: "right"
                  },
                  {
                    step: 4,
                    title: "Early Intervention",
                    description: "We begin therapy as early as possible to attain optimum developments within short duration.",
                    icon: <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />,
                    position: "left"
                  },
                  {
                    step: 5,
                    title: "Progress Monitoring",
                    description: "Participate in regular reviews to track development and adjust goals as needed.",
                    icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />,
                    position: "right"
                  }
                ].map((step, index) => (
                  <div key={index} className={`relative ${step.position === "left" ? "md:text-right md:self-end" : "md:text-left md:self-start"}`}>
                    <div className={`flex items-center gap-3 sm:gap-4 ${step.position === "left" ? "md:flex-row-reverse" : "flex-row"}`}>
                      {/* Step Circle */}
                      <div className="relative">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-[#1B3A63] flex items-center justify-center shadow-lg z-10">
                          {step.icon}
                        </div>
                        {/* Connection to line (hidden on mobile) */}
                        <div className={`absolute top-1/2 ${step.position === "left" ? "left-0 md:right-0 md:left-auto" : "right-0"} w-4 h-0.5 bg-gray-200 hidden md:block`}></div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-[#10B981] font-semibold mb-0.5 sm:mb-1">STEP {step.step}</div>
                        <h3 className="font-bold text-[#1B3A63] text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-[#1B3A63] to-[#2A4A7F] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-xl sm:rounded-2xl md:rounded-3xl text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 rounded-full bg-white opacity-5"></div>
              <div className="absolute bottom-10 right-10 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-white opacity-5"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full bg-white opacity-5"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-2 sm:p-3 md:p-4 bg-white bg-opacity-10 rounded-full mb-4 sm:mb-6 md:mb-8">
                <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-[#FBBF24]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">Ready to Get Started?</h3>
              <p className="text-gray-100 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto text-xs sm:text-sm md:text-lg px-1 sm:px-2">
                Contact us today to schedule an initial consultation and take the first step towards 
                helping your child thrive. Our team is ready to support your family's journey.
              </p>
              <div className="flex justify-center">
  <button className="bg-white text-[#1B3A63] px-5 py-2 rounded-md text-sm font-medium shadow hover:bg-[#FBBF24] hover:text-white transition-all duration-300 w-fit">
    Contact Us
  </button>
</div>

            </div>
          </div>

          {/* Contact Information Cards Section - NEW SECTION */}
          <div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center p-1.5 sm:p-2 md:p-3 bg-[#F0F9FF] rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-5">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-[#1B3A63]" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B3A63] mb-2 sm:mb-3 md:mb-4">Contact Information</h2>
              <div className="h-1 w-10 sm:w-12 md:w-16 bg-[#FBBF24] mx-auto mb-3 sm:mb-4 md:mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">
                Reach out to our team for more information or to schedule your appointment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Call Us",
                  info: "8248058950",
                  description: "Our team is available Monday-Saturday from 8:00 AM to 6:00 PM",
                  icon: <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                  color: "#10B981"
                },
                {
                  title: "Email",
                  info: "thrivetherapyandrehab@gmail.com",
                  description: "Send us a message anytime and we'll respond within 24 hours",
                  icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                  color: "#FBBF24"
                },
                {
                  title: "Visit Us",
                  info: "7A, ground floor, P Block, 18th Street, 6th avenue Anna Nagar, Chennai-600040",
                  description: "Our center is open for appointments and tours with prior scheduling",
                  icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />,
                  color: "#1B3A63"
                }
              ].map((contact, index) => (
                <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex p-4 sm:p-6 md:p-8">
                    <div className="mr-4 sm:mr-5 md:mr-6">
                      <div 
                        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: contact.color }}
                      >
                        {contact.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{contact.title}</h3>
                      <p className="text-[#10B981] font-medium text-sm sm:text-base mb-2 sm:mb-3">{contact.info}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         

       
       {/* Testimonials Section between services */}
<div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32">
  <div className="text-center mb-6 sm:mb-8 md:mb-12">
    <div className="inline-flex items-center justify-center p-1.5 sm:p-2 md:p-3 bg-[#F0F9FF] rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-5">
      <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-[#1B3A63]" />
    </div>
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B3A63] mb-2 sm:mb-3 md:mb-4">What Parents Say</h2>
    <div className="h-1 w-10 sm:w-12 md:w-16 bg-[#FBBF24] mx-auto mb-3 sm:mb-4 md:mb-6"></div>
    <p className="text-gray-700 max-w-2xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg px-1 sm:px-2">
      Hear from families who have experienced the difference our therapy makes.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
    {[
      {
        quote: "Two years back I brought my child to Nazreen mam for detailed speech evaluation, though my child was already diagnosed with ASD, I never knew a disorder named ADHD until and unless undergoing a detailed Speech and language evaluation. Aftermath it's been three years of continuous stimulation to my child till present, there is tremendous change in my child behaviors and speaking skills. Now she is able to read and write simple sentences, do math, speak 4 to 5 words in a sentence without demand, whereas in demand she can make 6 to 7 words. She is coping up with her peers, trying to mingle, accepting her flaws is not yet acquired though controlling her tantrums are well improvised. I thank the almighty that I found the correct place for my child.",
        shortQuote: "Two years back I brought my child to Nazreen mam for detailed speech evaluation, though my child was already diagnosed with ASD, I never knew a disorder named ADHD until and unless undergoing a detailed Speech and language evaluation. Aftermath it's been three years of continuous stimulation...",
        name: "Janofar Asaithambi"
      },
      {
        quote: "Vedanth was 3 years when we brought him to Evaluation, at that time he was not making any sound, had issues with eating, unable to jump, run, play and interact with adults and kids. He always chooses to be in isolation. With intensive Occupational and Speech therapy vedanth is now able to speak, play and interact with his same age kids, we are overwhelmed by his progress. He was given structured one-on-one therapy which helped him overcome his difficulties in performing his daily routine independently. Group interactive play therapy improved his self-esteem and communicative skills. With proper care and guidance from the OT and Speech therapist we were able to achieve this. From being a non-verbal child to getting admitted in a general public school was a greater accomplishment.",
        shortQuote: "Vedanth was 3 years when we brought him to Evaluation, at that time he was not making any sound, had issues with eating, unable to jump, run, play and interact with adults and kids. He always chooses to be in isolation. With intensive Occupational and Speech therapy...",
        name: "Anusha Venugopal"
      }
    ].map((testimonial, index) => {
      // Use state to track expanded state for each testimonial
      const testimonialId = `testimonial-${index}`;
      const [isExpanded, setIsExpanded] = useState(false);
      
      return (
        <div key={index} className="bg-white rounded-xl border-4 border-gray-600 p-4 sm:p-5 md:p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-16 w-16 bg-[#F0F9FF] opacity-50 rounded-bl-full"></div>
          
          <div className="text-xl sm:text-2xl md:text-3xl text-[#10B981] mb-3 sm:mb-4">"</div>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 italic">
            {isExpanded ? testimonial.quote : testimonial.shortQuote}
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="ml-1 font-medium text-[#10B981] hover:text-[#0D8A6A] transition-colors"
              aria-expanded={isExpanded}
              aria-controls={testimonialId}
            >
              {isExpanded ? " Read less" : "..."}
            </button>
          </p>
          <div>
            <h4 className="font-semibold text-[#1B3A63] text-sm sm:text-base">{testimonial.name}</h4>
          </div>
        </div>
      );
    })}
  </div>
</div>

        {/* Schedule Offline Section with Map */}
<div className="mb-12 sm:mb-16 md:mb-24 lg:mb-32 bg-gradient-to-r from-[#E6F7F2] to-[#F0F9FF] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
    <div>
      <div className="inline-flex items-center justify-center p-1.5 sm:p-2 md:p-3 bg-white rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-5">
        <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#10B981]" />
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1B3A63] mb-3 sm:mb-4 md:mb-6">Contact Us to Schedule Your Visit</h2>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8">
        Call us directly to schedule your appointment with our friendly staff.
        We're available Monday through Friday to assist you in finding the perfect time for your visit.
      </p>
      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
        {[
          "Personalized scheduling assistance",
          "Flexible appointment options",
          "Detailed pre-visit information",
          "Easy rescheduling by phone"
        ].map((feature, index) => (
          <li key={index} className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
            <div className="mt-0.5 sm:mt-1">
              <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#10B981]" />
            </div>
            <span className="text-gray-700 text-xs sm:text-sm md:text-base">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
      onClick={handleCall}
      className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 bg-blue-900 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg font-medium hover:bg-blue-950 transition-all duration-300 text-xs sm:text-sm md:text-base"
    >
      Call Now <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
    </button>
    </div>
    
    {/* Map section - right side */}
    <div className="h-full w-full min-h-64 rounded-lg sm:rounded-xl overflow-hidden shadow-md">
      {/* You can replace this placeholder with an actual embedded map */}
      <div className="w-full h-64 bg-gray-200 relative">
        {/* Placeholder map - you would replace this with an actual map embed */}
        <MapView className="w-full h-full object-cover" />
        
        {/* Map overlay with location pin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 p-2 sm:p-3 rounded-lg text-center max-w-xs">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto mb-1" />
            <h3 className="font-medium text-xs sm:text-sm text-gray-800">Our Location</h3>
            <p className="text-xs text-gray-600">123 Main Street, Anytown</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}