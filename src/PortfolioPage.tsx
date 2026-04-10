/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Flower2, ArrowLeft } from 'lucide-react';

const images = [
  // Original 6 from homepage gallery
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  "/arsbotanica/portfolio/springSilkInstallation.png",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
  "/arsbotanica/portfolio/flowersInSink.png",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
  "/arsbotanica/portfolio/flowersOnTable.png",
  // 6 additional flower shop images
  "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&q=80&w=800",
];

export default function PortfolioPage() {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-sm border-b border-brand-ink/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Flower2 className="w-6 h-6 text-brand-olive" />
            <span className="font-display text-xl tracking-widest uppercase">Ars Botanica</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:text-brand-clay transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </header>

      <main className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="font-display text-5xl md:text-7xl mb-4">The Portfolio</h1>
            <div className="w-24 h-px bg-brand-clay" />
            <p className="mt-6 text-brand-ink/60 uppercase tracking-widest text-sm">
              {images.length} works
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.08 }}
                className={`overflow-hidden rounded-lg ${index % 3 === 1 ? 'md:translate-y-12' : ''}`}
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <p className="text-brand-ink/60 mb-8 text-lg">Ready to work together?</p>
            <Link
              to="/#contact"
              className="bg-brand-olive text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-brand-ink transition-all inline-block"
            >
              Inquire Now
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
