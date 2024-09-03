"use client";
import { PROJECTS } from "@/data/project";
import { Arrow } from "./svg";
import Image from "next/image";
import { useState } from "react";
import { ScrambleLink } from "./scramble";

export const Projects = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  return (
    <div className="flex justify-between items-start">
      <div className="flex-grow">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center text-[#db2777]">
              <span
                onMouseEnter={() =>
                  setCurrentImage(`/preview-imgs/${project.img}`)
                }
                onMouseLeave={() => setCurrentImage(null)}
              >
                <ScrambleLink text={project.name} link={project.link} />
              </span>
              <span>
                <Arrow />
              </span>
            </div>
            <h5>
              {project.created}
              <span className="italic"> {project.description}</span>
            </h5>
          </div>
        ))}
      </div>
      <div
        className={`w-40 h-40 -ml-[10%] -mt-[4%] relative flex-shrink-0 transition-opacity duration-300 ${currentImage ? "opacity-100" : "opacity-0"}`}
      >
        {currentImage && (
          <Image
            src={currentImage}
            alt="Project Preview"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
    </div>
  );
};
