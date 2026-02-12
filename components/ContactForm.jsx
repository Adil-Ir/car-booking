"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-64 bg-gradient-to-br from-primary/30 via-emerald-400/10 to-transparent opacity-60" />
      <div className="relative space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Contact us
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Let&apos;s plan your next journey.
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Tell us a bit about your trip and we&apos;ll get back within{" "}
            <span className="font-semibold text-emerald-300">
              a few business hours
            </span>{" "}
            with tailored options.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="block text-xs font-medium text-slate-300">
              Full name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="mt-1 w-full rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-xs font-medium text-slate-300">
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-xs font-medium text-slate-300">
              Phone (optional)
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="mt-1 w-full rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-xs font-medium text-slate-300">
              Trip type
            </label>
            <select
              className="mt-1 w-full rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              defaultValue="business"
            >
              <option value="business">Business trip</option>
              <option value="vacation">Vacation / holiday</option>
              <option value="event">Event / wedding</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-300">
              Subject
            </label>
            <input
              type="text"
              required
              placeholder="I&apos;d like help planning..."
              className="mt-1 w-full rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-300">
              Message
            </label>
            <textarea
              rows={4}
              required
              placeholder="Share dates, pickup city, preferred car type, and anything else we should know."
              className="mt-1 w-full resize-none rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="sm:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] text-slate-400">
              By submitting, you agree to be contacted about your inquiry.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-light"
            >
              Send message
            </button>
          </div>
        </form>

        {status === "sent" && (
          <div className="mt-3 rounded-2xl bg-emerald-500/10 px-4 py-3 text-xs text-emerald-200 ring-1 ring-emerald-500/30">
            Your message has been recorded. This is a demo form, so no email
            will be sent, but this is where you&apos;d plug in your backend or
            email service.
          </div>
        )}
      </div>
    </div>
  );
}

