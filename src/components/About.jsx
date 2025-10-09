import { motion, useScroll, useTransform } from "framer-motion";

import {
  Target,
  Eye,
  Users,
  Lightbulb,
  Rocket,
  Trophy,
  Star,
  Zap,
} from "lucide-react";
import React, { useState, useEffect , useRef } from "react";
import afrobot from "../assets/logos/afrobot2.png";
import AST from "../assets/logos/ast.png";
import GICA from "../assets/logos/GICA.png";
import IEEE from "../assets/logos/ieee.png";
import CDTA from "../assets/logos/cdta.png";
import orbit from "../assets/logos/orbit.png";
import TalebBot from "../assets/logos/taleb_bot.png";
import Poly from "../assets/logos/polythech.png";
import vic from "../assets/logos/vic.png";
import fablab from "../assets/logos/fablab.png";
import incubator from "../assets/logos/incubator.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


const timelineData = [
  {
    type: "work",
    date: "2019",
    title: "SPARK Foundation",
    subtitle: "Establishment of SPARK as VIC's Scientific Department",
    description: "Launch of SPARK as the premier scientific and technology community at our university, fostering innovation and technological advancement among students",
    icon: <Rocket />,
  },
  {
    type: "education",
    date: "2020",
    title: "E-Lab Foundation",
    subtitle: "Launch of Digital Innovation Hub",
    description: "Establishment of our E-Lab platform providing students with resources, training, and hands-on experience in emerging technologies",
    icon: <Lightbulb />,
  },
  {
    type: "education",
    date: "2021",
    title: "Polymaze and GameCraft Creation",
    subtitle: "Pioneering Robotics and Game Development Events",
    description: "Launched two groundbreaking competitions: Polymaze for autonomous maze-solving robots, and GameCraft, a 48-hour game development hackathon with a 100K DA prize pool",
    icon: <Target />,
  },
  {
    type: "work",
    date: "2022",
    title: "National and International Competitions",
    subtitle: "Expanding Our Competitive Presence",
    description: "Represented Algeria in multiple international competitions, achieving recognition in robotics, AI, and space technology sectors",
    icon: <Star />,
  },
  {
    type: "work",
    date: "2024",
    title: "Eurobot 2024 Participation",
    subtitle: "International Robotics Excellence",
    description: "Competing in one of the world's most prestigious robotics competitions, showcasing Algerian innovation on a global stage",
    icon: <Trophy />,
  }, 
  {
    type: "work",
    date: "2025",
    title: "Afrobot 2025 Launch & Eurobot Return",
    subtitle: "Creating Africa's Premier Robotics Competition",
    description: "Launching Afrobot as Africa's leading robotics competition while continuing our international presence at Eurobot 2025",
    icon: <Zap />,
  },
  {
    type: "work",
    date: "2026",
    title: "A New Era for SPARK",
    subtitle: "Something Big Is Coming...",
    description: "Get ready for our most ambitious project yet. A revolutionary initiative that will redefine technology innovation in Africa. Stay tuned.",
    icon: <Star />,
  },
];

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
          ease: "linear",
        }}
        style={{ width: `${200 * logos.length}px` }}
      >
        {doubledLogos.map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 w-32 h-16 rounded-xl backdrop-blur-2xl border border-white/20 overflow-hidden shadow-lg group hover:border-white/30 transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              boxShadow:
                "0 4px 16px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%)",
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
  const totalImages = 18; // adjust if needed
  const [startIndex, setStartIndex] = useState(1); // 1-based index for the first image in the triad
  const [isTransitioning, setIsTransitioning] = useState(true);

  const transitionDuration = 6000; // total cycle length (ms)
  const fadeTime = 1200; // fade out/in length (ms)
  const step = 3; // how many images to advance each cycle

  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // clean any previous timers (defensive)
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      // start fade-out
      setIsTransitioning(false);

      // after fade time, advance indices and fade in
      timeoutRef.current = setTimeout(() => {
        setStartIndex((prev) => {
          // advance by `step` with wrap-around (1..totalImages)
          const next = ((prev - 1 + step) % totalImages) + 1;
          return next;
        });
        setIsTransitioning(true);
      }, fadeTime);
    }, transitionDuration);

    return () => {
      // cleanup on unmount
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [totalImages]); // totalImages rarely changes

  // helper to get modular image number (1..totalImages)
  const imgAt = (offset) => {
    return ((startIndex - 1 + offset) % totalImages) + 1;
  };

  // inline style for background with controlled transition timing
  const bgStyle = (imgNum) => ({
    backgroundImage: `url('./images/${imgNum}.webp')`,
    opacity: isTransitioning ? 1 : 0,
    transition: `opacity ${fadeTime}ms ease-in-out`,
  });

  return (
    <div className="relative py-8 px-4">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex gap-6 justify-center">
          <motion.div
            className="leftImage w-1/2 flex items-center justify-center self-center rounded-3xl overflow-hidden relative shadow-2xl hover:scale-[1.02] transition-transform duration-700 h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="imageContainer h-[240px] rounded-2xl overflow-hidden relative w-full inset-0 bg-cover bg-center"
              style={bgStyle(imgAt(0))}
            />
          </motion.div>

          <div className="w-1/2 flex flex-col gap-6">
            {[imgAt(1), imgAt(2)].map((imgNum, i) => (
              <motion.div
                key={i}
                className="h-[240px] rounded-3xl overflow-hidden relative shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={bgStyle(imgNum)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[imgAt(0), imgAt(1), imgAt(2)].map((imgNum, index) => (
            <motion.div
              key={index}
              className="relative h-[220px] rounded-3xl overflow-hidden shadow-xl hover:scale-[1.03] transition-transform duration-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={bgStyle(imgNum)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/15"
        style={{ y: backgroundY }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-2xl border border-white/25 mb-8 shadow-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,107,53,0.08) 100%)",
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
            About{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Spark
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="p-8 lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.h3 
                className="text-3xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                A creative hub where ideas come to life and possibilities are endless!
              </motion.h3>
              
              <motion.p 
                className="text-white/70 text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Spark is the scientific activity department for all tech enthusiasts
            within the Vision & Innovation Club to share their passion. The main
            objective of the department is to provide members with the right
            resources and tools -through training sessions and the E-lab, and
            the opportunities to participate in national and international
            competitions within the field. We aim to :
              </motion.p>

              <motion.ul 
                className="text-white/70 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  "Drive innovation through workshops and projects.",
                  "Foster collaboration and networking.",
                  "Support turning ideas into reality."
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-400" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          <ImageGallery />
        </div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className=""
            >
<VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.type}`}
              contentStyle={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
              date={item.date}
              iconStyle={{ background: "rgba(37, 37, 37, 1)", color: "#ffffffff" }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title font-bold">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.subtitle}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
            
          ))}
        </VerticalTimeline>
              </motion.div>
        
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
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-3xl border border-white/25 mb-8 mt-8shadow-xl relative overflow-hidden group"
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
            <Star className="w-5 h-5 text-orange-300 relative z-10" />
            <span className="text-white/90 font-medium relative z-10">
              Trusted By
            </span>
          </motion.div>
          <TrustLogoSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
