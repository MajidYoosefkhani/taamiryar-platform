type AiSectionProps = {
  title: string;
  description: string;
  button: string;
};

export default function AiSection({
  title,
  description,
  button,
}: AiSectionProps) {
  return (
    <section className="border-y border-slate-800 bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mb-6 text-6xl">
          🤖
        </div>

        <h3 className="text-3xl font-bold md:text-4xl">
          {title}
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>

        <button className="mt-10 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400">
          {button}
        </button>
      </div>
    </section>
  );
}