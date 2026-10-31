"use client";
import Link from "next/link";
import {useState} from "react";
import {ArrowUpLeft,Menu,Wrench,X} from "lucide-react";
const links=[{href:"#services",label:"خدمات"},{href:"#how-it-works",label:"چطور کار می‌کند؟"},{href:"#professionals",label:"برای متخصصان"}];
export default function Navbar(){
 const[open,setOpen]=useState(false);
 return <header className="sticky top-0 z-50 border-b border-[#202824]/10 bg-[#f5f1e8]/95 backdrop-blur-xl">
  <div className="ty-container flex h-[76px] items-center justify-between gap-4 md:h-[88px]">
   <Link href="/" aria-label="تعمیریار" className="ty-focus flex items-center gap-3 rounded-xl">
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202824] text-[#d5ed85]"><Wrench size={25} strokeWidth={2.6}/></span>
    <span><b className="block text-xl font-black tracking-tight">تعمیریار</b><small className="mt-1 block text-[10px] font-bold tracking-[.15em] text-[#69736c]">REPAIR, RE-THOUGHT</small></span>
   </Link>
   <nav className="hidden items-center gap-9 text-sm font-bold text-[#535e56] lg:flex" aria-label="ناوبری اصلی">{links.map(l=><a key={l.href} href={l.href} className="ty-focus rounded-md transition hover:text-[#f15b3b]">{l.label}</a>)}</nav>
   <div className="hidden sm:block"><Link href="/diagnose" className="ty-focus inline-flex min-h-12 items-center gap-3 rounded-full bg-[#f15b3b] px-6 text-sm font-extrabold text-white transition hover:bg-[#d94a2d]">شروع عیب‌یابی <ArrowUpLeft size={18}/></Link></div>
   <button type="button" onClick={()=>setOpen(v=>!v)} aria-label={open?"بستن منو":"باز کردن منو"} aria-expanded={open} className="ty-focus flex h-12 w-12 items-center justify-center rounded-xl border border-[#202824]/15 sm:hidden">{open?<X size={23}/>:<Menu size={23}/>}</button>
  </div>
  {open&&<div className="border-t border-[#202824]/10 bg-[#f5f1e8] px-5 py-4 sm:hidden"><nav className="ty-container flex flex-col gap-1">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-4 text-base font-bold hover:bg-black/5">{l.label}</a>)}<Link href="/diagnose" onClick={()=>setOpen(false)} className="mt-2 flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#f15b3b] font-extrabold text-white">شروع عیب‌یابی <ArrowUpLeft size={18}/></Link></nav></div>}
 </header>;
}