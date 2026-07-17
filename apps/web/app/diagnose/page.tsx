"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function DiagnoseContent() {
  const searchParams = useSearchParams();

  const [problem, setProblem] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const device = searchParams.get("device") || "دستگاه شما";

  async function handleDiagnose() {
    if (!problem.trim()) return;

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
        }),
      });

      const data = await response.json();

      setResult(data.result || "تحلیل انجام نشد.");
    } catch {
      setResult("خطایی رخ داد. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-950 text-white px-6 py-12"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          تشخیص هوشمند خرابی
        </h1>

        <p className="text-slate-300 mb-8">
          مشکل {device} را توضیح دهید تا تعمیریار آن را تحلیل کند.
        </p>

        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="مثلاً: یخچال من سرد نمی‌کند..."
          className="w-full min-h-40 rounded-2xl bg-slate-900 border border-slate-700 p-4 text-white outline-none focus:border-cyan-400"
        />

        <button
          onClick={handleDiagnose}
          disabled={loading}
          className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black disabled:opacity-50"
        >
          {loading ? "در حال تحلیل..." : "شروع تحلیل"}
        </button>

        {result && (
          <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-slate-900 p-6">
            <h2 className="mb-3 text-xl font-bold text-cyan-400">
              نتیجه تحلیل
            </h2>

            <p className="whitespace-pre-wrap text-slate-200">
              {result}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function DiagnosePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          در حال بارگذاری...
        </div>
      }
    >
      <DiagnoseContent />
    </Suspense>
  );
}