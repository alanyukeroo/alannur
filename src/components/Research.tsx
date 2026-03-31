import SectionHeading from "./SectionHeading";

interface ResearchData {
  overview: string;
  dissertationUrl: string;
  cvUrl: string;
}

export default function Research({ data }: { data: ResearchData }) {
  return (
    <section id="research" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <SectionHeading>Research Overview</SectionHeading>
      <div className="mt-8 text-base leading-7 text-neutral-800">
        <p>
          {data.overview.split("Context-Driven Implicit Interactions").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <a href={data.dissertationUrl} className="underline underline-offset-2 hover:text-neutral-500">
                  Context-Driven Implicit Interactions
                </a>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
        <p className="mt-4">
          Please see{" "}
          <a href={data.cvUrl} className="underline underline-offset-2 hover:text-neutral-500">
            Curriculum Vitae
          </a>{" "}
          for a full list of publications.
        </p>
      </div>
    </section>
  );
}
