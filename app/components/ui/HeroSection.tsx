"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, MapPin } from "lucide-react";

export default function HeroSection() {
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div className="hero-outer hero-home" style={{ width: "100%", position: "relative", backgroundColor: "#0a0908" }}>
      <section
        className="hero-section-main hero-home__section"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "stretch",
          overflow: "hidden",
        }}
      >
        <div className="hero-home__ambient" aria-hidden />
        <div className="hero-home__accent-line" aria-hidden />

        <div className="container hero-home__grid">
          <div className="hero-home__copy">
            <div
              className="anim-fade-up delay-1 hero-home__badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(228, 193, 60, 0.14)",
                border: "1px solid rgba(228, 193, 60, 0.35)",
                color: "#f0e6b8",
                fontSize: "clamp(0.65rem, 1.4vw, 0.75rem)",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "8px 16px",
                borderRadius: "9999px",
                marginBottom: "clamp(18px, 3vw, 26px)",
              }}
            >
              <MapPin size={14} style={{ color: "#e4c13c", flexShrink: 0 }} aria-hidden />
              Las Vegas & Southern Nevada · 24-hour dispatch
            </div>

            <h1
              className="anim-fade-up delay-2 hero-home__title"
              style={{
                color: "#fafaf9",
                fontSize: "clamp(2.1rem, 4.8vw, 3.65rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                marginBottom: "clamp(16px, 2.5vw, 22px)",
                letterSpacing: "-0.03em",
                textShadow: "0 2px 32px rgba(0,0,0,0.45)",
              }}
            >
              Roadside truck repair
              <br />
              <span className="hero-fleet-shimmer">built for downtime you can’t afford</span>
            </h1>

            <p
              className="anim-fade-up delay-3 hero-home__lead"
              style={{
                color: "#c8c2b6",
                fontSize: "clamp(1rem, 1.9vw, 1.15rem)",
                lineHeight: 1.65,
                marginBottom: "clamp(20px, 3vw, 28px)",
                maxWidth: "34rem",
                textShadow: "0 1px 12px rgba(0,0,0,0.35)",
              }}
            >
              Semis, heavy-duty trucks, and trailers—we roll to you for diagnostics, tires, brakes, electrical, HVAC, and
              urgent roadside fixes. Straight answers, careful work, and one number that actually picks up.
            </p>

            <ul className="anim-fade-up delay-3 hero-home__chips" aria-label="Service highlights">
              {["Mobile & roadside", "Heavy-duty focus", "Fast Las Vegas response"].map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>

            <div className="anim-fade-up delay-4 hero-home__ctas">
              <div
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                style={{ transition: "transform 0.2s ease", transformStyle: "preserve-3d" }}
              >
                <a
                  href="tel:+17028632706"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#e4c13c",
                    color: "#111827",
                    padding: "14px 26px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
                    textDecoration: "none",
                    boxShadow: "0 8px 32px rgba(228, 193, 60, 0.35)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Phone size={20} aria-hidden />
                  Call (702) 863-2706
                </a>
              </div>
              <div
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                style={{ transition: "transform 0.2s ease", transformStyle: "preserve-3d" }}
              >
                <Link
                  href="/services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#f0ebe3",
                    padding: "13px 22px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "clamp(0.9rem, 1.7vw, 1rem)",
                    border: "1px solid rgba(228, 193, 60, 0.28)",
                    textDecoration: "none",
                    background: "rgba(255, 252, 245, 0.04)",
                    backdropFilter: "blur(8px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Browse services
                  <ArrowRight size={18} aria-hidden />
                </Link>
              </div>
              <Link
                href="/contact-us"
                className="hero-home__link-quiet"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "#a8a29a",
                  textDecoration: "none",
                  padding: "10px 4px",
                  borderBottom: "1px solid rgba(168, 162, 154, 0.35)",
                }}
              >
                Request a callback
              </Link>
            </div>
          </div>

          <div className="anim-fade-up delay-2 hero-home__visual">
            <div className="hero-home__visual-inner">
              <Image
                src="/hero_truck.png"
                alt="Las Vegas 24 Hour Roadside Truck Services semi-truck and trailer"
                fill
                className="hero-home__img"
                sizes="(max-width: 900px) 92vw, 44vw"
                priority
              />
            </div>
            <p className="hero-home__caption">Road-ready crews · Same-day priority when you&apos;re stuck</p>
          </div>
        </div>
      </section>
    </div>
  );
}
