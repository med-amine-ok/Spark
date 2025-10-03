import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Quote, Award, Star } from 'lucide-react';
import pic1 from '../assets/pics/Djamel Ibrahim BELKHIRI.jpg';
import pic2 from '../assets/pics/Ghemari-yousra.jpg';
import pic3 from '../assets/pics/Yassine ZAOUADI.jpeg';
import pic4 from '../assets/pics/Aymene Khaled.jpg';
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

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "BELKHIRI Djamel Ibrahim ",
      role: "M2 Systèmes embarqués et traitement de l'information",
      company: "Université de Paris Saclay.",
      image: pic1,
      content: `SPARK has been a truly a sensational, life-changing experience since the day I was elected as HOD. Together with the dedicated members of the sub-department and the Galácticos SPARK committee, we made that a glorious year. We shared scientific and mechatronics content, participated in national and international competitions, and organized amazing, engaging, and convivial events, activities, and workshops for robotics and tech enthusiasts.`,
      achievement: "Participating in the Coupe de France de robotique 2024 (as the team leader) representing Algeria, ENP and SPARK",
      year: "Class of 2020"
    },
    {
      id: 2,
      name: "Khaled Aymene ",
      role: "Electronics Engineering Student",
      company: "Université de Paris Saclay.",
      image: pic4,
      content: `As an active member in Spark department, Ihad the chance to work in different project  in electronic , robotics, coding ... where U enhanced my skills in these fields, also the encouraging environment and motivated teammates gives the chance to learn more and give your best. `,
      achievement: "Winner of the NEST Hackathon theme AI orgnized by AST Club",
      year: "Class of 2022"
    },
    {
      id: 3,
      name: "Ghemari Yousra",
      role: "2nd year control engineering ",
      company: "École Nationale Polytechnique",
      image: pic2,
      content: `Joining Spark in my first year opened my eyes to a whole new world. Watching others practice robotics sparked my own curiosity and pushed me to grow into who I am today. Now, as the cohod leading Spark, I’m proud to carry forward the same inspiration that once shaped me.`,
      achievement: " qualified for ARC’s finals, earned 1st place in Spark League, and secured 3rd place in a racing car competition",
      year: "Class of 2022"
    },
    {
      id: 4,
      name: "Yassine ZAOUADI",
      role: "Control Systems -Automatique-",
      company: "École Nationale Polytechnique ",
      image: pic3,
      content: `"The scientific branch of the Vision and Innovation Club

Basically the perfect society to be part of when you want to get started in extra curricular projects, in it you’ll find fellow students that can mentor you in the beginning and also gives you the opportunity to learn new things that can be useful in the future.

Not forgetting the participation in various events and competitions whether they are internal or external to the school.`,
      achievement: "1st Prize in  the NEST Competition of AST Club",
      year: "Class of 2022"
    },
    {
      id: 5,
      name: "Bochra NEGHRA",
      role: "Second year preparatory student",
      company: "École Nationale Polytechnique",
      image: "",
      content: `SPARK was my scientific family. It was a space that celebrated every question and turned learning into an adventure. We ignited our curiosity together and made memories we will always cherish ⭐️`,
      achievement: "IT responsible for Afrobot 2025",
      year: "Class of 2024"
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

       
      </div>
    </section>
  );
};

export default Testimonials;