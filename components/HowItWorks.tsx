import { steps } from "@/lib/site";
import { ConsultButton } from "./CTAButtons";

export function HowItWorks() {
  return (
    <section id="how" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Simple from bill to install
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Four simple steps — just clear answers about your electric bill and
            your options.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.n}
              className="reveal relative rounded-2xl border border-ink-900/10 bg-sun-50/40 p-7 transition hover:border-sun-300 hover:shadow-lg hover:shadow-sun-500/10"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="font-display text-5xl font-extrabold text-sun-300">
                {step.n}
              </span>
              <h3 className="mt-3 text-xl font-bold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-ink-700">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12 text-center">
          <ConsultButton />
        </div>
      </div>
    </section>
  );
}
