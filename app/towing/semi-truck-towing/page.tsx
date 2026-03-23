import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Semi Truck Towing Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Semi truck & tractor-trailer towing in Las Vegas, NV. Fifth-wheel safe, I-11 / I-15 corridor. 24/7 dispatch.",
};

export default function Page() {
  return <TowingServicePage slug="semi-truck-towing" />;
}
