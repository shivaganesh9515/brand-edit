import CoverSection from "@/components/CoverSection";
import SpiralDivider from "@/components/SpiralDivider";
import ContentsSection from "@/components/ContentsSection";
import IntroSection from "@/components/IntroSection";
import WorksSection from "@/components/WorksSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-selection-red selection:text-brand-white overflow-x-hidden py-8 px-2 sm:px-4 md:px-8">
      {/* Background Ambience */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
          zIndex: 0,
        }}
      />

      {/* Main Binder Container */}
      <div className="relative max-w-5xl mx-auto perspective-1000 min-h-[90vh]">
        <main>
          <PageTransition>
            <CoverSection />
            <SpiralDivider />
            <ContentsSection />
            <SpiralDivider />
            <IntroSection />
            <SpiralDivider />
            <WorksSection />
            <SpiralDivider />
            <ServicesSection />
            <SpiralDivider />
            <ContactSection />
          </PageTransition>
        </main>
      </div>

      {/* Mobile Go to Contents Button */}
      <a
        href="#contents"
        className="fixed bottom-6 right-6 z-50 bg-brand-black text-brand-white p-3 rounded-full shadow-2xl md:hidden border border-brand-gray-500 hover:bg-selection-red transition-colors active:scale-95 flex items-center justify-center"
        aria-label="Go to Contents"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      </a>
    </div>
  );
}
