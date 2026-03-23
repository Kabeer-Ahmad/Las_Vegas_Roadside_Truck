import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Towing & Roadside Recovery in Las Vegas, NV | Las Vegas 24 Hour Roadside Truck Services",
  description:
    "Emergency towing, heavy-duty, semi, flatbed, fuel delivery, tire change, jump start, lockout—separate services in Las Vegas, NV. 24/7.",
};

const links = [
  { href: "/towing/emergency-towing", label: "Emergency Towing" },
  { href: "/towing/heavy-duty-towing", label: "Heavy Duty Towing" },
  { href: "/towing/light-duty-towing", label: "Light Duty Towing" },
  { href: "/towing/semi-truck-towing", label: "Semi Truck Towing" },
  { href: "/towing/flatbed-towing", label: "Flatbed Towing" },
  { href: "/towing/roadside-assistance", label: "Roadside Assistance" },
  { href: "/towing/fuel-delivery", label: "Fuel Delivery" },
  { href: "/towing/tire-change-service", label: "Tire Change Service" },
  { href: "/towing/jump-start-service", label: "Jump Start Service" },
  { href: "/towing/vehicle-lockout-service", label: "Vehicle Lockout Service" },
];

export default function TowingHubPage() {
  return (
    <ServicePageTemplate
      title="Towing & Roadside Recovery in Las Vegas, NV"
      heroSubtitle="Choose a service below—each has its own page with details for Las Vegas, NV and Southern Nevada. 24/7 dispatch: (702) 863-2706."
      bodyIntro="Breakdowns don’t wait for business hours. Las Vegas 24 Hour Roadside Truck Services provides towing and roadside recovery tailored to commercial trucks and fleets in Las Vegas, NV—from quick jump-starts and fuel drops to full heavy-duty tows on I-15, US-93, and I-11."
      bodyContent="Open any service for full information. Same dispatch number for every service—we route the right equipment for what you need."
      bodyAfterContent={
        <div style={{ marginTop: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
            Towing services (Las Vegas, NV)
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "#F8F9FB",
                    borderRadius: "12px",
                    border: "1px solid #E5E9EF",
                    color: "#1E293B",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                  <ArrowRight size={18} color="#e4c13c" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
      features={[
        "10 dedicated service pages",
        "Las Vegas & Southern Nevada",
        "24/7 Dispatch",
        "Commercial & semi focus",
        "I-15 / US-93 / I-11",
        "Heavy & light duty",
        "Flatbed & roadside",
        "Fuel · tires · jump · lockout",
      ]}
      faqItems={[
        {
          question: "Why separate pages for each towing service?",
          answer:
            "So you can read exactly what you need—emergency tow vs fuel delivery—without scrolling one long page. Same phone number for all.",
        },
        {
          question: "Do you tow in Las Vegas, NV 24/7?",
          answer: "Yes. Call (702) 863-2706 anytime.",
        },
        {
          question: "Can you tow a loaded semi?",
          answer:
            "Yes—see Heavy Duty Towing and Semi Truck Towing pages. Tell dispatch weight and configuration.",
        },
      ]}
      relatedServices={[
        { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
        { label: "Fuel Delivery (site)", href: "/fuel-delivery" },
        { label: "Lockouts", href: "/lockouts" },
      ]}
      images={["/why_us_banner.jpg", "/hero-truck-white.png"]}
      imageLayout="grid"
    />
  );
}
