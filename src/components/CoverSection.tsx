"use client";

import { motion } from "framer-motion";

const coverImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1529139574466-a302c2d36214?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1516726817505-f5ed8259b496?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=200&q=80",
];

export default function CoverSection() {
  return (
    <section
      id="cover"
      className="relative bg-brand-red text-brand-black p-4 sm:p-8 md:p-12 mb-0 rounded-3xl shadow-card transform origin-left transition-transform duration-700 min-h-[60vh] flex flex-col justify-between"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/concrete-wall.png')`,
      }}
    >
      {/* Grain Texture */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/noise-lines.png')`,
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center space-y-4 mt-8">
        <p className="text-xs font-mono tracking-[0.3em] uppercase opacity-70">
          The Strategy, Psychology &amp; Design
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
          The Brand Edit
        </h1>
        <div className="w-full h-px bg-brand-black opacity-20 my-4" />
        <p className="text-sm md:text-base font-bold tracking-widest uppercase">
          Create a brand that turns heads and makes money
        </p>
      </div>

      {/* Image Grid */}
      <div className="relative z-10 grid grid-cols-4 md:grid-cols-7 gap-2 my-8 md:my-12 px-2 md:px-12">
        {coverImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="aspect-[3/4] bg-brand-black overflow-hidden relative group"
          >
            <img
              src={src}
              alt={`model ${i + 1}`}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute bottom-1 left-1 text-[8px] font-mono text-brand-white opacity-0 group-hover:opacity-100">
              FIG.{i + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 flex justify-between items-end border-t border-brand-black border-opacity-20 pt-4">
        <div className="text-xs font-mono uppercase">
          Vol. 2024
          <br />
          Elite Designs
        </div>
        <div className="text-xs font-mono uppercase text-right">
          Based in India
          <br />
          Available Worldwide
        </div>
      </div>
    </section>
  );
}
