"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    text:
      "CarBook made our last-minute business trip completely stress-free. Pick up was smooth, the car was spotless, and the pricing was exactly as shown.",
    trip: "3-day trip • Tesla Model S"
  },
  {
    name: "Ali Khan",
    role: "Frequent traveler",
    text:
      "I loved how transparent everything was. No surprise fees, and extending my booking took less than a minute in the app.",
    trip: "Weekend getaway • Range Rover Sport"
  },
  {
    name: "Emily Carter",
    role: "Photographer",
    text:
      "Being able to filter by features like large trunk space and mileage limits helped me find exactly what I needed for a client shoot.",
    trip: "Day trip • Mercedes C-Class"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="bg-slate-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between animate-fade-in">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              Testimonials
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Real stories from real journeys.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            Thousands of drivers trust CarBook every month for everything from
            airport runs to destination weddings.
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="relative mx-auto max-w-3xl">
            {testimonials.map((item, i) => (
              <figure
                key={item.name}
                className={`glass-panel flex h-full flex-col justify-between rounded-3xl p-5 transition-all duration-300 ${
                  i === index
                    ? "relative opacity-100 translate-x-0"
                    : "pointer-events-none absolute inset-0 -translate-x-3 opacity-0"
                }`}
              >
                <blockquote className="text-sm text-slate-100">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-5 pt-3 text-xs text-slate-300">
                  <div className="font-semibold text-slate-50">
                    {item.name}
                  </div>
                  <div className="text-slate-400">{item.role}</div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    {item.trip}
                  </div>
                </figcaption>
              </figure>
            ))}

            <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-900 hover:text-primary-light"
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-900 hover:text-primary-light"
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-5 bg-primary-light"
                        : "w-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

