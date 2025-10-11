import { Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Users, Mail, Sparkles, Trophy, Target } from 'lucide-react';
import Arduino from '../3D/arduino';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import CanvasLoader from '../3D/Loading.jsx'

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
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Spark
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/80 leading-relaxed">
              Join the leading tech and science community driving innovation and
              shaping the future together
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <ActionButton variant="primary">
              <a
                href="https://www.instagram.com/spark_enp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  Explore Our Journey on Instagram
                </span>
              </a>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </ActionButton>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {/* <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Suspense fallback={<CanvasLoader />}>
            <Environment preset="sunset" />
            <Arduino scale={0.8} position={[0, -1, 0]} rotation={[0, Math.PI / 2, 0]} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
          </Suspense>
        </Canvas> */}
      </div>

    </section>
  );
};

export default Hero;