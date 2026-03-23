export type ServiceArea = {
  slug: string;
  /** Primary place name for headings */
  city: string;
  state: "NV" | "CA";
  /** Card subtitle (e.g. Nevada) */
  region: string;
  highways: string[];
  description: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "pahrump-nv",
    city: "Pahrump",
    state: "NV",
    region: "Nevada",
    highways: ["US-95", "NV-160"],
    description:
      "24/7 mobile truck and trailer repair for Pahrump and the Nye County corridor. We dispatch to your location along US-95 and NV-160—day or night.",
  },
  {
    slug: "mesquite-nv",
    city: "Mesquite",
    state: "NV",
    region: "Nevada",
    highways: ["I-15", "US-93"],
    description:
      "Fast roadside and mobile repair for Mesquite drivers and fleets on I-15 and the Arizona–Nevada line. Call us for tires, brakes, air systems, and more.",
  },
  {
    slug: "paradise-nv",
    city: "Paradise",
    state: "NV",
    region: "Nevada",
    highways: ["I-15", "Tropicana", "Paradise Rd"],
    description:
      "Commercial truck repair serving Paradise and the Las Vegas Strip corridor. Mobile units respond to resorts, yards, and roadside breakdowns 24/7.",
  },
  {
    slug: "henderson-nv",
    city: "Henderson",
    state: "NV",
    region: "Nevada",
    highways: ["I-11", "I-515", "US-95"],
    description:
      "Henderson and Green Valley truck repair on your schedule. We cover I-11, I-515, and US-95 with fully equipped mobile technicians.",
  },
  {
    slug: "las-vegas-nv",
    city: "Las Vegas",
    state: "NV",
    region: "Nevada",
    highways: ["I-15", "I-215", "US-95"],
    description:
      "Las Vegas 24/7 mobile truck and trailer service across the valley. I-15, I-215, US-95, and local industrial routes—we come to you.",
  },
  {
    slug: "jean-nv",
    city: "Jean",
    state: "NV",
    region: "Nevada",
    highways: ["I-15", "NV-161"],
    description:
      "Roadside help near Jean and the California state line on I-15. Ideal for trucks staged south of Las Vegas or headed to Primm.",
  },
  {
    slug: "winchester-nv",
    city: "Winchester",
    state: "NV",
    region: "Nevada",
    highways: ["I-515", "US-95", "Sahara"],
    description:
      "Mobile repair for Winchester and east Las Vegas corridors. Quick dispatch for breakdowns along US-95 and I-515.",
  },
  {
    slug: "bakersfield-ca",
    city: "Bakersfield",
    state: "CA",
    region: "California",
    highways: ["CA-99", "I-5", "CA-58"],
    description:
      "Commercial truck support in Bakersfield and Kern County on CA-99, I-5, and CA-58. Mobile service when you can’t make it to a shop.",
  },
  {
    slug: "moapa-nv",
    city: "Moapa",
    state: "NV",
    region: "Nevada",
    highways: ["I-15", "NV-169"],
    description:
      "Moapa Valley and I-15 corridor truck repair. We reach Moapa, Overton, and surrounding exits with 24/7 emergency response.",
  },
  {
    slug: "primm-nv",
    city: "Primm",
    state: "NV",
    region: "Nevada",
    highways: ["I-15"],
    description:
      "Breakdown support at Primm and the Nevada–California border on I-15. Call for tires, jump-starts, air leaks, and triage before you roll again.",
  },
  {
    slug: "beatty-nv",
    city: "Beatty",
    state: "NV",
    region: "Nevada",
    highways: ["US-95", "NV-374"],
    description:
      "Mobile truck service for Beatty and the US-95 gateway to Death Valley. We help drivers on long desert stretches get back on the road.",
  },
  {
    slug: "boulder-city-nv",
    city: "Boulder City",
    state: "NV",
    region: "Nevada",
    highways: ["US-93", "NV-172"],
    description:
      "Boulder City and Hoover Dam approach truck repair. US-93 and industrial areas—we dispatch mobile units for commercial rigs.",
  },
  {
    slug: "spring-valley-nv",
    city: "Spring Valley",
    state: "NV",
    region: "Nevada",
    highways: ["I-215", "US-95", "Rainbow"],
    description:
      "Spring Valley and southwest Las Vegas mobile truck repair. I-215, US-95, and local fleet yards—24/7 dispatch.",
  },
  {
    slug: "sunrise-manor-nv",
    city: "Sunrise Manor",
    state: "NV",
    region: "Nevada",
    highways: ["US-95", "Lake Mead"],
    description:
      "Sunrise Manor and northeast Las Vegas truck service along US-95 and Lake Mead Blvd. Emergency roadside when minutes matter.",
  },
  {
    slug: "indian-springs-nv",
    city: "Indian Springs",
    state: "NV",
    region: "Nevada",
    highways: ["US-95", "NV-160"],
    description:
      "Indian Springs and Creech corridor mobile repair on US-95 and NV-160. Desert routes and base-area logistics—we respond 24/7.",
  },
  {
    slug: "goldfield-nv",
    city: "Goldfield",
    state: "NV",
    region: "Nevada",
    highways: ["US-95"],
    description:
      "US-95 truck repair for Goldfield and Esmeralda County. Long-haul breakdowns in remote stretches—call for mobile assistance.",
  },
  {
    slug: "north-las-vegas-nv",
    city: "North Las Vegas",
    state: "NV",
    region: "Nevada",
    highways: ["I-15", "US-93", "CC-215"],
    description:
      "North Las Vegas industrial and I-15 corridor service. Mobile units for NLV yards, CC-215, and Craig Road logistics hubs.",
  },
  {
    slug: "summerlin-south-nv",
    city: "Summerlin South",
    state: "NV",
    region: "Nevada",
    highways: ["I-215", "CC-215", "US-95"],
    description:
      "Summerlin South and west valley truck repair. I-215, CC-215, and Charleston-area fleets—mobile diagnostics and roadside help.",
  },
  {
    slug: "amargosa-valley-nv",
    city: "Amargosa Valley",
    state: "NV",
    region: "Nevada",
    highways: ["US-95", "NV-373"],
    description:
      "Amargosa Valley and US-95 south mobile truck service. Remote Nevada routes—we aim for fast ETA when you’re stranded.",
  },
  {
    slug: "logandale-nv",
    city: "Logandale",
    state: "NV",
    region: "Nevada (Moapa Valley)",
    highways: ["I-15", "NV-169", "Moapa Valley"],
    description:
      "Logandale, Moapa Valley, and I-15 truck repair. Serving NV-169, Logandale, and Overton-area drivers with 24/7 mobile response.",
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}

/** Navbar: representative subset + link to full list */
export const NAV_LOCATION_LINKS = [
  { label: "Las Vegas, NV", href: "/service-areas/las-vegas-nv" },
  { label: "Henderson, NV", href: "/service-areas/henderson-nv" },
  { label: "North Las Vegas, NV", href: "/service-areas/north-las-vegas-nv" },
  { label: "Paradise, NV", href: "/service-areas/paradise-nv" },
  { label: "Boulder City, NV", href: "/service-areas/boulder-city-nv" },
  { label: "Pahrump, NV", href: "/service-areas/pahrump-nv" },
  { label: "Mesquite, NV", href: "/service-areas/mesquite-nv" },
  { label: "Bakersfield, CA", href: "/service-areas/bakersfield-ca" },
];
