'use client';

import BookingCalendar from "./BookingCal"; // Assuming BookingCalendar is in the same directory

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Develop Your Leadership Excellence
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Enhance your leadership capabilities and drive organizational success with our proven leadership development methodology.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <BookingCalendar />
              <button
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative animate-fadeInRight">
            <img
              src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?w=800&h=600&fit=crop&auto=format&q=80"
              alt="Professional Coach"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}