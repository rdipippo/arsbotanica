/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, Instagram, Mail, MapPin, ArrowRight, Flower2, Heart, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/80 backdrop-blur-sm border-b border-brand-ink/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flower2 className="w-6 h-6 text-brand-olive" />
          <span className="font-display text-xl tracking-widest uppercase">Ars Botanica</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest font-medium">
          <a href="#about" className="hover:text-brand-clay transition-colors">The Studio</a>
          <a href="#services" className="hover:text-brand-clay transition-colors">Services</a>
          <a href="#gallery" className="hover:text-brand-clay transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-brand-clay transition-colors">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-cream border-b border-brand-ink/10 px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-widest font-medium"
        >
          <a href="#about" onClick={() => setIsOpen(false)}>The Studio</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-clay uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
            Elizabeth Larson-DiPippo
          </span>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] mb-8 text-balance">
            Curated <br />
            <span className="italic font-light">Floral</span> <br />
            Artistry
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/70 max-w-md mb-10 leading-relaxed">
            Bespoke floral designs for weddings, events, and intimate gatherings. 
            We believe in the poetic language of flowers and their power to transform spaces.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-brand-olive text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-brand-ink transition-all flex items-center gap-2 group">
              Inquire Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-brand-ink/20 px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-brand-ink hover:text-white transition-all">
              View Portfolio
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] mask-oval overflow-hidden border-[12px] border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=1000" 
              alt="Floral Arrangement" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Weddings",
      description: "From intimate elopements to grand celebrations, we create cohesive floral narratives that reflect your unique love story.",
      icon: <Heart className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Events",
      description: "Elevate your corporate events, galas, and private parties with sophisticated floral installations and centerpieces.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Our Services</h2>
          <div className="w-24 h-px bg-brand-clay mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-8 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-brand-ink/40 transition-colors" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-brand-cream rounded-lg text-brand-olive">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl">{service.title}</h3>
              </div>
              <p className="text-brand-ink/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">The Portfolio</h2>
            <p className="text-brand-ink/60 uppercase tracking-widest text-sm">A collection of our recent work</p>
          </div>
          <button className="text-sm uppercase tracking-widest font-semibold flex items-center gap-2 hover:text-brand-clay transition-colors">
            View All Work <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`overflow-hidden rounded-lg ${index % 3 === 1 ? 'md:translate-y-12' : ''}`}
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-brand-olive text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-6xl mb-8">Let's Create <br /><span className="italic font-light">Together</span></h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed max-w-md">
            We are currently booking for the 2026 and 2027 seasons. 
            Tell us about your event and we'll be in touch to schedule a consultation.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">Email</p>
                <p className="text-lg">hello@arsbotanica.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">Instagram</p>
                <p className="text-lg">@arsbotanica_studio</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">Studio</p>
                <p className="text-lg">Newmarket, New Hampshire</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white p-8 md:p-12 rounded-3xl text-brand-ink space-y-6 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-semibold opacity-60">Name</label>
              <input type="text" className="w-full border-b border-brand-ink/20 py-2 focus:border-brand-olive outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-semibold opacity-60">Email</label>
              <input type="email" className="w-full border-b border-brand-ink/20 py-2 focus:border-brand-olive outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold opacity-60">Event Date</label>
            <input type="date" className="w-full border-b border-brand-ink/20 py-2 focus:border-brand-olive outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold opacity-60">Message</label>
            <textarea rows={4} className="w-full border-b border-brand-ink/20 py-2 focus:border-brand-olive outline-none transition-colors resize-none" />
          </div>
          <button className="w-full bg-brand-olive text-white py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-brand-ink transition-colors">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-brand-ink/10 bg-brand-cream">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Flower2 className="w-5 h-5 text-brand-olive" />
          <span className="font-display text-lg tracking-widest uppercase">Ars Botanica</span>
        </div>
        <p className="text-sm text-brand-ink/50 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Ars Botanica Studio. All rights reserved.
        </p>
        <div className="flex gap-6 text-brand-ink/50">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-olive transition-colors" />
          <Mail className="w-5 h-5 cursor-pointer hover:text-brand-olive transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

