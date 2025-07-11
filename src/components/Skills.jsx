import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Skills = ({ data }) => {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.categories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-purple-400">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;