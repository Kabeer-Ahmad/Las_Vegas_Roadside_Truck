import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Truck & Trailer Repair Questions Answered | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Common questions about truck repair, DPF cleaning, brakes, tires, emergency roadside, and more. Get answers from Las Vegas 24 Hour Roadside Truck Services in Las Vegas.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
