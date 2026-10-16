"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { navLinks, site } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/70 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-lg font-semibold">
          <span className="text-accent">&lt;</span>
          {site.name.split(" ")[0]}
          <span className="text-accent">/&gt;</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-sm text-muted transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-md border border-white/15 px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-white/10 px-6 pb-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      <motion.div style={{ scaleX }} className="h-0.5 origin-left bg-accent" aria-hidden />
    </header>
  );
}
