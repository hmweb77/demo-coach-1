"use client"
import { motion } from "framer-motion";

import { Award, Heart, Users } from "lucide-react";

export default function About() {
  const achievements = [
    { icon: Users, value: "500+", label: "Clients Coached" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Heart, value: "98%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Professional Coach"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 ">
              About Your Coach
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              With over 15 years of experience in transformational coaching, I've helped hundreds of individuals break through their limitations and achieve extraordinary results. My approach combines proven psychological principles with practical strategies for lasting change.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I believe everyone has unlimited potential waiting to be unlocked. My passion is guiding you through that journey of discovery and transformation.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {achievements.map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
