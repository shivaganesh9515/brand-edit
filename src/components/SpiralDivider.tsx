export default function SpiralDivider({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div className="relative z-30 h-16 -my-6 w-full overflow-hidden pointer-events-none select-none">
      <div
        className={`absolute w-[120%] -left-[10%] h-full ${variant === "dark" ? "spiral-divider" : "spiral-divider-light"}`}
      />
    </div>
  );
}