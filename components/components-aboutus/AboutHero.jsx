const stats = [
  { label: "Trips completed", value: "32k+" },
  { label: "Cities served", value: "40+" },
  { label: "Partner hosts", value: "280+" },
  { label: "Avg. rating", value: "4.9/5" }
];

export default function AboutHero() {
  return (
    <section className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 lg:p-16">
      <div className="relative z-10 animate-fade-in">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
          About CarBook
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
          Premium rentals, built for the way you actually travel.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          CarBook started with a simple idea: renting a car should feel as polished as
          staying at your favorite hotel. No surprise paperwork, no confusing fees,
          just beautifully maintained cars ready when and where you need them.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((item, index) => (
            <div 
              key={item.label} 
              className="glass-panel animate-fade-in-up rounded-2xl p-4 transition-smooth hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-xs text-slate-400">{item.label}</p>
              <p className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
    </section>
  );
}
