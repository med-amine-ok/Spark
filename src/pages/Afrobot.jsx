import React from 'react';
import { Calendar, MapPin, Trophy, Users, ArrowLeft, Zap, Target, Mountain, Gamepad2, Clock, BookOpen, Shield, FileText } from 'lucide-react';
import afrobotBg from '../assets/afrobot.png';

const Afrobot = () => {
  const competitions = [
    {
      title: 'Robot Fight Championship',
      description: 'Battle bots in an arena - the ultimate robotics combat experience',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-red-400'
    },
    {
      title: 'Line Follower Challenge',
      description: 'Autonomous track-following robots navigating precision courses',
      icon: <Target className="w-8 h-8" />,
      color: 'text-blue-400'
    },
    {
      title: 'All-Terrain Robot Obstacle Course',
      description: 'Rough terrain navigation through challenging environments',
      icon: <Mountain className="w-8 h-8" />,
      color: 'text-green-400'
    },
    {
      title: 'Spark League (Robotic Ball Tournament)',
      description: 'Robot sport competition with strategic gameplay',
      icon: <Gamepad2 className="w-8 h-8" />,
      color: 'text-yellow-400'
    }
  ];

  const rules = [
    'Safety inspections required for all robots before competition',
    'Team sizes: 1-4 participants per team',
    'Registration deadline: June 21, 2025',
    'Fair play and sportsmanship enforced',
    'Age restrictions: Open to all youth categories',
    'Technical specifications must meet official guidelines'
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundImage: `url(${afrobotBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }
        .animate-delay-1 { animation-delay: 0.2s; animation-fill-mode: both; }
        .animate-delay-2 { animation-delay: 0.4s; animation-fill-mode: both; }
        .animate-delay-3 { animation-delay: 0.6s; animation-fill-mode: both; }
        .animate-delay-4 { animation-delay: 0.8s; animation-fill-mode: both; }
        .animate-delay-5 { animation-delay: 1.0s; animation-fill-mode: both; }
        .animate-delay-6 { animation-delay: 1.2s; animation-fill-mode: both; }
      `}</style>
      {/* Main Content */}
      <div className="relative z-20 px-4 md:px-20">
        <div className="bg-white/95 backdrop-blur-sm min-h-screen">
          <div className="container mx-auto px-6 py-8">
            
            {/* Navigation */}
            <div
              className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors cursor-pointer animate-slide-in-left"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </div>

            {/* Hero Section */}
            <section className="text-center mb-16 animate-fade-in animate-delay-1">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-red-600 bg-clip-text text-transparent">
                Afrobot 2025
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
                The National Robotics Festival of Algeria
              </h2>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-lg text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="font-semibold">July 7, 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-500" />
                  <span className="font-semibold">Open Air Theater, Sablettes, Algiers</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Register Now
              </button>
            </section>

            {/* About Section */}
            <section className="mb-16 animate-fade-in animate-delay-2">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Afrobot 2025</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Afrobot is a youth-led national robotics festival featuring competitions, workshops, and tech showcases, 
                  supported by the Wilaya of Algiers. Join us for an incredible celebration of innovation, technology, 
                  and the brilliant minds shaping Algeria's future.
                </p>
              </div>
            </section>

            {/* Competitions Section */}
            <section className="mb-16 animate-fade-in animate-delay-3">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Competitions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {competitions.map((competition, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <div className={`${competition.color} mb-4`}>
                      {competition.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{competition.title}</h4>
                    <p className="text-gray-700">{competition.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Schedule Section */}
            <section className="mb-16 animate-fade-in animate-delay-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Event Schedule</h3>
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="text-2xl font-bold text-gray-900">July 7, 2025</h4>
                  </div>
                  <div className="text-center">
                    <p className="text-lg text-gray-700 mb-4">
                      Full day of competitions, workshops, and tech showcases
                    </p>
                    <div className="bg-yellow-100 rounded-lg p-4 border border-yellow-200">
                      <p className="text-yellow-800 font-semibold">
                        📅 Registration Period: June 9 - June 21, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Workshops & Community Section */}
            <section className="mb-16 animate-fade-in animate-delay-5">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Workshops & Community</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Educational Workshops</h4>
                  <p className="text-gray-700">Learn from experts through hands-on robotics workshops and masterclasses.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Networking</h4>
                  <p className="text-gray-700">Connect with fellow innovators, mentors, and industry professionals.</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Tech Showcases</h4>
                  <p className="text-gray-700">Discover cutting-edge technology and innovative robotics solutions.</p>
                </div>
              </div>
            </section>

            {/* Rules & Registration Section */}
            <section className="mb-16 animate-fade-in animate-delay-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Rules & Registration</h3>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-green-600 mr-3" />
                    <h4 className="text-2xl font-bold text-gray-900">Competition Guidelines</h4>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Official Rulebook
                    </button>
                    <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105">
                      Terms & Conditions
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white rounded-2xl p-8 mt-16 animate-fade-in animate-delay-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h5 className="text-xl font-bold mb-4">Contact Info</h5>
                  <p className="text-gray-300 mb-2">📧 info@afrobot2025.dz</p>
                  <p className="text-gray-300 mb-2">📞 +213 XX XX XX XX</p>
                  <p className="text-gray-300">📍 Algiers, Algeria</p>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-4">Quick Links</h5>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-4">Follow Us</h5>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">📘</a>
                    <a href="#" className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition-colors">🐦</a>
                    <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors">📷</a>
                    <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">📺</a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-400">© 2025 Afrobot. All rights reserved. Proudly organized in Algeria.</p>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Afrobot;