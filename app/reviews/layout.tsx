import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Customer Reviews | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "See what our customers say about Las Vegas 24 Hour Roadside Truck Services. Read Google reviews and leave your own. Serving Las Vegas with trusted truck and trailer repair.",
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
