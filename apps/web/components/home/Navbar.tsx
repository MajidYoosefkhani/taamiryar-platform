"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpLeft, Menu, Wrench, X } from "lucide-react";
const links=[{href:"#services",label:"دسته‌بندی خدمات"},{href:"#process",label:"مراحل کار"},{href:"#professionals",label:"متخصصان"}];
export default function Navbar(){
 const [menuOpen,setMenuOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071522]/90 backdrop-blur-xl">
  <div className="ty-container flex h-[72px] items-center justify-between gap-4 md:h-20">
   <Link href="/" aria-label="تعمیریار، صفحه اصلی" className="ty-focus flex shrink-0 items-center gap-3 rounded-xl">
    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#55e0d4] to-[#3b9fcb] text-[#06202c] shadow-lg shadow-cyan-500/15"><Wrench size={22} strokeWidth={2.5}/></span>
    <span className="leading-tight"><span className="block text-lg font-black text-white md:text-xl">تعمیریار</span><span className="mt-1 block text-[10px] font-medium tracking-[.16em] text-[#7dded8]">SMART SERVICE PLATFORM</span></span>
   </Link>
   <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex" aria-label="ناوبری اصلی">{links.map(l=><a key={l.href} href={l.href} className="ty-focus rounded-lg transition hover:text-[#70e2da]">{l.label}</a>)}</nav>
   <div className="hidden sm:block"><Link href="/diagnose" className="ty-focus inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#51d7cf] px-5 text-sm font-bold text-[#06202b] transition hover:bg-[#7ce9e1]">شروع تشخیص <ArrowUpLeft size={17}/></Link></div>
   <button type="button" onClick={()=>setMenuOpen(v=>!v)} className="ty-focus flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white sm:hidden" aria-label={menuOpen?"بستن منو":"باز کردن منو"} aria-expanded={menuOpen}>{menuOpen?<X size={21}/>:<Menu size={21}/>}</button>
  </div>
  {menuOpen&&<div className="border-t border-white/10 bg-[#0a1c2a] px-5 py-4 sm:hidden"><nav className="ty-container flex flex-col gap-1" aria-label="ناوبری موبایل">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm text-slate-200 hover:bg-white/5">{l.label}</a>)}<Link href="/diagnose" onClick={()=>setMenuOpen(false)} className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#51d7cf] font-bold text-[#06202b]">شروع تشخیص هوشمند <ArrowUpLeft size={17}/></Link></nav></div>}
 </header>;
}