import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";
import { mockData } from "../data/mockData";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setData(mockData);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Experience data={data.experience} />
      <Contact data={data.contact} />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Portfolio;