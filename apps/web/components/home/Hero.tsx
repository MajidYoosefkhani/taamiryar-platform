import Link from "next/link";
import {ArrowLeft,ArrowUpLeft,ArrowDownLeft,Activity,CheckCircle2,MoveUpLeft,Settings2,Sparkles,Wrench} from "lucide-react";
export default function Hero(){
 return <section className="relative isolate overflow-hidden bg-[#f5f1e8]">
  <div className="ty-noise pointer-events-none absolute inset-0 opacity-30"/>
  <div className="ty-container relative grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
   <div className="ty-enter relative z-10">
    <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#202824]/15 bg-white/60 px-4 py-2.5 text-xs font-extrabold text-[#46534b] sm:text-sm"><span className="h-2.5 w-2.5 rounded-full bg-[#f15b3b] ty-pulse-dot"/><span>پلتفرم هوشمند خدمات و تعمیرات</span></div>
    <h1 className="ty-display max-w-3xl text-[2.65rem] sm:text-5xl lg:text-[4.35rem]">هر خرابی،<br/>یک راه‌حل دارد.<br/><span className="relative inline-block text-[#f15b3b]">درست پیدایش کن.</span></h1>
    <p className="mt-7 max-w-xl text-base font-medium leading-9 text-[#59645d] sm:text-lg">از اولین نشانه خرابی تا انتخاب متخصص مناسب؛ تعمیریار مسیر خدمات فنی را شفاف‌تر، هوشمندتر و قابل پیگیری می‌کند.</p>
    <div className="mt-9 flex flex-col gap-3 min-[430px]:flex-row"><Link href="/diagnose" className="ty-focus inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f15b3b] px-7 text-base font-extrabold text-white shadow-lg shadow-[#f15b3b]/20 transition hover:-translate-y-1 hover:bg-[#d94a2d]">شروع عیب‌یابی <ArrowLeft size={20} className="ty-arrow"/></Link><a href="#services" className="ty-focus inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#202824]/20 bg-white/50 px-7 text-sm font-extrabold transition hover:bg-white">دیدن خدمات <ArrowUpLeft size={18}/></a></div>
    <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-[#66716a]"><span className="inline-flex items-center gap-2"><CheckCircle2 size={18} className="text-[#4e7a3d}"/> مسیر مرحله‌به‌مرحله</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={18} className="text-[#4e7a3d}"/> انتخاب آگاهانه متخصص</span></div>
   </div>
   <div className="relative mx-auto w-full max-w-[570px] ty-enter-delay">
    <div className="absolute right-[8%] top-[5%] h-[78%] w-[78%] rounded-full bg-[#d6e99b] blur-[1px]"/>
    <div className="absolute -left-2 top-[15%] h-24 w-24 rounded-full border-[18px] border-[#f15b3b]/15 ty-drift"/>
    <div className="relative min-h-[480px] overflow-hidden rounded-[2.4rem] bg-[#202824] p-5 text-white shadow-[0_35px_90px_rgba(32,40,36,.2)] sm:min-h-[530px] sm:p-8">
     <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10"/><div className="absolute -left-12 -top-12 h-48 w-48 rounded-full border border-white/10"/>
     <div className="relative flex items-center justify-between"><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8e36b] text-[#202824]"><Activity size={26}/></span><div><p className="font-black">مسیر هوشمند تعمیر</p><p className="mt-1 text-xs text-white/55">یک تجربه، چند قدم روشن</p></div></div><span className="rounded-full border border-white/15 px-3 py-2 text-[11px] font-bold text-[#d8ed9b]">LIVE FLOW</span></div>
     <div className="relative mt-10 flex min-h-[300px] items-center justify-center">
      <div className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-white/20 ty-drift sm:h-[330px] sm:w-[330px]"/>
      <div className="absolute h-[215px] w-[215px] rounded-full border border-white/10 sm:h-[270px] sm:w-[270px]"/>
      <div className="absolute right-[8%] top-[7%] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c8e36b] text-[#202824] shadow-xl ty-float"><Wrench size={26}/></div>
      <div className="absolute bottom-[7%] left-[8%] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f15b3b] text-white shadow-xl ty-drift"><Settings2 size={26}/></div>
      <div className="absolute left-[9%] top-[12%] flex h-12 w-12 items-center justify-center rounded-full bg-[#3858d6] text-white shadow-xl"><Sparkles size={22}/></div>
      <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border border-white/15 bg-[#303a34] text-center shadow-2xl sm:h-52 sm:w-52"><span className="mb-3 flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white text-[#202824]"><Activity size={34}/></span><b className="text-lg">از مشکل</b><span className="my-1 text-[#c8e36b]">تا راه‌حل</span><small className="text-[11px] text-white/55">با انتخاب آگاهانه</small></div>
     </div>
     <div className="relative mt-5 grid grid-cols-3 gap-2"><div className="rounded-2xl bg-white/[.08] p-3"><span className="text-[10px] text-white/50">گام ۰۱</span><b className="mt-1 block text-xs sm:text-sm">شناخت مشکل</b></div><div className="rounded-2xl bg-white/[.08] p-3"><span className="text-[10px] text-white/50">گام ۰۲</span><b className="mt-1 block text-xs sm:text-sm">راهنمایی</b></div><div className="rounded-2xl bg-[#c8e36b] p-3 text-[#202824]"><span className="text-[10px] opacity-65">گام ۰۳</span><b className="mt-1 block text-xs sm:text-sm">متخصص مناسب</b></div></div>
    </div>
    <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-xs font-extrabold text-[#202824] shadow-xl sm:right-8"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf2d3] text-[#526d35]"><CheckCircle2 size={20}/></span> شفاف، مرحله‌ای، قابل پیگیری</div>
   </div>
  </div>
  <div className="border-t border-[#202824]/10 bg-[#eae5d9] py-4"><div className="ty-marquee gap-8 text-sm font-black text-[#6b746d]"><span>عیب‌یابی هوشمند ✳ انتخاب متخصص ✳ خدمات حرفه‌ای ✳ تعمیر مطمئن ✳ پشتیبانی شفاف ✳</span><span>عیب‌یابی هوشمند ✳ انتخاب متخصص ✳ خدمات حرفه‌ای ✳ تعمیر مطمئن ✳ پشتیبانی شفاف ✳</span></div></div>
 </section>;
}