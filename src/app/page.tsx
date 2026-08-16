import Cover from "@/components/Cover";
import SpiralDivider from "@/components/SpiralDivider";
import Contents from "@/components/Contents";
import Intro from "@/components/Intro";
import SelectedWorks from "@/components/SelectedWorks";
import Method from "@/components/Method";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Background Ambience */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 stardust-bg"
        style={{ zIndex: 0 }}
      />

      {/* Main Binder Container */}
      <div className="relative max-w-5xl mx-auto perspective-1000 min-h-[90vh]">
        <main>
          <Cover />
          <SpiralDivider />
          <Contents />
          <SpiralDivider />
          <Intro />
          <SpiralDivider variant="light" />
          <SelectedWorks />
          <SpiralDivider />
          <Method />
          <SpiralDivider />
          <Contact />
        </main>
      </div>
    </>
  );
}