"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site-config";

const serviceLinks = [
  { label: "DPF Cleaning", href: "/dpf" },
  { label: "Brakes", href: "/brakes" },
  { label: "Tires", href: "/tires" },
  { label: "Battery", href: "/battery" },
  { label: "Electrical", href: "/electrical" },
  { label: "Transmission", href: "/transmission" },
  { label: "Trailer Repair", href: "/trailer-repair" },
  { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/abous-us" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: "#0a0a0a", borderTop: "1px solid #2A2A2A" }}>
      <div className="container" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "40px" }}>

          {/* Brand + Get in Touch */}
          <div className="footer-brand-block">
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "16px", textDecoration: "none" }}>
              <Image
                src="/logo_1.png"
                alt="Las Vegas 24 Hour Roadside Truck Services"
                width={300}
                height={84}
                style={{ objectFit: "contain", height: "100px", width: "auto" }}
              />
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#D1D5DB", lineHeight: 1.7, marginBottom: "20px", maxWidth: "280px" }}>
              Since 2013, providing trusted truck and trailer repair services with a focus on reliability, speed, and customer care.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ color: "#e4c13c", flexShrink: 0 }}><Phone size={16} /></div>
                <a href="tel:+17028632706" style={{ fontSize: "0.875rem", color: "#D1D5DB", textDecoration: "none", fontWeight: 600, transition: "color 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#e4c13c"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                >(702) 863-2706</a>
              </div>
              {CONTACT_EMAIL ? (
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{ color: "#e4c13c", flexShrink: 0 }}><Mail size={16} /></div>
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontSize: "0.875rem", color: "#D1D5DB", textDecoration: "none" }}>{CONTACT_EMAIL}</a>
                </div>
              ) : null}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "0.875rem", color: "#D1D5DB", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#e4c13c"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "0.875rem", color: "#D1D5DB", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#e4c13c"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar" style={{ borderTop: "1px solid #2A2A2A", padding: "20px 0" }}>
        <div className="container footer-bottom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "0.8rem", color: "#9CA3AF", margin: 0 }}>© 2025 Las Vegas 24 Hour Roadside Truck Services. All rights reserved.</p>
          <div className="footer-bottom-links" style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy-policy" style={{ fontSize: "0.8rem", color: "#9CA3AF", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" style={{ fontSize: "0.8rem", color: "#9CA3AF", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
