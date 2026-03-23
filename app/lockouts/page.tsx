import type { Metadata } from "next";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Truck & Trailer Lockout Service in Las Vegas | Las Vegas 24 Hour Roadside Truck Services",
  description: "24/7 cab and trailer lockout service - fast, professional, no damage to your vehicle. Mobile response across Las Vegas & Southern NV.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Truck & Trailer Lockout Service in Las Vegas"
      heroSubtitle="24/7 cab and trailer lockout service - fast, professional, no damage to your vehicle. Mobile response across Las Vegas & Southern NV."
      bodyIntro="Getting locked out of your cab or cargo trailer can cost valuable hours. Our lockout technicians respond quickly with the proper tools to gain entry without damage to your door, lock, or interior."
      bodyContent="We handle both cab lockouts and trailer lock situations, including padlock assistance. Our no-damage approach ensures your truck leaves in the same condition it was found."
      features={["Cab Lockout Service","Trailer Lockout","No-Damage Entry","24/7 Response","Fast Dispatch","Mobile Service","All Truck Types","Padlock Assistance"]}
      faqItems={[{"question":"Can you unlock my truck without breaking anything?","answer":"Yes. Our technicians use professional lockout tools designed for commercial trucks that gain entry without damage."},{"question":"Do you unlock trailers too?","answer":"Yes, we handle both cab and cargo trailer lockouts, including situations with lost or broken keys."},{"question":"How fast can you respond to a lockout?","answer":"We typically respond within 45–60 minutes for most locations in Las Vegas."},{"question":"Are you available nights and weekends?","answer":"Yes! Lockout service is available 24/7, 365 days a year - including nights, weekends, and holidays."}]}
      relatedServices={[{"label":"Emergency Roadside","href":"/emergency-roadside-repair"},{"label":"Fuel Delivery","href":"/fuel-delivery"},{"label":"Brakes","href":"/brakes"}]}
    />
  );
}
