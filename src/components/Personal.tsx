import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";

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
      <Lightbox
        images={data.photos.map((p) => p.src)}
        alt="Personal photo"
        columns={4}
      />
    </section>
  );
}
