import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import lottie from 'lottie-web';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const animationRefs = useRef([]);
  const questionRefs = useRef([]);

 const faqData = [
  {
    question: "What is the Spark Department?",
    answer:
      "Spark is the innovation-driven technology department of our club, uniting enthusiasts in robotics, software development, and artificial intelligence. We bridge creativity and engineering to design intelligent systems, modern applications, and automated solutions that push the boundaries of technology.",
    icon: "⚡",
  },
  {
    question: "What is our Robotics Division about?",
    answer:
      "Our Robotics Division focuses on designing and building autonomous robots, embedded systems, and smart automation tools. From mechanical design to control algorithms, we combine hardware engineering with intelligent software to create innovative robotics projects.",
    icon: "🤖",
  },
  {
    question: "What technologies do we use in app and web development?",
    answer:
      "We develop scalable and modern applications using technologies like React, Next.js, Node.js, and Flutter. Our teams also explore cloud platforms, APIs, and UI/UX design to deliver full-stack solutions that are efficient, secure, and user-friendly.",
    icon: "💻",
  },
  {
    question: "What technologies power our robotics projects?",
    answer:
      "Our robotics projects are powered by tools such as ROS (Robot Operating System), Arduino, Raspberry Pi, and custom embedded systems. We use Python and C++ for control logic, computer vision, and AI modules, while integrating web technologies for monitoring and remote control.",
    icon: "⚙️",
  },
  {
  question: "How does Spark connect robotics with software development?",
  answer:
    "At Spark, we merge robotics engineering with modern software development to create complete intelligent systems. Our robots are not only built with precise hardware and sensors but are also powered by custom applications, AI models, and cloud-connected dashboards that make them smarter, adaptive, and user-interactive.",
  icon: "🌐",
},

  {
    question: "What kind of projects can members work on?",
    answer:
      "Members have the opportunity to contribute to projects such as autonomous navigation robots, robotic arms, IoT devices, mobile applications, and intelligent automation systems. We encourage cross-domain collaboration, blending robotics with software and AI.",
    icon: "🛠️",
  },
  
  {
    question: "What learning opportunities do we provide?",
    answer:
      "Spark offers continuous learning through workshops, technical bootcamps, and mentoring programs. Members gain access to our robotics lab, development resources, and real-world project experience, preparing them for national and international competitions.",
    icon: "📚",
  },
  {
    question: "What makes Spark unique?",
    answer:
      "What sets Spark apart is our multidisciplinary synergy—where robotics meets software development, AI, and innovation. We don’t just build projects; we create smart systems that reflect the future of technology while cultivating a community of passionate innovators.",
    icon: "✨",
  },
];


  useEffect(() => {
    faqData.forEach((_, index) => {
      if (questionRefs.current[index]) {
        const anim = lottie.loadAnimation({
          container: questionRefs.current[index],
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: '/Plus to X/plusToX.json'
        });
        animationRefs.current[index] = anim;
      }
    });

    return () => {
      animationRefs.current.forEach(anim => {
        if (anim) anim.destroy();
      });
    };
  }, []);

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      animationRefs.current[index]?.setDirection(-1);
      animationRefs.current[index]?.play();
      setActiveIndex(null);
    } else {
      if (activeIndex !== null) {
        animationRefs.current[activeIndex]?.setDirection(-1);
        animationRefs.current[activeIndex]?.play();
      }
      animationRefs.current[index]?.setDirection(1);
      animationRefs.current[index]?.play();
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-[90%] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Questions?
            </span>{" "}
            <span className="text-white">Answers.</span>
          </motion.h2>

          <motion.p
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Have questions? We've got answers! 
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4"
          transition={{
            layout: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 }
          }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              layout="position"
              initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                layout: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 }
              }}
              className={`${activeIndex === index
                ? 'md:col-span-2 w-full scale-100'
                : `${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} w-full md:max-w-[95%] ${activeIndex !== null ? 'scale-95' : 'scale-100'}`
              } transition-all duration-300`}
            >
              <motion.div
                layout="position"
                className={`relative group rounded-2xl overflow-hidden transition-all duration-500
                           ${activeIndex === index 
                             ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
                             : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/15'
                           } border backdrop-blur-xl`}
                whileHover={{ scale: activeIndex === index ? 1 : 1.01 }}
                transition={{ 
                  duration: 0.3,
                  layout: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 }
                }}
              >
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-400/0 via-red-500/10 to-pink-500/0 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500
                               ${activeIndex === index ? 'opacity-100' : ''}`} />

                {/* Question Button */}
                <button
                  className="relative w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left group"
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* Icon */}
                    <motion.div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                                 bg-gradient-to-br from-white/10 to-white/5 border border-white/10
                                 transition-all duration-500
                                 ${activeIndex === index ? 'scale-110 border-white/20' : ''}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Question Text */}
                    <span className={`font-semibold text-base md:text-lg transition-colors duration-300
                                    ${activeIndex === index ? 'text-white' : 'text-white/90'}`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Animated Icon */}
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div 
                      ref={el => questionRefs.current[index] = el}
                      className="w-6 h-6"
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      layout="position"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeInOut",
                        layout: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 md:px-8 pb-6 md:pb-7"
                      >
                        {/* Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5" />
                        
                        {/* Answer Text */}
                        <p className="text-white/70 leading-relaxed text-base md:text-lg pl-16">
                          {item.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom accent line */}
                {activeIndex === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
              </motion.div>
            </motion.div>
            
          ))}
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-orange-400/50" />
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;