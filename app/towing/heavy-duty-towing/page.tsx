import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Heavy Duty Towing Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Heavy-duty & rotator towing for loaded semis and Class 7–8 trucks in Las Vegas, NV and Southern Nevada.",
};

export default function Page() {
  return <TowingServicePage slug="heavy-duty-towing" />;
}
