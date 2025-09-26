import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Users, Lightbulb, Calendar, Trophy, Rocket } from 'lucide-react';

const FloatingOrb = ({ className, delay = 0, duration = 4 }) => (
  <motion.div
    className={`absolute rounded-full blur-2xl ${className}`}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.4, 0.2]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <FloatingOrb 
      className="top-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-500/30 to-red-500/30" 
      delay={0}
      duration={8}
    />
    <FloatingOrb 
      className="top-1/3 right-20 w-64 h-64 bg-gradient-to-br from-red-500/25 to-pink-500/25" 
      delay={1.5}
      duration={6}
    />
    <FloatingOrb 
      className="bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-orange-400/35 to-yellow-500/35" 
      delay={0.8}
      duration={7}
    />
    <FloatingOrb 
      className="bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20" 
      delay={2.2}
      duration={9}
    />
    <FloatingOrb 
      className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-yellow-500/25 to-orange-600/25" 
      delay={1.2}
      duration={5}
    />
  </div>
);

const GlassCard = ({ children, className = "", delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      type: 'spring', 
      stiffness: 300, 
      damping: 25,
      delay 
    }}
    viewport={{ once: true }}
    className={`
      relative overflow-hidden rounded-3xl p-8
      backdrop-blur-3xl border border-white/25 shadow-2xl
      hover:border-white/35 transition-all duration-500
      group cursor-pointer h-full
      ${className}
    `}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,107,53,0.08) 100%)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.25), 0 0 0 1px rgba(255,255,255,0.05)'
    }}
    whileHover={{ 
      scale: 1.02,
      y: -6,
    }}
    {...props}
  >
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, rgba(255,149,0,0.15) 0%, rgba(255,107,53,0.1) 50%, rgba(247,147,30,0.12) 100%)',
        mixBlendMode: 'overlay'
      }}
    />
    <div 
      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 50%)',
      }}
    />
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

const FeatureCard = ({ feature, index }) => (
  <GlassCard delay={index * 0.15}>
    <div className="text-center h-full flex flex-col">
      <motion.div 
        className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden backdrop-blur-2xl border border-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)',
          boxShadow: '0 8px 24px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          boxShadow: '0 12px 32px rgba(255,107,53,0.4), inset 0 1px 0 rgba(255,255,255,0.5)'
        }}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 400,
          damping: 20,
          delay: index * 0.15 + 0.3
        }}
        viewport={{ once: true }}
      >
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 70%)',
          }}
        />
        <feature.icon className="w-10 h-10 text-white relative z-10 drop-shadow-sm" />
      </motion.div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-sm">
            {feature.title}
          </h3>
          <p className="text-white/80 leading-relaxed text-lg">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  </GlassCard>
);

const TimelineCard = ({ year, event, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ 
      type: 'spring',
      stiffness: 300,
      damping: 25,
      delay: index * 0.2 
    }}
    viewport={{ once: true }}
    className="text-center"
  >
    <motion.div 
      className="text-4xl font-black bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-3 drop-shadow-sm"
      whileHover={{ scale: 1.1 }}
    >
      {year}
    </motion.div>
    <p className="text-white/90 font-medium text-lg">{event}</p>
  </motion.div>
);

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To foster innovation, creativity, and scientific thinking among students while building practical skills for the future.'
    },
    {
      icon: Eye,
      title: 'Our Vision', 
      description: 'To be the leading scientific community that bridges the gap between academic knowledge and real-world applications.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'A diverse group of passionate students, researchers, and professionals working together to push boundaries.'
    },
    {
      icon: Lightbulb,
      title: 'Our Innovation',
      description: 'Encouraging breakthrough thinking through hands-on projects, competitions, and collaborative research.'
    }
  ];

  const timeline = [
    { year: '2018', event: 'Club Founded' },
    { year: '2020', event: 'First Major Competition Win' },
    { year: '2024', event: '500+ Active Members' }
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen py-20 relative overflow-hidden"
      
    >

      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-3xl border border-white/30 mb-10 shadow-2xl relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 50%, rgba(255,107,53,0.1) 100%)',
              boxShadow: '0 8px 32px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 70%)',
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <Rocket className="w-6 h-6 text-orange-300 drop-shadow-sm" />
            </motion.div>
            <span className="text-white/95 font-semibold text-lg relative z-10">About Our Journey</span>
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight text-white">
            About{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Spark
            </span>
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/80 leading-relaxed">
            Founded with the vision of creating a dynamic ecosystem for scientific exploration and technological advancement, 
            Spark has been at the forefront of student innovation for years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center min-h-[30vh]"
        >
          <GlassCard className="text-center p-8 w-[80%]">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.8 }}
              viewport={{ once: true }}
              className="w-24 h-24 mx-auto mb-4 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden backdrop-blur-2xl border border-white/30"
              style={{
                background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)',
                boxShadow: '0 8px 24px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
              }}
            >
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 70%)',
                }}
              />
              <Trophy className="w-12 h-12 text-white relative z-10 drop-shadow-sm" />
            </motion.div>

            <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Our Journey
            </h3>

            <div className="max-w-5xl mx-auto mb-6">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-4">
                Since our establishment, Spark has grown from a small group of enthusiastic students
                to a thriving community of innovators, researchers, and creators. We've successfully
                organized numerous workshops, participated in prestigious competitions like the ARC
                Robotics Cup and Eurobot, and continue to push the boundaries of what's possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <TimelineCard key={item.year} {...item} index={index} />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;