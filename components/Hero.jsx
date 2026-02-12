import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="flex-1 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 animate-fade-in-down">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Instant booking • No hidden fees
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
            Drive your{" "}
            <span className="bg-gradient-to-r from-primary-light via-emerald-300 to-accent bg-clip-text text-transparent">
              dream car
            </span>{" "}
            today.
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Explore a curated collection of premium cars for every journey. From
            business trips to weekend getaways, CarBook makes renting fast,
            transparent, and effortless.
          </p>
          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Link
              href="/cars"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-smooth hover:bg-primary-light hover-lift"
            >
              Explore cars
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-full bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-200 transition-smooth hover:bg-slate-900 hover-lift"
            >
              How it works
            </Link>
          </div>
          <dl className="mt-4 grid grid-cols-3 gap-4 text-xs text-slate-300 sm:max-w-md sm:text-sm animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div>
              <dt className="font-semibold text-slate-100">10k+</dt>
              <dd className="text-slate-400">Happy customers</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-100">150+</dt>
              <dd className="text-slate-400">Cars available</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-100">24/7</dt>
              <dd className="text-slate-400">Customer support</dd>
            </div>
          </dl>
        </div>

        <div className="flex-1 animate-scale-in" style={{ animationDelay: '400ms' }}>
          <div className="glass-panel relative overflow-hidden rounded-3xl p-3 shadow-soft transition-smooth hover-lift">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=80"
                alt="Luxury car on a city street at night"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/0 to-primary/20" />
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              <div className="flex items-center gap-2 rounded-2xl bg-slate-900/80 px-3 py-2 text-slate-200">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-primary/20 text-[11px] font-semibold text-primary-light">
                  PRO
                </span>
                <div>
                  <p className="font-semibold">Same-day pickup</p>
                  <p className="text-[11px] text-slate-400">
                    Get a car in under 2 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-950/80 px-3 py-2 text-slate-200">
                <span className="h-7 w-7 rounded-full bg-emerald-500/15 ring-2 ring-emerald-400/40" />
                <div>
                  <p className="flex items-center gap-1 text-xs font-semibold">
                    4.9/5 rating
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Based on real renter reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

