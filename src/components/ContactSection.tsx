"use client";

import { Send, Camera, Briefcase, Mail } from "lucide-react";
import RevealMotion from "./RevealMotion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-brand-light-bg text-brand-black p-8 md:p-16 rounded-3xl shadow-card min-h-[60vh] flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <RevealMotion className="flex flex-col justify-between">
          <div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Elena Miles"
              className="w-48 h-64 object-cover grayscale mb-6 border-2 border-brand-black rotate-[-2deg]"
            />
            <h2 className="text-4xl font-black uppercase mb-4">
              Let&apos;s Build Something
              <br />
              Iconic Together.
            </h2>
            <p className="font-mono text-sm max-w-md mb-8">
              Currently accepting new projects for Q4 2024. If you&apos;re ready
              to stop playing safe and start building a legacy, get in touch.
            </p>
          </div>

          <div className="flex space-x-4">
            <button className="bg-brand-black text-brand-white px-8 py-3 font-bold uppercase hover:bg-selection-red transition-colors">
              Book a Call
            </button>
            <button className="border-2 border-brand-black px-8 py-3 font-bold uppercase hover:bg-brand-black hover:text-brand-white transition-colors">
              Email Me
            </button>
          </div>
        </RevealMotion>

        {/* Right Column */}
        <RevealMotion
          delay={0.15}
          className="flex flex-col justify-between items-start md:items-end h-full"
        >
          {/* Quick Query */}
          <div className="max-w-md mb-8 md:mb-0 border-l-4 md:border-l-0 md:border-r-4 border-brand-black pl-6 md:pl-0 md:pr-6 py-1 w-full text-left md:text-right">
            <p className="font-bold uppercase text-xs tracking-widest mb-4 opacity-70">
              Have a quick question?
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-brand-black/30 py-2 font-mono text-xs focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-black/40 md:text-right"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-brand-black/30 py-2 font-mono text-xs focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-black/40 md:text-right"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="HOW CAN I HELP?"
                  className="w-full bg-transparent border-b border-brand-black/30 py-2 font-mono text-xs focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-black/40 pr-8 md:pr-0 md:pl-8 md:text-right"
                />
                <button
                  type="submit"
                  className="absolute right-0 md:right-auto md:left-0 bottom-2 hover:text-selection-red transition-colors"
                  aria-label="Send Query"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-end">
            <div className="space-y-2 text-right">
              {[              {label: "Instagram", icon: Camera},
              {label: "LinkedIn", icon: Briefcase},
                {
                  label: "hello@elenamiles.com",
                  icon: Mail,
                  href: "mailto:hello@elenamiles.com",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href || "#"}
                  className="flex items-center justify-end space-x-2 group cursor-pointer"
                >
                  <span className="font-bold uppercase group-hover:text-selection-red transition-colors">
                    {link.label}
                  </span>
                  <link.icon className="w-5 h-5 flex-shrink-0" />
                </a>
              ))}
            </div>

            <div className="mt-12 text-right">
              <p className="text-[10px] font-mono uppercase opacity-50">
                © 2024 Elena Miles / Elite Designs.
                <br />
                All Rights Reserved. <br />
                Designed &amp; Developed in the Lab.
              </p>
            </div>
          </div>
        </RevealMotion>
      </div>
    </section>
  );
}
