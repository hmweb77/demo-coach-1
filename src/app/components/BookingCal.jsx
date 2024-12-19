'use client';

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Clock, CalendarDays, X } from "lucide-react";


const DEFAULT_TIME_SLOTS = [
  { time: "09:00", available: true },
  { time: "10:00", available: true },
  { time: "11:00", available: true },
  { time: "14:00", available: true },
  { time: "15:00", available: true },
  { time: "16:00", available: true },
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BookingCalendar() {
  const [date, setDate] = useState();
  const [timeSlots, setTimeSlots] = useState(DEFAULT_TIME_SLOTS);
  const [selectedTime, setSelectedTime] = useState();
  const [userTimezone, setUserTimezone] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(timezone);
  }, []);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setTimeSlots(DEFAULT_TIME_SLOTS);
    setSelectedTime(undefined);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (!date || !selectedTime) return;
    console.log(`Booking for ${format(date, 'PP')} at ${selectedTime} ${userTimezone}`);
    setDate(undefined);
    setSelectedTime(undefined);
    setIsOpen(false);
  };

  const generateCalendarDays = () => {
    const start = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const days = [];
    const today = new Date();
    
    // Add empty slots for days before the first of the month
    for (let i = 0; i < start.getDay(); i++) {
      days.push(null);
    }
    
    // Add all days of the month
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      days.push(currentDate);
    }
    
    return days;
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center bg-blue-900 justify-center px-6 py-3 text-base font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors gap-2"
      >
        <CalendarDays className="h-5 w-5" />
        Book Consultation
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-lg max-w-[425px] w-full relative animate-scaleIn">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Schedule Your Breakthrough Session</h2>
              
              <div className="space-y-4">
                {/* Calendar */}
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      ←
                    </button>
                    <div className="font-medium">
                      {format(currentMonth, 'MMMM yyyy')}
                    </div>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      →
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {daysOfWeek.map(day => (
                      <div key={day} className="text-center text-sm text-gray-500 py-1">
                        {day}
                      </div>
                    ))}
                    {generateCalendarDays().map((day, i) => (
                      <div key={i} className="text-center py-1">
                        {day && (
                          <button
                            onClick={() => handleDateSelect(day)}
                            disabled={day < new Date() || day.getDay() === 0 || day.getDay() === 6}
                            className={`w-8 h-8 rounded-full ${
                              date && format(date, 'P') === format(day, 'P')
                                ? 'bg-primary text-white'
                                : day < new Date() || day.getDay() === 0 || day.getDay() === 6
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            {format(day, 'd')}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time slots */}
                {date && (
                  <div className="space-y-4 animate-fadeInUp">
                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Available times ({userTimezone})
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot, index) => (
                        <button
                          key={slot.time}
                          className={`p-2 rounded-md border ${
                            selectedTime === slot.time
                              ? 'bg-primary text-white border-primary'
                              : 'border-gray-200 hover:border-primary'
                          } ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={!slot.available}
                          onClick={() => handleTimeSelect(slot.time)}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Book button */}
                {date && selectedTime && (
                  <button
                    onClick={handleBooking}
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors animate-fadeIn"
                  >
                    Book Session
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}