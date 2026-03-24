"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { serviceMenuGroups } from "@/app/components/services-nav-data";
import { NAV_LOCATION_LINKS } from "@/app/service-areas-data";

const aboutLinks = [
  { label: "About Us", href: "/abous-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Blogs", href: "/blogs" },
];

const locationLinks = NAV_LOCATION_LINKS;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [desktopOpenGroup, setDesktopOpenGroup] = useState<string | null>(null);
  const [mobileOpenGroups, setMobileOpenGroups] = useState<Record<string, boolean>>({});
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const [mobileLocationsExpanded, setMobileLocationsExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <Image
              src="/logo_1.png"
              alt="Las Vegas 24 Hour Roadside Truck Services"
              width={200}
              height={64}
              priority
              style={{ objectFit: "contain", height: "64px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="nav-desktop">
            <Link href="/" className="nav-link">
              Home
            </Link>
            {/* Services Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => {
                setServicesOpen(false);
                setDesktopOpenGroup(null);
              }}
            >
              <button
                className="nav-dropdown-btn"
                data-open={servicesOpen}
                onFocus={() => setServicesOpen(true)}
              >
                Services <ChevronDown size={18} />
              </button>
              {servicesOpen && (
                <div className="nav-dropdown-panel nav-dropdown-services">
                  {serviceMenuGroups.map((group) => {
                    const open = desktopOpenGroup === group.id;
                    return (
                      <div key={group.id} className="nav-services-accordion-item">
                        <button
                          type="button"
                          className="nav-services-accordion-trigger"
                          data-open={open}
                          aria-expanded={open}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDesktopOpenGroup((id) => (id === group.id ? null : group.id));
                          }}
                        >
                          <span>{group.title}</span>
                          <ChevronDown size={18} />
                        </button>
                        <div
                          className="nav-services-sublinks"
                          style={{
                            display: open ? "flex" : "none",
                            maxHeight: open ? "none" : 0,
                          }}
                        >
                          <Link
                            href={group.href}
                            onClick={() => setServicesOpen(false)}
                            style={{ fontWeight: 700, color: "var(--blue-600)", fontSize: "0.85rem" }}
                          >
                            All services →
                          </Link>
                          {group.items.map((s) => (
                            <Link key={s.href} href={s.href} onClick={() => setServicesOpen(false)}>
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                  <div className="nav-dropdown-footer" style={{ borderTop: "1px solid var(--gray-100)", marginTop: 8, paddingTop: 12 }}>
                    <Link href="/services" onClick={() => setServicesOpen(false)}>
                      → View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className="nav-dropdown-btn"
                data-open={aboutOpen}
                onFocus={() => setAboutOpen(true)}
              >
                About <ChevronDown size={18} />
              </button>
              {aboutOpen && (
                <div className="nav-dropdown-panel">
                  {aboutLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="nav-dropdown-item"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                className="nav-dropdown-btn"
                data-open={locationsOpen}
              >
                Locations <ChevronDown size={18} />
              </button>
              {locationsOpen && (
                <div className="nav-dropdown-panel nav-dropdown-locations">
                  {locationLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="nav-dropdown-item"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <div className="nav-dropdown-footer">
                    <Link href="/service-areas">→ All Service Areas</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/reviews" className="nav-link">
              Reviews
            </Link>
            <Link href="/gallery" className="nav-link">
              Gallery
            </Link>
            <Link href="/contact-us" className="nav-link">
              Contact
            </Link>
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="tel:+17028632706" className="nav-cta">
              <Phone size={20} /> Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-hamburger"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="nav-mobile-overlay">
          <div className="nav-mobile-inner">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Home
            </Link>
            <div className="nav-mobile-divider" />
            <button
              type="button"
              className="nav-mobile-expand-btn"
              onClick={() => setMobileServicesExpanded((v) => !v)}
              aria-expanded={mobileServicesExpanded}
            >
              <span>Services</span>
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                <ChevronDown size={20} style={{ transform: mobileServicesExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
              </span>
            </button>
            <div
              className="nav-mobile-expand-content"
              style={{
                maxHeight: mobileServicesExpanded ? "min(75vh, 2000px)" : "0",
                overflow: mobileServicesExpanded ? "auto" : "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              {serviceMenuGroups.map((group) => {
                const gOpen = mobileOpenGroups[group.id];
                return (
                  <div key={group.id} style={{ borderBottom: "1px solid var(--gray-100)" }}>
                    <button
                      type="button"
                      className="nav-mobile-expand-btn"
                      style={{ paddingLeft: 12, fontSize: "0.95rem" }}
                      onClick={() => setMobileOpenGroups((m) => ({ ...m, [group.id]: !m[group.id] }))}
                      aria-expanded={gOpen}
                    >
                      <span>{group.title}</span>
                      <ChevronDown size={18} style={{ transform: gOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>
                    <div style={{ maxHeight: gOpen ? 800 : 0, overflow: "hidden", transition: "max-height 0.25s ease" }}>
                      <Link
                        href={group.href}
                        onClick={() => setMobileOpen(false)}
                        className="nav-mobile-link"
                        style={{ paddingLeft: 20, fontWeight: 600, color: "var(--blue-600)", fontSize: "0.9rem" }}
                      >
                        Section overview →
                      </Link>
                      {group.items.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="nav-mobile-link"
                          style={{ paddingLeft: 24, fontSize: "0.9rem", fontWeight: 500 }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
              <Link href="/services" onClick={() => setMobileOpen(false)} className="nav-mobile-link" style={{ fontWeight: 700, color: "var(--blue-600)" }}>
                → View All Services
              </Link>
            </div>
            <div className="nav-mobile-divider" />
            <button
              type="button"
              className="nav-mobile-expand-btn"
              onClick={() => setMobileAboutExpanded((v) => !v)}
              aria-expanded={mobileAboutExpanded}
            >
              <span>About</span>
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                <ChevronDown size={20} style={{ transform: mobileAboutExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
              </span>
            </button>
            <div className="nav-mobile-expand-content" style={{ maxHeight: mobileAboutExpanded ? "200px" : "0", overflow: "hidden", transition: "max-height 0.25s ease" }}>
              {aboutLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-mobile-link"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="nav-mobile-divider" />
            <button
              type="button"
              className="nav-mobile-expand-btn"
              onClick={() => setMobileLocationsExpanded((v) => !v)}
              aria-expanded={mobileLocationsExpanded}
            >
              <span>Locations</span>
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                <ChevronDown size={20} style={{ transform: mobileLocationsExpanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} />
              </span>
            </button>
            <div className="nav-mobile-expand-content" style={{ maxHeight: mobileLocationsExpanded ? "400px" : "0", overflow: "hidden", transition: "max-height 0.25s ease" }}>
              {locationLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-mobile-link"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/service-areas" onClick={() => setMobileOpen(false)} className="nav-mobile-link" style={{ fontWeight: 600, color: "var(--blue-600)" }}>
                → All Service Areas
              </Link>
            </div>
            <div className="nav-mobile-divider" />
            <Link
              href="/reviews"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Reviews
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{ background: "transparent", fontWeight: 700, color: "var(--gray-900)" }}
            >
              Contact
            </Link>
            <a href="tel:+17028632706" className="nav-mobile-cta">
              <Phone size={22} /> (702) 863-2706
            </a>
          </div>
        </div>
      )}

      {/* Offset for fixed navbar */}
      <div className="nav-offset" />
    </>
  );
}
