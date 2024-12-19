'use client';

import { Target, CheckCircle2, Trophy } from "lucide-react";

function Progress({ value, className }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <div 
        className="bg-primary rounded-full transition-all duration-500 ease-out"
        style={{ width: `${value}%`, height: '100%' }}
      />
    </div>
  );
}

export default function Goals() {
  const goals = [
    {
      icon: Target,
      title: "Strategic Leadership",
      description: "Developing visionary leadership capabilities",
      progress: 85,
      achievements: ["Strategic planning", "Decision making", "Change management"]
    },
    {
      icon: CheckCircle2,
      title: "Team Development",
      description: "Building and leading high-performance teams",
      progress: 70,
      achievements: ["Team motivation", "Conflict resolution", "Talent development"]
    },
    {
      icon: Trophy,
      title: "Executive Presence",
      description: "Enhancing leadership impact and influence",
      progress: 90,
      achievements: ["Communication mastery", "Stakeholder management", "Executive presence"]
    }
  ];

  return (
    <section id="goals" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 ">
            Achievement Tracking
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Visualize your progress and celebrate milestones along your transformation journey
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div
              key={goal.title}
              className="opacity-100"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="inline-block hover:scale-110 transition-transform duration-200">
                  <goal.icon className="h-12 w-12 text-primary mb-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                <p className="text-gray-600 mb-6">{goal.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-primary">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>

                <div className="space-y-3">
                  {goal.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}