import SectionHeading from "./SectionHeading";

interface AwardEntry {
  year: string;
  title: string;
}

export default function Awards({ data }: { data: AwardEntry[] }) {
  return (
    <section id="awards" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <SectionHeading>Awards &amp; Honors</SectionHeading>
      <div className="mt-8 space-y-5">
        {data.map((award, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-neutral-400 shrink-0 w-12 text-sm font-medium">{award.year}</span>
            <p className="text-sm text-neutral-800 leading-relaxed">{award.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
