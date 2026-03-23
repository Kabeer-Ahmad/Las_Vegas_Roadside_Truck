import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fast Emergency Truck Roadside Repair in Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description: "24/7 emergency mobile repair for trucks and trailers across Las Vegas. We come to you - any weather, any time.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Fast Emergency Truck Roadside Repair in Las Vegas, NV"
      heroSubtitle="24/7 emergency mobile repair for trucks and trailers across Las Vegas. We come to you - any weather, any time."
      bodyIntro="A flat or fault can stop your trip and cost time and money. Our emergency truck and trailer repair team in Las Vegas, NV keeps you moving. We fix tires, brakes, air leaks, and more on-site - quickly and anytime."
      bodyContent="From wheel hubs to air lines, our skilled technicians handle rigs and trailers at your location in any weather, all year round. You stay on track with safe and reliable roadside repairs."
      features={["Flat Tire Repair","Brake Repair","Air Line Leaks","Jump-Start Service","Fuel Delivery","Wheel Hub Repair","24/7 Any Weather","Fast Dispatch"]}
      faqItems={[{"question":"How fast can you reach me?","answer":"We aim to arrive within 60 minutes for most locations in and around Las Vegas. We dispatch immediately upon your call."},{"question":"What can you fix roadside?","answer":"We repair tires, brakes, air leaks, electrical faults, jump-starts, fuel delivery, hub issues, and many other mechanical failures roadside."},{"question":"Do you serve all of Las Vegas?","answer":"Yes! Our mobile units serve the Las Vegas metro and surrounding areas with primary coverage along I-15, US-93, and I-11."},{"question":"Is emergency service available on holidays?","answer":"Yes - our emergency team is available 24 hours a day, 365 days a year, including all holidays."}]}
      relatedServices={[{"label":"Fuel Delivery","href":"/fuel-delivery"},{"label":"Tires","href":"/tires"},{"label":"Brakes","href":"/brakes"}]}
    />
  );
}
