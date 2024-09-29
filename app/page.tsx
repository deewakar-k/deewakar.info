import { Logo } from "@/components/image";
import Navbar from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Scramble } from "@/components/scramble";
import Skills from "@/components/skills";
import { SkillsIcons } from "@/components/skillsicons";
import { About } from "@/data/about";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
          <div className="mt-6">
            <Navbar />
          </div>
          <div>
            <h1 className="mt-10 text-xl font-bold">
              <Scramble text="deewakar" placeholder="deewakar" />
              <span className="text-xs">
                [-] student and full-stack developer
              </span>
            </h1>
          </div>
          <div className="font-mono text-xs mt-6 border-b border-white border-opacity-10 pb-12">
            <p>{About.paragraph1}</p>
            <br />
            <p>{About.paragraph2}</p>
            <br />
            <p>{About.paragraph3}</p>
          </div>
          <div className="mt-6 text-xs font-mono">
            <h1 className="font-extrabold">
              <Scramble text="skills" placeholder="skills" />
            </h1>
            <div className="mt-2">
              <SkillsIcons />
            </div>
            <div className="mt-4">
              <Skills />
            </div>
            <h1 className="font-extrabold mt-8">
              <Scramble text="projects" placeholder="projects" />
            </h1>
            <div className="mt-4">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
