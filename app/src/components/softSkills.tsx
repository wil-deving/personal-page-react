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

const SoftSkills = () => {
  const skillsMock: Skill[] = [
    { type: "Frontend", image: "", name: "JS", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Java", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Kotlin", knowledgeMeasure: 1 },
  ];

  const [title, setTitle] = useState("Soft Skills");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);

  const skillsByTypeList = (filteredList: Skill[]) =>
    filteredList.map((skill, index) => (
      <SkillItem key={index} name={skill.name} image={""} />
    ));

  const skillsByType = (type: String): Skill[] =>
    skills.filter((skill) => skill.type === type);

  return (
    <section>
      <h4>{title}</h4>
      <h2>Comunication</h2>
      {skillsByTypeList(skillsByType("Frontend"))}
      {/**
       * Here contains...
       * all soft skills that I have
       */}
    </section>
  );
};

export default SoftSkills;
