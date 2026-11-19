import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    alternates: { canonical: "/research" },
title: "Research & Development",
  description: "Explore Amaya AI research directions in artificial intelligence, computer vision and intelligent agent systems.",
};

export default function Page() {
  return <SectionPage page="research" />;
}
