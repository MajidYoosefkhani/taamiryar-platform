import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans=Geist({variable:"--font-geist-sans",subsets:["latin"]});
const geistMono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
export const metadata:Metadata={
 title:{default:"تعمیریار | تعمیر، با فکر بهتر",template:"%s | تعمیریار"},
 description:"از شناخت مشکل تا انتخاب متخصص خدمات فنی؛ تجربه‌ای روشن‌تر، ساده‌تر و قابل پیگیری با تعمیریار.",
 applicationName:"تعمیریار",
 keywords:["تعمیریار","تعمیرات","عیب‌یابی","متخصص فنی","خدمات حرفه‌ای"],
 openGraph:{title:"تعمیریار | تعمیر، با فکر بهتر",description:"مشکل را بشناس، مسیر درست را انتخاب کن.",locale:"fa_IR",type:"website"}
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#f5f1e8"};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="fa" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full">{children}</body></html>;
}