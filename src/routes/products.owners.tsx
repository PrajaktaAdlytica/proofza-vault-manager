import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import { Users, Bell, Calendar, Check } from "lucide-react";

export const Route = createFileRoute("/products/owners")({
  head: () => ({
    meta: [
      { title: "Proofza Owners — Evidence Ownership & Assignments" },
      { name: "description", content: "Assign owners to every piece of evidence, automate reminders and eliminate missing documentation." },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Proofza Owners"
      title="Every control. Every owner."
      subtitle="Ownership dashboard for accountable compliance."
      description="Assign evidence owners, monitor responsibilities and eliminate missing documentation. Automated reminders and clear accountability across every framework."
      color="amber"
      hero={<OwnersHero />}
      dashboard={<OwnersDashboard />}
      features={[
        { title: "Owner assignments", desc: "Assign every control and evidence artefact to a named owner." },
        { title: "Automated reminders", desc: "Slack, email and calendar reminders before evidence expires." },
        { title: "Escalation rules", desc: "Overdue items escalate automatically to backup owners." },
        { title: "Status chips", desc: "On track, due soon, overdue — visible at a glance." },
        { title: "Team workload view", desc: "See who's over-assigned before it becomes a bottleneck." },
        { title: "Delegation", desc: "One-click reassignment when people change roles." },
      ]}
      benefits={[
        { title: "Zero missing evidence", desc: "Clear ownership means nothing falls through." },
        { title: "Fewer meetings", desc: "Reminders replace status stand-ups." },
        { title: "Accountable culture", desc: "Ownership becomes routine, not audit-panic." },
        { title: "Faster onboarding", desc: "New owners see their queue on day one." },
      ]}
    />
  ),
});

function OwnersHero() {
  return (
    <div className="bg-white border border-hairline rounded-2xl p-5 shadow-xl">
      <div className="flex items-center gap-2 mb-3 text-navy">
        <Users className="w-4 h-4 text-amber" />
        <span className="font-medium">Ownership queue</span>
        <span className="ml-auto text-xs text-slate-mute tabular">48 owners</span>
      </div>
      <div className="space-y-2">
        {[
          { n: "Anna Kowalska", t: "Security Policy", s: "On Track", d: "May 20", tone: "emerald" },
          { n: "Piotr Nowak", t: "Access Review", s: "Due Soon", d: "May 22", tone: "amber" },
          { n: "Katarzyna Lis", t: "Vendor SLA", s: "On Track", d: "May 25", tone: "emerald" },
          { n: "Marek Zieliński", t: "Incident Report", s: "Overdue", d: "May 18", tone: "destructive" },
        ].map((o, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg border border-hairline">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy to-amber flex items-center justify-center text-white text-xs font-medium">
              {o.n.split(" ").map(x => x[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-navy">{o.n}</div>
              <div className="text-xs text-slate-mute">{o.t}</div>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-mute"><Calendar className="w-3 h-3" />{o.d}</div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              o.tone === "emerald" ? "bg-emerald-soft text-emerald" :
              o.tone === "amber" ? "bg-amber-soft text-amber" :
              "bg-destructive/10 text-destructive"
            }`}>{o.s}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-slate-mute">
        <Bell className="w-3 h-3" /> 3 reminders scheduled for today
      </div>
    </div>
  );
}

function OwnersDashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-4 text-sm">
      <div className="border border-hairline rounded-xl p-4">
        <div className="text-xs text-slate-mute mb-2">Active Owners</div>
        <div className="text-3xl font-light text-navy tabular">48</div>
        <div className="text-xs text-emerald mt-2 flex items-center gap-1"><Check className="w-3 h-3" /> All within workload cap</div>
      </div>
      <div className="border border-hairline rounded-xl p-4">
        <div className="text-xs text-slate-mute mb-2">Items Due This Week</div>
        <div className="text-3xl font-light text-navy tabular">17</div>
        <div className="text-xs text-amber mt-2">3 need reassignment</div>
      </div>
      <div className="border border-hairline rounded-xl p-4">
        <div className="text-xs text-slate-mute mb-2">Overdue</div>
        <div className="text-3xl font-light text-navy tabular">2</div>
        <div className="text-xs text-destructive mt-2">Escalated automatically</div>
      </div>
      <div className="md:col-span-3 border border-hairline rounded-xl p-4 bg-alt/40">
        <div className="text-xs text-slate-mute mb-3">Reminder Timeline</div>
        <div className="flex items-center gap-2 overflow-x-auto py-2">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1 shrink-0">
              <div className={`w-6 h-14 rounded ${i === 5 ? "bg-amber" : i === 9 ? "bg-emerald" : "bg-hairline"}`} style={{ height: `${20 + Math.abs(Math.sin(i)) * 40}px` }} />
              <span className="text-[10px] text-slate-mute tabular">{i + 15}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
