import { Link } from "@tanstack/react-router";
import { ShieldCheck, Users, ClipboardCheck, ArrowRight, Check, Folder, Search, Upload, Bell, Calendar, TrendingUp } from "lucide-react";

const products = [
  {
    slug: "vault",
    name: "Proofza Vault",
    color: "emerald",
    icon: ShieldCheck,
    desc: "Centralise every piece of audit evidence into one searchable evidence library.",
    preview: <VaultPreview />,
  },
  {
    slug: "owners",
    name: "Proofza Owners",
    color: "amber",
    icon: Users,
    desc: "Assign evidence owners, monitor responsibilities and eliminate missing documentation.",
    preview: <OwnersPreview />,
  },
  {
    slug: "audit",
    name: "Proofza Audit",
    color: "navy",
    icon: ClipboardCheck,
    desc: "Track audit readiness, monitor framework coverage and identify missing controls.",
    preview: <AuditPreview />,
  },
];

export function Products() {
  return (
    <section id="solutions" className="py-24 px-6 bg-alt border-y border-hairline">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 mb-14 items-end">
          <div>
            <div className="eyebrow mb-3">One workspace</div>
            <h2 className="text-4xl md:text-5xl font-light">One workspace<br />for every audit.</h2>
          </div>
          <p className="text-slate-mute text-lg leading-relaxed">
            Automatically organise evidence, assign ownership and monitor audit readiness from a single platform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => {
            const bg = p.color === "emerald" ? "bg-emerald" : p.color === "amber" ? "bg-amber" : "bg-navy";
            const text = p.color === "emerald" ? "text-emerald" : p.color === "amber" ? "text-amber" : "text-navy";
            return (
              <div key={p.slug} className="bg-white border border-hairline rounded-2xl p-6 card-lift flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-navy font-medium text-lg">{p.name}</div>
                    <p className="text-sm text-slate-mute mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <div className="flex-1 my-4 min-h-[220px]">{p.preview}</div>
                <Link
                  to={`/products/${p.slug}` as any}
                  className={`mt-auto inline-flex items-center justify-center gap-2 border rounded-full py-2.5 text-sm font-medium transition-all border-${p.color}/40 ${text} hover:${bg} hover:text-white`}
                  style={{
                    borderColor: p.color === "emerald" ? "oklch(0.71 0.16 165 / 0.4)" : p.color === "amber" ? "oklch(0.78 0.14 75 / 0.4)" : "oklch(0.36 0.09 254 / 0.4)",
                  }}
                >
                  Explore {p.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VaultPreview() {
  const rows = [
    { name: "Security Policy.pdf", type: "Policy", ok: true },
    { name: "Login Screenshot.png", type: "Screenshot", ok: true },
    { name: "Incident Report.docx", type: "Document", ok: true },
    { name: "Vendor SLA.pdf", type: "PDF", ok: true },
    { name: "Access Review.xlsx", type: "Access", ok: true },
  ];
  return (
    <div className="bg-alt/60 border border-hairline rounded-xl p-3 text-xs h-full">
      <div className="flex items-center gap-2 mb-2 px-1">
        <Folder className="w-3.5 h-3.5 text-emerald" />
        <span className="text-navy font-medium">Evidence Library</span>
        <div className="ml-auto flex items-center gap-1 text-slate-mute">
          <Search className="w-3 h-3" /> Search
        </div>
      </div>
      <div className="bg-white rounded-lg border border-hairline overflow-hidden">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center justify-between px-3 py-2 border-b border-hairline last:border-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-2 h-2 rounded-full bg-emerald shrink-0" />
              <span className="text-navy truncate">{r.name}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-slate-mute text-[10px] uppercase tracking-wide">{r.type}</span>
              <Check className="w-3.5 h-3.5 text-emerald" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2 text-slate-mute">
        <Upload className="w-3 h-3" /> Uploading 2 files...
        <div className="ml-auto tabular text-emerald">64%</div>
      </div>
    </div>
  );
}

function OwnersPreview() {
  const owners = [
    { name: "Security Policy", who: "Anna Kowalska", due: "May 20", status: "On Track", tone: "emerald" },
    { name: "Access Review", who: "Piotr Nowak", due: "May 22", status: "Due Soon", tone: "amber" },
    { name: "Incident Report", who: "Katarzyna Lis", due: "May 25", status: "On Track", tone: "emerald" },
    { name: "Vendor SLA", who: "Marek Zieliński", due: "May 28", status: "On Track", tone: "emerald" },
  ];
  return (
    <div className="bg-alt/60 border border-hairline rounded-xl p-3 text-xs h-full">
      <div className="flex items-center gap-2 mb-2 px-1">
        <Users className="w-3.5 h-3.5 text-amber" />
        <span className="text-navy font-medium">Ownership Overview</span>
      </div>
      <div className="bg-white rounded-lg border border-hairline overflow-hidden">
        {owners.map((o) => (
          <div key={o.name} className="flex items-center gap-2 px-3 py-2 border-b border-hairline last:border-0">
            <div className="min-w-0 flex-1">
              <div className="text-navy truncate">{o.name}</div>
              <div className="flex items-center gap-1 text-slate-mute text-[10px]">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-navy to-emerald" />
                {o.who}
              </div>
            </div>
            <div className="flex items-center gap-1 text-slate-mute text-[10px]">
              <Calendar className="w-2.5 h-2.5" />{o.due}
            </div>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${o.tone === "emerald" ? "bg-emerald-soft text-emerald" : "bg-amber-soft text-amber"}`}>
              {o.status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1 text-slate-mute">
        <Bell className="w-3 h-3" /> 3 reminders sent today
      </div>
    </div>
  );
}

function AuditPreview() {
  const rows = [
    { fw: "ISO 27001", pct: 98 },
    { fw: "SOC 2", pct: 97 },
    { fw: "GDPR", pct: 100 },
    { fw: "HIPAA", pct: 95 },
  ];
  return (
    <div className="bg-alt/60 border border-hairline rounded-xl p-3 text-xs h-full">
      <div className="flex items-center gap-2 mb-2 px-1">
        <TrendingUp className="w-3.5 h-3.5 text-navy" />
        <span className="text-navy font-medium">Audit Readiness</span>
        <span className="ml-auto tabular text-navy font-medium text-base">98%</span>
      </div>
      <div className="bg-white rounded-lg border border-hairline p-3 space-y-2.5">
        <div className="text-slate-mute text-[10px] uppercase tracking-wide">Framework Coverage</div>
        {rows.map((r) => (
          <div key={r.fw}>
            <div className="flex justify-between mb-1">
              <span className="text-navy">{r.fw}</span>
              <span className="tabular text-slate-mute">{r.pct}%</span>
            </div>
            <div className="h-1 bg-alt rounded-full overflow-hidden">
              <div className="h-full bg-emerald" style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
