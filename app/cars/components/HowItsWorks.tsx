import React from 'react'

const HowItsWorks = () => {
  return (
    <section className="mt-14 border-t border-slate-800/60 pt-10">
    <div className="mb-8 animate-fade-in">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
        How it works
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
        Book your car in three simple steps.
      </h2>
    </div>
    <div className="grid gap-6 sm:grid-cols-3">
      {[
        {
          step: "01",
          title: "Choose your car",
          description: "Browse our curated collection and filter by type, price, or features to find your perfect match."
        },
        {
          step: "02",
          title: "Confirm & pay",
          description: "Review transparent pricing, add optional protection, and complete your booking in seconds."
        },
        {
          step: "03",
          title: "Pick up & drive",
          description: "Skip the counter with digital check-in. Get your keys and hit the road with 24/7 support available."
        }
      ].map((item, index) => (
        <div 
          key={item.step} 
          className="glass-panel animate-fade-in-up rounded-3xl p-5 transition-smooth hover-lift"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-semibold text-primary-light">
            {item.step}
          </div>
          <h3 className="text-sm font-semibold text-slate-50">{item.title}</h3>
          <p className="mt-2 text-xs text-slate-400">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default HowItsWorks