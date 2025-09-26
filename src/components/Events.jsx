import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Trophy, Users, ExternalLink, Rocket, Award, Star } from 'lucide-react';

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
      relative overflow-hidden rounded-2xl p-6
      backdrop-blur-3xl border border-white/20 shadow-xl
      hover:border-white/30 transition-all duration-300
      group cursor-pointer
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

const ActionButton = ({ children, variant = "primary", className = "", ...props }) => (
  <motion.button
    whileHover={{ scale: 1.02, y: -1 }}
    whileTap={{ scale: 0.98 }}
    className={`
      relative overflow-hidden font-medium rounded-xl px-6 py-3 text-sm
      backdrop-blur-2xl border transition-all duration-300 group w-full
      ${variant === 'primary' 
        ? 'bg-white/15 text-white border-white/25 hover:bg-white/20 hover:border-white/35' 
        : 'bg-white/8 text-white/80 border-white/20 hover:bg-white/15 hover:border-white/25'
      }
      ${className}
    `}
    style={{
      background: variant === 'primary' 
        ? 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(247,147,30,0.15) 50%, rgba(255,255,255,0.1) 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
      boxShadow: '0 4px 16px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
    {...props}
  >
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
      style={{
        background: variant === 'primary'
          ? 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)'
          : 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 70%)',
      }}
    />
    <span className="relative flex items-center justify-center">
      {children}
    </span>
  </motion.button>
);

const StatusBadge = ({ status }) => (
  <span 
    className={`
      px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl border
      ${status === 'upcoming' 
        ? 'bg-green-500/20 text-green-300 border-green-500/30' 
        : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      }
    `}
    style={{
      boxShadow: '0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
    }}
  >
    {status}
  </span>
);

const InfoItem = ({ icon: Icon, children }) => (
  <div className="flex items-center text-sm text-white/70">
    <Icon className="w-4 h-4 mr-2 text-orange-300" />
    {children}
  </div>
);

const Events = () => {
  const navigate = useNavigate();

  const majorEvents = [
    {
      title: 'Afrobot',
      description: 'Our flagship robotics competition where teams design and build autonomous robots to compete in various challenging tasks.',
      date: 'March 15-17, 2024',
      location: 'University Main Hall',
      status: 'upcoming',
      participants: '200+ teams',
      prize: '$5,000',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Polymaze',
      description: 'An innovative maze-solving challenge combining algorithmic thinking with physical robot navigation.',
      date: 'April 22-24, 2024',
      location: 'Engineering Building',
      status: 'upcoming',
      participants: '150+ teams',
      prize: '$3,000',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Game Craft',
      description: 'Game development competition where creativity meets coding. Build the next breakthrough gaming experience.',
      date: 'Coming Soon',
      location: 'TBA',
      status: 'planned',
      participants: 'Open Registration',
      prize: 'TBA',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const pastAchievements = [
    {
      event: 'ARC Robotics Cup 2023',
      achievement: '1st Place - Autonomous Navigation',
      description: 'Advanced sensor integration and AI algorithms brought us to the top.',
      icon: Trophy
    },
    {
      event: 'Eurobot 2023',
      achievement: '3rd Place - Overall Competition',
      description: 'Competed against 200+ international teams with innovative design.',
      icon: Award
    },
    {
      event: 'National Tech Olympics 2023',
      achievement: 'Gold Medal - Robotics Division',
      description: 'Dominated the national competition with cutting-edge solutions.',
      icon: Star
    }
  ];

  return (
    <section id="events" className="py-20 relative z-10">
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
            <Rocket className="w-5 h-5 text-orange-300 relative z-10" />
            <span className="text-white/90 font-medium relative z-10">Events & Competitions</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Events &{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Competitions
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Join our exciting competitions and events that challenge your skills, expand your knowledge, 
            and connect you with like-minded innovators.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            - Major Events
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {majorEvents.map((event, index) => (
              <GlassCard key={event.title} delay={index * 0.1}>
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">{event.title}</h4>
                  <StatusBadge status={event.status} />
                </div>

                <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded-lg mb-4" />

                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <InfoItem icon={Calendar}>{event.date}</InfoItem>
                  <InfoItem icon={MapPin}>{event.location}</InfoItem>
                  <InfoItem icon={Users}>{event.participants}</InfoItem>
                  <InfoItem icon={Trophy}>Prize Pool: {event.prize}</InfoItem>
                </div>
                
                <ActionButton
                  onClick={() => navigate(`/${event.title.toLowerCase().replace(/\s+/g, '')}`)}
                  variant={event.status === 'upcoming' ? 'primary' : 'secondary'}
                >
                  {event.status === 'upcoming' ? 'Register Now' : 'Stay Updated'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </ActionButton>
              </GlassCard>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">- Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastAchievements.map((achievement, index) => (
              <GlassCard key={achievement.event} delay={0.5 + index * 0.1}>
                <div className="text-center">
                  <motion.div 
                    className="w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center backdrop-blur-2xl border border-white/25 shadow-lg relative overflow-hidden"
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
                      delay: 0.5 + index * 0.1 + 0.2
                    }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 70%)',
                      }}
                    />
                    <achievement.icon className="w-6 h-6 text-white relative z-10" />
                  </motion.div>
                  
                  <h4 className="text-sm font-semibold text-white/90 mb-1">{achievement.event}</h4>
                  <p className="text-orange-300 font-medium text-sm mb-2">{achievement.achievement}</p>
                  <p className="text-xs text-white/60 leading-relaxed">{achievement.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;