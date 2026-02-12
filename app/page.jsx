import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCars";
import OurServices from "../components/OurServices";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import FAQ from "../components/FAQ";

const homeFAQs = [
  {
    question: "How do I book a car?",
    answer: "Simply browse our fleet, select your dates, and complete the booking in minutes. All pricing is transparent with no hidden fees."
  },
  {
    question: "What's included in the rental price?",
    answer: "The daily rate includes the vehicle, basic insurance, and 24/7 roadside assistance. Optional extras like GPS and child seats can be added during booking."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes! You can cancel or modify your booking up to 24 hours before pickup at no charge. Changes within 24 hours may incur a small fee."
  },
  {
    question: "Do you offer long-term rentals?",
    answer: "Absolutely. We offer weekly and monthly rates with special discounts. Contact us for custom quotes on extended rentals."
  },
  {
    question: "What documents do I need?",
    answer: "You'll need a valid driver's license, credit card, and proof of insurance (or you can purchase ours). All documents can be uploaded digitally."
  },
  {
    question: "Is there a minimum age requirement?",
    answer: "Yes, drivers must be at least 21 years old. For premium vehicles, the minimum age is 25. Additional fees may apply for drivers under 25."
  }
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCars />
      <OurServices />
      <HowItWorks />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <BlogPreview />
      <FAQ faqs={homeFAQs} title="Common questions about CarBook" />
    </main>
  );
}

