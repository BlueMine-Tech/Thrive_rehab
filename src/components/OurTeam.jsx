import React, { useState, useEffect, useRef } from 'react';

// Placeholder images - replace with actual imports
import Annie from '../assets/Annie.jpeg'
import pavithra from '../assets/pavithra.png'
import lingesh from '../assets/lingesh.jpeg'
import sahin from '../assets/sahin.png'
import nazreen from '../assets/nazreen.jpeg'
import kumaran from '../assets/kumaran.png'
import sushmitha from '../assets/sushmitha.png'
import harini from '../assets/harini.png'

export default function TeamSection() {
  const [activeRole, setActiveRole] = useState('founder');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const teamRoles = [
    {
      id: 'founder',
      title: 'Founder',
      name: 'Ms. Nazreen Nihara MR',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: 'holds a Masters in Audiology and Bachelors in Speech Language Pathology. She is a  Rehabilation Council of India(RCI) certified professional   and an AVAZ certified AAC Practitioner. With extensive experience in the field, she founded THRIVE to provide comprehensive care for children and adults with special needs.',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      image: nazreen,
      expertise: [
        "Speech and Language Therapy for all age groups",
        "Audiology (Cochlear Implant therapy/ Hearing Impaired therapy)",
        "Alternative and Augmentative Communication (AAC)",
        "Hearing Aid Dispensing and Programming"
      ]
    },
    {
      id: 'occupational',
      title: 'Consultant Occupational Therapist',
      name: 'Mr. Lingeshwaran P',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      description: 'is a Certified professional of All India Occupational Therapist Association (AIOTA). He specializes in helping individuals develop essential skills for daily living and independence, using meaningful activities to enhance motor skills, cognitive function, and social participation.',
      color: 'bg-rose-100',
      textColor: 'text-rose-600',
      image: lingesh,
      expertise: [
        "Sensory integration therapy",
        "Fine and gross motor skill development",
        "Handfunction and pre-writing skills",
        "Daily living skills enhancement"
      ]
    },
    {
      id: 'senior-occupational',
      title: 'Senior Consultant Occupational Therapist',
      name: 'Ms. Harini Priya',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'holds Masters in Mental health in Occupational therapy. She is a certified Professional of AIOTA with an extensive experience in the areas of functional assessment, occupational profiling, sensory integration, ADL training, client centered approach, Vocational rehabilitation and Psychoeducation. She is more proficient in collaborating with Multidisciplinary team and has gross competence in geriatric rehabilitation.',
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
      image: harini,
      expertise: [
        "Functional assessment and occupational profiling",
        "Sensory integration and ADL training",
        "Vocational rehabilitation and psychoeducation",
        "Geriatric rehabilitation and multidisciplinary collaboration"
      ]
    },
    {
      id: 'psychologist',
      title: 'Child Psychologist',
      name: 'Ms. Annie',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h.01M12 12h.01M15 12h.01M12 4c3.866 0 7 3.134 7 7 0 1.568-.518 3.01-1.387 4.188l.836 2.738C18.55 18.039 18.469 18.3 18.2 18.426c-.05.025-.106.039-.163.039h-12c-.058 0-.112-.014-.163-.039-.268-.126-.351-.387-.25-.5l.836-2.738C5.518 14.01 5 12.568 5 11c0-3.866 3.134-7 7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17v2m-3-2v2m6-2v2" />
      </svg>
      ),
      description: 'is specialized in child psychology with expertise in handling children with behavioral issues and special needs. She provides comprehensive psychological assessment and interventions for children, while also offering counseling services for adults with psychological illnesses.',
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
      image: Annie,
      expertise: [
        "Child behavioral assessment and intervention",
        "Special needs children counseling",
        "Adult psychological counseling",
        "Behavioral modification techniques"
      ]
    },
    {
      id: 'audiologist',
      title: 'Audiologist',
      name: 'Kumaran',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      description: 'is an RCI certified Audiologist and SLP. He has expertise in performing hearing evaluation and dispensing hearing aids appropriate for individual needs and hearing loss. He is specialised in providing optimal hearing care for both pediatric and adult population.',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      image: kumaran,
      expertise: [
        "Counseling for Hearing Aid use",
        "Dispensing hearing aids and programming",
        "Tinnitus retraining therapy",
        "Comprehensive hearing evaluation for all ages"
      ]
    },
    {
      id: 'speech',
      title: 'Consultant Speech Therapist',
      name: 'Ms. Pavithra S',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      description: 'is our Consultant Speech Therapist who specializes in preventing, assessing, diagnosing, and treating difficulties related to speech, language, communication, voice, and swallowing in both children and adults. She provides tailored interventions to improve communication skills and quality of life.',
      color: 'bg-emerald-100',
      textColor: 'text-emerald-600',
      image: pavithra,
      expertise: [
        "Articulation and phonological disorders",
        "Language development and disorders",
        "Pediatric Assessment and Intervention",
      ]
    },
    {
      id: 'visiting',
      title: 'Visiting Consultant',
      name: 'Ms. Shahin Sulthana',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'is  specialises in treating children and adults with neurogenic language disorders such as aphasia, dysarthria, and dysphagiaShe is currently working at sri ramachandra institute of higher education and research.',
      color: 'bg-violet-100',
      textColor: 'text-violet-600',
      image: sahin,
      expertise: [
        "Neurogenic Communication Disorders",
        "Aphasia diagnosis and treatment",
        "Dysarthria management",
        "Swallowing disorders (dysphagia) intervention"
      ]
    },
    {
      id: 'voice',
      title: 'Consultant Voice Therapist',
      name: 'Ms. Sushmitha M',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      description: 'certified SLP with expertise in assessing and treating voice and fluency changes in both adults and children. She is currently pursuing her PhD in Voice. She  has published several articles on voice therapy, particularly focusing on professional voice users.',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      image: sushmitha,
      expertise: [
        "Voice therapy for adults and children",
        "Treatment of fluency disorders",
        "Professional voice training",
        "Specialized training for professional voice users (singers, teachers, public speakers"
      ]
    }
  ];
  
  // Find the currently active role
  const currentRole = teamRoles.find(role => role.id === activeRole);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 transition-all duration-700 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            Our Experts
          </span>
          
          <h2 className={`text-4xl font-bold text-gray-800 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}>
            Qualified Compassionate <span className="text-blue-600">Team</span>
          </h2>
          
          <div className={`w-24 h-1 bg-blue-400 mx-auto mb-6 transition-all duration-700 delay-300 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}></div>
          
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}>
            At THRIVE, our specialized team commits to bridge the gap in providing the care and support for individuals with special needs and providing them expert driven specific interventions to improve their quality of life.
          </p>
        </div>

        {/* Team Navigation Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-500 ${
          isVisible ? 'animate-slide-in-left' : 'opacity-0'
        }`}>
          {teamRoles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300
                ${activeRole === role.id 
                  ? `${role.color} ${role.textColor} shadow-sm` 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'}`}
            >
              <span className="mr-2">{role.icon}</span>
              <span className="font-medium whitespace-nowrap">{role.title}</span>
            </button>
          ))}
        </div>

        {/* Featured Team Role Display */}
        <div className={`bg-white rounded-2xl shadow-md overflow-hidden mb-16 border border-gray-100 transition-all duration-700 delay-600 ${
          isVisible ? 'animate-slide-in-right' : 'opacity-0'
        }`}>
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-2/5 bg-gray-100">
              <div className="h-full relative">
                <img 
                  src={currentRole.image} 
                  alt={`${currentRole.name} - ${currentRole.title} at THRIVE Rehab Centre`}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute bottom-0 left-0 right-0 p-6 ${currentRole.color} bg-opacity-95 backdrop-blur-sm`}>
                  {/* Highlighted Name */}
                  <div className="bg-white bg-opacity-90 rounded-lg p-3 mb-2 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-800">{currentRole.name}</h3>
                  </div>
                  {/* Highlighted Role */}
                  <div className={`${currentRole.color} rounded-lg p-2 border-2 border-white`}>
                    <h4 className={`text-lg font-semibold ${currentRole.textColor}`}>{currentRole.title}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className={`inline-flex items-center justify-center ${currentRole.color} rounded-full p-3 mb-4`}>
                  <span className={currentRole.textColor}>
                    {currentRole.icon}
                  </span>
                </div>
                
                {/* Highlighted Name and Role in Content */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{currentRole.name}</h3>
                  <span className={`inline-block px-3 py-1 ${currentRole.color} ${currentRole.textColor} rounded-full text-sm font-medium`}>
                    {currentRole.title}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Profile</h4>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">{currentRole.name}</span> {currentRole.description}
                </p>
              </div>

         <div className="mt-6 pt-6 border-t border-gray-100">
  <h4 className="text-base sm:text-lg font-medium text-gray-800 mb-4">
    Areas of Expertise
  </h4>
  <ul className="space-y-3">
    {currentRole.expertise.map((item, index) => (
      <li key={index} className="flex items-start">
        <svg
          className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-sm sm:text-base text-gray-600">{item}</span>
      </li>
    ))}
  </ul>
</div>

            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className={`bg-blue-50 rounded-2xl p-8 shadow-sm border border-blue-100 transition-all duration-700 delay-700 ${
          isVisible ? 'animate-slide-in-left' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            We're here to help you or your loved ones reach their full potential. Contact us to learn more about our services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:thrivetherapyandrehab@gmail.com" className="text-blue-600 hover:underline">thrivetherapyandrehab@gmail.com</a>
              </div>
              
              {/* Phone */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918248058950" className="text-blue-600 hover:underline">+91 8248058950</a>
              </div>
              
              {/* Instagram */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a href="https://www.instagram.com/we_thrive_you?igsh=b29pZ2NjaDQybDgy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@thrive_therapy_rehab</a>
              </div>
            </div>
            
            <div>
              <a 
                href={`https://wa.me/918248058950?text=Hello%20Thrive%20Therapy%20%26%20Rehab%2C%20I'm%20interested%20in%20booking%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 w-full"
              >
                {/* WhatsApp Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Book an Appointment
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">Click to schedule a consultation via WhatsApp</p>
            </div>
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

          .animate-slide-in-left {
            animation: slide-in-left 0.6s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slide-in-right 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    </section>
  );
}