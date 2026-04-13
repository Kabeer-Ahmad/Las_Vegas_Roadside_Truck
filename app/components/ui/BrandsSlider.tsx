"use client";

import Image from "next/image";

/** Every asset in `public/brands/` — add an entry when you drop in a new file. */
const brands: { src: string; alt: string }[] = [
  { src: "/brands/caterpillar.svg", alt: "Caterpillar" },
  { src: "/brands/chevrolet.svg", alt: "Chevrolet" },
  { src: "/brands/cummings.png", alt: "Cummins" },
  { src: "/brands/Detroit_Diesel-Logo.wine.png", alt: "Detroit" },
  { src: "/brands/Freightliner.png", alt: "Freightliner" },
  { src: "/brands/ford.svg", alt: "Ford" },
  { src: "/brands/honda.svg", alt: "Honda" },
  { src: "/brands/international.png", alt: "International Trucks" },
  { src: "/brands/isuzu.webp", alt: "Isuzu" },
  { src: "/brands/johndeer.svg", alt: "John Deere" },
  { src: "/brands/mack.png", alt: "Mack Trucks" },
  { src: "/brands/man.svg", alt: "MAN" },
  { src: "/brands/peterbilt.png", alt: "Peterbilt" },
  { src: "/brands/scania.svg", alt: "Scania" },
  { src: "/brands/toyota.svg", alt: "Toyota" },
  { src: "/brands/volvo.svg", alt: "Volvo" },
];

export default function BrandsSlider() {
  const loop = [...brands, ...brands, ...brands, ...brands];

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "48px 0",
        borderTop: "1px solid #2A2A2A",
        borderBottom: "1px solid #2A2A2A",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ marginBottom: "28px" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#D1D5DB",
            textAlign: "center",
          }}
        >
          Trusted by
        </p>
      </div>
      <div className="brands-slider-wrap">
        <div className="brands-slider-track">
          {loop.map((brand, i) => (
            <div key={`${brand.src}-${i}`} className="brands-slider-item">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={180}
                height={96}
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .brands-slider-wrap {
          overflow: hidden;
          padding: 24px 0;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .brands-slider-track {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: brandsScroll 40s linear infinite;
          will-change: transform;
        }
        .brands-slider-track:hover {
          animation-play-state: paused;
        }
        .brands-slider-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          height: 96px;
        }
        .brands-slider-item img {
          max-width: 180px;
          max-height: 96px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        @keyframes brandsScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-25%, 0, 0); }
        }
      `}</style>
    </section>
  );
}
