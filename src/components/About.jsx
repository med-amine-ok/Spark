import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Users, Lightbulb, Rocket, Trophy, Star, Zap } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import afrobot from '../assets/logos/afrobot2.png';
import AST from '../assets/logos/ast.png';
import GICA from '../assets/logos/GICA.png';
import IEEE from '../assets/logos/ieee.png';
import CDTA from '../assets/logos/cdta.png';
import orbit from '../assets/logos/orbit.png';
import TalebBot from '../assets/logos/taleb_bot.png';
import Poly from '../assets/logos/polythech.png';
import vic from '../assets/logos/vic.png';
import fablab from '../assets/logos/fablab.png';
import incubator from '../assets/logos/incubator.png';

const FloatingOrb = ({ className, delay = 0, duration = 4 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    animate={{
      y: [-30, 30, -30],
      x: [-15, 15, -15],
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.3, 0.1]
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
      className="top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20" 
      delay={0}
      duration={12}
    />
    <FloatingOrb 
      className="top-1/3 right-32 w-80 h-80 bg-gradient-to-br from-red-500/15 to-pink-500/15" 
      delay={2}
      duration={10}
    />
    <FloatingOrb 
      className="bottom-32 left-1/4 w-88 h-88 bg-gradient-to-br from-orange-400/25 to-yellow-500/25" 
      delay={1}
      duration={14}
    />
    <FloatingOrb 
      className="bottom-20 right-20 w-112 h-112 bg-gradient-to-br from-pink-500/10 to-purple-500/10" 
      delay={3}
      duration={16}
    />
  </div>
);

const GlassContainer = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      type: 'spring', 
      stiffness: 200, 
      damping: 30,
      delay 
    }}
    viewport={{ once: true }}
    className={`
      relative overflow-hidden rounded-3xl
      backdrop-blur-3xl border border-white/20 shadow-2xl
      transition-all duration-700 ease-out
      ${className}
    `}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,107,53,0.06) 100%)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
  >
    <div 
      className="absolute inset-0 opacity-0 transition-opacity duration-700"
      style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 70%)',
      }}
    />
    {children}
  </motion.div>
);

const TrustLogoSlider = () => {
  const logos = [
    { name: "Afrobot", logo: afrobot },
    { name: "AST", logo: AST },
    { name: "GICA", logo: GICA },
    { name: "IEEE", logo: IEEE },
    { name: "CDTA", logo: CDTA },
    { name: "Orbit", logo: orbit },
    { name: "Taleb Bot", logo: TalebBot },
    { name: "Polythech", logo: Poly },
    { name: "VIC", logo: vic },
    { name: "Fablab", logo: fablab },
    { name: "Incubator", logo: incubator }, 
    
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

const ImageGallery = () => {
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop', alt: 'Space Innovation' },
    { id: 2, src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop', alt: 'Robotics Lab' },
    { id: 3, src: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=400&h=300&fit=crop', alt: 'Team Collaboration' },
    { id: 4, src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop', alt: 'Scientific Research' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="group relative overflow-hidden rounded-2xl backdrop-blur-2xl border border-white/15 aspect-[4/3] cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,107,53,0.03) 100%)',
          }}
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            delay: index * 0.1,
            type: 'spring',
            stiffness: 200,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            z: 50,
            transition: { duration: 0.6, ease: "easeOut" }
          }}
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.4 }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.4 }}
          />
          
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,107,53,0.1) 100%)',
            }}
            initial={{ scale: 0, rotate: -90 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Star className="w-5 h-5 text-white" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <div className="backdrop-blur-xl rounded-xl border border-white/15 p-3">
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-4 h-4 text-orange-300" />
                <span className="text-sm font-medium">{image.alt}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <AnimatedBackground />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/15"
        style={{ y: backgroundY }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-2xl border border-white/25 mb-8 shadow-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,107,53,0.08) 100%)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-5 h-5 text-orange-300" />
            </motion.div>
            <span className="text-white/90 font-medium">About Our Journey</span>
          </motion.div>

          <motion.h2 
            className="text-6xl md:text-7xl font-black mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Spark
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto text-white/75 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Founded with the vision of creating a dynamic ecosystem for scientific exploration 
            and technological advancement, Spark has been at the forefront of student innovation 
            for years.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <GlassContainer className="p-8 lg:p-10" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: 'Our Mission', desc: 'Foster innovation and scientific thinking among students' },
                { icon: Eye, title: 'Our Vision', desc: 'Leading scientific community bridging knowledge gaps' },
                { icon: Users, title: 'Community', desc: 'Diverse group of passionate innovators and creators' },
                { icon: Lightbulb, title: 'Innovation', desc: 'Breakthrough thinking through collaborative research' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-2xl backdrop-blur-2xl border border-white/15"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,107,53,0.04) 100%)',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12  flex items-center justify-center "
                     
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                {[
                  { year: '2018', event: 'Club Founded' },
                  { year: '2020', event: 'First Major Win' },
                  { year: '2024', event: '500+ Members' }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                  >
                    <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {item.year}
                    </div>
                    <p className="text-white/80 font-medium text-sm">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassContainer>

            <ImageGallery />

        </div>
         <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center mt-20"
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
                  <TrustLogoSlider />
                </motion.div>
      </div>
    </section>
  );
};

export default About;