import { FolderOpen, Users, Rocket, History, Lock, TrendingUp } from "lucide-react";

const benefits = [
  { icon: FolderOpen, title: "Centralised Evidence", desc: "All evidence in one secure, searchable workspace." },
  { icon: Users, title: "Clear Ownership", desc: "Everyone knows what they own and when it's due." },
  { icon: Rocket, title: "Faster Certifications", desc: "Reduce audit prep time and close gaps early." },
  { icon: History, title: "Complete Audit History", desc: "Track every change with full audit trails." },
  { icon: Lock, title: "Secure Document Management", desc: "Enterprise-grade security and access control." },
  { icon: TrendingUp, title: "Continuous Audit Readiness", desc: "Monitor progress and stay ready every day." },
];

export function Benefits() {
  return (
    <section className="py-24 px-6 bg-alt border-y border-hairline">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <div className="eyebrow mb-3">Benefits</div>
          <h2 className="text-4xl md:text-5xl font-light">Evidence without the chaos.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white border border-hairline rounded-2xl p-6 card-lift">
              <div className="w-10 h-10 rounded-lg bg-emerald-soft flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-emerald" />
              </div>
              <h3 className="text-navy text-lg font-medium mb-2">{b.title}</h3>
              <p className="text-sm text-slate-mute leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
