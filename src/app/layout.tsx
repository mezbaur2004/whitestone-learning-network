import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoneBackground } from "@/components/StoneBackground";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} — ${site.tagline}`,
    template: `%s — ${site.fullName}`,
  },
  description:
    "Whitestone Learning Network designs learning programs, digital platforms and educator training that make a lasting difference.",
};

export const viewport: Viewport = {
  themeColor: "#e4e5e6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <StoneBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
