import { Files, FolderSync, Users, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Files,
    title: "Scattered Evidence",
    desc: "Evidence exists across cloud storage, emails, tickets and internal documentation.",
    visual: <ScatteredVisual />,
  },
  {
    icon: FolderSync,
    title: "Manual Collection",
    desc: "Teams repeatedly request the same screenshots and files.",
    visual: <ManualVisual />,
  },
  {
    icon: Users,
    title: "Unclear Ownership",
    desc: "Nobody knows who owns missing evidence.",
    visual: <OwnershipVisual />,
  },
  {
    icon: AlertTriangle,
    title: "Audit Delays",
    desc: "Missing documentation slows every certification.",
    visual: <TimelineVisual />,
  },
];

export function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-3">The problem</div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">Audit evidence lives everywhere.</h2>
          <p className="text-slate-mute text-lg leading-relaxed">
            Compliance teams waste hours collecting screenshots, policies, emails and documents before every audit.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.title} className="bg-white border border-hairline rounded-2xl p-6 card-lift">
              <div className="w-10 h-10 rounded-lg bg-alt flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-navy text-lg font-medium mb-2">{p.title}</h3>
              <p className="text-sm text-slate-mute leading-relaxed mb-5">{p.desc}</p>
              <div className="h-24 flex items-center justify-center border-t border-hairline pt-4">
                {p.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScatteredVisual() {
  return (
    <div className="flex gap-2">
      {["A", "B", "C", "D"].map((_, i) => (
        <div key={i} className="w-8 h-10 bg-alt rounded border border-hairline" style={{ transform: `rotate(${(i - 1.5) * 8}deg)` }} />
      ))}
    </div>
  );
}
function ManualVisual() {
  return (
    <svg viewBox="0 0 120 60" className="w-full h-16">
      <rect x="4" y="20" width="30" height="22" rx="3" fill="oklch(0.982 0.005 240)" stroke="oklch(0.92 0.008 250)" />
      <rect x="86" y="20" width="30" height="22" rx="3" fill="oklch(0.982 0.005 240)" stroke="oklch(0.92 0.008 250)" />
      <path d="M40 30 L 80 30" stroke="oklch(0.71 0.16 165)" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="60" cy="30" r="6" fill="oklch(0.71 0.16 165 / 0.2)" stroke="oklch(0.71 0.16 165)" />
    </svg>
  );
}
function OwnershipVisual() {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {["Unassigned", "Assigned", "Unassigned"].map((s, i) => (
        <div key={i} className="flex items-center gap-2 text-[10px]">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-navy/50 to-emerald/50" />
          <div className="flex-1 h-1.5 bg-alt rounded" />
          <span className={s === "Assigned" ? "text-emerald" : "text-amber"}>{s}</span>
        </div>
      ))}
    </div>
  );
}
function TimelineVisual() {
  return (
    <svg viewBox="0 0 120 40" className="w-full h-12">
      <line x1="8" y1="20" x2="112" y2="20" stroke="oklch(0.92 0.008 250)" strokeWidth="1" />
      {[20, 55, 90].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="20" r="5" fill={i === 1 ? "oklch(0.78 0.14 75)" : "oklch(0.58 0.22 27 / 0.8)"} />
          <text x={x} y="8" fontSize="6" textAnchor="middle" fill="oklch(0.58 0.22 27)">!</text>
        </g>
      ))}
    </svg>
  );
}
