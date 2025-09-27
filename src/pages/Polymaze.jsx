import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Trophy, Users, ArrowLeft, ChevronLeft, ChevronRight, Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Polymaze = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black tracking-wider">
              <span className="text-white">POLY</span>
              <span className="text-orange-400">MAZE</span>
            </div>
            <div
                          className="flex items-center text-gray-300 hover:text-orange-400 transition-colors cursor-pointer animate-slide-in-left"
                          onClick={() => window.history.back()}
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Back to Events
                        </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('format')} className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Format</button>
              <button onClick={() => scrollToSection('results')} className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Results</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="space-y-6">
                <div className="text-6xl md:text-8xl font-black tracking-tighter">
                  <div className="text-white">POLY</div>
                  <div className="text-orange-400 -mt-4">MAZE</div>
                  <div className="text-white text-2xl md:text-4xl font-bold mt-2">IS HERE!</div>
                </div>
                
                <p className="text-xl text-gray-300 font-medium">
                  To throw down the gauntlet for robotics enthusiasts.
                </p>
                
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  Test your skills in mechanics, electronics, robotics and automatics to design and build a robot that can take on a challenging maze with intricate pathways and unexpected turns.
                </p>
              </div>
              
              <button className="group relative px-8 py-4 border-2 border-white text-white font-bold text-lg tracking-wider transition-all duration-300 hover:bg-white hover:text-black overflow-hidden">
                <span className="relative z-10">REGISTER NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-green-400 rounded blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
            </div>
            
            {/* Right Side */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Robot Maze" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-green-400/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              ABOUT <span className="text-orange-400">POLYMAZE</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                PolyMaze is a cutting-edge maze-solving robotics competition where autonomous robots navigate complex mazes using advanced sensors and intelligent programming. No remote control allowed – pure algorithmic brilliance.
              </p>
              
              <p>
                Organized by the <span className="text-orange-400 font-semibold">Vision & Innovation Club (VIC)</span> at <span className="text-orange-400 font-semibold">École Nationale Polytechnique, Algiers</span>, this competition challenges students and enthusiasts in robotics, mechanics, electronics, and artificial intelligence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <Calendar className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Latest Edition</h3>
                  <p className="text-gray-400">June 30, 2025</p>
                </div>
                
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                  <MapPin className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Venue</h3>
                  <p className="text-gray-400">École Nationale Polytechnique, Algiers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section id="format" className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              COMPETITION <span className="text-green-400">FORMAT</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="text-3xl font-black text-orange-400 mb-4">DAY 1</div>
                <h3 className="text-xl font-bold text-white mb-4">Qualifying Waves</h3>
                <p className="text-gray-400">Multiple qualifying rounds to test robot performance and eliminate weaker competitors.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="text-3xl font-black text-green-400 mb-4">SEMI</div>
                <h3 className="text-xl font-bold text-white mb-4">Semi-Finals</h3>
                <p className="text-gray-400">Best performing teams advance to compete in increasingly challenging maze configurations.</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <div className="text-3xl font-black text-yellow-400 mb-4">FINAL</div>
                <h3 className="text-xl font-bold text-white mb-4">Championship</h3>
                <p className="text-gray-400">Ultimate showdown between top teams to crown the PolyMaze champion.</p>
              </div>
            </div>
            
            <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Competition Rules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Robots must be <span className="text-orange-400 font-semibold">100% autonomous</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">No remote control allowed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Sensor-based navigation only</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Judged on <span className="text-purple-400 font-semibold">speed & accuracy</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">Complete maze traversal required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300">Programmed logic & algorithms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
              RESULTS & <span className="text-yellow-400">WINNERS</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-8 rounded-2xl border border-yellow-400/30 mb-4">
                  <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <div className="text-6xl font-black text-yellow-400 mb-2">1st</div>
                  <h3 className="text-xl font-bold text-white mb-2">Team Alpha</h3>
                  <p className="text-gray-400">ENP Algiers</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 p-8 rounded-2xl border border-gray-400/30 mb-4">
                  <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <div className="text-6xl font-black text-gray-400 mb-2">2nd</div>
                  <h3 className="text-xl font-bold text-white mb-2">Team Beta</h3>
                  <p className="text-gray-400">Tunisia Tech</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-400/20 to-orange-600/20 p-8 rounded-2xl border border-orange-400/30 mb-4">
                  <Trophy className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <div className="text-6xl font-black text-orange-400 mb-2">3rd</div>
                  <h3 className="text-xl font-bold text-white mb-2">Team Gamma</h3>
                  <p className="text-gray-400">ENP Algiers</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">International Participation</h3>
              <p className="text-gray-300 text-lg">
                PolyMaze 2025 saw teams from across North Africa, with notable participation from Tunisia, 
                showcasing the competition's growing international recognition and appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              THINK YOU CAN <span className="text-green-400">BEAT THE MAZE?</span>
            </h2>
            
            <p className="text-xl text-gray-300">
              Join the next generation of robotics innovators. Register now for the next edition of PolyMaze.
            </p>
            
            <button className="group relative px-12 py-6 bg-gradient-to-r from-orange-400 to-green-400 text-black font-black text-xl tracking-wider transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">REGISTER FOR NEXT EDITION</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-green-400 rounded blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            </button>
            
            <div className="flex justify-center space-x-8 pt-8">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-3xl font-black">
                <span className="text-white">VIC</span>
                <span className="text-orange-400"> ENP</span>
              </div>
              <p className="text-gray-400">
                Vision & Innovation Club - École Nationale Polytechnique
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-left">About</button>
                <button onClick={() => scrollToSection('format')} className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-left">Competition</button>
                <button onClick={() => scrollToSection('results')} className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-left">Results</button>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">FAQ</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-400">vic@enp.edu.dz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">+213 XX XX XX XX</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              © 2025 Vision & Innovation Club - École Nationale Polytechnique. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Polymaze;