import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Trailer Tire Repair & Replacement in Las Vegas | Las Vegas 24 Hour Roadside Truck Services",
  description: "All trailer tire sizes - flat repair, roadside tire change, mounting and balancing. Available 24/7 across Las Vegas.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Trailer Tire Repair & Replacement in Las Vegas"
      heroSubtitle="All trailer tire sizes - flat repair, roadside tire change, mounting and balancing. Available 24/7 across Las Vegas."
      bodyIntro="Trailer tire blowouts are one of the most common causes of roadside breakdowns. Our mobile tire service is equipped to handle all trailer tire sizes, providing fast flat repair or full replacement right where you are."
      bodyContent="We carry all common trailer tire sizes and can source specialty sizes quickly. Our technicians ensure proper mounting and torque to keep your trailer safe and DOT-compliant."
      extraSections={[
        { title: "Trailer Tire Brands:", items: ["Michelin", "Bridgestone", "Goodyear", "Firestone", "Continental", "Yokohama", "Hankook", "Toyo Tires", "Sumitomo", "Falken", "Kumho", "Nitto", "Sailun", "Double Coin", "Ironman Tires", "Radar Tires"] },
        { title: "Trailer Tire Sizes:", items: ["11R22.5", "11R24.5", "275/80R22.5", "275/70R22.5", "295/75R22.5", "245/70R19.5", "225/70R19.5", "8R19.5", "9R22.5", "10R22.5", "12R22.5", "445/50R22.5", "285/75R24.5", "295/80R22.5", "285/75R22.5", "275/85R22.5", "255/80R22.5", "435/50R22.5"] }
      ]}
      features={["All Trailer Tire Sizes","Flat Repair","Tire Mounting","Balancing","Roadside Service","DOT Compliance","Budget Pricing","Emergency 24/7"]}
      faqItems={[{"question":"Can you change trailer tires roadside?","answer":"Yes. We respond 24/7 for roadside trailer tire changes and flat repairs anywhere in Las Vegas."},{"question":"What trailer tire sizes do you carry?","answer":"We carry all common trailer tire sizes including 11R22.5, 11R24.5, 245/70R19.5, and more."},{"question":"Do you also repair the rim?","answer":"We inspect rims for damage during tire service and can repair or replace bent or cracked rims."},{"question":"How long does a trailer tire change take?","answer":"A standard trailer tire change takes 30–60 minutes on-site, depending on access and conditions."}]}
      relatedServices={[{"label":"Trailer Repair","href":"/trailer-repair"},{"label":"Tires","href":"/tires"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"}]}
    />
  );
}
