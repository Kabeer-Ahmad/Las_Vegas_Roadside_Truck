import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityPageTemplate from "@/app/components/ui/CityPageTemplate";
import {
  SERVICE_AREAS,
  getServiceAreaBySlug,
} from "@/app/service-areas-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return { title: "Service Area" };
  return {
    title: `Truck & Trailer Repair in ${area.city}, ${area.state} | Las Vegas 24 Hour Roadside Truck Services`,
    description: area.description,
  };
}

export default async function ServiceAreaCityPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  const regionLabel =
    area.state === "CA"
      ? "Central California and Kern County"
      : "the greater Las Vegas area and Southern Nevada";

  return (
    <CityPageTemplate
      city={area.city}
      state={area.state}
      description={area.description}
      highways={area.highways}
      regionLabel={regionLabel}
    />
  );
}
