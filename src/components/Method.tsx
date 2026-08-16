"use client";

const steps = [
  { num: "01.", title: "Audit", description: "Tearing down the existing to find the foundation." },
  { num: "02.", title: "Strategy", description: "Defining the voice that cuts through the noise." },
  { num: "03.", title: "Design", description: "Visuals that are as functional as they are beautiful." },
  { num: "04.", title: "Launch", description: "Deployment across digital and physical touchpoints." },
];

export default function Method() {
  return (
    <section
      id="services"
      className="relative bg-[#C83D32] text-black p-4 sm:p-8 md:p-12 mb-0 rounded-3xl shadow-card min-h-[80vh] flex flex-col justify-center concrete-bg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border-l-4 border-black pl-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.8]">
            The<br />Method
          </h2>
          <p className="font-bold text-lg md:text-xl max-w-sm">
            We don&apos;t guess. We dissect, strategize, and reconstruct.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-black text-[#C83D32] p-6 hover:translate-x-4 transition-transform duration-300"
            >
              <h3 className="text-xl font-[family-name:var(--font-roboto-mono)] font-bold mb-2">
                {step.num} {step.title}
              </h3>
              <p className="text-white font-sans opacity-90">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}