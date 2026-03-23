import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Jump Start Service Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Heavy-duty jump start for semis and commercial trucks in Las Vegas, NV. Safe commercial equipment.",
};

export default function Page() {
  return <TowingServicePage slug="jump-start-service" />;
}
