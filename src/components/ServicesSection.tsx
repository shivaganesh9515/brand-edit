"use client";

import { motion } from "framer-motion";
import RevealMotion from "./RevealMotion";

const steps = [
  { num: "01.", title: "Audit", desc: "Tearing down the existing to find the foundation." },
  { num: "02.", title: "Strategy", desc: "Defining the voice that cuts through the noise." },
  { num: "03.", title: "Design", desc: "Visuals that are as functional as they are beautiful." },
  { num: "04.", title: "Launch", desc: "Deployment across digital and physical touchpoints." },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-brand-red text-brand-black p-4 sm:p-8 md:p-12 mb-0 rounded-3xl shadow-card min-h-[80vh] flex flex-col justify-center"
      style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/concrete-wall.png')`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <RevealMotion className="border-l-4 border-brand-black pl-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.8]">
            The
            <br />
            Method
          </h2>
          <p className="font-bold text-lg md:text-xl max-w-sm">
            We don&apos;t guess. We dissect, strategize, and reconstruct.
          </p>
        </RevealMotion>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <RevealMotion key={step.num} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 16 }}
                className="bg-brand-black text-brand-red p-6 transition-transform duration-300"
              >
                <h3 className="text-xl font-mono font-bold mb-2">
                  {step.num} {step.title}
                </h3>
                <p className="text-brand-white font-sans opacity-90">
                  {step.desc}
                </p>
              </motion.div>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
