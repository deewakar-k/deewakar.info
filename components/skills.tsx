// components/Skills.js
"use client";
import React, { useState } from "react";
import { skills } from "../data/skills";
import styles from "./skills.module.css";

const Skills = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      {skills.map((category, index) => (
        <div key={category.category}>
          <div className={styles.summary} onClick={() => handleToggle(index)}>
            {openIndex === index ? "[-]" : "[+]"} {category.category}
          </div>
          {openIndex === index && (
            <ul className={styles.skillsList}>
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Skills;
