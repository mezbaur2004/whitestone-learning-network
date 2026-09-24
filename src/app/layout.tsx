import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { StoneBackground } from "@/components/StoneBackground";
import { seo, site, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s — ${site.fullName}`,
  },
  description: seo.description,
  applicationName: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.fullName,
    title: seo.title,
    description: seo.description,
    locale: seo.locale,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#e4e5e6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-BD">
      <body className="min-h-screen overflow-x-hidden">
        <JsonLd />
        <StoneBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
