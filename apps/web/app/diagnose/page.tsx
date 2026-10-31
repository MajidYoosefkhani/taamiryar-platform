"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const deviceNames: Record<string, string> = {
  "washing-machine": "ماشین لباسشویی",
  refrigerator: "یخچال",
  television: "تلویزیون",
  mobile: "موبایل",
  laptop: "لپ‌تاپ",
  car: "خودرو",
  dishwasher: "ماشین ظرفشویی",
  vacuum: "جاروبرقی",
};

function DiagnoseContent() {
  const searchParams = useSearchParams();
  const deviceSlug = searchParams.get("device") || "";
  const device = deviceNames[deviceSlug] || deviceSlug || "دستگاه شما";

  const [problem, setProblem] = useState(
    () => searchParams.get("problem") || ""
  );
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleDiagnose() {
    const description = problem.trim();

    if (!description) {
      setResult("لطفاً ابتدا مشکل دستگاه را توضیح بده.");
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
        body: JSON.stringify({ device, problem: description }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "در تحلیل مشکل خطایی رخ داد.");
      }

      setResult(data.result || "پاسخی از سرویس دریافت نشد.");
    } catch (error) {
      setResult(
        error instanceof Error
          ? error.message
          : "ارتباط با سرویس تشخیص برقرار نشد."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-950 px-6 py-12 text-white"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold text-cyan-400">
          تشخیص هوشمند خرابی
        </h1>

        <p className="mb-8 text-slate-300">
          مشکل {device} را توضیح بده تا تعمیریار آن را تحلیل کند.
        </p>

        <textarea
          value={problem}
          onChange={(event) => setProblem(event.target.value)}
          placeholder="مثلاً: لباسشویی روشن نمی‌شود و هیچ صدایی ندارد..."
          maxLength={1500}
          className="min-h-40 w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-cyan-400"
        />

        <p className="mt-2 text-left text-xs text-slate-500">
          {problem.length}/1500
        </p>

        <button
          onClick={handleDiagnose}
          disabled={loading}
          className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black disabled:opacity-50"
        >
          {loading ? "🤖 در حال تحلیل..." : "🤖 تحلیل مشکل"}
        </button>

        {result && (
          <div className="mt-8 rounded-2xl border border-cyan-500/30 bg-slate-900 p-6">
            <h2 className="mb-3 text-xl font-bold text-cyan-400">
              نتیجه تحلیل تعمیریار
            </h2>

            <p className="whitespace-pre-wrap leading-8 text-slate-200">
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
        <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
          در حال بارگذاری...
        </div>
      }
    >
      <DiagnoseContent />
    </Suspense>
  );
}
