import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl relative overflow-hidden rounded-3xl bg-navy p-12 md:p-16 text-white">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-emerald/20 blur-3xl" />
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-emerald text-xs font-medium tracking-widest uppercase mb-4">Ready when you are</div>
            <h2 className="text-white text-4xl md:text-5xl font-light mb-4">Be audit-ready every day.</h2>
            <p className="text-white/70 text-lg font-light leading-relaxed">
              Prepare certifications faster with organised evidence, clear ownership and continuous readiness.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/request-demo" className="btn-emerald">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:hello@proofza.io" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
