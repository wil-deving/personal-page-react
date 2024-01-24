"use client";
import React, { useState } from "react";

interface Skill {
  name: String;
  image: String;
  type: "Frontend" | "Backend" | "Mobile";
  knowledgeMeasure: number;
}

interface SkillItemUI {
  name: String;
  image: String;
}

const SkillItem: React.FC<SkillItemUI> = ({ name }) => {
  return (
    <div>
      <span>{name}</span>
    </div>
  );
};

const Projects = () => {
  const skillsMock: Skill[] = [
    { type: "Frontend", image: "", name: "MOV", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "API", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "DEV", knowledgeMeasure: 1 },
  ];

  const [title, setTitle] = useState("Projects");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState<Skill[]>(skillsMock);

  const skillsByTypeList = (filteredList: Skill[]) =>
    filteredList.map((skill, index) => (
      <SkillItem key={index} name={skill.name} image={""} />
    ));

  const skillsByType = (type: String): Skill[] =>
    skills.filter((skill) => skill.type === type);

  return (
    <section>
      <h4>{title}</h4>
      <h2>Projects</h2>
      {skillsByTypeList(skillsByType("Frontend"))}

      {/**
       * Here contains...
       * all skills that I have
       */}
    </section>
  );
};

export default Projects;
