import React from "react";
import { Heart, Coffee, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-purple-400">Abhishek</span>
              <span className="text-white">Yadav M</span>
            </div>
            <p className="text-gray-400">
              Computer Science Student specializing in Cloud Computing, passionate about building innovative solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/abhishek-yadav-m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/abhishekyadav223"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Chennai, Tamil Nadu</p>
              <p>abhishekyadav021004@gmail.com</p>
              <p>+91 9345013639</p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Abhishek Yadav M. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>and</span>
              <Coffee size={14} className="text-amber-400" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;