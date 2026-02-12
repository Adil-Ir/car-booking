export default function WhyChooseUs() {
  const perks = [
    {
      title: "Transparent pricing",
      description:
        "All fees shown upfront — insurance, taxes, and extras clearly broken down before you pay."
    },
    {
      title: "Top-rated fleet",
      description:
        "We only work with verified partners and late-model vehicles that pass a 50+ point inspection."
    },
    {
      title: "Support that cares",
      description:
        "Real humans on standby to help with changes, extensions, or any road-side questions."
    }
  ];

  return (
    <section className="bg-slate-950/80 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="animate-slide-in-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              Why choose CarBook
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Built for effortless, reliable rentals.
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              From the second you start browsing to returning the keys, every
              part of the CarBook experience is optimized for clarity, trust,
              and comfort.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {perks.map((perk, index) => (
                <div 
                  key={perk.title} 
                  className="space-y-1.5 text-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-slate-50">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-slate-400">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel animate-slide-in-right relative overflow-hidden rounded-3xl p-5 transition-smooth hover-lift">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Trust score
                </p>
                <p className="mt-1 text-3xl font-semibold text-slate-50">
                  4.9<span className="text-base text-slate-400">/5</span>
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Based on 2,340 verified rentals
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 text-right">
                <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                  Real-time support
                </span>
                <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                  Rental protection
                </span>
              </div>
            </div>
            <div className="mt-5 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span>On-time pickups</span>
                <span>98%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-900">
                <div className="h-full w-[98%] bg-gradient-to-r from-primary-light to-emerald-400" />
              </div>

              <div className="mt-3 flex items-center justify-between text-slate-300">
                <span>Damage-free trips</span>
                <span>99.3%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-900">
                <div className="h-full w-[99.3%] bg-gradient-to-r from-emerald-500 to-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

