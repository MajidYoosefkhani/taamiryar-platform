import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  title: { default: "تعمیریار | تشخیص هوشمند و خدمات تعمیر حرفه‌ای", template: "%s | تعمیریار" },
  description: "مشکل دستگاهت را مرحله‌به‌مرحله بررسی کن، راهنمایی هوشمند بگیر و متخصص مناسب را برای دریافت خدمات انتخاب کن.",
  applicationName: "تعمیریار",
  keywords: ["تعمیریار", "تعمیرات", "تشخیص هوشمند", "تعمیرکار", "خدمات فنی"],
  openGraph: { title: "تعمیریار | همراه هوشمند خدمات تعمیر", description: "از تشخیص مشکل تا انتخاب متخصص، یک مسیر شفاف و ساده.", locale: "fa_IR", type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071522" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full">{children}</body></html>;
}