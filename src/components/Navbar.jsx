import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import logo from '../assets/SPARK-lgw.svg';

const navigationItems = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Events', target: '#events' },
  { label: 'Workshops', target: '#workshops' },
  { label: 'Gallery', target: '#gallery' },
  { label: 'Contact', target: '#contact' }
];

const scrollThreshold = 50;
const scrolledHeight = 60;
const defaultHeight = 70;

const Brand = memo(() => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-3 cursor-pointer group"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
    </div>
    <img src={logo} alt="Logo" className="w-auto h-20" />
  </motion.div>
));

const NavLink = memo(({ item, onClick, isMobile = false }) => (
  <motion.button
    onClick={() => onClick(item.target)}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`
      relative text-white font-medium transition-all duration-300 group
      ${isMobile 
        ? 'w-full text-left px-6 py-4 text-lg hover:bg-white/20 rounded-lg backdrop-blur-sm' 
        : 'px-4 py-2 text-white hover:text-orange-600'
      }
    `}
  >
    {item.label}
    {!isMobile && (
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
    )}
  </motion.button>
));

const CallToAction = memo(({ isMobile = false }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)" }}
    whileTap={{ scale: 0.95 }}
    className={`
      bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl 
      shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group
      ${isMobile ? 'w-full py-4 text-lg' : 'px-8 py-3'}
    `}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <span className="relative">Join Community</span>
  </motion.button>
));

const DesktopNavigation = memo(({ items, onNavigate }) => (
  <div className="hidden lg:flex items-center gap-2">
    {items.map((item) => (
      <NavLink
        key={item.label}
        item={item}
        onClick={onNavigate}
      />
    ))}
    <div className="ml-6">
      <CallToAction />
    </div>
  </div>
));

const MobileNavigation = memo(({ items, onNavigate, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110] lg:hidden"
          onClick={() => onNavigate(null)}
        />
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-0 right-0 h-full w-80 bg-white/20 backdrop-blur-3xl shadow-2xl z-[120] lg:hidden border-l border-white/20"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '-8px 0 32px rgba(0,0,0,0.1), inset 1px 0 0 rgba(255,255,255,0.2)'
          }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <Brand />
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onNavigate(null)}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-slate-700" />
              </motion.button>
            </div>
            <div className="flex-1 px-6 py-8 space-y-2">
              {items.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  onClick={onNavigate}
                  isMobile
                />
              ))}
            </div>
            <div className="p-6 border-t border-white/20">
              <CallToAction isMobile />
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
));

const MobileMenuToggle = memo(({ isOpen, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="lg:hidden p-3 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm relative z-[101]"
    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
    style={{ WebkitTapHighlightColor: 'transparent' }}
  >
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {isOpen ? (
        <X className="w-6 h-6 text-slate-700" />
      ) : (
        <Menu className="w-6 h-6 text-slate-700" />
      )}
    </motion.div>
  </motion.button>
));

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY > scrollThreshold);
  }, []);

  const navigateToSection = useCallback((target) => {
    if (!target) {
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback((e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    let rafId = null;
    
    const throttledScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          handleScroll();
          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-[100]"
    >
      <motion.div
        animate={{
          height: hasScrolled ? scrolledHeight : defaultHeight,
          marginTop: hasScrolled ? 12 : 10,
          marginLeft: hasScrolled ? 24 : 16,
          marginRight: hasScrolled ? 24 : 16,
          borderRadius: hasScrolled ? 24 : 16,
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 400, 
          damping: 30,
          duration: 0.3
        }}
        className={`
          relative overflow-hidden transition-all duration-500
          ${hasScrolled 
            ? 'bg-white/10 backdrop-blur-3xl shadow-2xl border border-white/20' 
            : 'bg-white/5 backdrop-blur-xl'
          }
        `}
        style={{
          background: hasScrolled 
            ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
          boxShadow: hasScrolled 
            ? '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 0 1px rgba(255,255,255,0.05)'
            : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <motion.div
              animate={{
                scale: hasScrolled ? 0.85 : 1,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 30 
              }}
            >
              <Brand />
            </motion.div>
            
            <motion.div
              animate={{
                scale: hasScrolled ? 0.9 : 1,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 30 
              }}
            >
              <DesktopNavigation 
                items={navigationItems}
                onNavigate={navigateToSection}
              />
            </motion.div>
            
            <motion.div
              animate={{
                scale: hasScrolled ? 0.85 : 1,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 30 
              }}
            >
              <MobileMenuToggle 
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </motion.div>
          </div>
        </div>
        
        {hasScrolled && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(251,146,60,0.1) 0%, rgba(239,68,68,0.05) 50%, rgba(236,72,153,0.1) 100%)',
              mixBlendMode: 'overlay'
            }}
          />
        )}
      </motion.div>

      <MobileNavigation
        items={navigationItems}
        onNavigate={navigateToSection}
        isOpen={isMobileMenuOpen}
      />
    </motion.header>
  );
};

export default memo(Navbar);