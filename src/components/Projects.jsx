import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Eye, EyeOff } from "lucide-react";

const Projects = ({ data }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const toggleProjectsVisibility = () => {
    if (showAll) {
      setVisibleProjects(6);
      setShowAll(false);
    } else {
      setVisibleProjects(data.length);
      setShowAll(true);
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, visibleProjects).map((project) => (
            <Card key={project.id} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </CardTitle>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-500/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex-1"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {data.length > 6 && (
          <div className="text-center mt-12">
            <Button
              onClick={toggleProjectsVisibility}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {showAll ? (
                <>
                  <EyeOff className="mr-2" size={20} />
                  Show Less
                </>
              ) : (
                <>
                  <Eye className="mr-2" size={20} />
                  Show More Projects
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;