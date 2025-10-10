import { motion } from 'framer-motion';
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, ArrowUp, Sparkles } from 'lucide-react';


const GlassCard = ({ children, className = "", delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      type: 'spring', 
      stiffness: 300, 
      damping: 25,
      delay 
    }}
    viewport={{ once: true }}
    className={`
      relative overflow-hidden rounded-2xl p-6
      backdrop-blur-3xl border border-white/20 shadow-xl
      hover:border-white/30 transition-all duration-300
      group
      ${className}
    `}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,107,53,0.06) 100%)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
    whileHover={{ 
      scale: 1.02,
      y: -2,
    }}
    {...props}
  >
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(255,149,0,0.1) 0%, rgba(255,107,53,0.08) 50%, rgba(247,147,30,0.1) 100%)',
        mixBlendMode: 'overlay'
      }}
    />
    <div 
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
      }}
    />
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

const SocialButton = ({ social, index }) => (
  <motion.a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ 
      type: 'spring',
      stiffness: 400,
      damping: 20,
      delay: index * 0.1 
    }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-xl backdrop-blur-2xl border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 relative overflow-hidden group"
    style={{
      background: 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,255,255,0.1) 100%)',
      boxShadow: '0 4px 16px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
  >
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)',
      }}
    />
    <social.icon className="w-5 h-5 relative z-10" />
  </motion.a>
);

const QuickLinkButton = ({ link, index }) => (
  <motion.li
    key={link.name}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <motion.button
      onClick={() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
      whileHover={{ x: 4, scale: 1.02 }}
      className="text-white/70 hover:text-orange-300 transition-all duration-300 relative group text-sm font-medium"
    >
      {link.name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </motion.button>
  </motion.li>
);

const ContactItem = ({ icon: Icon, text, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
  >
    <div 
      className="w-8 h-8 rounded-lg backdrop-blur-xl border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,255,255,0.08) 100%)',
      }}
    >
      <Icon className="w-4 h-4 text-orange-300" />
    </div>
    <span className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
      {text}
    </span>
  </motion.div>
);

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/sparkclub', name: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/sparkclub', name: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/sparkclub', name: 'Facebook' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'mohamed_amine.ould_khaoua@g.enp.edu.dz' },
    { icon: Phone, text: '+213 556 04 53 93' },
    { icon: MapPin, text: 'National Polytechnic School of Algiers' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative text-white py-16 overflow-hidden"
    >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 mb-16 left-4 right-4"
        >
           
        </motion.div>
      <div className="container mx-auto px-6 relative z-10">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <GlassCard delay={0} className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden backdrop-blur-2xl border border-white/30"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)',
                  boxShadow: '0 6px 20px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, transparent 70%)',
                  }}
                />
                <Sparkles className="w-6 h-6 text-white relative z-10" />
              </motion.div>
              <span className="text-3xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Spark
              </span>
            </div>
            
            <p className="text-white/70 mb-8 leading-relaxed">
              Igniting innovation and fostering scientific thinking in the next generation of technology leaders. 
              Join our community of passionate students and researchers.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <SocialButton key={social.name} social={social} index={index} />
              ))}
            </div>
          </GlassCard>

          {/* Quick Links */}
          <GlassCard delay={0.1}>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <div 
                className="w-2 h-2 rounded-full mr-3"
                style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' }}
              />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <QuickLinkButton key={link.name} link={link} index={index} />
              ))}
            </ul>
          </GlassCard>

          {/* Contact Info */}
          <GlassCard delay={0.2}>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <div 
                className="w-2 h-2 rounded-full mr-3"
                style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' }}
              />
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactItem key={index} icon={info.icon} text={info.text} index={index} />
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Spark Scientific Club. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl backdrop-blur-2xl border border-white/25 text-white/80 hover:text-white hover:border-white/35 transition-all duration-300 relative overflow-hidden group flex items-center gap-2 text-sm font-medium"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,107,53,0.05) 100%)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 70%)',
                }}
              />
              <ArrowUp className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;