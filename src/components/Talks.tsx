import SectionHeading from "./SectionHeading";

interface TalkEntry {
  year: string;
  venue: string;
  type: string;
}

export default function Talks({ data }: { data: TalkEntry[] }) {
  return (
    <section id="talks" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <SectionHeading>Invited Talks</SectionHeading>
      <div className="mt-8 space-y-1.5 text-sm">
        {data.map((talk, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-neutral-500 shrink-0 w-12">{talk.year}</span>
            <span className="text-neutral-800">
              {talk.venue}, <span className="italic">{talk.type}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
