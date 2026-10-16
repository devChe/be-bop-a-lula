import { experience, otherWork } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <ol className="relative space-y-10 border-l border-white/15 pl-8">
        {experience.map((e, i) => (
          <li key={e.company} className="relative">
            <span aria-hidden className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-accent shadow-[0_0_15px] shadow-accent" />
            <Reveal delay={i * 0.05}>
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {e.company} <span className="text-muted">· {e.role}</span>
                  </h3>
                  <span className="font-mono text-sm text-accent">{e.period}</span>
                </div>
                <p className="mt-3 text-muted">{e.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <li key={s} className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal className="mt-12">
        <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">Other work</h3>
        <ul className="list-inside list-disc space-y-1 text-muted">
          {otherWork.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
