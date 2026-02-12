'use client';

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      {/* Title and Description - Centered */}
      <div className=" bg-slate-950/50 pt-12">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              CarBook
            </h3>
            <p className="mx-auto mt-3 max-w-5xl lg:text-base text-sm text-slate-400">
              Premium car rental experience made simple. We're reimagining how you rent cars with transparent pricing, 
              verified vehicles, and exceptional service at every step of your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className=" bg-slate-950/50 py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel animate-fade-in-up rounded-3xl p-6 sm:p-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-slate-50">
                Stay in the loop
              </h4>
              <p className="mt-2 text-sm text-slate-400">
                Get exclusive deals, new car arrivals, and travel tips delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl bg-slate-950/60 px-4 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-smooth hover:bg-primary-light hover-lift"
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="pb-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center justify-between gap-8 text-sm text-slate-400">
            <Link
              href="/"
              className="transition-colors hover:text-primary-light"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-primary-light"
            >
              About
            </Link>
            <Link
              href="/cars"
              className="transition-colors hover:text-primary-light"
            >
              Cars
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-primary-light"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-primary-light"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-primary-light"
            >
              Terms of Service
            </Link>
          </nav>
          <p className="mt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} CarBook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

