import { site } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">Contact</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">Let&apos;s build something together</h2>
        <p className="mt-6 text-lg text-muted">
          I&apos;m open to full-stack and front-end opportunities. Drop me a line and I&apos;ll get back to you.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-black shadow-[0_0_30px_-5px] shadow-accent transition hover:scale-105"
        >
          {site.email}
        </a>
        <ul className="mt-8 flex justify-center gap-6">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href={site.resume} className="text-muted hover:text-white">
              Resume
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
