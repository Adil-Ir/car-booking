import Image from "next/image";
import ContactForm from "../../components/ContactForm";

const contactHighlights = [
  {
    label: "Response time",
    value: "< 2 hours"
  },
  {
    label: "Locations",
    value: "40+ cities"
  },
  {
    label: "Support",
    value: "24/7"
  }
];

const faqs = [
  {
    question: "How quickly can I get a response?",
    answer:
      "During business hours we usually reply in under 2 hours. For urgent trips starting within 24 hours, mention it in your message and we will prioritize it."
  },
  {
    question: "Can you help me choose the right car?",
    answer:
      "Yes. Share your destination, dates, passenger count, and luggage, and our team will recommend 2–3 options that fit your budget and style."
  },
  {
    question: "Do you offer long-term rentals?",
    answer:
      "We can arrange weekly and monthly rentals with special pricing. Use the form to tell us more about your needs and we’ll send a custom quote."
  }
];

export const metadata = {
  title: "Contact us | CarBook",
  description: "Get in touch with CarBook for bookings, support, or partnership inquiries."
};

export default function ContactPage() {
  return (
    <main className="bg-slate-950 pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900/80 p-5 shadow-soft">
              <h2 className="text-sm font-semibold text-slate-50">
                Talk to a real person.
              </h2>
              <p className="mt-2 text-xs text-slate-400">
                Whether you&apos;re planning a once-in-a-lifetime trip or need a last-minute
                airport pickup, our specialists can help you find the right car.
              </p>
              <dl className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
                {contactHighlights.map((item) => (
                  <div key={item.label}>
                    <dt className="text-slate-400">{item.label}</dt>
                    <dd className="mt-1 font-semibold text-slate-50">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Call us
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    +1 (555) 012-3456
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Mon–Fri, 8:00–20:00
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </p>
                  <p className="mt-1 font-semibold text-slate-50">
                    support@carbook.co
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    We reply within a few hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900/70 p-5 shadow-soft">
              <h2 className="text-sm font-semibold text-slate-50">
                Our city lounge.
              </h2>
              <p className="mt-2 text-xs text-slate-400">
                Visit our flagship lounge to pick up keys, get route suggestions, or
                simply grab a coffee before your drive.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-200">
                21 Hudson Street, Floor 4
                <br />
                San Francisco, CA 94105
              </p>
              <div className="mt-4 relative h-40 w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
                  alt="Bright lounge area with seating and large windows"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/10" />
              </div>
              <div className="mt-4 h-40 w-full overflow-hidden rounded-2xl border border-slate-800/60">
                <iframe
                  title="CarBook lounge map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086118799108!2d-122.3999725237642!3d37.79238817198365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df3cfeb3%3A0x4b4d5a2d0bde5f7f!2sHudson%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900/60 p-5 shadow-soft animate-fade-in">
              <h2 className="text-sm font-semibold text-slate-50">
                Frequently asked questions.
              </h2>
              <div className="mt-3 space-y-2">
                {faqs.map((item, index) => (
                  <details
                    key={item.question}
                    className="group animate-fade-in-up rounded-2xl bg-slate-950/60 px-3 py-2 text-xs text-slate-300 transition-smooth hover-lift"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
                      <span className="font-medium text-slate-100">
                        {item.question}
                      </span>
                      <span className="text-slate-500 transition-transform duration-300 group-open:rotate-90">
                        ›
                      </span>
                    </summary>
                    <p className="mt-2 text-slate-400">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

