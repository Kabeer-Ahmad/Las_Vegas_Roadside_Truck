import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Fuel Delivery Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Diesel fuel delivery to your truck in Las Vegas, NV, Henderson, and the I-15 corridor. 24/7.",
};

export default function Page() {
  return <TowingServicePage slug="fuel-delivery" />;
}
