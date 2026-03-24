/**
 * Gallery images. Update this file when you add or replace images.
 * Captions are omitted so photos display without overlay text.
 */
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/Truck_gal_1.jpg", alt: "Commercial truck service in Las Vegas" },
  { src: "/truck_gal_2.jpg", alt: "Box truck maintenance in service bay" },
  { src: "/truck_gal_3.jpg", alt: "Technician working on commercial truck wheel" },
  { src: "/truck_gal4.webp", alt: "Semi-truck on lift in repair facility" },
  { src: "/truck_gal_5.jpg", alt: "Brake and wheel service on commercial truck" },
  { src: "/why_us_banner.jpg", alt: "Truck repair and service" },
  { src: "/about-shop.png", alt: "Las Vegas 24 Hour Roadside Truck Services shop" },
  { src: "/mechanic-diagnostic-1.jpg", alt: "Engine diagnostics" },
  { src: "/mechanic-diagnostic-2.jpg", alt: "Mechanic at work" },
  { src: "/transmission-img-1.jpg", alt: "Transmission service" },
  { src: "/transmission-img-2.jpg", alt: "Transmission work" },
  { src: "/brakes-img-2.jpg", alt: "Brake repair" },
  { src: "/tires-img-1.jpg", alt: "Tire service" },
  { src: "/tires-img-2.jpg", alt: "Commercial tires" },
  { src: "/electrical-img-1.jpg", alt: "Electrical repair" },
  { src: "/electrical-img-2.jpg", alt: "Electrical diagnostics" },
  { src: "/battery-img-1.jpg", alt: "Battery service" },
  { src: "/battery-img-2.jpg", alt: "Battery replacement" },
  { src: "/steering-suspension-unsplash.jpg", alt: "Steering and suspension" },
  { src: "/Steering%20&%20Suspension%201.jpg", alt: "Suspension repair" },
  { src: "/Cabin%20Filter%201.jpg", alt: "Cabin filter" },
  { src: "/Cabin%20Filter%202.jpg", alt: "Filter replacement" },
];
