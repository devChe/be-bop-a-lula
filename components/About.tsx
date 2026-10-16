import { site } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const initials = site.name.split(" ").map((p) => p[0]).join("").slice(0, 2);
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="About" title="A developer who cares about the details" />
      <div className="grid items-center gap-12 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <div className="glass mx-auto flex aspect-square w-64 items-center justify-center overflow-hidden rounded-3xl text-6xl font-bold text-accent">
            {site.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.photo} alt={`Portrait of ${site.name}`} className="h-full w-full object-cover" />
            ) : (
              initials
            )}
          </div>
        </Reveal>
        <div className="space-y-5 text-lg text-muted">
          {site.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <dl className="grid grid-cols-3 gap-4 pt-4">
              {site.stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4">
                  <dt className="order-2 text-xs text-muted">{s.label}</dt>
                  <dd className="text-3xl font-bold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
