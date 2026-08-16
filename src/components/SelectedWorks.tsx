"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Noir Skincare",
    category: "Identity / Packaging / Social",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-[4/5]",
    offset: "",
  },
  {
    title: "Vogue Architectural",
    category: "Editorial / Web Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-[4/5]",
    offset: "md:mt-16",
  },
  {
    title: "Kult Coffee",
    category: "Rebranding / Merch",
    year: "",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
    aspect: "aspect-square",
    offset: "",
  },
];

export default function SelectedWorks() {
  return (
    <section id="work" className="relative bg-[#111] text-[#F2F0EB] p-4 sm:p-8 md:p-12 mb-0 rounded-3xl shadow-card min-h-[100vh]">
      <div className="flex justify-between items-center mb-12 border-b border-[#333] pb-4">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-white">Selected Works</h2>
        <div className="hidden md:block w-32 h-32 bg-red-600 rounded-full blur-[80px] absolute top-10 right-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Projects */}
        {projects.map((project) => (
          <div key={project.title} className={`group cursor-pointer ${project.offset}`}>
            <div className={`relative overflow-hidden ${project.aspect} border border-[#333] mb-4`}>
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {project.year && (
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 font-bold text-xs z-20">
                  {project.year}
                </div>
              )}
            </div>
            <div className="flex justify-between items-end border-t border-[#333] pt-2">
              <div>
                <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
                <p className="font-[family-name:var(--font-roboto-mono)] text-xs text-gray-400">
                  {project.category}
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 group-hover:text-red-600 transition-colors" />
            </div>
          </div>
        ))}

        {/* More Archives Block */}
        <div className="group cursor-pointer md:mt-16 bg-[#222] p-8 flex flex-col justify-between aspect-square border border-[#333] hover:bg-red-600 hover:text-black transition-colors duration-500">
          <div>
            <h3 className="text-4xl font-black uppercase leading-none mb-4">More Archives</h3>
            <p className="font-[family-name:var(--font-roboto-mono)] text-sm opacity-70">
              A deeper dive into the vault of past experiments, posters, and typography studies.
            </p>
          </div>
          <div className="flex justify-end">
            <ArrowRight className="w-12 h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}