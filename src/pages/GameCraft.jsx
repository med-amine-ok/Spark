import React, { useState, useEffect } from 'react';
import { Calendar, ArrowLeft, MapPin, Trophy, Users, Clock, Code, Gamepad2, Star, ChevronDown, Menu, X, ExternalLink, Mail, Instagram, Facebook } from 'lucide-react';
import GameCraftBg from '../assets/gameCraft.png';
const GameCraft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Format', href: '#format' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Register', href: '#register' }
  ];

  const prizes = [
    { place: '1st Place', prize: '50,000 DA + Gaming Setup', icon: '🥇' },
    { place: '2nd Place', prize: '30,000 DA + Development Tools', icon: '🥈' },
    { place: '3rd Place', prize: '20,000 DA + Certificates', icon: '🥉' }
  ];

  const schedule = [
    { time: 'January 15, 2025', event: 'Registration Opens', status: 'upcoming' },
    { time: 'February 10, 2025', event: 'Registration Closes', status: 'upcoming' },
    { time: 'February 15-16, 2025', event: '48-Hour GameJam Weekend', status: 'upcoming' },
    { time: 'February 17, 2025', event: 'Judging & Presentations', status: 'upcoming' },
    { time: 'February 18, 2025', event: 'Awards Ceremony', status: 'upcoming' }
  ];

  const mentors = [
    { name: 'Miss Cha', role: 'Game Design Expert', expertise: 'Unity, Game Mechanics' },
    { name: 'Ahmed Benali', role: 'Technical Lead', expertise: 'Godot, Programming' },
    { name: 'Sarah Medini', role: 'UI/UX Designer', expertise: 'Interface Design, Art' }
  ];

  return (
    <div className="min-h-screen  text-gray-900 font-mono" >
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-red-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">
                GAMECRAFT
              </span>
              
            </div>
<div
              className="flex items-center text-gray-600 hover:text-gray-900  transition-colors cursor-pointer animate-slide-in-left"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-purple-500/20 shadow-lg">
              <div className="px-4 py-2 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>



      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-red-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="space-y-4">
                 
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  GAMECRAFT
                </span>
                <span className="block text-3xl lg:text-4xl text-gray-700 font-normal mt-2">
                  2025
                </span>
              </h1>
              <p className="text-xl text-gray-600 font-bold">
                Create. Code. Compete.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Challenge yourself to design, code, and present your own game — solo or as a team — within strict time, theme and tool constraints.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-600 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:text-white">
                <span className="relative z-10">REGISTER NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              <button className="px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200 transition-colors duration-200">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">48h</div>
                <div className="text-sm text-gray-600">Competition</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">100K DA</div>
                <div className="text-sm text-gray-600">Prize Pool</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600">Participants</div>
              </div>
            </div>
          </div>

          {/* Right side graphics */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gray-900 rounded-3xl p-8 border border-purple-500/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">// GameCraft 2025 Loading...</span>
                  </div>
                  <div className="space-y-2 text-sm font-mono">
  <div className="text-purple-400">
    const <span className="text-white">competition</span> = {"{"}
  </div>
  <div className="text-gray-400 ml-4">
    name: <span className="text-green-400">"GameCraft"</span>,
  </div>
  <div className="text-gray-400 ml-4">
    duration: <span className="text-yellow-400">48</span>,
  </div>
  <div className="text-gray-400 ml-4">
    teams: <span className="text-yellow-400">Infinity</span>,
  </div>
  <div className="text-gray-400 ml-4">
    innovation: <span className="text-green-400">true</span>
  </div>
  <div className="text-purple-400">{"};"}</div>
</div>

                  <div className="flex space-x-2 mt-6">
                    <div className="w-4 h-4 bg-purple-500 rounded animate-bounce"></div>
                    <div className="w-4 h-4 bg-red-500 rounded animate-bounce delay-100"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About GameCraft */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-gray-900">
                  About <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">GameCraft</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  GameCraft is the premier game development competition organized by SPARK ENP, 
                  the innovation and gaming club at École Nationale Polytechnique.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Innovation Focus</h3>
                    <p className="text-gray-600">Encouraging creativity, cutting-edge coding practices, and innovative game design.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Collaboration</h3>
                    <p className="text-gray-600">Build meaningful connections while working in teams or challenging yourself solo.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Recognition</h3>
                    <p className="text-gray-600">Showcase your talent and compete for prizes, certificates, and industry exposure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-purple-500/20 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Total Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">150+</div>
                  <div className="text-sm text-gray-600">Games Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                  <div className="text-sm text-gray-600">Editions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Industry Mentors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format & Rules */}
      <section id="format" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Competition <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">Format</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about participating in GameCraft 2025
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Team Format */}
            <div className="bg-white rounded-2xl p-8 border border-purple-500/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Structure</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Solo developers welcome</li>
                <li>• Teams of 2-5 members maximum</li>
                <li>• Mix of skills encouraged</li>
                <li>• Cross-school collaboration allowed</li>
              </ul>
            </div>

            {/* Tools & Tech */}
            <div className="bg-white rounded-2xl p-8 border border-red-500/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Allowed Tools</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Unity 3D/2D</li>
                <li>• Godot Engine</li>
                <li>• HTML5/JavaScript</li>
                <li>• Unreal Engine</li>
                <li>• GameMaker Studio</li>
                <li>• Custom engines allowed</li>
              </ul>
            </div>

            {/* Judging Criteria */}
            <div className="bg-white rounded-2xl p-8 border border-purple-500/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Judging Criteria</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Gameplay mechanics (25%)</li>
                <li>• Innovation & creativity (25%)</li>
                <li>• Technical execution (20%)</li>
                <li>• User experience (15%)</li>
                <li>• Art & audio (15%)</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 rounded-3xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Submission Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Playable game build (Windows/Web)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Source code repository</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>2-minute gameplay video</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Technical documentation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Theme Announcement</h3>
                <p className="text-gray-300 mb-4">
                  The competition theme will be revealed at the opening ceremony. 
                  Previous themes included:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                    "Connection"
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-sm">
                    "Evolution"
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                    "Minimal"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Mentors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Workshops & <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">Mentorship</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from industry experts and get guidance throughout the competition
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-purple-500/20 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Workshop Schedule</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Game Programming</h4>
                <p className="text-sm text-gray-600">Unity & Godot basics</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Game Design</h4>
                <p className="text-sm text-gray-600">Mechanics & level design</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Team Management</h4>
                <p className="text-sm text-gray-600">Collaboration & version control</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Presentation Skills</h4>
                <p className="text-sm text-gray-600">Pitching your game</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Event <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-lg text-gray-600">
              Mark your calendar for GameCraft 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-red-500 rounded-full"></div>
              
              {schedule.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 border border-purple-500/20 shadow-lg">
                      <div className="text-purple-600 font-semibold mb-2">{item.time}</div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.event}</h3>
                      <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-600 rounded-full text-sm">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Prizes & <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-lg text-gray-600">
              Compete for amazing prizes and industry recognition
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 border-2 shadow-xl transform hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'border-yellow-400 shadow-yellow-200' :
                index === 1 ? 'border-gray-400 shadow-gray-200' :
                'border-orange-400 shadow-orange-200'
              }`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{prize.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{prize.place}</h3>
                  <p className="text-lg text-gray-600 font-semibold">{prize.prize}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-red-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Additional Benefits</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <Trophy className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Certificates</p>
                  <p className="text-sm text-white/80">All participants</p>
                </div>
                <div>
                  <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Portfolio Boost</p>
                  <p className="text-sm text-white/80">Industry showcase</p>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Networking</p>
                  <p className="text-sm text-white/80">Industry connections</p>
                </div>
                <div>
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Mentorship</p>
                  <p className="text-sm text-white/80">Post-event guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Ready to <span className="bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">Compete?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Join GameCraft 2025 and showcase your game development skills
            </p>

            <div className="bg-white rounded-3xl p-8 border border-purple-500/20 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Registration Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full mr-2"></div>
                    Eligibility
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Students from any institution</li>
                    <li>• Professional developers welcome</li>
                    <li>• Age 16+ required</li>
                    <li>• Valid ID for verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
                    What to Bring
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Laptop with development tools</li>
                    <li>• Chargers and accessories</li>
                    <li>• Creativity and passion!</li>
                    <li>• Team spirit (optional)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold text-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
                <span className="relative z-10 flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 mr-3" />
                  REGISTER FOR GAMECRAFT 2025
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="text-gray-600">
                Registration opens January 15, 2025 • Limited to 200 participants
              </p>

              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <span>✓ Free participation</span>
                <span>✓ Meals provided</span>
                <span>✓ Swag bag included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Gamepad2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GAMECRAFT</h3>
                  <p className="text-gray-400">by SPARK ENP</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The premier game development competition fostering innovation, creativity, 
                and technical excellence in Algeria's gaming community.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:gamecraft@spark-enp.org" className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Navigation</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#hero" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About GameCraft</a></li>
                <li><a href="#format" className="hover:text-purple-400 transition-colors">Format & Rules</a></li>
                <li><a href="#schedule" className="hover:text-purple-400 transition-colors">Schedule</a></li>
                <li><a href="#register" className="hover:text-purple-400 transition-colors">Register</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact SPARK ENP</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@spark-enp.org</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>École Nationale Polytechnique</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Algiers, Algeria</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 SPARK ENP. All rights reserved. | 
              <span className="text-purple-400 ml-1">Made with ❤️ for the gaming community</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameCraft;