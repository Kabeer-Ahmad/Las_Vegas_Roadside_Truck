import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";
import { SERVICE_AREAS } from "@/app/service-areas-data";

export const metadata: Metadata = {
  title:
    "Service Areas | Las Vegas 24 Hour Roadside Truck Services | Las Vegas, NV & Surrounding Regions",
  description:
    "Las Vegas 24 Hour Roadside Truck Services covers Las Vegas, Henderson, North Las Vegas, Pahrump, Mesquite, Boulder City, and more—plus Bakersfield, CA. 24/7 mobile truck repair.",
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* ── Animated Hero with Image ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/service-areas-bg.png"
          alt="Service areas across Las Vegas and the Southwest"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(105deg, rgba(5,10,25,0.95) 0%, rgba(5,10,25,0.7) 40%, rgba(5,10,25,0.2) 100%)",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            padding: "clamp(80px, 12vh, 120px) 24px clamp(60px, 8vh, 80px)",
          }}
        >
          <div
            className="page-hero__breadcrumb anim-fade-up"
            style={{ marginBottom: "20px" }}
          >
            <Link href="/" style={{ color: "#f5e6a8", textDecoration: "none" }}>
              Home
            </Link>{" "}
            <span style={{ color: "#475569" }}>/</span>
            <span style={{ color: "#CBD5E1" }}>Service Areas</span>
          </div>
          <div style={{ maxWidth: "680px" }}>
            <h1
              className="anim-fade-up delay-1"
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              We Come to You<br />Across Nevada &amp; Beyond
            </h1>
            <p
              className="anim-fade-up delay-2"
              style={{
                color: "#CBD5E1",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "560px",
                textShadow: "0 1px 8px rgba(0,0,0,0.3)",
              }}
            >
              Las Vegas 24 Hour Roadside Truck Services serves drivers and fleets across
              Las Vegas, Southern Nevada, and select California corridors with 24/7 mobile repair units.
              Don&apos;t see your city? Call us—we may still help.
            </p>
            <div
              className="page-hero__ctas anim-fade-up delay-3"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <a
                href="tel:+17028632706"
                className="tilt-card"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#e4c13c",
                  color: "#111827",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(228, 193, 60,0.4)",
                }}
              >
                <Phone size={20} /> Call (702) 863-2706
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas Grid (Animated) ── */}
      <section className="section" style={{ paddingTop: "60px" }}>
        <div className="container">
          <Reveal type="up">
            <div className="section-header section-header--center">
              <span
                className="eyebrow"
                style={{ animation: "pulse-glow 2s infinite" }}
              >
                Coverage Map
              </span>
              <h2>Areas We Serve</h2>
              <p>
                Click any city to learn more about our services in that area.
              </p>
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {SERVICE_AREAS.map((area, i) => (
              <Reveal key={area.slug} type="up" delay={i * 50}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="tilt-card"
                  style={{
                    background: "#fff",
                    border: "1px solid #E5E9EF",
                    borderRadius: "14px",
                    padding: "26px",
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        background: "#fffbf0",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#e4c13c",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "1.05rem",
                          color: "#111827",
                          margin: 0,
                          fontWeight: 700,
                        }}
                      >
                        {area.city}
                      </h4>
                      <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                        {area.region}
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {area.highways.map((h) => (
                      <span
                        key={h}
                        style={{
                          background: "#F8F9FB",
                          color: "#475569",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: "6px",
                          border: "1px solid #E5E9EF",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.85rem",
                      color: "#e4c13c",
                      fontWeight: 600,
                    }}
                  >
                    View Area <ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Not Listed CTA (Animated) ── */}
      <section
        style={{
          background: "#1E293B",
          padding: "80px 0",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          marginTop: "40px",
        }}
      >
        {/* Animated Background Orb */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            background: "rgba(228, 193, 60,0.15)",
            filter: "blur(100px)",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "floatSlow 10s ease-in-out infinite",
          }}
        />

        <div
          className="container"
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <Reveal type="scale">
            <h2
              style={{
                marginBottom: "16px",
                color: "#fff",
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
              }}
            >
              Don&apos;t See Your City?
            </h2>
            <p
              style={{
                marginBottom: "32px",
                maxWidth: "520px",
                margin: "0 auto 32px",
                color: "#94A3B8",
                fontSize: "1.1rem",
              }}
            >
              Call us directly, our mobile units cover a wide radius and we may
              still be able to reach you for emergency repairs.
            </p>
            <a
              href="tel:+17028632706"
              className="tilt-card"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#e4c13c",
                color: "#111827",
                padding: "16px 32px",
                borderRadius: "12px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1.1rem",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              }}
            >
              <Phone size={20} /> Call (702) 863-2706
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
