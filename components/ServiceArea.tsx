import { serviceAreas } from "@/lib/site";

export function ServiceArea() {
  return (
    <section id="areas" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sun-600">
            Proudly local
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Serving the San Fernando Valley
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            From Granada Hills to Woodland Hills, we&apos;re your neighbors. If
            you don&apos;t see your city listed, reach out — we likely serve it.
          </p>
        </div>

        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {serviceAreas.map((city) => (
            <li
              key={city}
              className="rounded-full border border-ink-900/10 bg-sun-50 px-5 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-sun-300 hover:bg-sun-100"
            >
              {city}
            </li>
          ))}
          <li className="rounded-full border border-dashed border-ink-900/20 px-5 py-2.5 text-sm font-semibold text-ink-700">
            &amp; the greater San Fernando Valley
          </li>
        </ul>
      </div>
    </section>
  );
}
