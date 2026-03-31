import { loadContent } from "@/lib/content";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";
import Personal from "@/components/Personal";

interface AboutData {
  name: string;
  title: string;
  photo: string;
  bio: string[];
  socialLinks: { type: string; url: string; label: string }[];
}

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
}

interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface ProjectEntry {
  slug: string;
  title: string;
  description: string;
  year: string;
  role?: string;
  image: string;
  links: { label: string; url: string }[];
}

interface AwardEntry {
  year: string;
  title: string;
}

interface SkillsData {
  topSkills: string[];
  aiAndData: string[];
  certifications: string[];
  languages: { language: string; proficiency: string }[];
}

interface PersonalData {
  intro: string;
  photos: { src: string; alt: string }[];
}

export default function Home() {
  const about = loadContent<AboutData>("about.json");
  const experience = loadContent<ExperienceEntry[]>("experience.json");
  const education = loadContent<EducationEntry[]>("education.json");
  const projects = loadContent<ProjectEntry[]>("projects.json");
  const awards = loadContent<AwardEntry[]>("awards.json");
  const skills = loadContent<SkillsData>("skills.json");
  const personal = loadContent<PersonalData>("personal.json");

  return (
    <>
      <Header name={about.name} />
      <main className="pt-14">
        <About data={about} />
        <Projects data={projects} />

        <section
          id="experience"
          className="py-16 px-6 md:px-10 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Experience data={experience} />
            <Education data={education} />
          </div>
        </section>

        <Skills data={skills} />
        <Awards data={awards} />
        <Personal data={personal} />

        <footer className="py-10 text-center text-sm text-neutral-400 border-t border-neutral-200 mt-10">
          &copy; {new Date().getFullYear()} {about.name}. All rights reserved.
        </footer>
      </main>
    </>
  );
}
