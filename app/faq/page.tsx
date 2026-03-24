"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";
import { allFaqCategories, type FAQItem } from "./faq-data";

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            type="button"
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.question}
            <ChevronDown
              size={18}
              style={{
                transition: "transform 0.25s",
                transform: open === i ? "rotate(180deg)" : "rotate(0)",
                flexShrink: 0,
                color: "#e4c13c",
              }}
            />
          </button>
          {open === i && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="page-hero faq-page-hero">
        <div className="container">
          <Reveal type="left" delay={0} duration={0.35} rootMargin="0px 0px 60px 0px">
            <div className="page-hero__breadcrumb">
              <Link href="/">Home</Link> <span>/</span>
              <span style={{ color: "#D1D5DB" }}>FAQ</span>
            </div>
          </Reveal>
          <Reveal type="up" delay={50} duration={0.35} rootMargin="0px 0px 60px 0px">
            <h1 style={{ color: "#fff", marginBottom: "12px" }}>
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal type="right" delay={100} duration={0.35} rootMargin="0px 0px 60px 0px">
            <p
              style={{
                color: "#D1D5DB",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              Find answers to common questions about our truck and trailer repair
              services across Las Vegas. Browse by topic or search for what
              you need.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section faq-page-section">
        <div className="container faq-page-container" style={{ maxWidth: "900px" }}>
          {allFaqCategories.map((cat) => (
              <div key={cat.href} className="faq-category-block"
                style={{
                  marginBottom: "48px",
                  paddingBottom: "48px",
                  borderBottom: "1px solid #2A2A2A",
                }}
              >
                <div className="faq-category-header"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "24px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#111827",
                      margin: 0,
                    }}
                  >
                    {cat.category}
                  </h2>
                  <Link
                    href={cat.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#e4c13c",
                      textDecoration: "none",
                    }}
                  >
                    View service <ArrowRight size={16} />
                  </Link>
                </div>
                <FAQAccordion items={cat.items} />
              </div>
          ))}
        </div>
      </section>
    </>
  );
}
