import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Tire Change Service Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Commercial tire change roadside in Las Vegas, NV—steer, drive, trailer. I-15, US-93, warehouses.",
};

export default function Page() {
  return <TowingServicePage slug="tire-change-service" />;
}
