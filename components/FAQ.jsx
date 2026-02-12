export default function FAQ({ faqs, title = "Frequently asked questions" }) {
  return (
    <section className="border-t border-slate-800/60 bg-slate-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
            FAQs
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group glass-panel animate-fade-in-up rounded-3xl p-4 text-sm"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
                <span className="font-semibold text-slate-50 pr-4">
                  {item.question}
                </span>
                <span className="flex-shrink-0 text-xl text-slate-500 transition-transform duration-300 group-open:rotate-90">
                  ›
                </span>
              </summary>
              <p className="mt-3 text-xs text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
