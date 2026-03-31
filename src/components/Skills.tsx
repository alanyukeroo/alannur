import SectionHeading from "./SectionHeading";

interface SkillsData {
  topSkills: string[];
  aiAndData: string[];
  certifications: string[];
  languages: { language: string; proficiency: string }[];
}

export default function Skills({ data }: { data: SkillsData }) {
  return (
    <section id="skills" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <SectionHeading>Technical Skills</SectionHeading>
          <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
            Software &amp; Systems
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.topSkills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
              >
                {skill}
              </span>
            ))}
          </div>
          <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
            AI &amp; Data
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.aiAndData.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-medium bg-neutral-900 text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading>Certifications</SectionHeading>
          <ul className="mt-8 space-y-2 text-sm text-neutral-700">
            {data.certifications.map((cert, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-neutral-400 mt-1 shrink-0">&#8226;</span>
                {cert}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-serif font-bold text-sm uppercase tracking-wider text-neutral-500">
            Languages
          </h3>
          <div className="mt-4 space-y-3">
            {data.languages.map((lang, i) => (
              <div key={i}>
                <p className="text-sm font-medium text-neutral-800">{lang.language}</p>
                <p className="text-xs text-neutral-500">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
