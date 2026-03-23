import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Tire Repair & Change for Trucks in Las Vegas | Las Vegas 24 Hour Roadside Truck Services",
  description: "Commercial truck tire repair, mounting, and balancing. Roadside flat repair available 24/7 across Las Vegas.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Tire Repair & Change for Trucks in Las Vegas"
      heroSubtitle="Commercial truck tire repair, mounting, and balancing. Roadside flat repair available 24/7 across Las Vegas."
      bodyIntro="A flat or blowout can bring your operation to a halt. Our mobile tire team arrives fast with the right equipment to repair or replace your commercial tires roadside, at your yard, or in our shop."
      bodyContent="We carry a wide selection of commercial tire brands and sizes for steer, drive, and trailer positions. Whether it's a simple repair or full replacement, we get you rolling again fast."
      extraSections={[
        { title: "Truck Tire Brands:", items: ["Michelin", "Bridgestone", "Goodyear", "Firestone", "Continental", "Yokohama", "Hankook", "Toyo Tires", "Sumitomo", "Falken", "Kumho", "Nitto", "Sailun", "Double Coin", "Ironman Tires", "Radar Tires"] },
        { title: "Truck Tire Sizes:", items: ["295/75R22.5", "275/80R22.5", "275/70R22.5", "255/70R22.5", "315/80R22.5", "11R22.5", "11R24.5", "285/75R24.5", "225/70R19.5", "245/70R19.5", "265/70R19.5", "8R19.5", "9R22.5", "10R22.5", "12R22.5", "445/50R22.5"] }
      ]}
      features={["Flat Tire Repair","Tire Mounting & Balancing","Roadside Service","All Major Brands","Steer/Drive/Trailer Tires","Emergency Service","Budget-Friendly Pricing","Commercial Sizes"]}
      faqItems={[{"question":"Do you offer roadside tire repair?","answer":"Yes! Our mobile units respond 24/7 for roadside flat repair, tire changes, and emergency blowout service."},{"question":"What tire brands do you carry?","answer":"We stock and service major brands including Michelin, Bridgestone, Goodyear, Continental, and more."},{"question":"How long does a tire change take?","answer":"A roadside tire change typically takes 30–60 minutes depending on access and the type of repair needed."},{"question":"Do you service trailer tires too?","answer":"Yes, we service all trailer tire sizes. Visit our Trailer Tires page for more specific information."}]}
      relatedServices={[{"label":"Brakes","href":"/brakes"},{"label":"Trailer Tires","href":"/trailer-tires"},{"label":"Emergency Roadside","href":"/emergency-roadside-repair"}]}
      images={["/tires-img-1.jpg", "/tires-img-2.jpg"]}
    />
  );
}
