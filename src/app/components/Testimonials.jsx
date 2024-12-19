'use client';

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      content: "The breakthrough coaching program completely transformed my approach to business and life. I've achieved goals I never thought possible.",
      image: "https://images.unsplash.com/photo-1573633509389-0e3075dea01b?w=100&h=100&fit=crop&auto=format&q=80"
    },
    {
      name: "Michael Chen",
      role: "Executive",
      content: "Working with this coach helped me break through long-standing barriers and reach new levels of success in my career.",
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=100&h=100&fit=crop&auto=format&q=80"
    },
    {
      name: "Emma Davis",
      role: "Creative Professional",
      content: "The personalized approach and proven methodology created lasting change in both my professional and personal life.",
      image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=100&h=100&fit=crop&auto=format&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 0">
            Client Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from those who have experienced breakthrough transformations
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="opacity-100"
            >
              <div className="bg-white rounded-lg shadow-lg h-full">
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6">{testimonial.content}</p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover bg-gray-100"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}