"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/data";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16">
      <motion.div
        aria-hidden
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/25 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div aria-hidden className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <motion.div variants={container} initial="hidden" animate="show" className="relative mx-auto w-full max-w-6xl">
        <motion.p variants={item} className="font-mono text-sm text-accent">
          Hi, I&apos;m {site.name} 👋
        </motion.p>
        <motion.h1 variants={item} className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          {site.headline}
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          {site.subheadline}
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-accent px-7 py-3 font-semibold text-black shadow-[0_0_30px_-5px] shadow-accent"
          >
            View my work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/20 px-7 py-3 font-semibold hover:bg-white/5"
          >
            Contact me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        ↓
      </motion.a>
    </section>
  );
}
