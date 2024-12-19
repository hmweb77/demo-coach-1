"use client"
import { motion } from "framer-motion";
import { CheckCircle2, Target, Sparkles, ArrowRight, Brain, Rocket, LineChart } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Target,
      title: "Discovery",
      description: "Initial assessment and goal setting",
      details: [
        "Personal assessment",
        "Goal identification",
        "Strategy planning"
      ]
    },
    {
      icon: Brain,
      title: "Mindset",
      description: "Breaking through limiting beliefs",
      details: [
        "Pattern recognition",
        "Belief restructuring",
        "Mindset shifts"
      ]
    },
    {
      icon: Sparkles,
      title: "Transform",
      description: "Implementing breakthrough methods",
      details: [
        "New perspectives",
        "Behavioral changes",
        "Skill development"
      ]
    },
    {
      icon: Rocket,
      title: "Action",
      description: "Taking consistent focused action",
      details: [
        "Action planning",
        "Implementation",
        "Progress tracking"
      ]
    },
    {
      icon: LineChart,
      title: "Growth",
      description: "Measuring and scaling success",
      details: [
        "Results assessment",
        "Strategy refinement",
        "Continued growth"
      ]
    },
    {
      icon: CheckCircle2,
      title: "Mastery",
      description: "Achieving sustainable results",
      details: [
        "Habit formation",
        "Sustained success",
        "New horizons"
      ]
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 ">
            Our Breakthrough Process
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A proven methodology that consistently delivers transformative results
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg h-full"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <step.icon className="h-12 w-12 text-primary mb-6" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2 text-sm text-gray-500"
                >
                  {step.details.map((detail, i) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              {index < steps.length - 1 && index % 3 !== 2 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 text-primary transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
