import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SITE_URL, CONTACT_EMAIL } from "@/lib/site-config";

const openGraphBase = {
  title: "Las Vegas 24 Hour Roadside Truck Services | 24/7 Truck & Trailer Repair",
  description:
    "24/7 emergency truck repair, DPF cleaning, brakes, tires & more in Las Vegas. Call (702) 863-2706.",
  type: "website" as const,
  siteName: "Las Vegas 24 Hour Roadside Truck Services",
};

export const metadata: Metadata = {
  title: {
    default:
      "Truck & Trailer Repair in Las Vegas | 24/7 Emergency Service | Las Vegas 24 Hour Roadside Truck Services",
    template: "%s | Las Vegas 24 Hour Roadside Truck Services",
  },
  description:
    "Stuck on I-15? Las Vegas 24 Hour Roadside Truck Services offers reliable truck repair and tire service in Las Vegas. 24/7 emergency truck repair, DPF cleaning & more. Call (702) 863-2706!",
  keywords: [
    "truck repair Las Vegas",
    "trailer repair Las Vegas NV",
    "DPF cleaning",
    "emergency roadside truck repair",
    "semi truck repair Las Vegas",
    "24/7 truck repair",
  ],
  openGraph: {
    ...openGraphBase,
    ...(SITE_URL ? { url: SITE_URL } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas 24 Hour Roadside Truck Services | 24/7 Truck Repair in Las Vegas",
    description:
      "Professional truck & trailer repair in Las Vegas. Call now!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Las Vegas 24 Hour Roadside Truck Services",
    ...(SITE_URL ? { url: SITE_URL } : {}),
    telephone: "+17028632706",
    ...(CONTACT_EMAIL ? { email: CONTACT_EMAIL } : {}),
    areaServed: [
      { "@type": "City", name: "Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
      { "@type": "AdministrativeArea", name: "Clark County", containedInPlace: { "@type": "State", name: "Nevada" } },
    ],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    description:
      "Professional 24/7 truck and trailer repair in Las Vegas. DPF cleaning, brakes, tires, emergency roadside and more.",
    foundingDate: "2013",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W1QFFRDTDP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W1QFFRDTDP');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
