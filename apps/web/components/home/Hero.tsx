import Link from "next/link";
import Container from "../layout/Container";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[180px]" />

        <div className="absolute left-0 top-1/2 h-[450px] w-[450px] rounded-full bg-sky-400/10 blur-[180px]" />

      </div>

      <Container className="relative flex min-h-[88vh] items-center justify-center">

        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">

          <div className="flex flex-col justify-center">

            <span className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">

              ✨ اولین پلتفرم تعمیرات مجهز به هوش مصنوعی

            </span>

            <h1 className="text-5xl font-black leading-tight lg:text-7xl">

              تعمیرات

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">

                هوشمند

              </span>

              <br />

              برای همه

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">

              قبل از تماس با تعمیرکار، تنها با چند جمله علت احتمالی خرابی
              دستگاهت را توسط هوش مصنوعی بررسی کن و بهترین راه‌حل را بگیر.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link href="/diagnose">

                <Button>

                  شروع تشخیص هوشمند

                </Button>

              </Link>

              <Button variant="secondary">

                مشاهده خدمات

              </Button>

            </div>

            <div className="mt-16 flex gap-12">

              <div>

                <h2 className="text-4xl font-black text-cyan-300">

                  +1200

                </h2>

                <p className="text-slate-400">

                  تعمیرکار

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-cyan-300">

                  +50000

                </h2>

                <p className="text-slate-400">

                  تشخیص

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-cyan-300">

                  98%

                </h2>

                <p className="text-slate-400">

                  رضایت

                </p>

              </div>

            </div>

          </div>

          <div className="flex items-center justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-[40px] bg-cyan-400/30 blur-3xl" />

              <div className="relative w-[360px] rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <div className="mb-6 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-3xl">

                    🤖

                  </div>

                  <div>

                    <h3 className="font-bold">

                      AI Assistant

                    </h3>

                    <p className="text-sm text-slate-400">

                      آنلاین

                    </p>

                  </div>

                </div>

                <div className="space-y-5">

                  <div className="rounded-2xl bg-slate-900 p-4">

                    سلام 👋

                    <br />

                    چه دستگاهی خراب شده؟

                  </div>

                  <div className="rounded-2xl bg-cyan-500 p-4 text-slate-950">

                    ماشین لباسشویی

                  </div>

                  <div className="rounded-2xl bg-slate-900 p-4">

                    لطفاً مشکل را توضیح بده...

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}