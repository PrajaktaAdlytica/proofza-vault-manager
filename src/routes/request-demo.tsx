import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ShieldCheck, Clock, FileCheck2 } from "lucide-react";
import logoUrl from "@/assets/proofexa-logo.svg?url";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo — Proofexa" },
      { name: "description", content: "See how Proofexa organises audit evidence and prepares your team for continuous compliance." },
    ],
  }),
  component: RequestDemo,
});

function RequestDemo() {
  return (
    <div className="min-h-screen bg-white relative">
      <header className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoUrl} alt="Proofexa" className="h-7 w-auto" />
          </Link>
          <Link to="/signin" className="text-sm text-slate hover:text-navy">Sign in</Link>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow mb-3">Request a Demo</div>
          <h1 className="text-4xl md:text-5xl font-light text-navy leading-tight mb-4">
            See Proofexa in your<br />evidence workflow.
          </h1>
          <p className="text-lg text-slate-mute leading-relaxed max-w-lg mb-8">
            A 30-minute personalised walkthrough of the evidence library, ownership dashboard and readiness tracking — tailored to your frameworks.
          </p>
          <div className="space-y-4 max-w-md">
            {[
              { icon: ShieldCheck, t: "See the platform live", d: "Real evidence library, real controls, real dashboards." },
              { icon: Clock, t: "30 minutes, tailored", d: "Focused on your frameworks and evidence sources." },
              { icon: FileCheck2, t: "Get a readiness assessment", d: "Walk away with a personalised readiness score." },
            ].map((b) => (
              <div key={b.t} className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-soft flex items-center justify-center shrink-0">
                  <b.icon className="w-4 h-4 text-emerald" />
                </div>
                <div>
                  <div className="text-navy font-medium">{b.t}</div>
                  <div className="text-sm text-slate-mute">{b.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-alt rounded-2xl border border-hairline p-6 max-w-md">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => <div key={i} className="w-3 h-3 rounded-full bg-emerald" />)}
            </div>
            <p className="text-navy text-sm font-light leading-relaxed">
              "The demo alone showed us three evidence gaps we didn't know about. We signed the next day."
            </p>
            <div className="mt-4 text-xs text-slate-mute">Anna Kowalska · Head of Compliance, Warsaw Digital</div>
          </div>
        </div>

        <div className="bg-white border border-hairline rounded-2xl p-8 shadow-lg h-fit">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Request received — we'll be in touch soon."); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" placeholder="Anna Kowalska" required />
              <Field label="Work Email" name="email" type="email" placeholder="anna@company.io" required />
              <Field label="Company" name="company" placeholder="Warsaw Digital" required />
              <Field label="Job Title" name="title" placeholder="Head of Compliance" />
              <Select label="Country" name="country" options={["Poland", "Germany", "Czech Republic", "Slovakia", "Other EU"]} />
              <Select label="Company Size" name="size" options={["1–10", "11–50", "51–200", "201–500", "500+"]} />
            </div>
            <div>
              <label className="text-xs text-slate uppercase tracking-wider">Message</label>
              <textarea className="mt-1 w-full min-h-24 px-3 py-2 rounded-lg border border-hairline focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition" placeholder="Which frameworks are you preparing for?" />
            </div>
            <label className="flex items-start gap-2 text-xs text-slate-mute">
              <input type="checkbox" className="mt-0.5" required /> I agree to receive communication from Proofexa and understand my data will be handled per the Privacy Policy.
            </label>
            <button type="submit" className="btn-primary w-full">
              Request Demo <Check className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-slate-mute">EU-hosted · GDPR compliant · No credit card required</p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, ...rest }: any) {
  return (
    <div>
      <label className="text-xs text-slate uppercase tracking-wider">{label}</label>
      <input {...rest} name={name} className="mt-1 w-full h-11 px-3 rounded-lg border border-hairline focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition" />
    </div>
  );
}
function Select({ label, name, options }: any) {
  return (
    <div>
      <label className="text-xs text-slate uppercase tracking-wider">{label}</label>
      <select name={name} className="mt-1 w-full h-11 px-3 rounded-lg border border-hairline bg-white focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition">
        {options.map((o: string) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
