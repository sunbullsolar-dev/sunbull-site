import { trustStats } from "@/lib/site";

export function TrustBar() {
  return (
    <section aria-label="Why homeowners trust Sunbull" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 shadow-xl shadow-ink-900/5 lg:grid-cols-4">
          {trustStats.map((s, i) => (
            <div
              key={s.label}
              className="reveal bg-white px-4 py-6 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-ink-700">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
