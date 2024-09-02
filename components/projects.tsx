"use client";

import { PROJECTS } from "@/data/project";
import { Arrow } from "./svg";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (currentImage) {
      setTransition(true);
      const timer = setTimeout(() => {
        setTransition(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [currentImage]);

  return (
    <div className="relative flex flex-col gap-4">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => setCurrentImage(`/preview-imgs/${project.img}`)}
          onMouseLeave={() => setCurrentImage(null)}
        >
          <div className="flex items-center text-[#db2777]">
            <a
              href={project.link}
              target="_blank"
              className="flex items-center"
            >
              <h1>{project.name}</h1>
              <span className="pb-1">
                <Arrow />
              </span>
            </a>
          </div>
          <h5>
            {project.created}
            <span className="italic"> {project.description}</span>
          </h5>

          <div
            className={`fixed top-[60%] right-1/3 w-72 h-72 overflow-hidden ${
              transition ? "transition-transform" : ""
            } ${
              currentImage ? "opacity-100 slide-up" : "opacity-0 slide-down"
            } hidden md:block`}
          >
            {currentImage && (
              <Image
                src={currentImage}
                alt="Project Preview"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
