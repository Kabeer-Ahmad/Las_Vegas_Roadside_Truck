import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Customer Reviews | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "See what our customers say about Las Vegas 24 Hour Roadside Truck Services. Real feedback from drivers and fleets in Las Vegas and Southern Nevada.",
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
