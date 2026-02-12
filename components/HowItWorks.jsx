export default function HowItWorks() {
  const steps = [
    {
      title: "Choose your perfect car",
      description:
        "Filter by type, budget, and features to instantly see the best options available in your city.",
      badge: "Step 1"
    },
    {
      title: "Confirm details in seconds",
      description:
        "Pick dates, add protection, and review clear pricing before you confirm — no surprises later.",
      badge: "Step 2"
    },
    {
      title: "Pick up & drive",
      description:
        "Skip the paperwork with digital check-in, get the keys, and enjoy 24/7 support during your trip.",
      badge: "Step 3"
    }
  ];

  return (
    <section
      id="how-it-works"
      className="bg-slate-950 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between animate-fade-in">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              How it works
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Book a car in three simple steps.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            A booking flow designed to feel as smooth as the drive itself — no
            confusing forms, no hidden conditions.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="glass-panel relative animate-fade-in-up flex flex-col gap-3 rounded-3xl p-5 transition-smooth hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="inline-flex w-fit rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                {step.badge}
              </span>
              <h3 className="text-sm font-semibold text-slate-50">
                {step.title}
              </h3>
              <p className="text-xs text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

