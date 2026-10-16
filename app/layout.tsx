import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import { site } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.subheadline,
  openGraph: {
    title,
    description: site.subheadline,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_PH",
  },
  twitter: { card: "summary_large_image", title, description: site.subheadline },
};

export const viewport: Viewport = { themeColor: "#07070d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-black">
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
