import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </Reveal>
  );
}
