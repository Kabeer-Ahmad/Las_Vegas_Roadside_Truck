import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Flatbed Towing Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Flatbed towing for sensitive loads and low clearance in Las Vegas, NV. Level deck secure transport.",
};

export default function Page() {
  return <TowingServicePage slug="flatbed-towing" />;
}
