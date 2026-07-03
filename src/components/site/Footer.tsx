import { Link } from "@tanstack/react-router";
import logo from "@/assets/proofza-logo.svg.asset.json";

export function Footer() {
  const cols = [
    { title: "Product", links: [
      { name: "Proofza Vault", to: "/products/vault" },
      { name: "Proofza Owners", to: "/products/owners" },
      { name: "Proofza Audit", to: "/products/audit" },
      { name: "Pricing", to: "/#pricing" },
    ]},
    { title: "Solutions", links: [
      { name: "SOC 2", to: "/#solutions" },
      { name: "ISO 27001", to: "/#solutions" },
      { name: "GDPR", to: "/#solutions" },
      { name: "HIPAA", to: "/#solutions" },
    ]},
    { title: "Company", links: [
      { name: "About", to: "/#about" },
      { name: "Careers", to: "/#about" },
      { name: "Contact", to: "/request-demo" },
      { name: "Request Demo", to: "/request-demo" },
    ]},
    { title: "Legal", links: [
      { name: "Privacy Policy", to: "/" },
      { name: "Terms", to: "/" },
      { name: "Security", to: "/" },
      { name: "DPA", to: "/" },
    ]},
  ];
  return (
    <footer className="bg-alt border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <img src={logo.url} alt="Proofza" className="h-7 w-auto mb-5" />
            <p className="text-sm text-slate-mute max-w-xs leading-relaxed">
              Evidence operations platform for compliance teams preparing SOC 2, ISO 27001, GDPR and HIPAA certifications.
            </p>
            <div className="mt-6 text-sm text-slate-mute space-y-1">
              <div className="text-navy font-medium">Proofza Sp. z o.o.</div>
              <div>Prosta 70</div>
              <div>00-838 Warsaw, Poland</div>
              <div className="pt-2">
                <a href="mailto:hello@proofza.io" className="hover:text-navy transition-colors">hello@proofza.io</a>
              </div>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-medium tracking-widest text-navy uppercase mb-4">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.name}>
                    <Link to={l.to} className="text-sm text-slate-mute hover:text-navy transition-colors">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-hairline flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-mute">
          <div>© {new Date().getFullYear()} Proofza Sp. z o.o. All rights reserved.</div>
          <div className="flex gap-4">
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>GDPR compliant</span>
            <span>EU-hosted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
