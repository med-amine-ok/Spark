import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  ExternalLink,
  Rocket,
  Award,
  Star,
  Zap,
  Target,
  Gamepad2,
  Code,
} from "lucide-react";
import Plmz from "../assets/logos/polymaze.webp";
import PlmzBg from "../assets/robot.webp";
import Gamecraft from "../assets/logos/gamecraft.png";
import afrobot from "../assets/logos/afrobot_logo.png";
import afrobotBg from "../assets/afrobotBg.webp";
import GamecraftAsset from "../assets/gameCraftAsset.png";
import arc from "../assets/logos/arc.webp";
import eurobot from "../assets/logos/eurobot.webp";
import nest from "../assets/logos/nest.png";
import roboko from "../assets/logos/roboko.png";
import polymaze from "../assets/logos/polymaze-02.png";
// Afrobot Card Component
const AfrobotCard = ({ event, delay }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/afrobot");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl flex flex-col h-auto  cursor-pointer group"
      style={{
        background:
          "linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #ef4444 100%)",
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      onClick={handleNavigate}
    >
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={afrobotBg}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Status Badge */}
        {/* <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
            UPCOMING
          </span>
        </div> */}

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <img
            src={afrobot}
            alt="Logo"
            className="w-auto h-20 mx-auto mb-4 ml-0"
          />
          <h1 className="text-3xl md:text-4xl font-black text-white/80 mb-2  bg-clip-text text-transparent">
            Afrobot 2025
          </h1>
          <p className="text-white/90 text-sm font-medium">
            National Robotics Festival of Algeria
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white/95 backdrop-blur-sm flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            The premier youth-led robotics festival featuring competitions,
            workshops, and tech showcases, supported by the Wilaya of Algiers.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
              July 7, 2025
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-red-500" />
              Open Air Theater, Sablettes, Algiers
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2 text-green-500" />
              {event.participants}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
              Prizes & Recognition
            </div>
          </div>

          {/* Competition Icons */}
          <div className="flex justify-between items-center mb-4 p-3 bg-gradient-to-r from-green-100/50 to-blue-100/50 rounded-lg">
            <div className="flex items-center space-x-1">
              <Zap className="w-5 h-5 text-red-500" />
              <span className="text-xs text-gray-600 font-medium">
                Robot Fight
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="w-5 h-5 text-blue-500" />
              <span className="text-xs text-gray-600 font-medium">
                Line Follower
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Trophy className="w-5 h-5 text-green-500" />
              <span className="text-xs text-gray-600 font-medium">
                Obstacle Course
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center mb-4 p-3  bg-gradient-to-r from-orange-200/50 to-blue-100/50 rounded-lg">
            <Gamepad2 className="w-8 h-8 text-orange-500 m-2" />
            <span className="text-900 text-gray-600 font-medium">
              Spark League (Robotic Ball Tournament)
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-lg border border-purple-500/20">
          <div className="text-center">
            <div className="text-lg font-bold text-orange-400">1 day</div>
            <div className="text-xs text-gray-500">Competition</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-red-400">+100 M</div>
            <div className="text-xs text-gray-500">Prize Pool</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">200+</div>
            <div className="text-xs text-gray-500">Participants</div>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-full text-sm transition-all shadow-lg hover:shadow-xl transform hover:scale-105 group mt-auto">
          <span className="flex items-center justify-center">
            Learn More
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

// GameCraft Card Component
const GameCraftCard = ({ event, delay }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/gamecraft");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl bg-black text-white cursor-pointer group font-mono flex flex-col h-auto "
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      onClick={handleNavigate}
    >
      {/* Header with gradient */}
      <div className="relative p-6 bg-gradient-to-br from-purple-900/30 to-red-900/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-auto h-4 rounded-lg flex items-center justify-center">
              <img src={Gamecraft} alt="Logo" className="w-auto h-8 mx-auto " />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
              GAMECRAFT
            </span>
          </div>
          {/* <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-medium">
            COMING SOON
          </span> */}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-4xl font-black leading-tight mb-2">
            <span className="block bg-gradient-to-r from-purple-400 via-red-400 to-purple-400 bg-clip-text text-transparent">
              CREATE
            </span>
            <span className="block text-lg text-gray-300 font-normal">
              Code. Compete.
            </span>
          </div>
          <img src={GamecraftAsset} alt="Logo" className="w-auto h-20 ml-0" />
        </div>
      </div>
      {/* Code Preview */}
      <div className="p-6 bg-gray-900 border-t border-purple-500/30 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="space-y-2 text-sm font-mono mb-4">
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>// GameCraft 2025 Loading...</span>
            </div>
            <div className="text-purple-400">
              const <span className="text-white">competition</span> = {"{"}
            </div>
            <div className="text-gray-400 ml-4">
              duration: <span className="text-yellow-400">48</span>h,
            </div>
            <div className="text-gray-400 ml-4">
              teams: <span className="text-green-400">"unlimited"</span>,
            </div>
            <div className="text-purple-400">{"};"}</div>
          </div>

          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Challenge yourself to design, code, and present your own game within
            strict time constraints. Solo or team - your choice.
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="w-4 h-4 mr-2 text-purple-400" />
              February 15-16, 2025
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Trophy className="w-4 h-4 mr-2 text-red-400" />
              100K DA Prize Pool
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Code className="w-4 h-4 mr-2 text-green-400" />
              Unity, Godot, HTML5 & More
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-black/50 rounded-lg border border-purple-500/20">
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">48h</div>
              <div className="text-xs text-gray-500">Competition</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-red-400">100K</div>
              <div className="text-xs text-gray-500">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">200+</div>
              <div className="text-xs text-gray-500">Participants</div>
            </div>
          </div>
        </div>

        <button className="w-full group relative px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:text-white mt-auto">
          <span className="relative z-10 flex items-center justify-center">
            REGISTER INTEREST
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>
    </motion.div>
  );
};

// Polymaze Card Component
const PolymazeCard = ({ event, delay }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/polymaze");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl bg-black text-white cursor-pointer group flex flex-col h-auto font-orbitron"
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      onClick={handleNavigate}
    >
      {/* Neutral Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20"></div>
      <div className="absolute -inset-2 bg-gradient-to-r from-gray-400/10 to-gray-300/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

      <div className="relative z-10 p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-6">
            {/* LOGO REPLACEMENT */}
            <div className="text-2xl font-black tracking-wider">
              <img src={Plmz} alt="PolyMaze Logo" className="w-auto h-10" />
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-6">
            <div className="w-full h-32 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={PlmzBg}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-lg font-black text-white mb-2 font-orbitron">
                AUTONOMOUS MAZE NAVIGATION
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-orbitron">
                Pure algorithmic brilliance meets robotics. No remote control -
                just sensors, programming, and innovation navigating complex
                mazes.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2 text-gray-300" />
                June 30, 2025
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2 text-gray-300" />
                École Nationale Polytechnique, Algiers
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2 text-gray-300" />
                International Participation
              </div>
            </div>
          </div>

          {/* Competition Phases - Silver Theme */}
          <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-center">
              <div className="text-sm font-black text-gray-300">QUALIFIERS</div>
              <div className="text-xs text-gray-600">Multiple Waves</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-black text-gray-300">
                SEMI-FINALS
              </div>
              <div className="text-xs text-gray-600">Best Teams</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-black text-gray-300">FINALS</div>
              <div className="text-xs text-gray-600">Championship</div>
            </div>
          </div>

          <div className="bg-gray-900/30 p-3 rounded-xl border border-gray-700 mb-4">
            <div className="text-center">
              <div className="text-sm font-bold text-white mb-1">WINNERS</div>
              <div className="flex justify-center items-center space-x-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-300">1st</div>
                  <div className="text-xs text-gray-500">Team Alpha</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-400">2nd</div>
                  <div className="text-xs text-gray-500">Team Beta</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-500">3rd</div>
                  <div className="text-xs text-gray-500">Team Gamma</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Silver Button */}
        <button className="w-full group relative px-6 py-3 border-2 border-gray-400 text-gray-300 font-bold tracking-wider transition-all duration-300 hover:bg-gray-300 hover:text-black overflow-hidden mt-auto font-orbitron">
          <span className="relative z-10 flex items-center justify-center">
            VIEW RESULTS
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-400/20 to-gray-300/20 rounded blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </motion.div>
  );
};

