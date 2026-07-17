"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const deviceData: Record<
  string,
  {
    title: string;
    icon: string;
    description: string;
    problems: string[];
  }
> = {
  "washing-machine": {
    title: "تعمیر لباسشویی",
    icon: "🧺",
    description:
      "تعمیر و عیب‌یابی تخصصی انواع ماشین لباسشویی در تعمیریار",
    problems: [
      "لباسشویی روشن نمی‌شود",
      "آب تخلیه نمی‌شود",
      "لباسشویی آبگیری نمی‌کند",
      "صدای غیرعادی دارد",
      "نشتی آب دارد",
      "لباس‌ها را خوب نمی‌شوید",
    ],
  },

  refrigerator: {
    title: "تعمیر یخچال",
    icon: "❄️",
    description:
      "تشخیص و تعمیر مشکلات انواع یخچال و فریزر",
    problems: [
      "یخچال خنک نمی‌کند",
      "فریزر یخ نمی‌زند",
      "یخچال صدای زیادی دارد",
      "نشتی آب",
      "برفک زیاد",
      "یخچال روشن نمی‌شود",
    ],
  },

  television: {
    title: "تعمیر تلویزیون",
    icon: "📺",
    description:
      "عیب‌یابی و تعمیر انواع تلویزیون",
    problems: [
      "تلویزیون روشن نمی‌شود",
      "تصویر ندارد",
      "صدا ندارد",
      "صفحه تلویزیون شکسته",
      "تصویر قطع و وصل می‌شود",
      "ریموت کار نمی‌کند",
    ],
  },

  mobile: {
    title: "تعمیر موبایل",
    icon: "📱",
    description:
      "تعمیر تخصصی انواع گوشی موبایل",
    problems: [
      "گوشی روشن نمی‌شود",
      "صفحه شکسته",
      "باتری زود خالی می‌شود",
      "گوشی شارژ نمی‌شود",
      "آب‌خوردگی",
      "مشکل آنتن",
    ],
  },

  laptop: {
    title: "تعمیر لپ‌تاپ",
    icon: "💻",
    description:
      "تعمیر و عیب‌یابی انواع لپ‌تاپ",
    problems: [
      "لپ‌تاپ روشن نمی‌شود",
      "کند شده است",
      "داغ می‌کند",
      "صفحه تصویر ندارد",
      "مشکل شارژ",
      "صدای غیرعادی",
    ],
  },

  car: {
    title: "تعمیر خودرو",
    icon: "🚗",
    description:
      "عیب‌یابی و تعمیر مشکلات خودرو",
    problems: [
      "خودرو روشن نمی‌شود",
      "صدای غیرعادی",
      "مشکل ترمز",
      "چراغ چک روشن شده",
      "مصرف سوخت زیاد",
      "مشکل کولر",
    ],
  },

  dishwasher: {
    title: "تعمیر ظرفشویی",
    icon: "🍽️",
    description:
      "تعمیر تخصصی ماشین ظرفشویی",
    problems: [
      "ظرف‌ها تمیز نمی‌شوند",
      "آب تخلیه نمی‌شود",
      "آبگیری نمی‌کند",
      "نشتی آب",
      "صدای زیاد",
      "روشن نمی‌شود",
    ],
  },

  vacuum: {
    title: "تعمیر جاروبرقی",
    icon: "🧹",
    description:
      "تعمیر و عیب‌یابی انواع جاروبرقی",
    problems: [
      "جاروبرقی روشن نمی‌شود",
      "مکش کم شده",
      "صدای زیاد",
      "بوی سوختگی",
      "داغ می‌کند",
      "خاموش می‌شود",
    ],
  },
};

export default function DevicePage() {
  const params = useParams();

  const slug = params.slug as string;

  const device = deviceData[slug];

  if (!device) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔧</div>

          <h1 className="text-2xl font-bold mb-3">
            دستگاه پیدا نشد
          </h1>

          <Link
            href="/"
            className="text-cyan-400 hover:underline"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-950 text-white"
    >
      <header className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-cyan-400"
          >
            تعمیریار
          </Link>

          <Link
            href="/"
            className="text-slate-400 hover:text-white transition"
          >
            ← صفحه اصلی
          </Link>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <div className="text-7xl mb-6">
            {device.icon}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            {device.title}
          </h1>

          <p className="text-slate-400 text-lg">
            {device.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            مشکل دستگاه شما چیست؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {device.problems.map((problem) => (
              <Link
                key={problem}
                href={`/diagnose?device=${slug}&problem=${encodeURIComponent(problem)}`}
                className="block text-right p-5 rounded-2xl border border-slate-800 bg-slate-900 hover:border-cyan-400 hover:bg-slate-800 transition"
              >
                <div className="flex items-center justify-between">
                  <span>{problem}</span>

                  <span className="text-cyan-400">
                    ←
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl border border-cyan-900 bg-cyan-950/30 px-8 py-6">
            <p className="text-slate-300 mb-4">
              مشکل خودت را پیدا نکردی؟
            </p>

            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-400 transition">
              توضیح مشکل برای تعمیریار
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}