import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook,
  MessageCircle,
  Clock,
  Calendar,
  Users,
  ArrowRight,
  Copy,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

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
      relative overflow-hidden rounded-2xl
      backdrop-blur-3xl border border-white/20 shadow-xl
      hover:border-white/30 transition-all duration-300
      group cursor-pointer h-full
      ${className}
    `}
    style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,107,53,0.06) 100%)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
    whileHover={{ 
      scale: 1.02,
      y: -4,
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

const ActionButton = ({ children, onClick, className = "", icon: Icon, variant = "primary" }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`
      relative overflow-hidden font-medium rounded-xl px-6 py-3 text-sm
      backdrop-blur-2xl border transition-all duration-300 group
      ${variant === 'primary' 
        ? 'text-white border-white/25 hover:border-white/35' 
        : 'text-white/80 border-white/20 hover:border-white/30'
      }
      ${className}
    `}
    style={{
      background: variant === 'primary' 
        ? 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(247,147,30,0.15) 50%, rgba(255,255,255,0.1) 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
      boxShadow: '0 4px 16px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
  >
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3) 0%, transparent 70%)',
      }}
    />
    <span className="relative flex items-center justify-center gap-2">
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  </motion.button>
);

const AllContactInfoCard = () => {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      value: 'mohamed_amine.ould_khaoua@g.enp.edu.dz',
      link: 'mailto:mohamed_amine.ould_khaoua@g.enp.edu.dz',
      copyValue: 'mohamed_amine.ould_khaoua@g.enp.edu.dz',
      type: 'email'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+213 556 04 53 93',
      link: 'tel:+213556045393',
      copyValue: '+213556045393',
      type: 'phone'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'National Polytechnic School of Algiers, Algeria',
      link: 'https://maps.app.goo.gl/7rxewKMfQXorjy3v5',
      copyValue: 'National Polytechnic School of Algiers, Algeria',
      type: 'location'
    }
  ];

  return (
    <GlassCard className="p-6">
      <div className="text-center mb-6">
        <motion.div 
          className="w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden backdrop-blur-2xl border border-white/30"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)',
            boxShadow: '0 6px 20px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
          }}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring',
            stiffness: 400,
            damping: 20,
            delay: 0.2
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 70%)',
            }}
          />
          <MessageCircle className="w-6 h-6 text-white relative z-10" />
        </motion.div>
        <h3 className="text-lg font-bold text-white mb-2">Contact Information</h3>
        <p className="text-white/70 text-xs">Get in touch with us through any of these channels</p>
      </div>

      <div className="space-y-3">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-3 rounded-lg backdrop-blur-xl border border-white/20 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <motion.div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-2xl border border-white/25"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <info.icon className="w-4 h-4 text-orange-300" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-medium text-white text-xs mb-1 group-hover:text-orange-300 transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-white/70 text-xs leading-relaxed break-all">
                    {info.value}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCopy(info.copyValue, info.type)}
                  className="w-6 h-6 rounded-md backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30"
                >
                  {copied === info.type ? <span className="text-xs">✓</span> : <Copy className="w-3 h-3" />}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open(info.link, '_blank')}
                  className="w-6 h-6 rounded-md backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30"
                >
                  <ExternalLink className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 space-y-2">
        <ActionButton
          onClick={() => window.open('mailto:mohamed_amine.ould_khaoua@g.enp.edu.dz', '_blank')}
          icon={Mail}
          variant="primary"
          className="w-full py-2 text-xs"
        >
          Send Email
        </ActionButton>
        <ActionButton
          onClick={() => window.open('tel:+213556045393', '_blank')}
          icon={Phone}
          variant="secondary"
          className="w-full py-2 text-xs"
        >
          Call Us
        </ActionButton>
      </div>
    </GlassCard>
  );
};

const QuickContactCard = () => (
  <GlassCard className="p-8 text-center">
    <motion.div 
      className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden backdrop-blur-2xl border border-white/30"
      style={{
        background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)',
        boxShadow: '0 8px 24px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
      }}
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: 'spring',
        stiffness: 400,
        damping: 20,
        delay: 0.4
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div 
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 70%)',
        }}
      />
      <MessageSquare className="w-10 h-10 text-white relative z-10" />
    </motion.div>
    
    <h3 className="text-2xl font-bold text-white mb-4">
      Join Our Community
    </h3>
    <p className="text-white/70 mb-6 leading-relaxed">
      Ready to be part of something amazing? Connect with us through our social channels 
      or visit us at our office hours.
    </p>
    
    <div className="space-y-3">
      <ActionButton
        onClick={() => window.open('mailto:mohamed_amine.ould_khaoua@g.enp.edu.dz', '_blank')}
        icon={Mail}
        variant="primary"
        className="w-full"
      >
        Send Email
      </ActionButton>
      <ActionButton
        onClick={() => window.open('tel:+213556045393', '_blank')}
        icon={Phone}
        variant="secondary"
        className="w-full"
      >
        Call Us
      </ActionButton>
    </div>
  </GlassCard>
);

const JoinUsCard = () => {
  return (
    <GlassCard className="p-6 text-center">
      <motion.div 
        className="w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden backdrop-blur-2xl border border-white/30"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)',
          boxShadow: '0 6px 20px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
        }}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 400,
          damping: 20,
          delay: 0.3
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 70%)',
          }}
        />
        <Users className="w-6 h-6 text-white relative z-10" />
      </motion.div>
      
      <h3 className="text-lg font-bold text-white mb-3">
        Join Our Community
      </h3>
      <p className="text-white/70 mb-6 leading-relaxed text-sm">
        Ready to be part of something amazing? Connect with passionate innovators and start your journey with us.
      </p>
      
      <ActionButton
        onClick={() => window.open('mailto:mohamed_amine.ould_khaoua@g.enp.edu.dz?subject=Join Spark Club', '_blank')}
        icon={ArrowRight}
        variant="primary"
        className="w-full py-2 text-xs"
      >
        Join Us Now
      </ActionButton>
    </GlassCard>
  );
};

const SocialLinksCard = () => {
  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/spark_enp',
      color: 'hover:text-pink-400',
      followers: '2.5K'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/vicenp/posts/?feedView=all',
      color: 'hover:text-blue-400',
      followers: '5k'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://web.facebook.com/vic.enpa',
      color: 'hover:text-blue-500',
      followers: '16K'
    }
  ];

  return (
    <GlassCard className="p-6">
      <div className="flex items-center mb-4">
        <motion.div 
          className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden backdrop-blur-2xl border border-white/25 mr-3"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)',
            boxShadow: '0 4px 16px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Users className="w-5 h-5 text-white relative z-10" />
        </motion.div>
        <h3 className="text-lg font-bold text-white">Follow Us</h3>
      </div>
      
      <div className="space-y-2">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, x: 4 }}
            className={`flex items-center justify-between p-3 rounded-lg backdrop-blur-xl border border-white/20 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 ${social.color}`}
          >
            <div className="flex items-center">
              <social.icon className="w-4 h-4 mr-3" />
              <span className="font-medium text-sm">{social.name}</span>
            </div>
            <div className="flex items-center text-xs text-white/60">
              <span>{social.followers}</span>
              <ArrowRight className="w-3 h-3 ml-2" />
            </div>
          </motion.a>
        ))}
      </div>
    </GlassCard>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      value: 'mohamed_amine.ould_khaoua@g.enp.edu.dz',
      link: 'mailto:mohamed_amine.ould_khaoua@g.enp.edu.dz',
      copyable: true
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+213 556 04 53 93',
      link: 'tel:+213556045393',
      copyable: true
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'National Polytechnic School of Algiers, Algiers, Algeria',
      link: 'https://maps.google.com',
      copyable: false
    }
  ];

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          viewport={{ once: true }}
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
            <MessageCircle className="w-5 h-5 text-orange-300 relative z-10" />
            <span className="text-white/90 font-medium relative z-10">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Contact{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Have questions about our club, events, or workshops? We'd love to hear from you! 
            Reach out and join our community of innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AllContactInfoCard />

          <div className="flex flex-col gap-8">
            <SocialLinksCard />
            <JoinUsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;