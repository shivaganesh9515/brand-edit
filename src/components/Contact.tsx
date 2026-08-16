"use client";

import { Send, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#F2F0EB] text-black p-8 md:p-16 rounded-3xl shadow-card min-h-[60vh] flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Elena Miles"
              className="w-48 h-64 object-cover grayscale mb-6 border-2 border-black rotate-[-2deg]"
            />
            <h2 className="text-4xl font-black uppercase mb-4">
              Let&apos;s Build Something<br />Iconic Together.
            </h2>
            <p className="font-[family-name:var(--font-roboto-mono)] text-sm max-w-md mb-8">
              Currently accepting new projects for Q4 2024. If you&apos;re ready to stop playing safe and
              start building a legacy, get in touch.
            </p>
          </div>

          <div className="flex space-x-4">
            <button className="bg-black text-white px-8 py-3 font-bold uppercase hover:bg-red-600 transition-colors">
              Book a Call
            </button>
            <button className="border-2 border-black px-8 py-3 font-bold uppercase hover:bg-black hover:text-white transition-colors">
              Email Me
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between items-start md:items-end h-full">
          {/* Quick Query Form */}
          <div className="max-w-md mb-8 md:mb-0 border-l-4 md:border-l-0 md:border-r-4 border-black pl-6 md:pl-0 md:pr-6 py-1 w-full text-left md:text-right">
            <p className="font-bold uppercase text-xs tracking-widest mb-4 opacity-70">
              Have a quick question?
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-black/30 py-2 font-[family-name:var(--font-roboto-mono)] text-xs focus:outline-none focus:border-black transition-colors placeholder:text-black/40 md:text-right"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-black/30 py-2 font-[family-name:var(--font-roboto-mono)] text-xs focus:outline-none focus:border-black transition-colors placeholder:text-black/40 md:text-right"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="HOW CAN I HELP?"
                  className="w-full bg-transparent border-b border-black/30 py-2 font-[family-name:var(--font-roboto-mono)] text-xs focus:outline-none focus:border-black transition-colors placeholder:text-black/40 pr-8 md:pr-0 md:pl-8 md:text-right"
                />
                <button
                  className="absolute right-0 md:right-auto md:left-0 bottom-2 hover:text-red-600 transition-colors"
                  aria-label="Send Query"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-end">
            <div className="space-y-2 text-right">
              <a href="#" className="flex items-center justify-end space-x-2 group cursor-pointer">
                <span className="font-bold uppercase group-hover:text-red-600 transition-colors">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="flex items-center justify-end space-x-2 group cursor-pointer">
                <span className="font-bold uppercase group-hover:text-red-600 transition-colors">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:hello@elenamiles.com" className="flex items-center justify-end space-x-2 group cursor-pointer">
                <span className="font-bold uppercase group-hover:text-red-600 transition-colors">hello@elenamiles.com</span>
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-12 text-right">
              <p className="text-[10px] font-[family-name:var(--font-roboto-mono)] uppercase opacity-50">
                © 2024 Elena Miles / Elite Designs.<br />
                All Rights Reserved.<br />
                Designed &amp; Developed in the Lab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}