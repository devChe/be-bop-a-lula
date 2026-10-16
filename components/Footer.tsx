import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-muted">
      © {site.name}. Built with Next.js, Tailwind CSS and Framer Motion.
    </footer>
  );
}
