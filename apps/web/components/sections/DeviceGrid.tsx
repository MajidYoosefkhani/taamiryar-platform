"use client";

import Link from "next/link";

type Device = {
  icon: string;
  name: string;
};

type DeviceGridProps = {
  title: string;
  devices: Device[];
};

function createSlug(name: string) {
  const slugMap: Record<string, string> = {
    "لباسشویی": "washing-machine",
    "یخچال": "refrigerator",
    "تلویزیون": "television",
    "موبایل": "mobile",
    "لپ‌تاپ": "laptop",
    "خودرو": "car",
    "ظرفشویی": "dishwasher",
    "جاروبرقی": "vacuum",
  };

  return slugMap[name] || name.toLowerCase().replace(/\s+/g, "-");
}

export default function DeviceGrid({
  title,
  devices,
}: DeviceGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <h2 className="mb-8 text-center text-2xl font-bold">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {devices.map((device) => {
          const slug = createSlug(device.name);

          return (
            <Link
              key={device.name}
              href={`/device/${slug}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-800"
            >
              <div className="mb-4 text-5xl transition group-hover:scale-110">
                {device.icon}
              </div>

              <h3 className="font-semibold text-white">
                {device.name}
              </h3>

              <div className="mt-3 text-sm text-cyan-400 opacity-0 transition group-hover:opacity-100">
                مشاهده مشکلات ←
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}