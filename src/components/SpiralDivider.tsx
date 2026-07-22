"use client";

export default function SpiralDivider() {
  return (
    <div className="relative z-30 h-16 -my-6 w-full overflow-hidden pointer-events-none select-none">
      <div
        className="absolute w-[120%] -left-[10%] h-full opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='80' viewBox='0 0 40 80'%3E%3Cellipse cx='20' cy='40' rx='9' ry='30' fill='%23000000' stroke='%23666666' stroke-width='4' /%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
