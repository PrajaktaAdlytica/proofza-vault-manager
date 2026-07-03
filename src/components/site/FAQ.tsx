import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  { q: "What is an evidence operations platform?", a: "Proofza centralises every screenshot, ticket, policy, email and file used to prove compliance controls. Instead of gathering evidence during each audit, your team maintains a continuously-updated evidence library with clear ownership and verification." },
  { q: "Which frameworks does Proofza support?", a: "Proofza tracks readiness for SOC 2 Type I & II, ISO 27001, ISO 27701, GDPR, HIPAA, PCI DSS and custom internal frameworks. Controls map automatically to the evidence you collect." },
  { q: "How does Proofza integrate with our tools?", a: "Native integrations for Slack, GitHub, Jira, Google Drive, Notion, Okta, AWS and 40+ vendor systems. Evidence is pulled automatically and grouped by control." },
  { q: "Where is our data stored?", a: "All customer data is stored on EU-hosted infrastructure with encryption at rest and in transit. Proofza is SOC 2 Type II certified and ISO 27001 compliant." },
  { q: "How long does implementation take?", a: "Most teams reach 80% audit readiness within two weeks. Our onboarding specialists help map your existing controls and connect evidence sources on day one." },
  { q: "Can auditors access Proofza directly?", a: "Yes. Read-only auditor accounts let your external auditors review evidence, verification status and audit trails without touching your production data." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 px-6 bg-alt border-y border-hairline">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <div className="eyebrow mb-3">Frequently asked</div>
          <h2 className="text-4xl md:text-5xl font-light">Questions, answered.</h2>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="bg-white border border-hairline rounded-xl overflow-hidden transition-all hover:border-navy/30">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left p-6"
              >
                <span className="text-navy font-medium text-lg">{it.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-emerald shrink-0" /> : <Plus className="w-5 h-5 text-slate-mute shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-slate-mute leading-relaxed animate-fade-up">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
