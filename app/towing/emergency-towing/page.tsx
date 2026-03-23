import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Emergency Towing Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "24/7 emergency towing on I-15, US-93, Las Vegas metro. Commercial trucks & semis. Call (702) 863-2706.",
};

export default function Page() {
  return <TowingServicePage slug="emergency-towing" />;
}
