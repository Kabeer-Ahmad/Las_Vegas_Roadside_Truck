import Link from "next/link";
import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site-config";

const termsContactBody = CONTACT_EMAIL
  ? `For questions about these Terms and Conditions, contact us at:\n\nLas Vegas 24 Hour Roadside Truck Services\nPhone: (702) 863-2706\nEmail: ${CONTACT_EMAIL}`
  : `For questions about these Terms and Conditions, contact us at:\n\nLas Vegas 24 Hour Roadside Truck Services\nPhone: (702) 863-2706\n\nYou may also reach us through the Contact Us page on this website.`;

export const metadata: Metadata = {
  title: "Terms & Conditions | Las Vegas 24 Hour Roadside Truck Services",
  description: "Terms and Conditions for Las Vegas 24 Hour Roadside Truck Services - the rules and guidelines governing use of our services and website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <span style={{ color: "#CBD5E1" }}>Terms & Conditions</span>
          </div>
          <h1 style={{ color: "#fff", marginBottom: "12px" }}>Terms & Conditions</h1>
          <p style={{ color: "#94A3B8" }}>Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {[
              {
                title: "1. Acceptance of Terms",
                body: "By accessing and using the Las Vegas 24 Hour Roadside Truck Services website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services or website."
              },
              {
                title: "2. Services",
                body: "Las Vegas 24 Hour Roadside Truck Services provides truck and trailer repair, maintenance, and roadside assistance services in Las Vegas. The specific scope of services, pricing, and timelines are agreed upon at the time of service request.\n\nWe reserve the right to modify, suspend, or discontinue any service at any time without prior notice."
              },
              {
                title: "3. Estimates and Pricing",
                body: "All repair estimates provided are approximations based on initial diagnosis. Final pricing may differ if additional issues are discovered during the repair process. We will notify you of any significant cost changes before proceeding.\n\n Payment is due upon completion of services unless otherwise agreed in writing."
              },
              {
                title: "4. Warranty",
                body: "We warranty our workmanship for 30 days from the date of service. Parts are covered by the manufacturer's warranty. This warranty does not cover damage caused by misuse, accidents, neglect, or modifications made after our service.\n\nWe are not responsible for pre-existing conditions unrelated to the service performed."
              },
              {
                title: "5. Liability Limitation",
                body: "Our liability for any claim arising from our services is limited to the cost of the service provided. We are not liable for consequential, incidental, or indirect damages, including lost profits or business interruption.\n\nWe are not responsible for the loss of personal property left in vehicles during service."
              },
              {
                title: "6. Vehicle Release",
                body: "Vehicles not picked up within 30 days after completion of service may be subject to storage fees and, if unclaimed, may be subject to lien procedures as permitted by Nevada law."
              },
              {
                title: "7. Website Use",
                body: "You may use our website for lawful purposes only. You agree not to use our site in any way that could damage, disable, or impair the site or interfere with any other party's use of the site."
              },
              {
                title: "8. Intellectual Property",
                body: "All content on this website, including text, graphics, logos, and images, is the property of Las Vegas 24 Hour Roadside Truck Services and is protected by applicable copyright and trademark laws."
              },
              {
                title: "9. Governing Law",
                body: "These Terms shall be governed by the laws of the State of Nevada without regard to its conflict of law provisions."
              },
              {
                title: "10. Contact",
                body: termsContactBody,
              }
            ].map((section) => (
              <div key={section.title}>
                <h3 style={{ marginBottom: "12px", color: "#111827" }}>{section.title}</h3>
                {section.body.split("\n").map((para, i) => (
                  para.trim() ? <p key={i} style={{ color: "#374151", lineHeight: 1.8, marginBottom: "8px" }}>{para}</p> : null
                ))}
                <div style={{ height: "1px", background: "#F1F4F8", marginTop: "24px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
