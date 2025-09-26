import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Image, Video, Camera, ChevronLeft, ChevronRight, Users, Award } from 'lucide-react';

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
      group cursor-pointer
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

const FilterButton = ({ active, onClick, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`
      px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
      backdrop-blur-2xl border relative overflow-hidden group
      ${active 
        ? 'text-white border-white/30' 
        : 'text-white/70 border-white/20 hover:border-white/30 hover:text-white/90'
      }
    `}
    style={{
      background: active 
        ? 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      boxShadow: active 
        ? '0 4px 16px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
        : '0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
    }}
  >
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 70%)',
      }}
    />
    <span className="relative z-10 capitalize">{children}</span>
  </motion.button>
);

const CarouselButton = ({ direction, onClick, disabled }) => (
  <motion.button
    onClick={onClick}
    disabled={disabled}
    whileHover={{ scale: disabled ? 1 : 1.1 }}
    whileTap={{ scale: disabled ? 1 : 0.9 }}
    className={`
      w-12 h-12 rounded-full backdrop-blur-2xl border border-white/25 
      flex items-center justify-center transition-all duration-300
      ${disabled 
        ? 'text-white/30 cursor-not-allowed' 
        : 'text-white hover:border-white/40 hover:bg-white/20'
      }
    `}
    style={{
      background: disabled 
        ? 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
        : 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,107,53,0.1) 100%)',
      boxShadow: disabled 
        ? '0 2px 8px rgba(0,0,0,0.1)'
        : '0 4px 16px rgba(255,107,53,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
    }}
  >
    {direction === 'prev' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
  </motion.button>
);

const ImageCarousel = ({ items, onItemClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || items.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length, isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative aspect-[3/2] max-w-3xl mx-auto rounded-3xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => onItemClick(items[currentIndex])}
          >
            <img
              src={items[currentIndex].thumbnail}
              alt={items[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Video indicator */}
            {items[currentIndex].type === 'video' && (
              <div className="absolute top-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-full p-3 border border-white/20">
                  <Video className="w-5 h-5 text-white" />
                </div>
              </div>
            )}

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full backdrop-blur-2xl border border-white/30 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,107,53,0.1) 100%)',
                  boxShadow: '0 8px 24px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
                }}
              >
                {items[currentIndex].type === 'video' ? (
                  <Play className="w-8 h-8 text-white ml-1" />
                ) : (
                  <Image className="w-8 h-8 text-white" />
                )}
              </motion.div>
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                {items[currentIndex].title}
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl border border-white/20 text-white/90 capitalize">
                {items[currentIndex].category}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {items.length > 1 && (
          <>
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <CarouselButton 
                direction="prev" 
                onClick={goToPrev}
                disabled={false}
              />
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <CarouselButton 
                direction="next" 
                onClick={goToNext}
                disabled={false}
              />
            </div>
          </>
        )}
      </div>

      {/* Indicators */}
      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-xl border ${
                index === currentIndex 
                  ? 'bg-orange-400 border-orange-300 shadow-lg' 
                  : 'bg-white/20 border-white/30 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const GalleryGrid = ({ items, onItemClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((item, index) => (
      <GalleryCard key={item.id} item={item} index={index} onClick={onItemClick} />
    ))}
  </div>
);

const GalleryCard = ({ item, index, onClick }) => (
  <GlassCard delay={index * 0.1} onClick={() => onClick(item)}>
    <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full backdrop-blur-2xl border border-white/30 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,107,53,0.1) 100%)',
            boxShadow: '0 4px 16px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
          }}
        >
          {item.type === 'video' ? (
            <Play className="w-6 h-6 text-white ml-0.5" />
          ) : (
            <Image className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </div>
      {item.type === 'video' && (
        <div className="absolute top-3 right-3">
          <div className="bg-black/70 backdrop-blur-sm rounded-full p-2 border border-white/20">
            <Video className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
    </div>
    <div className="p-2">
      <h3 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
        {item.title}
      </h3>
      <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl border border-white/20 text-white/80 capitalize">
        {item.category}
      </span>
    </div>
  </GlassCard>
);

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Robotics Workshop 2024',
      category: 'workshops',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
      fullSize: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200'
    },
    {
      id: 2,
      type: 'image',
      title: 'ARC Competition Winners',
      category: 'competitions',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      fullSize: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200'
    },
    {
      id: 3,
      type: 'video',
      title: 'Afrobot 2023 Highlights',
      category: 'events',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: 4,
      type: 'image',
      title: 'Arduino Programming Session',
      category: 'workshops',
      thumbnail: 'https://images.unsplash.com/photo-1559163499-413811fb2344?w=400',
      fullSize: 'https://images.unsplash.com/photo-1559163499-413811fb2344?w=1200'
    },
    {
      id: 5,
      type: 'image',
      title: 'Team Building Event',
      category: 'events',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
      fullSize: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200'
    },
    {
      id: 6,
      type: 'image',
      title: 'PCB Design Workshop',
      category: 'workshops',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
      fullSize: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200'
    },
    {
      id: 7,
      type: 'video',
      title: 'National Competition 2024',
      category: 'competitions',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
      videoUrl: 'https://www.youtube.com/watch?v=example'
    },
    {
      id: 8,
      type: 'image',
      title: 'Innovation Showcase',
      category: 'events',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
      fullSize: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200'
    }
  ];

  const categories = ['all', 'workshops', 'competitions', 'events'];
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (item) => {
    setSelectedMedia(item);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="gallery" className="py-20 relative z-10">
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
            <Camera className="w-5 h-5 text-orange-300 relative z-10" />
            <span className="text-white/90 font-medium relative z-10">Visual Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Our{' '}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore our journey through photos and videos from workshops, competitions, 
            and memorable moments that define our community.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div layout className="mb-16">
          {filteredItems.length > 0 && (
            <>
              <div className="mb-12">
                <ImageCarousel items={filteredItems} onItemClick={openLightbox} />
              </div>
              {/* <GalleryGrid items={filteredItems} onItemClick={openLightbox} /> */}
            </>
          )}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full backdrop-blur-2xl border border-white/20 text-white hover:bg-white/20 flex items-center justify-center"
                  onClick={closeLightbox}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
                
                {selectedMedia.type === 'video' ? (
                  <div 
                    className="bg-black/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                  >
                    <div className="aspect-video flex items-center justify-center text-white p-12">
                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-20 h-20 mx-auto mb-6 rounded-full backdrop-blur-2xl border border-white/30 flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(255,255,255,0.1) 100%)',
                            boxShadow: '0 8px 24px rgba(255,107,53,0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
                          }}
                        >
                          <Play className="w-10 h-10 text-white ml-1" />
                        </motion.div>
                        <p className="text-2xl font-bold mb-3">{selectedMedia.title}</p>
                        <p className="text-white/70 mb-6">Video content would be embedded here</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-xl backdrop-blur-2xl border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                        >
                          Watch on YouTube
                        </motion.button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedMedia.fullSize}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                  />
                )}
                
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">{selectedMedia.title}</h3>
                  <span className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-xl border border-white/20 text-white/90 capitalize">
                    {selectedMedia.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;