const GlassCard = ({ children, className = "", delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 25,
      delay,
    }}
    viewport={{ once: true }}
    className={`
      relative overflow-hidden rounded-2xl p-6
      backdrop-blur-3xl border border-white/20 shadow-xl
      hover:border-white/30 transition-all duration-300
      group cursor-pointer
      ${className}
    `}
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,107,53,0.06) 100%)",
      boxShadow:
        "0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
    }}
    whileHover={{
      scale: 1.02,
      y: -4,
    }}
    {...props}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,149,0,0.1) 0%, rgba(255,107,53,0.08) 50%, rgba(247,147,30,0.1) 100%)",
        mixBlendMode: "overlay",
      }}
    />
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
      }}
    />
    <div className="relative z-10">{children}</div>
  </motion.div>
);


const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCountUp = (target, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start);
    useEffect(() => {
      if (!isInView) return;
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, [isInView, target, duration]);
    return count;
  };

  const competitions = useCountUp(20);
  const members = useCountUp(200);
  const prizes = useCountUp(100);

  const stats = [
    {
      label: "National & International Competitions",
      value: `${competitions}+`,
      gradient: "from-orange-400 via-red-400 to-pink-500",
      bgGradient: "from-orange-500/10 via-red-500/10 to-pink-500/10",
      icon: "🌍",
      delay: 0.1
    },
    {
      label: "Active & Passionate Members",
      value: `${members}+`,
      gradient: "from-orange-400 via-red-400 to-pink-500",
      bgGradient: "from-orange-500/10 via-red-500/10 to-pink-500/10",
      icon: "👥",
      delay: 0.2
    },
    {
      label: "Total Prize Value",
      value: `${prizes}M+`,
      subtitle: "DZD",
      gradient: "from-orange-400 via-red-400 to-pink-500",
      bgGradient: "from-orange-500/10 via-red-500/10 to-pink-500/10",
      icon: "🏆",
      delay: 0.3
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Spark
            </span>
            {" "}
            <span className="text-white/90">in Numbers</span>
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-4">
            Empowering innovation and creativity through competitive excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.delay, duration: 0.7, ease: "easeOut" }}
            >
              {/* Card */}
              <div className="">
                {/* Content */}
                <div className="relative z-10  flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className={`w-20 h-20 mx-auto rounded-3xl border border-white/20  
                                  p-[2px] shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}>
                      <div className="w-full h-full rounded-2xl  
                                    flex items-center justify-center text-4xl">
                        {stat.icon}
                      </div>
                    </div>
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`text-6xl lg:text-7xl font-black bg-gradient-to-br ${stat.gradient} 
                                   bg-clip-text text-transparent mb-1 tracking-tight`}>
                      {stat.value}
                    </div>
                    {stat.subtitle && (
                      <div className="text-white/50 text-sm font-semibold tracking-widest">
                        {stat.subtitle}
                      </div>
                    )}
                  </motion.div>

                  {/* Label */}
                  <div className="h-px w-12 mx-auto mb-4 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  <p className="text-white/70 text-base lg:text-lg font-medium leading-relaxed">
                    {stat.label}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent 
                              rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};


