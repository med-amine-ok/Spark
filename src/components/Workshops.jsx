import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Smartphone,
  Palette,
  Settings,
  Wrench,
  Navigation,
  Shield,
  Cpu,
  GraduationCap,
  CircuitBoard,
  Binary,
  BookOpen,
  Filter,
  Clock,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const GlassCard = ({ children, className = "", delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      type: 'spring', 
      stiffness: 300, 
      damping: 25,
      delay 
    }}
    viewport={{ once: true }}
    className={`
      relative overflow-hidden rounded-2xl
      backdrop-blur-3xl border border-white/20 shadow-xl
      hover:border-white/30 transition-all duration-300
      group cursor-pointer h-full
      ${className}
    `}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,107,53,0.06) 100%)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
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
        background: 'linear-gradient(135deg, rgba(255,149,0,0.1) 0%, rgba(255,107,53,0.08) 50%, rgba(247,147,30,0.1) 100%)',
        mixBlendMode: 'overlay'
      }}
    />
    <div 
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
      }}
    />
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

const FilterButton = ({ active, onClick, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`
      px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
      backdrop-blur-2xl border relative overflow-hidden group
      ${active 
        ? 'text-white border-white/30' 
        : 'text-white/70 border-white/20 hover:border-white/30 hover:text-white/90'
      }
    `}
    style={{
      background: active 
        ? 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      boxShadow: active 
        ? '0 4px 16px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
        : '0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
    }}
  >
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 70%)',
      }}
    />
    <span className="relative z-10">{children}</span>
  </motion.button>
);

const LevelBadge = ({ level }) => (
  <span 
    className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl border border-white/20 text-white/80"
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,107,53,0.05) 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
    }}
  >
    {level}
  </span>
);

const WorkshopCard = ({ workshop, index }) => (
  <GlassCard delay={index * 0.05} className="p-6">
    <div className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <motion.div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden backdrop-blur-2xl border border-white/25"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)',
            boxShadow: '0 4px 16px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 400,
            damping: 20,
            delay: index * 0.05 + 0.2
          }}
          viewport={{ once: true }}
        >
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 70%)',
            }}
          />
          <workshop.icon className="w-7 h-7 text-white relative z-10" />
        </motion.div>
        <LevelBadge level={workshop.level} />
      </div>

      <div className="flex-1 flex flex-col">
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
          {workshop.title}
        </h4>
        
        <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">
          {workshop.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-white/60">
            <Clock className="w-3 h-3 mr-2 text-orange-300" />
            <span>Duration: {workshop.duration}</span>
          </div>
          <div className="flex items-center text-xs text-white/60">
            <TrendingUp className="w-3 h-3 mr-2 text-orange-300" />
            <span>Category: {workshop.category}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl font-medium text-sm backdrop-blur-2xl border border-white/25 text-white hover:border-white/35 transition-all duration-300 relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(247,147,30,0.1) 50%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 2px 12px rgba(255,107,53,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 70%)',
            }}
          />
          <span className="relative z-10">Learn More</span>
        </motion.button>
      </div>
    </div>
  </GlassCard>
);

