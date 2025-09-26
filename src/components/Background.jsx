import { motion } from 'framer-motion';

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

const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <FloatingOrb
      className="top-20 left-20 w-72 h-72 bg-gradient-to-br from-orange-500/40 to-red-500/40"
      delay={0}
      duration={6}
    />
    <FloatingOrb
      className="bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-red-500/30 to-pink-500/30"
      delay={1}
      duration={8}
    />
    <FloatingOrb
      className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-400/35 to-yellow-500/35"
      delay={0.5}
      duration={5}
    />
    <FloatingOrb
      className="top-10 right-1/3 w-48 h-48 bg-gradient-to-br from-pink-500/25 to-purple-500/25"
      delay={2}
      duration={7}
    />
    <FloatingOrb
      className="bottom-10 left-1/4 w-80 h-80 bg-gradient-to-br from-yellow-500/20 to-orange-600/20"
      delay={1.5}
      duration={6}
    />
  </div>
);

export default AnimatedBackground;