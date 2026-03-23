import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Truck & Trailer Repair Photos | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Photos of our shop, team, and truck and trailer repair services across Las Vegas. Las Vegas 24 Hour Roadside Truck Services.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
