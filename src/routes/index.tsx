import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Products } from "@/components/site/Products";
import { PlatformDashboard } from "@/components/site/PlatformDashboard";
import { Benefits } from "@/components/site/Benefits";
import { Pricing } from "@/components/site/Pricing";
import { Statistics } from "@/components/site/Statistics";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proofexa — Evidence Operations Platform for Compliance Teams" },
      { name: "description", content: "Centralise audit evidence, assign ownership and monitor readiness for SOC 2, ISO 27001, GDPR and HIPAA. Built for compliance teams." },
      { property: "og:title", content: "Proofexa — Evidence Operations Platform" },
      { property: "og:description", content: "Audit evidence. Finally organised. Prepare every certification without chasing documents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <TrustedBy />
      <Products />
      <PlatformDashboard />
      <Benefits />
      <Pricing />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
