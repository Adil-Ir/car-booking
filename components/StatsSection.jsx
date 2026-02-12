const stats = [
  { value: "32k+", label: "Trips completed", icon: "🎉" },
  { value: "40+", label: "Cities served", icon: "🌍" },
  { value: "280+", label: "Partner hosts", icon: "🤝" },
  { value: "4.9/5", label: "Average rating", icon: "⭐" },
  { value: "24/7", label: "Support available", icon: "💬" },
  { value: "150+", label: "Premium cars", icon: "🚙" }
];

export default function StatsSection() {
  return (
    <section className="border-t border-slate-800/60 bg-slate-950/50 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
            By the numbers
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Trusted by thousands of travelers.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-panel animate-fade-in-up rounded-3xl p-6 text-center transition-smooth hover-lift"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-3 text-3xl">{stat.icon}</div>
              <p className="text-3xl font-semibold text-slate-50 sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
