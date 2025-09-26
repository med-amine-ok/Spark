import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Polymaze = () => {
  const navigate = useNavigate();

  const event = {
    title: 'Polymaze',
    description: 'An innovative maze-solving challenge combining algorithmic thinking with physical robot navigation.',
    date: 'April 22-24, 2024',
    location: 'Engineering Building',
    status: 'upcoming',
    participants: '150+ teams',
    prize: '$3,000',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 relative">
      <div className="container mx-auto px-6 py-20">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate('/')}
          className="flex items-center text-white/70 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl p-8 backdrop-blur-3xl border border-white/20 shadow-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,107,53,0.06) 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{event.title}</h1>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                {event.status}
              </span>
            </div>

            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-8" />

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {event.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-white/70">
                <Calendar className="w-5 h-5 mr-3 text-orange-300" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-white/70">
                <MapPin className="w-5 h-5 mr-3 text-orange-300" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-white/70">
                <Users className="w-5 h-5 mr-3 text-orange-300" />
                <span>{event.participants}</span>
              </div>
              <div className="flex items-center text-white/70">
                <Trophy className="w-5 h-5 mr-3 text-orange-300" />
                <span>Prize Pool: {event.prize}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-6 rounded-xl transition-colors"
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Polymaze;