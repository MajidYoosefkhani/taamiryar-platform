"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function DiagnosePage() {
  const searchParams = useSearchParams();

  const device = searchParams.get("device");
  const problem = searchParams.get("problem");

  const [description, setDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeProblem() {
    if (!description.trim()) {
      setResult("لطفاً ابتدا مشکل دستگاه را با جزئیات بیشتری توضیح بده.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          device,
          problem,
          description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "خطا در تحلیل مشکل");
      }

      setResult(data.result);
    } catch (error) {
      setResult(
        error instanceof Error
          ? error.message
          : "خطایی در تحلیل مشکل رخ داد."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-950 text-white"
    >
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-2xl font-bold text-cyan-400"
          >
            تعمیریار
          </Link>

          <Link
            href="/"
            className="text-slate-400 transition hover:text-white"
          >
            ← صفحه اصلی
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12 text-center">
          <div className="mb-6 text-6xl">
            🤖
          </div>

          <h1 className="text-4xl font-bold">
            تشخیص هوشمند مشکل
          </h1>

          <p className="mt-5 text-lg text-slate-400">
            مشکل دستگاهت را توضیح بده تا تعمیریار آن را تحلیل کند.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-cyan-900 bg-cyan-950/30 p-6">
          <p className="mb-2 text-sm text-slate-400">
            دستگاه
          </p>

          <p className="font-bold text-cyan-400">
            {device}
          </p>

          <p className="mb-2 mt-4 text-sm text-slate-400">
            مشکل انتخاب‌شده
          </p>

          <p className="font-bold">
            {problem}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <label className="mb-4 block text-lg font-bold">
            مشکل را با جزئیات بیشتری توضیح بده
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="مثلاً: دستگاه از دیروز روشن نمی‌شود و هیچ صدایی هم ندارد..."
            className="min-h-40 w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-cyan-400"
          />

          <button
            onClick={analyzeProblem}
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-cyan-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "🤖 تعمیریار در حال تحلیل است..."
              : "🤖 تحلیل مشکل توسط تعمیریار"}
          </button>
        </div>

        {result && (
          <div className="mt-8 rounded-2xl border border-cyan-900 bg-cyan-950/30 p-6">
            <div className="mb-3 text-3xl">
              🤖
            </div>

            <h2 className="mb-3 text-xl font-bold">
              تحلیل تعمیریار
            </h2>

            <p className="whitespace-pre-line leading-8 text-slate-300">
              {result}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}