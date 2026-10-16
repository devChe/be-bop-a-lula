"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Projects" title="Selected work" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <motion.a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="glass group block h-full overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_0_40px_-10px] hover:shadow-accent"
            >
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-accent/30 to-fuchsia-500/20">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={`${p.title} screenshot`} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-2xl font-bold opacity-70">{p.title}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="flex items-center justify-between text-xl font-semibold">
                  {p.title}
                  <span aria-hidden className="transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </h3>
                <p className="mt-2 text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
