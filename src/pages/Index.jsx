import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Workshops from '@/components/Workshops';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/Background';
import Testimonials from '@/components/Testimonials';
import GlassCursor from '../utils/GlassCursor';

const Index = () => {
  return (
    <div className="min-h-screen relative">


      <AnimatedBackground />
      <Navbar />
      <main style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
      }}>
        <Hero />
        <About />
        <Events />
        <Workshops />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;