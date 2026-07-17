"use client";

import AiSection from "@/components/sections/AiSection";
import DeviceGrid from "@/components/sections/DeviceGrid";
import Hero from "@/components/sections/Hero";
import { useState } from "react";

import fa from "@/locales/fa";
import en from "@/locales/en";
import ar from "@/locales/ar";

export default function HomePage() {
  const [language, setLanguage] = useState<"fa" | "en" | "ar">("fa");

  const translations = {
    fa,
    en,
    ar,
  };

  const t = translations[language];

  const isRTL = language === "fa" || language === "ar";

  const devices = [
    {
      icon: "🧺",
      name: t.devices.washingMachine,
    },
    {
      icon: "❄️",
      name: t.devices.refrigerator,
    },
    {
      icon: "📺",
      name: t.devices.television,
    },
    {
      icon: "📱",
      name: t.devices.mobile,
    },
    {
      icon: "💻",
      name: t.devices.laptop,
    },
    {
      icon: "🚗",
      name: t.devices.car,
    },
    {
      icon: "🍽️",
      name: t.devices.dishwasher,
    },
    {
      icon: "🧹",
      name: t.devices.vacuum,
    },
  ];

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-950 text-white"
    >
      {/* Navbar */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-bold text-cyan-400">
            TAAMIRYAR
          </h1>

          <div className="flex gap-2 text-sm">
            <button
              onClick={() => setLanguage("fa")}
              className={`rounded-lg px-3 py-2 ${
                language === "fa"
                  ? "bg-cyan-500 text-black"
                  : "text-slate-400"
              }`}
            >
              FA
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-lg px-3 py-2 ${
                language === "en"
                  ? "bg-cyan-500 text-black"
                  : "text-slate-400"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("ar")}
              className={`rounded-lg px-3 py-2 ${
                language === "ar"
                  ? "bg-cyan-500 text-black"
                  : "text-slate-400"
              }`}
            >
              AR
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Hero
        tagline={t.tagline}
        title={t.hero.title}
        description={t.hero.description}
        diagnoseWithPhoto={t.hero.diagnoseWithPhoto}
        describeProblem={t.hero.describeProblem}
      />

      {/* Devices */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <DeviceGrid
          title={t.devices.title}
          devices={devices}
        />
      </section>

      {/* AI */}
      <AiSection
        title="تعمیریار با هوش مصنوعی"
        description="مشکل دستگاهت را با هوش مصنوعی تحلیل کن."
        button="شروع تشخیص هوشمند"
      />
    </main>
  );
}