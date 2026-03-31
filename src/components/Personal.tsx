import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface PersonalData {
  intro: string;
  photos: { src: string; alt: string }[];
}

export default function Personal({ data }: { data: PersonalData }) {
  return (
    <section id="personal" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <SectionHeading>Personal</SectionHeading>
      <p className="mt-4 text-base leading-7 text-neutral-800 mb-10">
        {data.intro}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {data.photos.map((photo, i) => (
          <div key={i} className="aspect-square relative overflow-hidden bg-neutral-200">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
