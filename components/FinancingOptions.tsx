import { ConsultButton } from "./CTAButtons";

// Columns after the option name. 2026 facts: the federal residential credit
// (Section 25D) for homeowner-owned systems ended Dec 31, 2025. Provider-owned
// options can still claim the commercial 48E credit and pass value through.
// Compliance: structural facts only — no specific savings $/% promised.
const columns = [
  "Who owns it",
  "Federal credit (2026)",
  "Upfront cost",
  "Monthly payment",
  "Maintenance",
  "Path to ownership",
];

const options = [
  {
    name: "Cash",
    note: "Buy outright",
    cells: ["You — day one", "No federal credit in 2026", "Full cost upfront", "None", "Yours", "Own immediately"],
  },
  {
    name: "Loan",
    note: "Finance & own",
    cells: ["You", "No federal credit in 2026", "$0-down options", "Loan payment", "Yours", "Own immediately"],
  },
  {
    name: "Lease",
    note: "Pay to use",
    cells: ["Provider", "Provider claims 48E, passed to you", "$0-down options", "Fixed monthly (may escalate)", "Included", "Optional buyout"],
  },
  {
    name: "PPA",
    note: "Pay per kWh",
    cells: ["Provider", "Provider claims 48E, passed to you", "$0-down options", "Per-kWh, set below your utility rate", "Included", "Optional buyout"],
  },
  {
    name: "Prepaid lease / PPA",
    note: "Pay once, upfront",
    cells: ["Provider (initially)", "Provider claims 48E (~30% off, passed through)", "Large upfront (~30% off)", "None", "Included", "Transfers after ~5–6 years"],
  },
];

export function FinancingOptions() {
  return (
    <section id="options" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun-600">
            More than one way to go solar
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Own it, finance it, lease it, or pay as you go
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            The federal residential tax credit for homeowner-owned systems ended
            December 31, 2025 — so the math changed in 2026. Here&apos;s how the
            five paths Sunbull offers compare, in plain language.
          </p>
        </div>

        {/* Comparison table — scrolls horizontally on small screens */}
        <div className="reveal mt-12 overflow-x-auto">
          <table className="w-full min-w-[58rem] border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 rounded-tl-2xl border-b border-ink-900/10 bg-sun-100 px-4 py-4 font-bold uppercase tracking-wide text-ink-900">
                  Option
                </th>
                {columns.map((c, i) => (
                  <th
                    key={c}
                    className={`border-b border-ink-900/10 bg-sun-50 px-4 py-4 font-bold uppercase tracking-wide text-ink-900 ${
                      i === columns.length - 1 ? "rounded-tr-2xl" : ""
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {options.map((o, r) => {
                const last = r === options.length - 1;
                return (
                  <tr key={o.name} className={r % 2 ? "bg-sun-50/30" : "bg-white"}>
                    <th
                      scope="row"
                      className={`sticky left-0 z-10 border-b border-ink-900/10 px-4 py-4 text-left align-top ${
                        r % 2 ? "bg-sun-50" : "bg-white"
                      } ${last ? "rounded-bl-2xl" : ""}`}
                    >
                      <span className="block font-bold text-ink-900">{o.name}</span>
                      <span className="mt-0.5 block text-xs font-normal text-ink-700/70">
                        {o.note}
                      </span>
                    </th>
                    {o.cells.map((cell, i) => (
                      <td
                        key={i}
                        className={`border-b border-ink-900/10 px-4 py-4 align-top text-ink-800 ${
                          last && i === o.cells.length - 1 ? "rounded-br-2xl" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="reveal mx-auto mt-6 max-w-3xl text-center text-sm text-ink-700/70">
          Federal 48E eligibility depends on the provider qualifying, and with
          provider-owned options the equipment may be limited to the
          provider&apos;s approved list. We help you choose what fits your home —
          no obligation.
        </p>

        <div className="reveal mt-12 text-center">
          <ConsultButton />
        </div>
      </div>
    </section>
  );
}
