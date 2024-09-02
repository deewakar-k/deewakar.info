import { Logo } from "@/components/image";
import Navbar from "@/components/navbar";
import { Projects } from "@/components/projects";
import { About } from "@/data/about";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
          <div>
            <Logo />
          </div>
          <div className="mt-6">
            <Navbar />
          </div>
          <div>
            <h1 className="mt-10 text-xl font-bold">
              deewakar <span className="text-xs">- student and developer</span>
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
            <h1 className="font-extrabold">projects</h1>
            <div className="mt-8">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
