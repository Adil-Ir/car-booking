import Image from "next/image";
import FAQ from "../../components/FAQ";
import OurServices from "../../components/OurServices";

const stats = [
  { label: "Trips completed", value: "32k+" },
  { label: "Cities served", value: "40+" },
  { label: "Partner hosts", value: "280+" },
  { label: "Avg. rating", value: "4.9/5" }
];

const values = [
  {
    title: "Trust first",
    icon: "🛡️",
    description:
      "Clear pricing, honest policies, and verified partners so you always know exactly what you're getting."
  },
  {
    title: "Design every detail",
    icon: "✨",
    description:
      "From the booking flow to the pickup experience, we obsess over small details that make your drive feel effortless."
  },
  {
    title: "People over cars",
    icon: "❤️",
    description:
      "We're here to make memories, not just rentals. Our support team is trained to understand real travel needs."
  }
];

const timeline = [
  {
    year: "2019",
    title: "The idea",
    description:
      "After a series of frustrating rental experiences, our founders sketched the first version of CarBook on a napkin in an airport lounge.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2020",
    title: "First city launch",
    description:
      "We launched in one city with 25 handpicked cars and a small team focused on delivering a boutique experience.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2022",
    title: "Growing with our guests",
    description:
      "Word-of-mouth helped us expand to new cities while keeping our focus on quality over quantity.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "Today",
    title: "Designing the future of rentals",
    description:
      "We're building tools and partnerships that make premium mobility as easy as opening an app.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80"
  }
];

const team = [
  {
    name: "Amira Patel",
    role: "Co-founder & CEO",
    bio: "Leads strategy and product direction, with a background in hospitality and mobility startups.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Liam Chen",
    role: "Co-founder & CXO",
    bio: "Owns the customer experience, ensuring every touchpoint feels considered and human.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Jordan Rivera",
    role: "Head of Operations",
    bio: "Coordinates our city launches and partner network to keep our fleet running smoothly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  }
];

const aboutFAQs = [
  {
    question: "How did CarBook get started?",
    answer: "CarBook was founded in 2019 by a team of travelers frustrated with traditional car rental experiences. We set out to create a service that's as easy and transparent as booking a hotel room."
  },
  {
    question: "What makes CarBook different?",
    answer: "We focus on premium vehicles, transparent pricing, and exceptional customer service. Every car is verified, every price is clear, and every interaction is designed to be effortless."
  },
  {
    question: "Where is CarBook available?",
    answer: "We're currently in 40+ cities across North America and expanding. Check our locations page to see if we're in your area, or contact us to request a new city."
  },
  {
    question: "How do you select your vehicles?",
    answer: "Every car in our fleet must pass a rigorous 50+ point inspection. We only work with late-model vehicles from trusted partners and maintain strict quality standards."
  },
  {
    question: "Can I partner with CarBook?",
    answer: "Yes! We're always looking for quality partners. If you own premium vehicles or operate a rental business, reach out through our contact page to discuss partnership opportunities."
  },
  {
    question: "What's next for CarBook?",
    answer: "We're constantly adding new cities, vehicles, and features. Our roadmap includes electric vehicle expansion, mobile app improvements, and enhanced booking experiences."
  }
];

export const metadata = {
  title: "About us | CarBook",
  description: "Learn how CarBook is reimagining premium car rentals for modern travelers."
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 pb-10 pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section - More Visual */}
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

        {/* Who are we - Enhanced */}
        <section className="mb-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 animate-slide-in-left lg:order-1">
              <div className="glass-panel relative overflow-hidden rounded-3xl p-2 transition-smooth hover-lift">
                <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover transition duration-300"
                    sizes="(min-width: 1024px) 500px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-slate-950/0 to-primary/20" />
                </div>
              </div>
            </div>
            <div className="order-1 animate-slide-in-right lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
                Who are we
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                A team of travelers, designers, and car enthusiasts.
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                CarBook was born from a simple frustration: why does renting a car have to be so complicated? 
                We're a diverse group of people who love to travel, appreciate good design, and believe 
                that every journey deserves a great vehicle.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                Our team combines decades of experience in hospitality, technology, and automotive industries. 
                We've worked at major rental companies, built consumer apps, and managed fleets—but we 
                wanted to create something different. Something that puts the traveler first, not the paperwork.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <OurServices />

        {/* Values - More Visual */}
        <section className="mb-16">
          <div className="mb-8 text-center animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              Our values
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              What drives us every day.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="glass-panel group animate-fade-in-up rounded-3xl p-6 transition-smooth hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="text-lg font-semibold text-slate-50">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline - Visual Timeline */}
        <section className="mb-16">
          <div className="mb-8 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              Our journey
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              How we got here.
            </h2>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`grid gap-6 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`relative animate-fade-in-up ${index % 2 === 1 ? "lg:col-start-2" : ""}`} style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="glass-panel relative overflow-hidden rounded-3xl p-2 transition-smooth hover-lift">
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-300"
                        sizes="(min-width: 1024px) 500px, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/0 to-primary/20" />
                    </div>
                  </div>
                </div>
                <div className={`animate-fade-in-up ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`} style={{ animationDelay: `${index * 150 + 50}ms` }}>
                  <div className="glass-panel rounded-3xl p-6 transition-smooth hover-lift">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                      <span className="text-xs font-semibold text-primary-light">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team - Enhanced Cards */}
        <section className="mb-16">
          <div className="mb-8 animate-fade-in">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
              Meet the team
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              The people behind CarBook.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-300">
              We're a small, multi-disciplinary team spread across a few time zones,
              united by a love of travel and thoughtful design.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="glass-panel group relative animate-fade-in-up overflow-hidden rounded-3xl transition-smooth hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 300px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/0" />
                </div>
                <div className="p-5">
                  <p className="text-lg font-semibold text-slate-50">{member.name}</p>
                  <p className="mt-1 text-sm text-primary-light">{member.role}</p>
                  <p className="mt-3 text-xs text-slate-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mb-16 animate-scale-in rounded-3xl bg-gradient-to-r from-primary/20 via-emerald-500/20 to-sky-500/20 p-[1px]">
          <div className="rounded-[1.4rem] bg-slate-950/95 p-8 sm:p-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Looking ahead
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                  Join us on the journey.
                </h2>
                <p className="mt-4 text-sm text-slate-300">
                  We're constantly adding new models, cities, and features to make your
                  next drive even smoother. Have feedback or ideas? We'd love to hear from you.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="flex-1 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-smooth hover:bg-primary-light hover-lift"
                >
                  Get in touch
                </a>
                <a
                  href="/cars"
                  className="flex-1 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition-smooth hover:bg-slate-900 hover-lift"
                >
                  Browse cars
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQs */}
      <FAQ faqs={aboutFAQs} title="Questions about CarBook" />
    </main>
  );
}
