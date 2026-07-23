"use client";

import Link from "next/link";
import Container from "../layout/Container";
import Button from "../ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-2xl shadow-lg shadow-cyan-500/40">
            🤖
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              تعمیریار
            </h1>

            <p className="text-xs text-cyan-300">
              AI Repair Platform
            </p>
          </div>
        </Link>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <Link href="/">خانه</Link>
          <Link href="/diagnose">تشخیص هوشمند</Link>
          <Link href="/">خدمات</Link>
          <Link href="/">تعمیرکاران</Link>
          <Link href="/">تماس</Link>
        </nav>

        <Button>

          شروع تشخیص

        </Button>

      </Container>
    </header>
  );
}