const Workshops = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollRef = useRef(null);

  const workshops = [
    {
      title: 'Frontend Development',
      icon: Code,
      description: 'Master modern web development with React, Vue, and cutting-edge frameworks.',
      level: 'Beginner to Advanced',
      duration: '8 weeks',
      category: 'Development'
    },
    {
      title: 'Backend Development',
      icon: Database,
      description: 'Build robust server-side applications with Node.js, Python, and cloud technologies.',
      level: 'Intermediate',
      duration: '10 weeks',
      category: 'Development'
    },
    {
      title: 'App Development',
      icon: Smartphone,
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
      level: 'Beginner to Advanced',
      duration: '12 weeks',
      category: 'Development'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Design intuitive and beautiful user experiences using modern design principles.',
      level: 'Beginner',
      duration: '6 weeks',
      category: 'Design'
    },
    {
      title: 'Robotics Fundamentals',
      icon: Settings,
      description: 'Build and program robots from scratch using various sensors and actuators.',
      level: 'Beginner to Intermediate',
      duration: '14 weeks',
      category: 'Robotics'
    },
    {
      title: 'SolidWorks CAD',
      icon: Wrench,
      description: 'Professional 3D modeling and engineering design for mechanical projects.',
      level: 'Beginner to Advanced',
      duration: '8 weeks',
      category: 'Engineering'
    },
    {
      title: 'Line Follower Robots',
      icon: Navigation,
      description: 'Design and build autonomous line-following robots with advanced algorithms.',
      level: 'Intermediate',
      duration: '6 weeks',
      category: 'Robotics'
    },
    {
      title: 'Cryptography',
      icon: Shield,
      description: 'Explore modern encryption techniques and cybersecurity fundamentals.',
      level: 'Advanced',
      duration: '10 weeks',
      category: 'Security'
    },
    {
      title: 'Arduino Programming',
      icon: Cpu,
      description: 'Learn microcontroller programming and IoT development with Arduino.',
      level: 'Beginner',
      duration: '8 weeks',
      category: 'Electronics'
    },
    {
      title: 'C++ Masterclass',
      icon: GraduationCap,
      description: 'Advanced C++ programming concepts for competitive programming and systems.',
      level: 'Advanced',
      duration: '12 weeks',
      category: 'Programming'
    },
    {
      title: 'PCB Design & KiCad',
      icon: CircuitBoard,
      description: 'Professional printed circuit board design using KiCad and industry standards.',
      level: 'Intermediate to Advanced',
      duration: '10 weeks',
      category: 'Electronics'
    },
    {
      title: 'Coding Lab',
      icon: Binary,
      description: 'Collaborative coding sessions covering algorithms, data structures, and problem-solving.',
      level: 'All Levels',
      duration: 'Ongoing',
      category: 'Programming'
    },
    {
      title: 'Linux',
      icon: Cpu,
      description: 'Master Linux system administration, command line tools, and shell scripting.',
      level: 'Beginner to Advanced',
      duration: '6 weeks',
      category: 'Programming'
    },
    {
      title: 'Internet of Things',
      icon: CircuitBoard,
      description: 'Build connected devices and IoT systems using sensors, microcontrollers, and cloud platforms.',
      level: 'Intermediate',
      duration: '8 weeks',
      category: 'Electronics'
     }
  ];

  const categories = ['All', ...new Set(workshops.map(w => w.category))];
  const filteredWorkshops = activeFilter === 'All'
    ? workshops
    : workshops.filter(w => w.category === activeFilter);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section id="workshops" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-3xl border border-white/25 mb-8 shadow-xl relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,107,53,0.08) 100%)',
              boxShadow: '0 4px 20px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)',
              }}
            />
            <BookOpen className="w-5 h-5 text-orange-300 relative z-10" />
            <span className="text-white/90 font-medium relative z-10">Learn & Grow</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Workshops &{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Masterclasses
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Enhance your skills with our comprehensive workshops led by industry experts and experienced mentors. 
            From beginner-friendly sessions to advanced masterclasses.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <FilterButton
                key={category}
                active={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </FilterButton>
            ))}
          </div>
        </motion.div>

        {/* Workshops Display */}
        {activeFilter === 'All' ? (
          <div className="relative mb-16">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto px-16 hide-scrollbar"
            >
              {workshops.map((workshop, index) => (
                <div key={workshop.title} className="flex-shrink-0 w-80">
                  <WorkshopCard workshop={workshop} index={index} />
                </div>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
            layout
          >
            {filteredWorkshops.map((workshop, index) => (
              <WorkshopCard
                key={workshop.title}
                workshop={workshop}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
    </>
  );
};

export default Workshops;