import { CheckCircle, Heart, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Skilled Professionals",
      desc: "Our experienced therapists provide personalized, expert support tailored to individual needs.",
      iconColor: "text-green-600",
      bgColor: "bg-green-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Heartfelt Care",
      desc: "We believe in compassion-driven, holistic support for every person we serve.",
      iconColor: "text-red-600",
      bgColor: "bg-red-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inclusive Community",
      desc: "Fostering a strong network of care that values connection and collaboration.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      desc: "A nurturing and secure environment where individuals can thrive with confidence.",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-500"
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-3">Our Promise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative mb-4 flex items-center justify-center">
                <div className={`absolute w-12 h-12 ${feature.bgColor} rounded-lg opacity-10`}></div>
                <div className={`relative flex items-center justify-center w-12 h-12 ${feature.iconColor}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to get started?</h4>
              <p className="text-gray-600">Schedule a free consultation with our team today.</p>
            </div>
            <Link to="/contact">
              <button className="w-full md:w-auto px-6 py-3 bg-[#1B3A63] hover:bg-[#142a4b] text-white font-medium rounded-lg transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}