import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    alternates: { canonical: "/company" },
title: "About Us",
  description: "Discover Amaya AI, our vision and our work in artificial intelligence and software engineering.",
};

export default function Page() {
  return <SectionPage page="company" />;
}
