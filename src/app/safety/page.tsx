import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    alternates: { canonical: "/safety" },
title: "Safety & Trust",
  description: "Learn about Amaya AI principles for privacy, security, transparency and responsible technology development.",
};

export default function Page() {
  return <SectionPage page="safety" />;
}
