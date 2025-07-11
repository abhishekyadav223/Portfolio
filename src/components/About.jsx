import React from "react";
import { Card, CardContent } from "./ui/card";

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {data.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Education</h3>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
                <h4 className="text-xl font-semibold text-purple-400 mb-2">
                  Bachelor of Engineering - Computer Science
                </h4>
                <p className="text-gray-300 mb-1">
                  RMK College of Engineering and Technology (RMKCET)
                </p>
                <p className="text-gray-400">2023 - 2027 (Expected)</p>
                <p className="text-gray-400">Specialization: Cloud Computing</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {data.stats.map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;