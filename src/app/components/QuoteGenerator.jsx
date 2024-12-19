'use client';

import { useState, useEffect } from "react";
import { Quote, Sparkles, Target, Brain, Rocket } from "lucide-react";

const quotes = [
  {
    text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
    author: "Simon Sinek",
    category: "mindset",
  },
  {
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
    category: "growth",
  },
  {
    text: "The greatest leader is not necessarily the one who does the greatest things. They are the one that gets people to do the greatest things.",
    author: "Ronald Reagan",
    category: "action",
  },
  {
    text: "Leadership and learning are indispensable to each other.",
    author: "John F. Kennedy",
    category: "transformation",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "mindset",
  },
  {
    text: "Great leaders don't set out to be a leader. They set out to make a difference.",
    author: "Lisa Haisha",
    category: "growth",
  },
  {
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
    category: "action",
  },
  {
    text: "The function of leadership is to produce more leaders, not more followers.",
    author: "Ralph Nader",
    category: "transformation",
  },
];

const categoryIcons = {
  mindset: Brain,
  growth: Target,
  action: Rocket,
  transformation: Sparkles,
};

export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const QUOTE_DURATION = 10000;
  const UPDATE_INTERVAL = 50;

  useEffect(() => {
    let progressInterval;
    let quoteInterval;

    const startNewQuote = () => {
      setIsVisible(false);
      setTimeout(() => {
        const newIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[newIndex]);
        setIsVisible(true);
        setProgress(100);
      }, 500);
    };

    // Reset intervals
    const setupIntervals = () => {
      clearInterval(progressInterval);
      clearInterval(quoteInterval);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) return 0;
          const newProgress = prev - (100 * UPDATE_INTERVAL) / QUOTE_DURATION;
          return Math.max(0, newProgress);
        });
      }, UPDATE_INTERVAL);

      quoteInterval = setInterval(startNewQuote, QUOTE_DURATION);
    };

    setupIntervals();

    return () => {
      clearInterval(progressInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  const Icon = categoryIcons[currentQuote.category];

  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="w-full bg-blue-200 rounded-full h-1.5 mb-4 overflow-hidden">
          <div
            className="bg-primary h-full rounded-full transition-all duration-50 ease-linear"
            style={{ 
              width: `${progress}%`,
              transitionProperty: 'width',
              willChange: 'width'
            }}
          />
        </div>
        
        <div
          className={`max-w-4xl mx-auto space-y-4 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                    {currentQuote.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">
                      — {currentQuote.author}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Icon className="h-4 w-4" />
                      <span className="capitalize">
                        {currentQuote.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}