import SectionHeading from "./SectionHeading";

interface TeachingData {
  courses: string[];
  reviewing: { venue: string; years: string }[];
  committees: { year: string; role: string }[];
}

export default function Teaching({ data }: { data: TeachingData }) {
  return (
    <section id="teaching" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <SectionHeading>Teaching</SectionHeading>
          <ul className="mt-8 space-y-2 text-sm text-neutral-800">
            {data.courses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading>Reviewing (100+ Papers)</SectionHeading>
          <div className="mt-8 space-y-1.5 text-sm">
            {data.reviewing.map((entry, i) => (
              <div key={i}>
                <span className="text-neutral-800">{entry.venue}</span>{" "}
                <span className="text-neutral-500">{entry.years}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-serif font-bold text-sm uppercase tracking-wider text-neutral-500">
            Other Features
          </h3>
          <div className="mt-4 space-y-1.5 text-sm">
            {data.committees.map((entry, i) => (
              <div key={i}>
                <span className="text-neutral-500">{entry.year}</span>{" "}
                <span className="text-neutral-800">{entry.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
