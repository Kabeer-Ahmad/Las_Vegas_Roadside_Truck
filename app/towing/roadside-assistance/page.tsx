import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Roadside Assistance Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Commercial roadside assistance in Las Vegas, NV—air leaks, hoses, diagnostics. Mobile repair when possible.",
};

export default function Page() {
  return <TowingServicePage slug="roadside-assistance" />;
}
