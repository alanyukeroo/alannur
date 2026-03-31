import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { loadContent } from "@/lib/content";

interface ProjectEntry {
  slug: string;
  title: string;
  description: string;
  year: string;
  role?: string;
  image: string;
  problem?: string;
  solution?: string;
  learning?: string;
  gallery?: string[];
  links: { label: string; url: string }[];
}

export function generateStaticParams() {
  const projects = loadContent<ProjectEntry[]>("projects.json");
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const projects = loadContent<ProjectEntry[]>("projects.json");
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.title} — Muhammad Alan Nur`,
      description: project.description,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = loadContent<ProjectEntry[]>("projects.json");
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const hasDetails = project.problem || project.solution || project.learning;
  const hasGallery = project.gallery && project.gallery.length > 0;

  return (
    <main className="pt-14 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mt-8 mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to all projects
        </Link>

        <div className="aspect-[16/9] relative bg-neutral-200 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        <div className="mt-10">
          <h1 className="font-serif font-black text-3xl md:text-4xl uppercase tracking-wide">
            {project.title}
          </h1>
          {project.role && (
            <p className="mt-2 text-sm text-neutral-500">
              {project.role} &middot; {project.year}
            </p>
          )}
          <p className="mt-6 text-base leading-7 text-neutral-800">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-700 transition-colors"
              >
                {link.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M3 9L9 3M9 3H4.5M9 3V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {hasDetails && (
          <div className="mt-16 space-y-12">
            {project.problem && (
              <div>
                <h2 className="font-serif font-black text-xl uppercase tracking-wide mb-4">
                  Problem &amp; Approach
                </h2>
                <p className="text-base leading-7 text-neutral-700">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="font-serif font-black text-xl uppercase tracking-wide mb-4">
                  Solutions &amp; Impact
                </h2>
                <p className="text-base leading-7 text-neutral-700">
                  {project.solution}
                </p>
              </div>
            )}
            {project.learning && (
              <div>
                <h2 className="font-serif font-black text-xl uppercase tracking-wide mb-4">
                  Learning &amp; Reflection
                </h2>
                <p className="text-base leading-7 text-neutral-700">
                  {project.learning}
                </p>
              </div>
            )}
          </div>
        )}

        {hasGallery && (
          <div className="mt-16">
            <h2 className="font-serif font-black text-xl uppercase tracking-wide mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.gallery!.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] relative bg-neutral-200 overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
