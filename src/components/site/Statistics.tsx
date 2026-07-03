import { useEffect, useRef, useState } from "react";
import { FolderOpen, ClipboardCheck, FileText, TrendingUp } from "lucide-react";

const stats = [
  { icon: FolderOpen, value: 2.4, suffix: "M+", label: "Evidence Stored", decimals: 1 },
  { icon: ClipboardCheck, value: 18000, suffix: "+", label: "Audits Supported", decimals: 0 },
  { icon: FileText, value: 47, suffix: "M+", label: "Documents Organised", decimals: 0 },
  { icon: TrendingUp, value: 73, suffix: "%", label: "Avg Audit Prep Time Reduced", decimals: 0 },
];

function useCounter(target: number, decimals: number, start: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number, t0: number | null = null;
    const dur = 1600;
    const tick = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return decimals === 0 ? Math.round(n).toLocaleString() : n.toFixed(1);
}

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-24 px-6">
      <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} s={s} visible={visible} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ s, visible }: any) {
  const value = useCounter(s.value, s.decimals, visible);
  return (
    <div className="border border-hairline rounded-2xl p-6 bg-white card-lift">
      <div className="w-10 h-10 rounded-lg bg-emerald-soft flex items-center justify-center mb-4">
        <s.icon className="w-5 h-5 text-emerald" />
      </div>
      <div className="text-4xl md:text-5xl font-light text-navy tabular">
        {value}{s.suffix}
      </div>
      <div className="text-sm text-slate-mute mt-2">{s.label}</div>
    </div>
  );
}
