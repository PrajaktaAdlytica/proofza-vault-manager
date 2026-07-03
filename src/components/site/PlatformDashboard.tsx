import { LayoutDashboard, FolderOpen, Inbox, AlertTriangle, Users, Layers, BarChart3, Settings, Upload, FileCheck2, Shield } from "lucide-react";

export function PlatformDashboard() {
  return (
    <section id="platform" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow mb-3">Platform Dashboard</div>
          <h2 className="text-4xl md:text-5xl font-light">Every audit, in one view.</h2>
        </div>
        <div className="rounded-3xl border border-hairline bg-white shadow-2xl overflow-hidden">
          <div className="grid grid-cols-12 min-h-[560px]">
            {/* Sidebar */}
            <aside className="col-span-12 md:col-span-2 bg-navy text-white/80 p-4 space-y-1">
              <div className="flex items-center gap-2 mb-6 px-2">
                <Shield className="w-5 h-5 text-emerald" />
                <span className="text-white font-medium">Proofza</span>
              </div>
              {[
                { icon: LayoutDashboard, name: "Dashboard", active: true },
                { icon: FolderOpen, name: "Evidence Library" },
                { icon: Inbox, name: "Requests" },
                { icon: Users, name: "Owners" },
                { icon: Layers, name: "Frameworks" },
                { icon: BarChart3, name: "Reports" },
                { icon: Settings, name: "Settings" },
              ].map((it) => (
                <div key={it.name} className={`flex items-center gap-2 px-2 py-2 rounded-lg text-sm transition-colors ${it.active ? "bg-white/10 text-white" : "hover:bg-white/5"}`}>
                  <it.icon className="w-4 h-4" />
                  <span className="hidden md:inline">{it.name}</span>
                </div>
              ))}
            </aside>

            {/* Main */}
            <div className="col-span-12 md:col-span-10 p-6 md:p-8 bg-alt/40">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-navy text-xl font-medium">Dashboard</h3>
                  <p className="text-sm text-slate-mute">Overview of your audit readiness</p>
                </div>
                <div className="text-xs text-slate-mute bg-white px-3 py-1.5 rounded-full border border-hairline tabular">
                  May 12 – May 19, 2026
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatCard icon={FolderOpen} label="Evidence Library" value="12,458" sub="Total documents" tone="emerald" />
                <StatCard icon={Upload} label="Recent Uploads" value="156" sub="This week" tone="navy" />
                <StatCard icon={AlertTriangle} label="Missing Evidence" value="23" sub="Requires attention" tone="amber" />
                <StatCard icon={Users} label="Assigned Owners" value="48" sub="Active owners" tone="emerald" />
              </div>

              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-1 bg-white border border-hairline rounded-xl p-5">
                  <div className="text-sm text-slate-mute mb-4">Framework Coverage</div>
                  {[
                    { name: "ISO 27001", v: 98 }, { name: "SOC 2", v: 97 },
                    { name: "GDPR", v: 100 }, { name: "HIPAA", v: 95 },
                  ].map((f) => (
                    <div key={f.name} className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-navy">{f.name}</span>
                        <span className="tabular text-slate-mute">{f.v}%</span>
                      </div>
                      <div className="h-1.5 bg-alt rounded-full overflow-hidden">
                        <div className="h-full bg-emerald rounded-full" style={{ width: `${f.v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-1 bg-white border border-hairline rounded-xl p-5 flex flex-col items-center justify-center">
                  <div className="text-sm text-slate-mute mb-3">Audit Readiness</div>
                  <ReadinessRing pct={98} />
                  <div className="mt-3 text-xs text-slate-mute">Audit Ready</div>
                </div>

                <div className="lg:col-span-1 bg-white border border-hairline rounded-xl p-5">
                  <div className="text-sm text-slate-mute mb-4">Open Requests</div>
                  <div className="space-y-3">
                    {[
                      { name: "Screenshot Requests", count: 12 },
                      { name: "Document Requests", count: 8 },
                      { name: "Policy Updates", count: 3 },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <FileCheck2 className="w-4 h-4 text-navy" />
                          <span className="text-navy">{r.name}</span>
                        </div>
                        <span className="tabular text-slate-mute font-medium">{r.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white border border-hairline rounded-xl p-5">
                <div className="text-sm text-slate-mute mb-3">Recent Activity</div>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  {[
                    ["Security Policy.pdf verified", "2 min ago"],
                    ["Login Screenshot.png uploaded", "15 min ago"],
                    ["Access Review.xlsx verified", "1 hr ago"],
                    ["Incident Report.docx uploaded", "2 hrs ago"],
                  ].map(([n, t]) => (
                    <div key={n} className="flex items-center justify-between py-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                        <span className="text-navy">{n}</span>
                      </div>
                      <span className="tabular text-xs text-slate-mute">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, sub, tone }: any) {
  const toneMap: any = { emerald: "text-emerald bg-emerald-soft", navy: "text-navy bg-alt", amber: "text-amber bg-amber-soft" };
  return (
    <div className="bg-white border border-hairline rounded-xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-xs text-slate-mute">{label}</div>
          <div className="text-2xl font-light text-navy tabular mt-1">{value}</div>
        </div>
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${toneMap[tone]}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="text-[11px] text-slate-mute">{sub}</div>
    </div>
  );
}

function ReadinessRing({ pct }: { pct: number }) {
  const r = 42, c = 2 * Math.PI * r, off = c - (pct / 100) * c;
  return (
    <div className="relative w-28 h-28">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="oklch(0.92 0.008 250)" strokeWidth="8" />
        <circle cx="50" cy="50" r={r} fill="none" stroke="oklch(0.71 0.16 165)" strokeWidth="8" strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-navy font-light text-2xl tabular">{pct}%</div>
    </div>
  );
}
