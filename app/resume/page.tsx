import { Logo } from "@/components/image";
import Navbar from "@/components/navbar";
import { ScrambleText } from "@/components/scramble";

export default function Resume() {
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
          <div className="mt-10 text-yellow-200">
            <ScrambleText text="under construction!" />
          </div>
        </div>
      </div>
    </>
  );
}
