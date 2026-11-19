import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://amaya-ai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Amaya AI",
    title: "Amaya AI — Building Intelligence",
    description: "Artificial intelligence, research, software engineering and intelligent products.",
    url: "https://amaya-ai.com",
    locale: "ar_DZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaya AI — Building Intelligence",
    description: "Artificial intelligence, research, software engineering and intelligent products.",
  },
  title: {
    default: "Amaya AI — Building Intelligence",
    template: "%s | Amaya AI",
  },
  description:
    "Amaya AI — Artificial intelligence, research, software engineering and intelligent products.",
  applicationName: "Amaya AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <LanguageProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
