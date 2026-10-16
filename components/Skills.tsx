"use client";

import { motion } from "framer-motion";
import { languages, skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Skills" title="Tools I work with" />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.08}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <motion.li
                    key={s}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <p className="text-muted">
          <span className="text-white">Languages:</span> {languages.join(" · ")}
        </p>
      </Reveal>
    </section>
  );
}
