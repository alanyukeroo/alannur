import SectionHeading from "./SectionHeading";

interface PressEntry {
  year: string;
  outlet: string;
  title: string;
  url: string;
}

export default function Press({ data }: { data: PressEntry[] }) {
  return (
    <div>
      <SectionHeading>Selected Press</SectionHeading>
      <div className="mt-8 space-y-1.5 text-sm">
        {data.map((entry, i) => (
          <p key={i}>
            <span className="text-neutral-500">{entry.year}</span>{" "}
            <span className="text-neutral-700 italic">{entry.outlet}:</span>{" "}
            <a
              href={entry.url}
              className="press-link text-neutral-800 hover:text-neutral-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              &ldquo;{entry.title}&rdquo;
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
