import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Quote, Award, Star } from 'lucide-react';

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
      relative overflow-hidden rounded-3xl
      backdrop-blur-3xl border border-white/25 shadow-2xl
      hover:border-white/35 transition-all duration-500
      group
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

const TrustLogoSlider = () => {
  const logos = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&h=60&fit=crop" },
    { name: "NVIDIA", logo: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=120&h=60&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop" },
    { name: "Arduino", logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=120&h=60&fit=crop" },
    { name: "Boston Dynamics", logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=120&h=60&fit=crop" },
    { name: "IEEE", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "OpenAI", logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=120&h=60&fit=crop" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=120&h=60&fit=crop" }
  ];

  const doubledLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden w-full ">
      
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: [0, -100 * logos.length] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ width: `${200 * logos.length}px` }}
      >
        {doubledLogos.map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 w-24 h-12 rounded-xl backdrop-blur-2xl border border-white/20 overflow-hidden shadow-lg group hover:border-white/30 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '0 4px 16px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%)',
              }}
            />
            <img
              src={logo.logo}
              alt={logo.name}
              className="w-full h-full object-contain p-2 filter brightness-0 invert opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Liu",
      role: "Software Engineer at Google",
      company: "Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      content: `Spark Scientific Club transformed my understanding of robotics and AI. The hands-on workshops and mentorship I received here directly led to my internship at Google and eventual full-time offer. The collaborative environment and cutting-edge projects prepared me for real-world challenges in ways traditional coursework never could.`,
      achievement: "Google Software Engineer",
      year: "Class of 2023"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Robotics Engineer at Boston Dynamics",
      company: "Boston Dynamics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: `The robotics competitions at Spark pushed me beyond my comfort zone. Building autonomous robots for Afrobot taught me system integration, real-time programming, and problem-solving under pressure. These skills became the foundation of my career at Boston Dynamics, where I now work on humanoid robot development.`,
      achievement: "Boston Dynamics Engineer",
      year: "Class of 2022"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "AI Research Scientist at OpenAI",
      company: "OpenAI",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: `Spark's research-oriented approach and access to cutting-edge technology gave me early exposure to machine learning and neural networks. The club's emphasis on both theoretical understanding and practical implementation prepared me perfectly for my PhD and current role in AI research.`,
      achievement: "OpenAI Research Scientist",
      year: "Class of 2021"
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      role: "Startup Founder - TechVision AI",
      company: "TechVision AI",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: `The entrepreneurial spirit at Spark inspired me to start my own AI company. The club's network of mentors, industry connections, and collaborative projects provided the perfect launchpad. We've now raised $2M in seed funding and our computer vision technology is being used by major retailers.`,
      achievement: "Successful Startup Founder",
      year: "Class of 2020"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <Shield className="w-5 h-5 text-orange-300" />
            </motion.div>
            <span className="text-white/90 font-medium relative z-10">Social Proof</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Success{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders and proven by our alumni success stories
          </p>
        </motion.div>

        {/* Alumni Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 mt-(-20) "
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Alumni Success Stories</h3>
          
          <GlassCard className="p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center gap-8"
              >
                <div className="lg:w-1/3 text-center lg:text-left">
                  <motion.div 
                    className="w-32 h-32 mx-auto lg:mx-0 rounded-3xl overflow-hidden mb-6 shadow-2xl border-4 border-white/20 backdrop-blur-2xl relative"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    style={{
                      boxShadow: '0 8px 32px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
                    }}
                  >
                    <div 
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 70%)',
                      }}
                    />
                    <img
                      src={testimonials[activeTestimonial]?.image}
                      alt={testimonials[activeTestimonial]?.name}
                      className="w-full h-full object-cover relative z-10"
                    />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">
                    {testimonials[activeTestimonial]?.name}
                  </h4>
                  <p className="text-orange-300 font-semibold mb-1">
                    {testimonials[activeTestimonial]?.role}
                  </p>
                  <p className="text-white/70 text-sm mb-2">
                    {testimonials[activeTestimonial]?.company}
                  </p>
                  <p className="text-white/50 text-sm">
                    {testimonials[activeTestimonial]?.year}
                  </p>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="relative mb-6">
                    <Quote 
                      size={40} 
                      className="absolute -top-4 -left-4 text-orange-300/30" 
                    />
                    <p className="text-lg text-white/80 leading-relaxed italic pl-8">
                      {testimonials[activeTestimonial]?.content}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="flex items-center p-4 rounded-2xl backdrop-blur-2xl border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      boxShadow: '0 4px 16px rgba(255,107,53,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Award size={20} className="text-orange-300 mr-3" />
                    <span className="text-white font-semibold">
                      {testimonials[activeTestimonial]?.achievement}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </GlassCard>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-xl border ${
                  index === activeTestimonial 
                    ? 'bg-orange-400 border-orange-300 scale-125 shadow-lg' 
                    : 'bg-white/20 border-white/30 hover:bg-white/30'
                }`}
                whileHover={{ scale: index === activeTestimonial ? 1.25 : 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-(-10)"
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
            <Star className="w-5 h-5 text-orange-300 relative z-10" />
            <span className="text-white/90 font-medium relative z-10">Trusted By</span>
          </motion.div>

          <h3 className="text-3xl font-bold text-white mb-4">Industry Leaders</h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Collaborating with world-class technology companies to provide real-world experience
          </p>

          <TrustLogoSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;