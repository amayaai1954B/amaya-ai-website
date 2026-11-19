import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    alternates: { canonical: "/products" },
title: "Products",
  description: "Explore Amaya AI technology domains, intelligent systems, software engineering and creative AI.",
};

export default function Page() {
  return <SectionPage page="products" />;
}
