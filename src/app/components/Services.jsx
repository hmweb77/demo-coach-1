'use client';

import { ArrowRight, Lightbulb, Target, Users, Dumbbell } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "Personal Breakthrough",
      description: "One-on-one intensive sessions to overcome limiting beliefs and unlock your potential.",
      price: "$299",
      duration: "90 minutes"
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Structured program to define and achieve your most important life and career goals.",
      price: "$799",
      duration: "3 months"
    },
    {
      icon: Users,
      title: "Group Coaching",
      description: "Interactive group sessions focused on specific themes and peer support.",
      price: "$199",
      duration: "Monthly"
    },
    {
      icon: Dumbbell,
      title: "Habit Formation",
      description: "Build powerful habits that support your success and personal growth.",
      price: "$599",
      duration: "2 months"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 ">
            Coaching Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the coaching program that best fits your needs and goals
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="opacity-100" // Remove animation temporarily
            >
              <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden">
                <div className="p-6">
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-gray-600">{service.duration}</div>
                  </div>
                  
                  <button className="w-full mt-6 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}