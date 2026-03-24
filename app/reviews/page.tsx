"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";
import { reviews } from "./reviews-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={18}
          style={{
            color: i <= rating ? "#F59E0B" : "#E5E7EB",
            flexShrink: 0,
          }}
          fill={i <= rating ? "#F59E0B" : "transparent"}
        />
      ))}
    </div>
  );
}

const AVATAR_COLORS = [
  "#e4c13c", "#059669", "#D97706", "#7C3AED", "#FACC15",
  "#0891B2", "#4F46E5", "#EA580C", "#16A34A", "#9333EA",
  "#0D9488", "#C026D3", "#CA8A04",
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export default function ReviewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal type="left">
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <span style={{ color: "#D1D5DB" }}>Reviews</span>
            </div>
          </Reveal>
          <Reveal type="up" delay={100}>
            <h1 style={{ color: "#fff", marginBottom: "12px" }}>
              What Our Customers Say
            </h1>
          </Reveal>
          <Reveal type="right" delay={200}>
            <p
              style={{
                color: "#D1D5DB",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              Real feedback from drivers and fleet managers across Las Vegas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="container">
          <Reveal type="up">
            <div style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#0a0a0a",
                  border: "1px solid #2A2A2A",
                  borderRadius: "9999px",
                  padding: "10px 20px",
                }}
              >
                <span style={{ color: "#F59E0B", fontSize: "0.95rem" }}>★★★★★</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#e4c13c" }}>EXCELLENT</span>
                <span style={{ fontSize: "0.8rem", color: "#D1D5DB" }}>Customer feedback</span>
              </div>
            </div>
          </Reveal>

          <Reveal type="up">
            <span className="eyebrow" style={{ display: "block", marginBottom: "8px" }}>
              Customer Reviews
            </span>
            <h2 style={{ marginBottom: "32px" }}>Reviews from Our Customers</h2>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {reviews.map((review, index) => (
              <Reveal
                key={`${review.author}-${index}`}
                type={index % 2 === 0 ? "left" : "right"}
                delay={index * 60}
              >
                <div
                  className="review-card"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid #2A2A2A",
                    borderRadius: "16px",
                    padding: "24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                >
                  <div style={{ marginBottom: "12px" }}>
                    <StarRating rating={review.rating} />
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#F3F4F6",
                      lineHeight: 1.65,
                      flex: 1,
                      marginBottom: "16px",
                    }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: AVATAR_COLORS[index % AVATAR_COLORS.length],
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {getInitials(review.author)}
                    </div>
                    <div>
                      <span style={{ fontWeight: 700, color: "#F3F4F6", fontSize: "0.9rem", display: "block" }}>
                        {review.author}
                      </span>
                      {review.date && (
                        <span style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>
                          {review.date}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .review-card:hover {
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          border-color: #e4c13c;
        }
      `}</style>
    </>
  );
}
