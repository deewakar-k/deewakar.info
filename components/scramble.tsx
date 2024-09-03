"use client";

import React, { useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import { Arrow } from "./svg";

interface ScrambleProps {
  text: string;
  placeholder: string;
}

export const Scramble = ({ text, placeholder }: ScrambleProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const { ref } = useScramble({
    text: text,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return <>{isMounted ? <p ref={ref} /> : <p>{placeholder}</p>}</>;
};

export const ScrambleText = ({
  text,
  cipherText,
  isActive,
}: {
  text: string;
  cipherText: string;
  isActive: boolean;
}) => {
  const { ref, replay } = useScramble({
    text: isActive ? cipherText : text,
  });

  return (
    <span
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
      className={isActive ? "text-[#db2777]" : ""}
    >
      {isActive ? cipherText : text}
    </span>
  );
};

export const ScrambleLink = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  const { ref, replay } = useScramble({ text: text });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex arrow-wrapper items-center hover:text-[#db2777]"
      onMouseEnter={replay}
      onFocus={replay}
      ref={ref}
    >
      <span>{text}</span>
    </a>
  );
};
