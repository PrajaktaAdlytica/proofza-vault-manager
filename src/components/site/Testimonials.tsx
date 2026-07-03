import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Proofza helped us cut audit prep from six weeks to nine days. Evidence is collected the moment work happens, not the week before the auditor arrives.",
    name: "Anna Kowalska",
    role: "Head of Compliance",
    company: "Warsaw Digital",
  },
  {
    quote: "Clear ownership and automated reminders eliminated the frantic Slack messages before every audit. Our team finally treats compliance as an ongoing discipline.",
    name: "Piotr Nowak",
    role: "CISO",
    company: "Baltic Software",
  },
  {
    quote: "We achieved ISO 27001 certification three months ahead of schedule. The evidence library alone is worth ten times what we pay.",
    name: "Katarzyna Wiśniewska",
    role: "VP of Security",
    company: "Kraków Cloud",
  },
  {
    quote: "The audit readiness dashboard is a permanent tab on my browser. I always know exactly where we stand across every framework.",
    name: "Tomasz Zieliński",
    role: "Director of Risk",
    company: "Poznań Tech",
  },
  {
    quote: "Secure, intuitive and built for real compliance work. Our auditors love the read-only access and audit trail.",
    name: "Agnieszka Kamińska",
    role: "Compliance Manager",
    company: "Gdańsk Systems",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-alt border-y border-hairline">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="eyebrow mb-3">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-light">Loved by compliance teams in Poland.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard t={t} key={i} />
          ))}
          <div className="lg:col-span-3 grid gap-6 md:grid-cols-2">
            {testimonials.slice(3).map((t, i) => (
              <TestimonialCard t={t} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="bg-white border border-hairline rounded-2xl p-8 card-lift">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-emerald text-emerald" />
        ))}
      </div>
      <p className="text-navy leading-relaxed mb-6 font-light">"{t.quote}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-hairline">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-emerald flex items-center justify-center text-white text-sm font-medium">
          {t.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="text-sm">
          <div className="text-navy font-medium">{t.name}</div>
          <div className="text-slate-mute text-xs">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  );
}
