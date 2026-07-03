const logos = [
  "Warsaw Digital", "Baltic Software", "Kraków Cloud", "Poznań Tech",
  "Gdańsk Systems", "Wrocław Data", "Łódź Analytics", "Silesia Fintech",
];

export function TrustedBy() {
  return (
    <section className="py-16 px-6 bg-white border-y border-hairline overflow-hidden">
      <div className="text-center text-xs uppercase tracking-widest text-slate-mute mb-8">
        Trusted by compliance teams across Poland
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-16 whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-mute/70 text-xl font-light shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald/50" />
              {l}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
