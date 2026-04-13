"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import Reveal from "./Reveal";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  image?: string;
}

export default function StackedServices({ services }: { services: Service[] }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth <= 992);
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 992px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /** Recalc pin distance after images/layout — avoids last card clipped on some laptops */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const refresh = () => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const onResize = () => refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    const ro = new ResizeObserver(refresh);
    const attachRo = requestAnimationFrame(() => {
      const nodes = [trackRef.current, viewportRef.current].filter((el): el is HTMLDivElement => el != null);
      nodes.forEach((el) => ro.observe(el));
    });
    const t1 = window.setTimeout(refresh, 350);
    const t2 = window.setTimeout(refresh, 900);
    return () => {
      cancelAnimationFrame(attachRo);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      ro.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [services.length]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (services.length === 0 || !section || !track || !viewport) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 993px)", () => {
        gsap.set(track, { x: 0 });

        const scrollDistance = () => {
          const vw = viewport.clientWidth;
          const tw = track.scrollWidth;
          const overflow = Math.max(0, Math.ceil(tw) - Math.floor(vw));
          // Extra distance so scrub smoothing finishes before unpin; covers late image layout
          const settlePad = Math.max(960, Math.round(overflow * 0.45));
          return Math.max(1200, overflow + settlePad);
        };

        const st = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          pin: true,
          scrub: 0.45,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: gsap.to(track, {
            x: () => Math.min(0, Math.floor(viewport.clientWidth) - Math.ceil(track.scrollWidth)),
            ease: "none",
          }),
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
          st.kill();
          gsap.set(track, { clearProps: "x" });
        };
      });

      mm.add("(max-width: 992px)", () => {
        gsap.set(track, { clearProps: "x" });
        return () => {};
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [services.length], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      className="stacked-services-section stacked-services-section--horizontal"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #2A2A2A",
        borderBottom: "1px solid #2A2A2A",
        padding: "80px 0 0",
        overflowX: "clip",
      }}
    >
      {/* ── Top: title (left) + copy & stats (right) ── */}
      <div
        className="container stacked-intro-grid"
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px 48px",
        }}
      >
        <div className="stacked-intro-left">
          <Reveal type="right">
            <span className="eyebrow" style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}>
              Our Expertise
            </span>
          </Reveal>
          <Reveal type="left" delay={100}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "0", marginTop: "12px", lineHeight: 1.1 }}>
              Comprehensive
              <br />
              Repair Solutions
            </h2>
          </Reveal>
        </div>

        <div className="stacked-intro-right">
          <Reveal type="right" delay={150}>
            <p style={{ fontSize: "1.1rem", marginBottom: "28px", lineHeight: 1.65, maxWidth: "520px" }}>
              From minor adjustments to complete overhauls, our highly trained technicians ensure your fleet stays on
              the road. We bring the repair shop directly to your breakdown location.
            </p>
          </Reveal>
          <Reveal type="left" delay={250}>
            <div
              className="stats-row"
              style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "28px" }}
            >
              <div
                style={{
                  padding: "16px 24px",
                  background: "#fffbf0",
                  borderRadius: "12px",
                  border: "1px solid #fce9a8",
                  flex: "1 1 auto",
                  minWidth: "150px",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#c4a82f", marginBottom: "4px" }}>24/7</div>
                <div style={{ fontSize: "0.85rem", color: "#eccb4a", fontWeight: 600 }}>Emergency Dispatch</div>
              </div>
              <div
                style={{
                  padding: "16px 24px",
                  background: "#0a0a0a",
                  borderRadius: "12px",
                  border: "1px solid #2A2A2A",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  flex: "1 1 auto",
                  minWidth: "150px",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#e4c13c", marginBottom: "4px" }}>12+</div>
                <div style={{ fontSize: "0.85rem", color: "#D1D5DB", fontWeight: 600 }}>Specialized Services</div>
              </div>
            </div>
          </Reveal>
          <Reveal type="right" delay={320}>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#e4c13c",
                color: "#111827",
                padding: "14px 28px",
                borderRadius: "10px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(228, 193, 60,0.25)",
                transition: "all 0.2s ease",
              }}
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* ── Full-width pinned horizontal slider (GSAP on desktop) ── */}
      <div className="stacked-slider-bleed">
        <div ref={viewportRef} className="stacked-h-viewport stacked-h-viewport--full">
          <div ref={trackRef} className="stacked-h-track stacked-h-track--padded">
            {services.map((s) => (
              <div
                key={s.href}
                className="stacked-h-card"
                style={{
                  flex: "0 0 auto",
                  width: "min(100%, 400px)",
                  maxWidth: "400px",
                  background:
                    "radial-gradient(ellipse 110% 75% at 100% 0%, rgba(228, 193, 60, 0.16) 0%, transparent 52%), linear-gradient(155deg, #1a1814 0%, #0f0e0c 42%, #0a0a0a 68%, #13110e 100%)",
                  border: "1px solid rgba(228, 193, 60, 0.15)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.25) inset",
                }}
              >
                <Link
                  href={s.href}
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "opacity 0.2s ease",
                    minHeight: "140px",
                  }}
                  className="hover-card stacked-card-inner"
                >
                  <div
                    className="stacked-card-text"
                    style={{
                      flex: "1 1 60%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "24px 28px",
                    }}
                  >
                    <h3 style={{ marginBottom: "8px", fontSize: "1.15rem", color: "#F3F4F6" }}>{s.title}</h3>
                    <p style={{ fontSize: "0.875rem", margin: "0", lineHeight: 1.5, color: "#D1D5DB" }}>{s.desc}</p>
                  </div>
                  {s.image && (
                    <div
                      className="stacked-card-img-wrap"
                      style={{
                        flex: "0 0 38%",
                        position: "relative",
                        alignSelf: "stretch",
                        minWidth: "140px",
                      }}
                    >
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        sizes="(max-width: 720px) 100vw, 200px"
                        onLoadingComplete={() => {
                          requestAnimationFrame(() => ScrollTrigger.refresh());
                        }}
                      />
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {!isMobile && (
          <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "12px 24px 80px" }}>
            <p
              className="stacked-h-hint"
              style={{
                margin: 0,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#78716c",
              }}
            >
              Scroll to explore services
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
