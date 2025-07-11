import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Award, ExternalLink } from "lucide-react";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My journey through virtual internships and professional experiences in programming and cloud computing.
          </p>
        </div>

        <div className="space-y-8">
          {data.map((experience, index) => (
            <Card key={experience.id} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold text-white mb-2">
                      {experience.title}
                    </CardTitle>
                    <p className="text-purple-400 font-medium text-lg">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-purple-400 mb-2">
                  C++ Programming Certificate
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  CodSoft - 4 weeks virtual internship
                </p>
                <p className="text-gray-400 text-xs">
                  Certificate ID: 1f3a6c7 | March 2024
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-purple-400 mb-2">
                  Java Programming Certificate
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  CodSoft - 4 weeks virtual internship
                </p>
                <p className="text-gray-400 text-xs">
                  Certificate ID: f0a8adf | June 2025
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-purple-400 mb-2">
                  Cloud Computing Certificate
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Micro IT Services - 1 month internship
                </p>
                <p className="text-gray-400 text-xs">
                  Certificate ID: MITS136229 | June 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;