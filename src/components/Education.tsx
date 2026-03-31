import SectionHeading from "./SectionHeading";

interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export default function Education({ data }: { data: EducationEntry[] }) {
  return (
    <div>
      <SectionHeading>Education</SectionHeading>
      <div className="mt-8 space-y-6">
        {data.map((entry, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-xs font-bold text-neutral-500">
                {entry.institution.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-sm">{entry.institution}</h3>
              <p className="text-sm text-neutral-600">{entry.degree}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{entry.period}</p>
              {entry.description && (
                <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                  {entry.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
