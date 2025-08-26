import { PhoneCall, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })
  
  // WhatsApp phone number
  const whatsappNumber = "918248058950"  // Added country code for India (91)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create WhatsApp message from form data
    let whatsappMessage = `Hello THRIVE, my name is ${formData.name}. `
    
    if (formData.service) {
      whatsappMessage += `I'm interested in ${formData.service} services. `
    }
    
    whatsappMessage += `${formData.message}`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    
    // Show success message
    setFormSubmitted(true)
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: ''
      })
    }, 5000)
  }
  
  // Handle direct WhatsApp contact for appointment booking
  const handleBookAppointment = () => {
    const appointmentMessage = "Hello THRIVE, I would like to book an appointment for my child. Please help me schedule an initial assessment or therapy session."
    const encodedMessage = encodeURIComponent(appointmentMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

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
                <span className="text-[#1B3A63] font-medium text-xs sm:text-sm">Get in Touch</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B3A63] mb-4 sm:mb-6 tracking-tight">
                Contact <span className="text-[#10B981]">THRIVE</span>
              </h1>
              
              <div className="h-1 sm:h-1.5 w-12 sm:w-16 md:w-24 bg-orange-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
                We're here to answer your questions and help you take the first step  journey. 
                Reach out to our dedicated team today.
              </p>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="mb-16 sm:mb-24 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Phone Card - Updated to open WhatsApp */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-12 w-12 bg-[#F0F9FF] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6 text-[#1B3A63]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1B3A63] mb-2 sm:mb-3">Call or WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">Our dedicated team is available to answer your queries during business hours</p>
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#10B981] font-medium hover:underline"
                >
                  +91 8248058950
                </a>
              </div>
              
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-12 w-12 bg-[#F0F9FF] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#1B3A63]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1B3A63] mb-2 sm:mb-3">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">Send us a message anytime, and we'll get back to you within 24 hours</p>
                <a 
                  href="mailto:info@thriverehab.com" 
                  className="text-[#10B981] font-medium hover:underline"
                >
                thrivetherapyandrehab@gmail.com
                </a>
              </div>
              
              {/* Visit Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-12 w-12 bg-[#F0F9FF] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#1B3A63]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1B3A63] mb-2 sm:mb-3">Visit Us</h3>
                <p className="text-gray-600 text-sm mb-4">Schedule a visit to tour our facility and meet our therapists</p>
                <div className="text-[#10B981] font-medium">7A, ground floor, P Block, 18th Street, 6th avenue Anna Nagar, Chennai-600040</div>
              </div>
            </div>
          </div>

          {/* Contact Form and Hours Section */}
          <div className="mb-16 sm:mb-24 md:mb-32 bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Column - Form */}
              <div className="lg:col-span-3 p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-[#F0F9FF] rounded-lg sm:rounded-xl mb-4 sm:mb-5 w-fit">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#1B3A63]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1B3A63] mb-2 sm:mb-3">Send Us a Message</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Fill out the form below and we'll connect with you via WhatsApp
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4 sm:p-6 flex items-center">
                    <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800 mb-1">WhatsApp Message Created</h4>
                      <p className="text-green-600 text-sm">Thank you for contacting THRIVE. We'll respond to your WhatsApp message shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all" 
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all" 
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all" 
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Service Interested In</label>
                        <select 
                          id="service" 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all bg-white" 
                        >
                          <option value="">Select a service</option>
                          <option value="assessment">Detailed assessment</option>
                          <option value="speech">Speech therapy</option>
                          <option value="occupational">Occupational therapy</option>
                          <option value="education">Special education</option>
                          <option value="verbal">Auditory verbal therapy</option>
                          <option value="voice">Voice and Fluency therapy</option>
                          <option value="swallowing">Swallowing therapy</option>
                          <option value="psychological">Psychological counselling</option>
                          <option value="hearing aid">Hearing aid trial and dispensing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Your Concern</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4" 
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all" 
                        placeholder="Tell us about your questions..."
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button type="submit" className="flex items-center justify-center gap-2 bg-[#1B3A63] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:bg-[#142a4b] transition-all duration-300 w-full sm:w-auto">
                        Send via WhatsApp
                        <Send size={16} className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Column - Hours and Appointment */}
              <div className="lg:col-span-2 bg-[#F0F9FF] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                {/* Hours Section */}
                <div className="mb-8 sm:mb-12">
                  <div className="inline-flex items-center justify-center p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl mb-4 sm:mb-6 w-fit">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#1B3A63]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1B3A63] mb-4 sm:mb-6">Open Hours for Care</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-medium text-[#1B3A63]">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="h-px bg-blue-100"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-medium text-[#1B3A63]">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="h-px bg-blue-100"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-medium text-[#1B3A63]">By Appointment</span>
                    </div>
                  </div>
                </div>

                {/* Book Appointment Button - Updated to use WhatsApp */}
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-50 shadow-sm">
                  <h4 className="font-semibold text-lg text-[#1B3A63] mb-2 sm:mb-3">Ready to Book an Appointment?</h4>
                  <p className="text-gray-600 text-sm mb-4 sm:mb-6">
                    Schedule an initial assessment or therapy session for you. Contact us directly via WhatsApp.
                  </p>
                  <button 
                    onClick={handleBookAppointment}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#10B981] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-md hover:bg-[#0ea271] transition-all duration-300 w-full text-sm"
                  >
                    Book via WhatsApp <ArrowRight size={16} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16 sm:mb-24 md:mb-32">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1B3A63] mb-3 sm:mb-4">Frequently Asked Questions</h2>
        <div className="h-1 w-12 sm:w-16 bg-[#FBBF24] mx-auto mb-4 sm:mb-6"></div>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
          Find answers to common questions about our services, appointments, and therapy options
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {[
          {
            question: "How do I schedule an initial assessment?",
            answer: "You can schedule an initial assessment by contacting us through WhatsApp, calling our office, or sending us an email. Our team will get back to you within 24 hours to set up an appointment."
          },
          {
            question: "How can I prepare for the first visit?",
            answer: "We recommend arriving about 10-15 minutes early to complete any necessary paperwork. Consider what specific concerns you'd like to address, and feel free to bring a list of questions. For added comfort, you're welcome to bring a support person with you."
          },
          {
            question: "What should I bring to the first appointment?",
            answer: "Please bring any relevant medical records, previous assessments, and a list of questions or concerns you would like to discuss with our specialists."
          },
     
          {
            question: "How long are therapy sessions?",
            answer: "Therapy sessions typically last 45-60 minutes, depending on the type of therapy and your specific needs. Initial assessments are usually 90 minutes."
          },
          {
            question: "Do you offer virtual therapy options?",
            answer: "Yes, we offer teletherapy for certain services. This can be discussed during your initial consultation to determine if it's appropriate for your situation and needs."
          },
          {
            question: "How often will therapy sessions be needed?",
            answer: "The frequency of therapy sessions varies based on individual needs and goals. After the initial assessment, our specialists will recommend a personalized treatment plan that includes the optimal frequency."
          }
        ].map((faq, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-semibold text-lg text-[#1B3A63] mb-2 sm:mb-3">{faq.question}</h4>
            <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}