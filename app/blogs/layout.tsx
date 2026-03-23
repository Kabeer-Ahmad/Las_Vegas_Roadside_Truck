import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Truck Repair Tips & News | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Expert tips on DPF cleaning, roadside repair, fleet maintenance, and more. From the team at Las Vegas 24 Hour Roadside Truck Services in Las Vegas.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
