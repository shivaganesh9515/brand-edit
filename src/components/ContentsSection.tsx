"use client";

import { motion } from "framer-motion";
import RevealMotion from "./RevealMotion";

const contents = [
  { num: "01", title: "Welcome to the Brand Edit", desc: "Start Here", hash: "intro" },
  { num: "02", title: "Selected Works", desc: "Case Studies", hash: "work" },
  { num: "03", title: "The Psychology of Premium", desc: "My Process", hash: "process" },
  { num: "04", title: "How I Build Iconic Brands", desc: "Services", hash: "services" },
  { num: "05", title: "The Shift: Becoming the Brand", desc: "About Me", hash: "about" },
  { num: "06", title: "Final Note & Next Steps", desc: "Contact", hash: "contact" },
];

export default function ContentsSection() {
  return (
    <section
      id="contents"
      className="relative bg-brand-light-bg text-brand-black p-4 sm:p-8 md:p-12 mb-0 rounded-3xl shadow-card min-h-[80vh] flex flex-col"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/cardboard.png')`,
      }}
    >
      {/* Header */}
      <RevealMotion className="flex justify-between items-start mb-8 border-b-4 border-brand-black pb-2">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider mb-1">
            Elite Designs
          </span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter">
            CONTENTS
          </h2>
        </div>
        <span className="font-mono text-sm mt-2">2024</span>
      </RevealMotion>

      <div className="flex flex-col md:flex-row gap-8 h-full flex-grow">
        {/* Left Image */}
        <RevealMotion delay={0.1} className="w-full md:w-5/12 relative">
          <div className="h-full w-full bg-selection-red overflow-hidden relative border-2 border-brand-black min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80"
              alt="Fashion Editorial"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-brand-white px-2 py-1 text-xs font-bold uppercase border border-brand-black">
              Elena Miles
            </div>
          </div>
        </RevealMotion>

        {/* Right Content List */}
        <div className="w-full md:w-7/12 flex flex-col justify-center space-y-4">
          {contents.map((item, i) => (
            <RevealMotion key={item.num} delay={0.1 + i * 0.05}>
              <a
                href={`#${item.hash}`}
                className="group cursor-pointer border-b border-brand-gray-300 pb-3 hover:border-brand-black transition-colors block"
              >
                <div className="flex items-baseline space-x-4">
                  <span className="font-mono font-bold text-lg text-brand-gray-400 group-hover:text-selection-red transition-colors">
                    {item.num}.
                  </span>
                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono uppercase text-brand-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </a>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