const Events = () => {
  const majorEvents = [
    {
      title: "Afrobot",
      description:
        "Our flagship robotics competition where teams design and build autonomous robots to compete in various challenging tasks.",
      date: "July 7, 2025",
      location: "Open Air Theater, Sablettes, Algiers",
      status: "upcoming",
      participants: "200+ teams",
      prize: "Prizes & Recognition",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "GameCraft",
      description:
        "Game development competition where creativity meets coding. Build the next breakthrough gaming experience.",
      date: "February 15-16, 2025",
      location: "ENP Algiers",
      status: "planned",
      participants: "Open Registration",
      prize: "100K DA",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Polymaze",
      description:
        "An innovative maze-solving challenge combining algorithmic thinking with physical robot navigation.",
      date: "June 30, 2025",
      location: "École Nationale Polytechnique",
      status: "completed",
      participants: "International Teams",
      prize: "Championship Titles",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const pastAchievements = [
    {
      event: "Nest Hackathon 2025",
      achievement: "1st Prize - AI Category &  2nd Prize - Robotics Category",
      description:
        "Developed a groundbreaking AI solution recognized for innovation and impact, and Created a high-performance robotic system with precision and intelligence.",
      logo: nest,
    },
    {
      event: "ARC Robotics Cup 2023",
      achievement: "2nd Place - Autonomous Navigation",
      description:
        "Advanced sensor integration and AI algorithms brought us to the top.",
      logo: arc,
    },
     {
      event: "Eurobot ",
      achievement: "Top 23 Worldwide",
      description:
        "Ranked among the world’s best with our advanced robotic architecture.",
      logo: eurobot,
    },
    {
      event: "Polymaze",
      achievement: "1st, 2nd & 3rd Place",
      description:
        "line follower robots that mastered complex mazes with speed and accuracy.",
      logo: polymaze,
    },
     {
      event: "Afrobot Festival 2025",
      achievement: "3rd Place - SparkLeague with Team FleRobot",
      description:
        "Pushed the boundaries of innovation and teamwork at Afrobot 2025.",
      logo: afrobot,
    },
    {
      event: "RoboKo",
      achievement: "2nd Round - Somo Challenge",
      description:
        " Demonstrated exceptional design and strategy in a competitive field.",
      logo: roboko,
    },
   
    
    
   
  ];

  return (
    <section id="events" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-3xl border border-white/25 mb-8 shadow-xl relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,107,53,0.08) 100%)",
              boxShadow:
                "0 4px 20px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)",
              }}
            />
            <Rocket className="w-5 h-5 text-orange-300 relative z-10" />
            <span className="text-white/90 font-medium relative z-10">
              Events & Competitions
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Events &{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Competitions
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Join our exciting competitions and events that challenge your
            skills, expand your knowledge, and connect you with like-minded
            innovators.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8 text-center "
          >
            - Major Events -
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AfrobotCard event={majorEvents[0]} delay={0} />
            <GameCraftCard event={majorEvents[1]} delay={0.1} />
            <PolymazeCard event={majorEvents[2]} delay={0.2} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            - Our Achievements -
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.event}
                className="relative group rounded-3xl  p-3 md:p-4 text-center 
                 
                 hover:shadow-[0_10px_45px_rgba(255,140,0,0.25)] transition-all duration-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2 + index * 0.08,
                }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="relative w-16 h-16 mx-auto mb-3 rounded-2xl overflow-hidden border border-white/20 shadow-lg flex items-center justify-center bg-white/10 group-hover:scale-110 transition-transform duration-700">
                  <img
                    src={achievement.logo}
                    alt={achievement.event}
                    className="object-contain w-12 h-12 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-70 transition-all duration-700" />
                </div>

                {/* Text */}
                <div className="space-y-1.5">
                  <h4 className="text-base font-semibold text-white/90 tracking-wide">
                    {achievement.event}
                  </h4>
                  <p className="text-orange-300 font-medium text-sm">
                    {achievement.achievement}
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed max-w-xs mx-auto">
                    {achievement.description}
                  </p>
                </div>

                {/* Subtle glowing line under hover */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 transition-all duration-700 rounded-full" />
                
              </motion.div>
            ))}
            
          </div>
        </motion.div>
        <StatsSection />
      </div>
    </section>
  );
};

export default Events;
