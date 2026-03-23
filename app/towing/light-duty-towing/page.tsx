import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Light Duty Towing Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Light commercial towing—pickups, vans, box trucks—in Las Vegas and Clark County. Call (702) 863-2706.",
};

export default function Page() {
  return <TowingServicePage slug="light-duty-towing" />;
}
