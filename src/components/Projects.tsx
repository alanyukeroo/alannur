"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

interface ProjectEntry {
  slug: string;
  title: string;
  description: string;
  year: string;
  role?: string;
  image: string;
  links: { label: string; url: string }[];
}

export default function Projects({ data }: { data: ProjectEntry[] }) {
  return (
    <section id="projects" className="py-16 px-6 md:px-10 max-w-5xl mx-auto">
      <SectionHeading>Projects &amp; Portfolio</SectionHeading>
      <p className="mt-4 text-base leading-7 text-neutral-800 mb-10">
        A selection of products, platforms, and ventures I&apos;ve built — from assistive
        technology and cybersecurity to AI-powered tools and Web3 platforms.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((project, i) => (
          <Link
            key={i}
            href={`/projects/${project.slug}`}
            className="group overflow-hidden bg-neutral-100 block hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-[4/3] relative bg-neutral-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="bg-neutral-900 text-white p-5">
              <h3 className="font-serif text-base font-bold uppercase tracking-wide text-center">
                {project.title}
              </h3>
              {project.role && (
                <p className="mt-1 text-xs text-neutral-400 text-center">
                  {project.role} &middot; {project.year}
                </p>
              )}
              <p className="mt-2 text-xs text-neutral-300 text-center leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="mt-3 flex justify-center gap-4 flex-wrap">
                {project.links.map((link, j) => (
                  <span
                    key={j}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(link.url, "_blank", "noopener,noreferrer");
                    }}
                    className="text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
