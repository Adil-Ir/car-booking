import FAQ from "../../components/FAQ";
import OurServices from "../../components/OurServices";
import AboutHero from "../../components/components-aboutus/AboutHero";
import WhoWeAre from "../../components/components-aboutus/WhoWeAre";
import Values from "../../components/components-aboutus/Values";
import Timeline from "../../components/components-aboutus/Timeline";
import Team from "../../components/components-aboutus/Team";
import ClosingCTA from "../../components/components-aboutus/ClosingCTA";

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
        <AboutHero />
        <WhoWeAre />
        <OurServices />
        <Values />
        <Timeline />
        <Team />
        <ClosingCTA />
      </div>

      {/* FAQs */}
      <FAQ faqs={aboutFAQs} title="Questions about CarBook" />
    </main>
  );
}
