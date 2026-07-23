import { ReactNode } from "react";

export default function Card({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
      {children}
    </div>
  );
}