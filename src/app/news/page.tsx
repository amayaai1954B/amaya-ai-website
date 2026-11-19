import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    alternates: { canonical: "/news" },
title: "News & Updates",
  description: "Official Amaya AI news, product updates and technology announcements.",
};

export default function Page() {
  return <SectionPage page="news" />;
}
