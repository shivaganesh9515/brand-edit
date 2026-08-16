"use client";

const sections = [
  { num: "01.", title: "Welcome to the Brand Edit", subtitle: "Start Here", href: "#intro" },
  { num: "02.", title: "Selected Works", subtitle: "Case Studies", href: "#work" },
  { num: "03.", title: "The Psychology of Premium", subtitle: "My Process", href: "#services" },
  { num: "04.", title: "How I Build Iconic Brands", subtitle: "Services", href: "#services" },
  { num: "05.", title: "The Shift: Becoming the Brand", subtitle: "About Me", href: "#about" },
  { num: "06.", title: "Final Note & Next Steps", subtitle: "Contact", href: "#contact" },
];

export default function Contents() {
  return (
    <section
      id="contents"
      className="relative bg-[#F2F0EB] text-black p-4 sm:p-8 md:p-12 mb-0 rounded-3xl shadow-card min-h-[80vh] flex flex-col cardboard-bg"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-8 border-b-4 border-black pb-2">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-wider mb-1">Elite Designs</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter">CONTENTS</h2>
        </div>
        <span className="font-[family-name:var(--font-roboto-mono)] text-sm mt-2">2024</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 h-full flex-grow">
        {/* Left Image */}
        <div className="w-full md:w-5/12 relative">
          <div className="h-full w-full bg-red-600 overflow-hidden relative border-2 border-black min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80"
              alt="Fashion Editorial"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-white px-2 py-1 text-xs font-bold uppercase border border-black">
              Elena Miles
            </div>
          </div>
        </div>

        {/* Right Content List */}
        <div className="w-full md:w-7/12 flex flex-col justify-center space-y-4">
          {sections.map((section) => (
            <a
              key={section.num}
              href={section.href}
              className="group cursor-pointer border-b border-gray-300 pb-3 hover:border-black transition-colors"
            >
              <div className="flex items-baseline space-x-4">
                <span className="font-[family-name:var(--font-roboto-mono)] font-bold text-lg text-gray-400 group-hover:text-red-600 transition-colors">
                  {section.num}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {section.title}
                  </h3>
                  <p className="text-xs font-[family-name:var(--font-roboto-mono)] uppercase text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {section.subtitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}