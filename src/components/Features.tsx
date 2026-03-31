import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface FeatureEntry {
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function Features({ data }: { data: FeatureEntry[] }) {
  return (
    <section id="features" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <SectionHeading>Features Shipped</SectionHeading>
      <p className="mt-4 text-base leading-7 text-neutral-800 mb-10">
        We work closely with teams across the organization. Here are select features and
        experiences where we&apos;ve made contributions:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((feature, i) => (
          <a
            key={i}
            href={feature.url}
            className="group block overflow-hidden bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-colors"
          >
            <div className="aspect-[16/10] relative bg-neutral-200">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-bold uppercase tracking-wide text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 text-center">
                {feature.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
