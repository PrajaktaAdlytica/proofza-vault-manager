import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logoUrl from "@/assets/proofexa-logo.svg?url";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign In — Proofexa" },
      { name: "description", content: "Sign in to your Proofexa evidence workspace." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen bg-alt/50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="relative w-full max-w-md bg-white border border-hairline rounded-2xl shadow-xl p-8">
        <Link to="/" className="flex items-center justify-center mb-6">
          <img src={logoUrl} alt="Proofexa" className="h-8 w-auto" />
        </Link>
        <h1 className="text-2xl font-light text-navy text-center mb-1">Welcome back</h1>
        <p className="text-center text-slate-mute text-sm mb-8">Sign in to your evidence workspace</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs text-slate uppercase tracking-wider">Email</label>
            <input type="email" required className="mt-1 w-full h-11 px-3 rounded-lg border border-hairline focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition" placeholder="you@company.io" />
          </div>
          <div>
            <label className="text-xs text-slate uppercase tracking-wider">Password</label>
            <div className="relative">
              <input type={show ? "text" : "password"} required className="mt-1 w-full h-11 px-3 pr-10 rounded-lg border border-hairline focus:border-navy focus:ring-2 focus:ring-navy/10 outline-none transition" placeholder="••••••••" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-mute">
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate">
              <input type="checkbox" className="rounded border-hairline" /> Remember me
            </label>
            <a href="#" className="text-emerald hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="btn-primary w-full">Sign In</button>
        </form>
        <div className="flex items-center gap-3 my-6 text-xs text-slate-mute">
          <div className="flex-1 h-px bg-hairline" /> OR <div className="flex-1 h-px bg-hairline" />
        </div>
        <div className="space-y-2">
          <button className="w-full h-11 rounded-full border border-hairline hover:border-navy transition flex items-center justify-center gap-2 text-sm text-navy">
            <GoogleIcon /> Continue with Google
          </button>
          <button className="w-full h-11 rounded-full border border-hairline hover:border-navy transition flex items-center justify-center gap-2 text-sm text-navy">
            <MsIcon /> Continue with Microsoft
          </button>
        </div>
        <div className="mt-8 flex justify-between text-xs text-slate-mute">
          <Link to="/" className="hover:text-navy">← Back to home</Link>
          <Link to="/request-demo" className="hover:text-navy">Request a demo</Link>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
  );
}
function MsIcon() {
  return <svg viewBox="0 0 24 24" className="w-4 h-4"><rect width="10" height="10" x="1" y="1" fill="#F25022"/><rect width="10" height="10" x="13" y="1" fill="#7FBA00"/><rect width="10" height="10" x="1" y="13" fill="#00A4EF"/><rect width="10" height="10" x="13" y="13" fill="#FFB900"/></svg>;
}
