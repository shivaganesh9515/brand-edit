"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import RevealMotion from "./RevealMotion";

const projects = [
  {
    title: "Noir Skincare",
    desc: "Identity / Packaging / Social",
    year: "2024",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    offset: false,
    aspect: "aspect-[4/5]",
  },
  {
    title: "Vogue Architectural",
    desc: "Editorial / Web Design",
    year: "2023",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    offset: true,
    aspect: "aspect-[4/5]",
  },
  {
    title: "Kult Coffee",
    desc: "Rebranding / Merch",
    year: null,
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
    offset: false,
    aspect: "aspect-square",
  },
];

export default function WorksSection() {
  return (
    <section
      id="work"
      className="relative bg-brand-dark-card text-brand-light-bg p-4 sm:p-8 md:p-12 mb-0 rounded-3xl shadow-card min-h-[100vh]"
    >
      <RevealMotion className="flex justify-between items-center mb-12 border-b border-brand-border-dark pb-4">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-brand-white">
          Selected Works
        </h2>
        <div className="hidden md:block w-32 h-32 bg-selection-red rounded-full blur-[80px] absolute top-10 right-10 pointer-events-none" />
      </RevealMotion>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <RevealMotion key={project.title} delay={i * 0.1}>
            <div
              className={`group cursor-pointer ${project.offset ? "md:mt-16" : ""}`}
            >
              <div
                className={`relative overflow-hidden ${project.aspect} border border-brand-border-dark mb-4`}
              >
                <div className="absolute inset-0 bg-selection-red opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay" />
                <img
                  src={project.img}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  alt={project.title}
                />
                {project.year && (
                  <div className="absolute top-4 right-4 bg-brand-white text-brand-black px-3 py-1 font-bold text-xs z-20">
                    {project.year}
                  </div>
                )}
              </div>
              <div className="flex justify-between items-end border-t border-brand-border-dark pt-2">
                <div>
                  <h3 className="text-2xl font-bold uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-brand-gray-400">
                    {project.desc}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 group-hover:text-selection-red transition-colors flex-shrink-0" />
              </div>
            </div>
          </RevealMotion>
        ))}

        {/* Text Only Block */}
        <RevealMotion delay={0.3}>
          <div className="group cursor-pointer md:mt-16 bg-[#222] p-8 flex flex-col justify-between aspect-square border border-brand-border-dark hover:bg-selection-red hover:text-brand-black transition-colors duration-500">
            <div>
              <h3 className="text-4xl font-black uppercase leading-none mb-4">
                More Archives
              </h3>
              <p className="font-mono text-sm opacity-70">
                A deeper dive into the vault of past experiments, posters, and
                typography studies.
              </p>
            </div>
            <div className="flex justify-end">
              <ArrowRight className="w-12 h-12" />
            </div>
          </div>
        </RevealMotion>
      </div>
    </section>
  );
}
