import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { TrendingUp, Check } from "lucide-react";

export const Route = createFileRoute("/products/audit")({
  head: () => ({
    meta: [
      { title: "Proofexa Audit — Readiness & Framework Coverage" },
      { name: "description", content: "Track audit readiness across every framework, monitor control coverage and identify gaps before your auditor does." },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Proofexa Audit"
      title="Always audit-ready."
      subtitle="Framework coverage and readiness tracking in real time."
      description="Track audit readiness, monitor framework coverage and identify missing controls. See exactly what stands between you and certification, every day."
      color="navy"
      hero={<AuditHero />}
      dashboard={<AuditDashboard />}
      features={[
        { title: "Framework mapping", desc: "SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS and custom frameworks." },
        { title: "Real-time readiness", desc: "Score updates continuously as evidence is verified." },
        { title: "Gap analysis", desc: "See exactly which controls need attention, ranked by impact." },
        { title: "Auditor mode", desc: "Read-only access with full audit trail for external auditors." },
        { title: "Cross-framework reuse", desc: "One piece of evidence maps to every applicable control." },
        { title: "Certification calendar", desc: "See every upcoming audit and prep milestone." },
      ]}
      benefits={[
        { title: "Predictable certifications", desc: "No last-minute surprises before the audit window." },
        { title: "Board-ready reports", desc: "Export readiness reports in one click." },
        { title: "Faster external audits", desc: "Auditors self-serve inside a secure workspace." },
        { title: "Continuous compliance", desc: "Stay ready year-round, not just quarterly." },
      ]}
    />
  ),
});

function AuditHero() {
  return (
    <div className="bg-white border border-hairline rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-navy" />
        <span className="font-medium text-navy">Overall Readiness</span>
        <span className="ml-auto text-2xl font-light text-emerald tabular">98%</span>
      </div>
      <div className="space-y-3">
        {[
          { fw: "ISO 27001", v: 98, controls: "112 / 114" },
          { fw: "SOC 2 Type II", v: 97, controls: "89 / 92" },
          { fw: "GDPR", v: 100, controls: "43 / 43" },
          { fw: "HIPAA", v: 95, controls: "76 / 80" },
        ].map((f) => (
          <div key={f.fw}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-navy">{f.fw}</span>
              <span className="text-slate-mute tabular text-xs">{f.controls}</span>
            </div>
            <div className="h-2 bg-alt rounded-full overflow-hidden">
              <div className="h-full bg-emerald rounded-full" style={{ width: `${f.v}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-hairline flex items-center gap-2 text-xs text-emerald">
        <Check className="w-3.5 h-3.5" /> Ready for external audit — ISO 27001 window opens Jun 10
      </div>
    </div>
  );
}

function AuditDashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-4 text-sm">
      <div className="md:col-span-2 border border-hairline rounded-xl p-4 bg-alt/40">
        <div className="text-slate-mute text-xs mb-3">Control Gap Analysis</div>
        <div className="bg-white rounded-lg border border-hairline">
          {[
            { n: "A.9.2.5 – User access reviews", s: "Missing evidence", tone: "destructive" },
            { n: "A.12.4.1 – Event logging", s: "Expiring", tone: "amber" },
            { n: "A.14.2.5 – Secure engineering", s: "Verified", tone: "emerald" },
            { n: "A.18.1.4 – Privacy of PII", s: "Verified", tone: "emerald" },
          ].map((c, i) => (
            <div key={i} className="flex justify-between px-3 py-2 border-b border-hairline last:border-0">
              <span className="text-navy">{c.n}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                c.tone === "emerald" ? "bg-emerald-soft text-emerald" :
                c.tone === "amber" ? "bg-amber-soft text-amber" :
                "bg-destructive/10 text-destructive"
              }`}>{c.s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-hairline rounded-xl p-4">
        <div className="text-xs text-slate-mute mb-2">Certification Calendar</div>
        {[
          { m: "Jun 10", n: "ISO 27001 audit" },
          { m: "Jul 22", n: "SOC 2 Type II window" },
          { m: "Sep 04", n: "GDPR review" },
        ].map((e) => (
          <div key={e.m} className="flex items-center gap-3 py-2 border-b border-hairline last:border-0">
            <div className="w-10 text-navy tabular text-xs">{e.m}</div>
            <div className="text-sm text-navy">{e.n}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
