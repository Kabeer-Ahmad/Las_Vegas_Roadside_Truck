import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Vehicle Lockout Service Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Cab & trailer lockout service in Las Vegas, NV. Professional entry, no damage. Commercial vehicles.",
};

export default function Page() {
  return <TowingServicePage slug="vehicle-lockout-service" />;
}
