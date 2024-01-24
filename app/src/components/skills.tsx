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

const Skills = () => {
  const skillsMock: Skill[] = [
    { type: "Frontend", image: "", name: "JS", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Java", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Kotlin", knowledgeMeasure: 1 },
  ];

  const [title, setTitle] = useState("Skills");
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
      <h2>Frontend</h2>
      {skillsByTypeList(skillsByType("Frontend"))}
      <h2>Backend</h2>
      {skillsByTypeList(skillsByType("Backend"))}
      <h2>Mobile</h2>
      {skillsByTypeList(skillsByType("Mobile"))}
      {/**
       * Here contains...
       * all skills that I have
       */}
    </section>
  );
};

export default Skills;
