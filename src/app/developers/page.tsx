import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    alternates: { canonical: "/developers" },
title: "Developers",
  description: "Software engineering, development practices and technologies for building intelligent systems.",
};

export default function Page() {
  return <SectionPage page="developers" />;
}
