import Image from "next/image";
import SectionHeading from "./SectionHeading";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  url: string;
}

export default function Team({ data }: { data: TeamMember[] }) {
  return (
    <section id="team" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <SectionHeading>Team</SectionHeading>
      <p className="mt-4 text-base leading-7 text-neutral-800 mb-10">
        <a href="#" className="underline underline-offset-2">My team is hiring</a>.
        I currently have positions for interns (all-year), senior ML engineers, and
        senior research scientists. I strongly encourage candidates from non-traditional
        and underrepresented backgrounds to apply.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {data.map((member, i) => (
          <a
            key={i}
            href={member.url}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-neutral-200 relative grayscale">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <h3 className="mt-4 text-sm font-medium underline underline-offset-2 group-hover:text-neutral-500">
              {member.name}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">{member.role}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
