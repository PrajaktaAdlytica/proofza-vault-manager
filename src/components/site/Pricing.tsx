import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "€49",
    period: "/month",
    desc: "For small teams getting started with continuous compliance.",
    features: [
      "Up to 5 users",
      "5 GB evidence storage",
      "1 framework (SOC 2 or ISO 27001)",
      "Basic evidence collection",
      "Email support",
      "Weekly readiness reports",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    price: "€149",
    period: "/month",
    desc: "For growing teams managing multiple frameworks and audits.",
    features: [
      "Up to 25 users",
      "50 GB evidence storage",
      "Unlimited frameworks",
      "Advanced ownership & assignments",
      "Automated evidence collection",
      "Priority support",
      "Audit readiness tracking",
      "Auditor read-only accounts",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large organisations with advanced governance needs.",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "Custom frameworks & controls",
      "Advanced security & SSO/SAML",
      "Custom workflows & approvals",
      "Dedicated success manager",
      "24/7 priority support",
      "On-premise EU deployment",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="eyebrow mb-3">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">Simple, predictable pricing.</h2>
          <p className="text-slate-mute text-lg">Every plan includes unlimited audits, EU hosting and continuous readiness monitoring.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 border card-lift flex flex-col ${
                t.featured ? "bg-navy text-white border-navy shadow-xl" : "bg-white border-hairline"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                  MOST POPULAR
                </span>
              )}
              <div className={`text-xs uppercase tracking-widest mb-3 ${t.featured ? "text-emerald" : "text-emerald"}`}>{t.name}</div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className={`text-5xl font-light tabular ${t.featured ? "text-white" : "text-navy"}`}>{t.price}</span>
                {t.period && <span className={t.featured ? "text-white/60" : "text-slate-mute"}>{t.period}</span>}
              </div>
              <p className={`text-sm mb-6 ${t.featured ? "text-white/70" : "text-slate-mute"}`}>{t.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.featured ? "text-emerald" : "text-emerald"}`} />
                    <span className={t.featured ? "text-white/90" : "text-slate"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/request-demo"
                className={t.featured ? "btn-emerald w-full" : "btn-primary w-full"}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
