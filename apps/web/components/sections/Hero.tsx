type HeroProps = {
  tagline: string;
  title: string;
  description: string;
  diagnoseWithPhoto: string;
  describeProblem: string;
};

export default function Hero({
  tagline,
  title,
  description,
  diagnoseWithPhoto,
  describeProblem,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.15),_transparent_45%)]" />

      <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <p className="mb-6 text-lg font-medium text-cyan-400">
          {tagline}
        </p>

        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400">
            📷 {diagnoseWithPhoto}
          </button>

          <button className="rounded-2xl border border-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-500 hover:text-slate-950">
            ✍ {describeProblem}
          </button>
        </div>
      </div>
    </section>
  );
}