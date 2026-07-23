import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  const styles =
    variant === "primary"
      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
      : "bg-white/10 text-white border border-white/20 hover:bg-white/20";

  return (
    <button
      className={`rounded-2xl px-7 py-4 font-semibold transition duration-300 hover:scale-105 ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}