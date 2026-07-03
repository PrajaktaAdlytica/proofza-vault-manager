import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/proofza-logo.svg.asset.json";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="Proofza" className="h-7 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-[15px] text-slate">
          <Link to="/" className="hover:text-navy transition-colors">Home</Link>
          <div className="relative" onMouseEnter={() => setProdOpen(true)} onMouseLeave={() => setProdOpen(false)}>
            <button className="flex items-center gap-1 hover:text-navy transition-colors">
              Products <ChevronDown className="w-4 h-4" />
            </button>
            {prodOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                <div className="bg-white border border-hairline rounded-xl shadow-xl p-2 animate-fade-up">
                  {[
                    { to: "/products/vault", name: "Proofza Vault", desc: "Centralised evidence library", dot: "bg-emerald" },
                    { to: "/products/owners", name: "Proofza Owners", desc: "Ownership & assignments", dot: "bg-amber" },
                    { to: "/products/audit", name: "Proofza Audit", desc: "Readiness tracking", dot: "bg-navy" },
                  ].map((p) => (
                    <Link key={p.to} to={p.to} className="flex items-start gap-3 p-3 rounded-lg hover:bg-alt transition-colors">
                      <span className={`mt-1 w-2 h-2 rounded-full ${p.dot}`} />
                      <span>
                        <span className="block text-navy font-medium">{p.name}</span>
                        <span className="block text-xs text-slate-mute">{p.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="/#solutions" className="hover:text-navy transition-colors">Solutions</a>
          <a href="/#pricing" className="hover:text-navy transition-colors">Pricing</a>
          <a href="/#about" className="hover:text-navy transition-colors">About</a>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/signin" className="text-[15px] text-slate hover:text-navy transition-colors">Sign In</Link>
          <Link to="/request-demo" className="btn-primary">Request Demo</Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-hairline px-6 py-4 space-y-3 bg-white">
          <Link to="/" className="block py-1 text-slate">Home</Link>
          <Link to="/products/vault" className="block py-1 text-slate">Proofza Vault</Link>
          <Link to="/products/owners" className="block py-1 text-slate">Proofza Owners</Link>
          <Link to="/products/audit" className="block py-1 text-slate">Proofza Audit</Link>
          <a href="/#pricing" className="block py-1 text-slate">Pricing</a>
          <a href="/#about" className="block py-1 text-slate">About</a>
          <Link to="/signin" className="block py-1 text-slate">Sign In</Link>
          <Link to="/request-demo" className="btn-primary w-full mt-2">Request Demo</Link>
        </div>
      )}
    </header>
  );
}
