import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Plmz from "../assets/logos/polymaze.webp";
import PlmzBg from '../assets/blackgradient.webp';
import ModelViewer from "../utils/3d"; 
const Polymaze = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden font-orbitron" style={{ backgroundImage: `url(${PlmzBg})`,  backgroundPosition: 'fixed'}}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black tracking-wider">
              <img src={Plmz} alt="Logo" className="w-auto h-20 ml-0  " />
            </div>
            <div
              className="flex items-center text-gray-400 hover:text-gray-200 transition-colors cursor-pointer animate-slide-in-left"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("format")}
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                Format
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                Results
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="text-6xl md:text-8xl font-black tracking-tighter">
                  <img src={Plmz} alt="Logo" className="w-auto h-32 ml-0 mb-5" />
                  <div className="text-white text-2xl md:text-4xl font-bold mt-2">
                    IS   HERE!
                  </div>
                </div>

                <p className="text-xl text-gray-400 font-medium">
                  To throw down the gauntlet for robotics enthusiasts.
                </p>

                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
                  Test your skills in mechanics, electronics, robotics and
                  automatics to design and build a robot that can take on a
                  challenging maze with intricate pathways and unexpected turns.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div
              className="relative w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden transform transition-all duration-1000"
            >
              <ModelViewer/>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              ABOUT <span className="text-gray-300">POLYMAZE</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-400">
              <p>
                PolyMaze is a cutting-edge maze-solving robotics competition
                where autonomous robots navigate complex mazes using advanced
                sensors and intelligent programming. No remote control allowed –
                pure algorithmic brilliance.
              </p>

              <p>
                Organized by the{" "}
                <span className="text-gray-300 font-semibold">
                  Vision & Innovation Club (VIC)
                </span>{" "}
                at{" "}
                <span className="text-gray-300 font-semibold">
                  École Nationale Polytechnique, Algiers
                </span>
                , this competition challenges students and enthusiasts in
                robotics, mechanics, electronics, and artificial intelligence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <Calendar className="w-8 h-8 text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Latest Edition
                  </h3>
                  <p className="text-gray-500">June 30, 2025</p>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <MapPin className="w-8 h-8 text-gray-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Venue</h3>
                  <p className="text-gray-500">
                    École Nationale Polytechnique, Algiers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section id="format" className="py-20 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              COMPETITION <span className="text-gray-300">FORMAT</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                <div className="text-3xl font-black text-gray-300 mb-4">
                  DAY 1
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Qualifying Waves
                </h3>
                <p className="text-gray-500">
                  Multiple qualifying rounds to test robot performance and
                  eliminate weaker competitors.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                <div className="text-3xl font-black text-gray-300 mb-4">
                  SEMI
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Semi-Finals
                </h3>
                <p className="text-gray-500">
                  Best performing teams advance to compete in increasingly
                  challenging maze configurations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300">
                <div className="text-3xl font-black text-gray-300 mb-4">
                  FINAL
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Championship
                </h3>
                <p className="text-gray-500">
                  Ultimate showdown between top teams to crown the PolyMaze
                  champion.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Competition Rules
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-400">
                      Robots must be{" "}
                      <span className="text-gray-300 font-semibold">
                        100% autonomous
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-400">
                      No remote control allowed
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-400">
                      Sensor-based navigation only
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-400">
                      Judged on{" "}
                      <span className="text-gray-300 font-semibold">
                        speed & accuracy
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-400">
                      Complete maze traversal required
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-400">
                      Programmed logic & algorithms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              RESULTS & <span className="text-gray-300">WINNERS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-300/20 to-gray-400/20 p-8 rounded-2xl border border-gray-300/30 mb-4">
                  <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <div className="text-6xl font-black text-gray-300 mb-2">
                    1st
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Team Alpha
                  </h3>
                  <p className="text-gray-500">ENP Algiers</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-400/20 to-gray-500/20 p-8 rounded-2xl border border-gray-400/30 mb-4">
                  <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <div className="text-6xl font-black text-gray-400 mb-2">
                    2nd
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Team Beta
                  </h3>
                  <p className="text-gray-500">Tunisia Tech</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 p-8 rounded-2xl border border-gray-500/30 mb-4">
                  <Trophy className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <div className="text-6xl font-black text-gray-500 mb-2">
                    3rd
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Team Gamma
                  </h3>
                  <p className="text-gray-500">ENP Algiers</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                International Participation
              </h3>
              <p className="text-gray-400 text-lg">
                PolyMaze 2025 saw teams from across North Africa, with notable
                participation from Tunisia, showcasing the competition's growing
                international recognition and appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              THINK YOU CAN{" "}
              <span className="text-gray-300">BEAT THE MAZE?</span>
            </h2>

            <p className="text-xl text-gray-400">
              Join the next generation of robotics innovators. Register now for
              the next edition of PolyMaze.
            </p>

            <button className="group relative px-12 py-6 bg-gradient-to-r from-gray-300 to-gray-400 text-black font-black text-xl tracking-wider transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">REGISTER FOR NEXT EDITION</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-300 to-gray-400 rounded blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </button>

            <div className="flex justify-center space-x-8 pt-8">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-3xl font-black">
                <span className="text-white">VIC</span>
                <span className="text-gray-300"> ENP</span>
              </div>
              <p className="text-gray-500">
                Vision & Innovation Club - École Nationale Polytechnique
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("format")}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-left"
                >
                  Competition
                </button>
                <button
                  onClick={() => scrollToSection("results")}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-left"
                >
                  Results
                </button>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-500">vic@enp.edu.dz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-500">+213 XX XX XX XX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 Vision & Innovation Club - École Nationale Polytechnique.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Polymaze;