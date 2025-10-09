import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Users, Mail, Sparkles, Trophy, Target } from 'lucide-react';

const FloatingOrb = ({ className, delay = 0, duration = 4 }) => (
  <motion.div
    className={`absolute rounded-full blur-2xl ${className}`}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
);


const ActionButton = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClasses = "relative overflow-hidden font-semibold rounded-2xl px-8 py-4 transition-all duration-500 group backdrop-blur-2xl border";
  
  const variants = {
    primary: `
      text-white border-white/30 shadow-2xl
      hover:bg-white/20 hover:border-white/40 hover:shadow-[0_20px_40px_rgba(255,109,53,0.4)]
    `,
    glass: `
      backdrop-blur-3xl text-white border-white/25 shadow-xl
      hover:bg-white/15 hover:border-white/35 hover:shadow-[0_15px_35px_rgba(255,255,255,0.1)]
    `
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.02,
        y: -2,
      }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{
        background: variant === 'primary' 
          ? 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,107,53,0.1) 100%)',
        boxShadow: variant === 'primary'
          ? '0 8px 32px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3), 0 0 0 1px rgba(255,255,255,0.1)'
          : '0 8px 32px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 0 1px rgba(255,255,255,0.08)'
      }}
      {...props}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"
        style={{
          background: variant === 'primary'
            ? 'linear-gradient(135deg, rgba(255,149,0,0.4) 0%, rgba(255,107,53,0.3) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,107,53,0.1) 100%)',
          mixBlendMode: 'overlay'
        }}
      />
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)',
        }}
      />
      <span className="relative flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};


const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      className="min-h-screen  flex items-center justify-center relative overflow-hidden"
      
    >
      
      <div className="container mt-28 mx-auto px-6 z-10 relative">
        <div className="text-center text-white max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Spark
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/80 leading-relaxed">
              Igniting Innovation, Building Tomorrow - Join the premier scientific and technology community 
              where brilliant minds collaborate to shape the future of our university and beyond
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <ActionButton variant="primary">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </ActionButton>
            
            <ActionButton variant="glass">
              <Calendar className="mr-2 h-5 w-5" />
              Upcoming Events
            </ActionButton>
            
            <ActionButton variant="glass">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </ActionButton>
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-16 rounded-full border-2 border-white/40 flex justify-center backdrop-blur-2xl shadow-xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 8px 24px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.3) 0%, transparent 60%)',
            }}
          />
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-4 bg-white/70 rounded-full mt-3 shadow-sm relative z-10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;