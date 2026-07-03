import { Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Mail, FileText, Ticket, Cloud, FileCheck2, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";

const sources = [
  { icon: Camera, label: "Screenshot" },
  { icon: Mail, label: "Email" },
  { icon: FileText, label: "Policy" },
  { icon: Ticket, label: "Ticket" },
  { icon: Cloud, label: "Vendor System" },
  { icon: FileCheck2, label: "PDF" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-70" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-alt/60 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <div className="eyebrow mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-flow-pulse" />
            Evidence Operations Platform
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.02] text-navy">
            Audit evidence.<br />
            <span className="text-emerald">Finally organised.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-mute max-w-xl leading-relaxed font-light">
            Collect screenshots, tickets, policies, emails and files into one secure evidence
            workspace. Assign ownership, monitor readiness and prepare every audit without
            chasing documents.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/request-demo" className="btn-primary">
              Request Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#platform" className="btn-secondary">Explore Platform</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-mute">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald" /> SOC 2 Type II</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald" /> ISO 27001</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald" /> GDPR compliant</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald" /> EU-hosted</div>
          </div>
        </div>

        <EvidenceFlow />
      </div>
    </section>
  );
}

function EvidenceFlow() {
  return (
    <div className="relative animate-fade-up">
      {/* Source icons row */}
      <div className="grid grid-cols-6 gap-2 mb-8">
        {sources.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-2 group"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="w-14 h-14 rounded-xl bg-white border border-hairline flex items-center justify-center shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-emerald/50 group-hover:shadow-lg">
              <s.icon className="w-6 h-6 text-navy" />
            </div>
            <div className="text-[11px] text-slate-mute text-center leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Flow lines to vault */}
      <svg className="w-full h-24 -my-2" viewBox="0 0 400 100" preserveAspectRatio="none">
        {[40, 100, 160, 220, 280, 340].map((x, i) => (
          <path
            key={i}
            d={`M ${x} 0 Q ${x} 50, 200 90`}
            fill="none"
            stroke="oklch(0.71 0.16 165)"
            strokeWidth="1"
            strokeOpacity="0.5"
            className="animate-dash"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </svg>

      {/* Vault card */}
      <div className="relative mx-auto max-w-xs">
        <div className="bg-white border-2 border-emerald/40 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-navy font-medium">Proofza Vault</div>
              <div className="text-xs text-slate-mute">Evidence workspace</div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-emerald/20 blur-xl rounded-full" />
      </div>

      {/* Status card */}
      <div className="mt-6 bg-white border border-hairline rounded-2xl p-5 shadow-lg space-y-3">
        <StatusRow icon="check" label="Evidence verified" value="Verified" tone="emerald" />
        <StatusRow icon="up" label="Audit readiness increased" value="+12%" tone="emerald" />
        <div className="pt-3 border-t border-hairline">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-slate-mute">Audit Ready</div>
            <div className="tabular text-emerald font-medium text-lg">98%</div>
          </div>
          <div className="h-1.5 bg-alt rounded-full overflow-hidden">
            <div className="h-full bg-emerald rounded-full" style={{ width: "98%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusRow({ icon, label, value, tone }: { icon: "check" | "up"; label: string; value: string; tone: string }) {
  const Icon = icon === "check" ? CheckCircle2 : TrendingUp;
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 text-slate">
        <Icon className={`w-4 h-4 text-${tone}`} />
        {label}
      </div>
      <span className={`text-${tone} font-medium tabular text-xs px-2 py-0.5 rounded-full bg-${tone}-soft`}>{value}</span>
    </div>
  );
}
