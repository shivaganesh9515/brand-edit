export default function Intro() {
  return (
    <section
      id="intro"
      className="relative bg-white text-black p-8 md:p-16 mb-0 rounded-3xl shadow-card border-t-8 border-red-600"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-8">
          Design isn&apos;t just about making things look{" "}
          <span className="text-red-600 italic font-[family-name:var(--font-playfair)] lowercase">
            pretty
          </span>
          . <br />
          It&apos;s about domination.
        </h2>
        <div className="flex gap-8 flex-col md:flex-row font-[family-name:var(--font-roboto-mono)] text-sm leading-relaxed">
          <p className="flex-1">
            I&apos;m Elena. I help ambitious founders build brands that don&apos;t just sit on the shelf—they scream
            off it. Using a blend of consumer psychology and raw editorial aesthetics, I craft identities
            that are impossible to ignore.
          </p>
          <p className="flex-1">
            This portfolio is a collection of my obsession with typography, layout, and brand voice.
            It&apos;s raw, it&apos;s unpolished in spirit, but precise in execution. Welcome to the edit.
          </p>
        </div>
      </div>
    </section>
  );
}