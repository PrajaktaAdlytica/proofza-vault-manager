import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CTA } from "./CTA";
import { FAQ } from "./FAQ";

export interface ProductPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  color: "emerald" | "amber" | "navy";
  hero: ReactNode;
  dashboard: ReactNode;
  features: { title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
}

export function ProductPage(p: ProductPageProps) {
  const bg = p.color === "emerald" ? "bg-emerald" : p.color === "amber" ? "bg-amber" : "bg-navy";
  const text = p.color === "emerald" ? "text-emerald" : p.color === "amber" ? "text-amber" : "text-navy";
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest ${bg} text-white mb-5`}>
              {p.eyebrow}
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-navy leading-[1.05] mb-4">{p.title}</h1>
            <p className={`text-xl font-light mb-4 ${text}`}>{p.subtitle}</p>
            <p className="text-slate-mute leading-relaxed max-w-lg mb-8">{p.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/request-demo" className="btn-primary">Request Demo <ArrowRight className="w-4 h-4" /></Link>
              <a href="#dashboard" className="btn-secondary">View Dashboard</a>
            </div>
          </div>
          <div className="animate-fade-up">{p.hero}</div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 bg-alt border-y border-hairline">
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-3">Overview</div>
          <h2 className="text-4xl md:text-5xl font-light">{p.subtitle}</h2>
          <p className="mt-4 text-slate-mute text-lg leading-relaxed">{p.description}</p>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow mb-3">Dashboard preview</div>
            <h2 className="text-3xl md:text-4xl font-light">A dashboard your team will actually open.</h2>
          </div>
          <div className="rounded-3xl border border-hairline bg-white p-6 shadow-2xl">{p.dashboard}</div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-alt border-y border-hairline">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-3">Features</div>
            <h2 className="text-4xl md:text-5xl font-light">Everything you need, nothing you don't.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <div key={f.title} className="bg-white border border-hairline rounded-2xl p-6 card-lift">
                <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center mb-3`}>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-navy font-medium mb-2">{f.title}</h3>
                <p className="text-sm text-slate-mute leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-3">Benefits</div>
            <h2 className="text-4xl md:text-5xl font-light">Built for real compliance teams.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {p.benefits.map((b) => (
              <div key={b.title} className="border border-hairline rounded-2xl p-6 card-lift bg-white">
                <h3 className="text-navy font-medium mb-2">{b.title}</h3>
                <p className="text-sm text-slate-mute leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
