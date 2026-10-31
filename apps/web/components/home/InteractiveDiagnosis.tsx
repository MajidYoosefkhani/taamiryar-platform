"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Check, ChevronLeft, Smartphone, Refrigerator, WashingMachine, Tv, Laptop, CarFront, Utensils, Wind } from "lucide-react";
const devices=[
 {slug:"washing-machine",label:"لباسشویی",icon:WashingMachine},{slug:"refrigerator",label:"یخچال و فریزر",icon:Refrigerator},
 {slug:"television",label:"تلویزیون",icon:Tv},{slug:"mobile",label:"موبایل",icon:Smartphone},
 {slug:"laptop",label:"لپ‌تاپ",icon:Laptop},{slug:"car",label:"خودرو",icon:CarFront},
 {slug:"dishwasher",label:"ظرفشویی",icon:Utensils},{slug:"vacuum",label:"جاروبرقی",icon:Wind}
];
const symptoms:Record<string,string[]>={
 "washing-machine":["روشن نمی‌شود","آب تخلیه نمی‌شود","آبگیری نمی‌کند","صدای غیرعادی دارد","نشتی آب دارد","مشکل دیگری دارم"],
 refrigerator:["خنک نمی‌کند","صدای غیرعادی دارد","برفک یا یخ‌زدگی زیاد","نشتی آب دارد","روشن نمی‌شود","مشکل دیگری دارم"],
 television:["روشن نمی‌شود","تصویر ندارد","صدا ندارد","تصویر قطع و وصل می‌شود","صفحه آسیب دیده","مشکل دیگری دارم"],
 mobile:["روشن نمی‌شود","شارژ نمی‌شود","صفحه آسیب دیده","باتری زود خالی می‌شود","آب‌خوردگی","مشکل دیگری دارم"],
 laptop:["روشن نمی‌شود","بیش از حد داغ می‌کند","کند شده","تصویر ندارد","شارژ نمی‌شود","مشکل دیگری دارم"],
 car:["روشن نمی‌شود","صدای غیرعادی دارد","چراغ هشدار روشن شده","مشکل ترمز دارم","کولر کار نمی‌کند","مشکل دیگری دارم"],
 dishwasher:["روشن نمی‌شود","آب تخلیه نمی‌شود","ظرف‌ها تمیز نمی‌شوند","نشتی آب دارد","صدای غیرعادی دارد","مشکل دیگری دارم"],
 vacuum:["روشن نمی‌شود","مکش کم شده","بوی سوختگی می‌دهد","داغ می‌کند","صدای غیرعادی دارد","مشکل دیگری دارم"]
};
export default function InteractiveDiagnosis(){
 const [device,setDevice]=useState(""); const [symptom,setSymptom]=useState(""); const [step,setStep]=useState(1); const [details,setDetails]=useState("");
 const selected=devices.find(d=>d.slug===device); const options=device?symptoms[device]??[]:[];
 const destination=device&&symptom?"/diagnose?device="+encodeURIComponent(device)+"&problem="+encodeURIComponent(symptom+(details.trim()?" - "+details.trim():"")):"/diagnose";
 return <section id="quick-diagnosis" className="scroll-mt-24 py-20 sm:py-24"><div className="ty-container">
  <div className="mx-auto mb-10 max-w-2xl text-center"><span className="text-xs font-bold tracking-wider text-[#76e2da]">شروع سریع</span><h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">بیایید مشکل را با هم بررسی کنیم</h2><p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">چند انتخاب ساده کمک می‌کند درخواستت دقیق‌تر ثبت شود و مسیر مناسب‌تری برای ادامه داشته باشی.</p></div>
  <div className="ty-panel mx-auto max-w-4xl rounded-[28px] p-5 sm:p-8"><div className="mb-7 flex items-center justify-between gap-4"><div><p className="text-sm font-bold text-white">فرم راهنمای تشخیص</p><p className="mt-1 text-xs text-slate-400">اطلاعات اولیه را انتخاب کن</p></div><div className="flex items-center gap-2 text-xs text-slate-400"><span className={step===1?"font-bold text-[#75e1d9]":""}>۱. دستگاه</span><span className="h-px w-5 bg-white/20"/><span className={step===2?"font-bold text-[#75e1d9]":""}>۲. مشکل</span></div></div>
   <div className="mb-7 h-1.5 overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full bg-gradient-to-l from-[#55d8d0] to-[#61b9f2] transition-all duration-300 ${step===1?"w-1/2":"w-full"}`}/></div>
   {step===1?<><h3 className="mb-4 text-base font-bold text-white sm:text-lg">کدام دستگاه یا وسیله دچار مشکل شده؟</h3><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{devices.map(item=>{const Icon=item.icon,active=device===item.slug;return <button key={item.slug} type="button" onClick={()=>setDevice(item.slug)} aria-pressed={active} className={`ty-focus flex min-h-[104px] flex-col items-center justify-center gap-3 rounded-2xl border p-3 text-sm font-semibold transition ${active?"border-[#55d8d0] bg-[#55d8d0]/10 text-[#a5f0e9]":"border-white/10 bg-[#091a28] text-slate-300 hover:border-white/25 hover:bg-white/[.04]"}`}><Icon size={25} strokeWidth={1.7}/><span>{item.label}</span>{active&&<Check size={15} className="text-[#70e2d9]"/>}</button>})}</div><div className="mt-7 flex justify-end"><button type="button" disabled={!device} onClick={()=>setStep(2)} className="ty-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#55d8d0] px-6 text-sm font-extrabold text-[#06202b] transition hover:bg-[#7ce9e1] disabled:cursor-not-allowed disabled:opacity-40">ادامه <ChevronLeft size={17}/></button></div></>:<>
   <div className="mb-5 flex items-center justify-between gap-3"><h3 className="text-base font-bold text-white sm:text-lg">چه نشانه‌ای مشاهده می‌کنی؟</h3><span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-[#8ee9e2]">{selected?.label}</span></div>
   <div className="grid gap-2 sm:grid-cols-2">{options.map(item=><button key={item} type="button" onClick={()=>setSymptom(item)} aria-pressed={symptom===item} className={`ty-focus flex min-h-12 items-center justify-between rounded-xl border px-4 py-3 text-right text-sm transition ${symptom===item?"border-[#55d8d0] bg-[#55d8d0]/10 text-[#a5f0e9]":"border-white/10 bg-[#091a28] text-slate-300 hover:border-white/25"}`}>{item}{symptom===item&&<Check size={16}/>}</button>)}</div>
   <label htmlFor="diagnosis-details" className="mt-5 block text-sm font-medium text-slate-300">توضیح بیشتر (اختیاری)</label><textarea id="diagnosis-details" value={details} onChange={e=>setDetails(e.target.value)} rows={3} maxLength={500} placeholder="مثلاً از دیروز این مشکل شروع شده..." className="ty-focus mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#091a28] px-4 py-3 text-sm leading-7 text-white placeholder:text-slate-600"/>
   <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between"><button type="button" onClick={()=>setStep(1)} className="ty-focus min-h-11 rounded-xl border border-white/10 px-5 text-sm text-slate-300 hover:bg-white/5">بازگشت و تغییر دستگاه</button><Link href={destination} aria-disabled={!symptom} onClick={e=>{if(!symptom)e.preventDefault()}} className={`ty-focus inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-extrabold transition ${symptom?"bg-[#55d8d0] text-[#06202b] hover:bg-[#7ce9e1]":"pointer-events-none bg-white/10 text-slate-500"}`}>ادامه به دستیار تشخیص <ArrowLeft size={17}/></Link></div>
   <p className="mt-5 text-xs leading-6 text-slate-500">این مرحله فقط اطلاعات اولیه را جمع‌آوری می‌کند؛ نتیجه نهایی، تشخیص قطعی یا جایگزین بررسی متخصص نیست.</p>
   </>}
  </div></div></section>;
}