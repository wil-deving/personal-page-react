"use client";
import {
  AbsoluteCenter,
  Box,
  Center,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcAndroidOs } from "react-icons/fc";
import { TbBrandKotlin } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

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

const SkillItem: React.FC<SkillItemUI> = ({ name, image }) => {
  const iconSkill = () => {
    switch (name) {
      case "Javascript":
        return <IoLogoJavascript color="yellow" size={"60px"} />;
      case "Java":
        return <FaJava color="blue" size={"60px"} />;
      case "Android":
        return <FcAndroidOs size={"60px"} />;
      // Add more icons
      default:
        return null;
    }
  };

  return (
    <>
      <Heading as="h6" size="sm">
        {name}
      </Heading>
      {iconSkill()}
    </>
  );
};

const Skills = () => {
  const skillsMock: Skill[] = [
    { type: "Frontend", image: "", name: "Javascript", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Java", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Android", knowledgeMeasure: 1 },
  ];

  const [title, setTitle] = useState("Skills");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState<Skill[]>(skillsMock);

  const skillsByTypeList = (filteredList: Skill[]) => (
    <VStack>
      {filteredList.map((skill, index) => (
        <HStack key={index}>
          <SkillItem name={skill.name} image={skill.image} />
        </HStack>
      ))}
    </VStack>
  );

  const skillsByType = (type: String): Skill[] =>
    skills.filter((skill) => skill.type === type);

  return (
    <section>
      <h4>{title}</h4>
      <h2>Frontend</h2>
      <Center bg="white" p="4" color="black">
        {skillsByTypeList(skillsByType("Frontend"))}
      </Center>
      <h2>Backend</h2>
      <Center bg="white" p="4" color="black">
        {skillsByTypeList(skillsByType("Backend"))}
      </Center>
      <h2>Mobile</h2>
      <Center bg="white" p="4" color="black">
        {skillsByTypeList(skillsByType("Mobile"))}
      </Center>
    </section>
  );
};

export default Skills;
