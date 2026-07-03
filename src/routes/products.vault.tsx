import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { ShieldCheck, Search, Folder, Check, Upload } from "lucide-react";

export const Route = createFileRoute("/products/vault")({
  head: () => ({
    meta: [
      { title: "Proofza Vault — Centralised Evidence Library" },
      { name: "description", content: "One searchable evidence workspace for policies, screenshots, tickets and files. Automatic verification and version control." },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Proofza Vault"
      title="Every document. One vault."
      subtitle="Centralised evidence library for continuous compliance."
      description="Collect, verify and version every piece of audit evidence in a single searchable workspace. Policies, screenshots, tickets, emails and files — all mapped to controls, tagged and instantly retrievable."
      color="emerald"
      hero={<VaultHero />}
      dashboard={<VaultDashboard />}
      features={[
        { title: "Universal search", desc: "Full-text search across every document, screenshot and metadata field." },
        { title: "Version history", desc: "Every change is tracked with immutable audit trails." },
        { title: "Automatic tagging", desc: "AI classifies evidence and links it to the right control." },
        { title: "Verification badges", desc: "Green badges show which evidence is current, expiring or stale." },
        { title: "Integrations", desc: "Slack, Drive, Notion, GitHub, Jira and 40+ vendor systems." },
        { title: "Encrypted storage", desc: "AES-256 at rest, TLS 1.3 in transit, EU-hosted." },
      ]}
      benefits={[
        { title: "Instant retrieval", desc: "Find any document in seconds during an audit." },
        { title: "Zero duplication", desc: "One source of truth per control." },
        { title: "Continuous freshness", desc: "Expiry alerts before evidence goes stale." },
        { title: "Auditor-ready", desc: "Read-only auditor access with full audit trail." },
      ]}
    />
  ),
});

function VaultHero() {
  return (
    <div className="bg-white border border-hairline rounded-2xl p-5 shadow-xl">
      <div className="flex items-center gap-2 mb-3">
        <Search className="w-4 h-4 text-emerald" />
        <div className="flex-1 h-8 rounded-md bg-alt border border-hairline flex items-center px-2 text-xs text-slate-mute">SOC 2 access review</div>
      </div>
      <div className="border border-hairline rounded-lg overflow-hidden">
        {[
          "SOC2_Access_Review_Q1.pdf",
          "AWS_IAM_Screenshot.png",
          "Access_Policy_v3.docx",
          "Okta_Report_2026.xlsx",
        ].map((n, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2.5 text-xs border-b border-hairline last:border-0">
            <div className="flex items-center gap-2">
              <Folder className="w-3.5 h-3.5 text-emerald" />
              <span className="text-navy">{n}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-mute tabular">2026-05-{10 + i}</span>
              <Check className="w-3.5 h-3.5 text-emerald" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 text-xs text-slate-mute">
        <Upload className="w-3 h-3" /> 12,458 documents verified
        <span className="ml-auto flex items-center gap-1 text-emerald"><ShieldCheck className="w-3 h-3" /> Encrypted</span>
      </div>
    </div>
  );
}

function VaultDashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-4 text-sm">
      <div className="md:col-span-2 border border-hairline rounded-xl p-4 bg-alt/40">
        <div className="text-slate-mute text-xs mb-3">Evidence Library · Filtered by SOC 2</div>
        <div className="bg-white rounded-lg border border-hairline">
          {["Security Policy", "Access Review Q1", "Vendor SLA", "Incident Report Feb", "AWS IAM Screenshot"].map((n, i) => (
            <div key={i} className="flex justify-between px-3 py-2 border-b border-hairline last:border-0">
              <span className="text-navy">{n}</span>
              <span className="text-xs text-emerald tabular flex items-center gap-1"><Check className="w-3 h-3" /> Verified</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-hairline rounded-xl p-4">
        <div className="text-xs text-slate-mute mb-2">Storage Used</div>
        <div className="text-3xl font-light text-navy tabular mb-3">18.4 GB</div>
        <div className="h-1.5 bg-alt rounded-full overflow-hidden mb-4">
          <div className="h-full bg-emerald" style={{ width: "37%" }} />
        </div>
        <div className="text-xs text-slate-mute space-y-1">
          <div className="flex justify-between"><span>Policies</span><span className="tabular">6.2 GB</span></div>
          <div className="flex justify-between"><span>Screenshots</span><span className="tabular">4.1 GB</span></div>
          <div className="flex justify-between"><span>Reports</span><span className="tabular">8.1 GB</span></div>
        </div>
      </div>
    </div>
  );
}
