"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend / booking API
    console.log({ name, phone, email, date, time });
  };

  return (
    <section
      className="booking-section"
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #0a0a0a 100%)",
        padding: "64px 0",
        borderTop: "1px solid #2A2A2A",
        borderBottom: "1px solid #2A2A2A",
      }}
    >
      <div className="container" style={{ maxWidth: "1100px" }}>
        <div
          className="booking-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.35fr",
            gap: "32px",
            alignItems: "stretch",
          }}
        >
          <Reveal type="left" delay={0}>
            <div
              style={{
                background: "#0a0a0a",
                border: "1px solid #2A2A2A",
                borderRadius: "20px",
                padding: "36px 32px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #e4c13c 0%, #c4a82f 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 14px rgba(228, 193, 60, 0.3)",
                  }}
                >
                  <Calendar size={22} color="#fff" />
                </span>
                <h3
                  style={{
                    color: "#F9FAFB",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Booking Online
                </h3>
              </div>
              <p style={{ color: "#D1D5DB", fontSize: "0.98rem", margin: 0, lineHeight: 1.75 }}>
                Schedule your appointment in seconds. Share your contact details, preferred date, and time.
                We&apos;ll confirm quickly and get you back on the road fast.
              </p>
            </div>
          </Reveal>

          <Reveal type="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="booking-form-wrapper"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px 20px",
                alignItems: "end",
                background: "#0a0a0a",
                padding: "36px 32px",
                borderRadius: "20px",
                border: "1px solid #2A2A2A",
                height: "100%",
              }}
            >
              <div>
                <label htmlFor="booking-name" className="booking-label">Name</label>
                <input
                  id="booking-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="booking-input"
                />
              </div>
              <div>
                <label htmlFor="booking-phone" className="booking-label">Phone</label>
                <input
                  id="booking-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(702) 555-0123"
                  required
                  className="booking-input"
                />
              </div>
              <div>
                <label htmlFor="booking-email" className="booking-label">Email</label>
                <input
                  id="booking-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="booking-input"
                />
              </div>
              <div>
                <label htmlFor="booking-date" className="booking-label">Date</label>
                <input
                  id="booking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="booking-input"
                />
              </div>
              <div>
                <label htmlFor="booking-time" className="booking-label">Time</label>
                <input
                  id="booking-time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="booking-input"
                />
              </div>
              <div>
                <button type="submit" className="booking-submit">
                  Book Now
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
      <style>{`
        .booking-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #d1d5db;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }
        .booking-input {
          width: 100%;
          padding: 12px 16px;
          background: #0a0a0a;
          border: 1.5px solid #3a3a3a;
          border-radius: 12px;
          color: #f3f4f6;
          font-size: 0.95rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .booking-input::placeholder {
          color: #9ca3af;
        }
        .booking-input:hover {
          background: #121212;
          border-color: #4a4a4a;
        }
        .booking-input:focus {
          border-color: #e4c13c;
          box-shadow: 0 0 0 3px rgba(228, 193, 60, 0.12);
          background: #0a0a0a;
        }
        .booking-submit {
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, #e4c13c 0%, #c4a82f 100%);
          color: #111827;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-family: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(228, 193, 60, 0.35);
        }
        .booking-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(228, 193, 60, 0.4);
        }
        .booking-submit:active {
          transform: translateY(0);
        }
        @media (max-width: 960px) {
          .booking-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 700px) {
          .booking-form-wrapper {
            grid-template-columns: 1fr !important;
            padding: 28px 24px !important;
          }
        }
        @media (max-width: 480px) {
          .booking-form-wrapper {
            grid-template-columns: 1fr !important;
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
