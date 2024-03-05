"use client";
import {
  AbsoluteCenter,
  Box,
  Center,
  HStack,
  Heading,
  Show,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcAndroidOs } from "react-icons/fc";
import { TbBrandKotlin } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

interface SkillsProps {
  title: string;
}

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
      <Text fontSize="xl">{name}</Text>
      {iconSkill()}
    </>
  );
};

const Skills: React.FC<SkillsProps> = ({ title }) => {
  const skillsMock: Skill[] = [
    { type: "Frontend", image: "", name: "Javascript", knowledgeMeasure: 1 },
    { type: "Frontend", image: "", name: "Javascript", knowledgeMeasure: 1 },
    { type: "Frontend", image: "", name: "Javascript", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Java", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Java", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Java", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Android", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Android", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Android", knowledgeMeasure: 1 },
  ];

  // const [title, setTitle] = useState("Skills");
  // const [description, setDescription] = useState("");
  const [skills, setSkills] = useState<Skill[]>(skillsMock);

  const skillsByTypeList = (filteredList: Skill[]) => (
    <>
      <Show below="sm">
        <VStack>
          {filteredList.map((skill, index) => (
            <HStack key={index} marginBottom={4}>
              <SkillItem name={skill.name} image={skill.image} />
            </HStack>
          ))}
        </VStack>
      </Show>

      <Show above="md">
        <HStack>
          {filteredList.map((skill, index) => (
            <HStack key={index} marginRight={8} marginLeft={8}>
              <SkillItem name={skill.name} image={skill.image} />
            </HStack>
          ))}
        </HStack>
      </Show>
    </>
  );

  const skillsByType = (type: String): Skill[] =>
    skills.filter((skill) => skill.type === type);

  return (
    <section>
      <Show below="sm">
        <Heading marginLeft={2} marginBottom={2} as="h4" size="md">
          {title}
        </Heading>
      </Show>
      <Show above="md">
        <Center bg="white" p="4" color="black">
          <Heading marginLeft={6} marginBottom={4} as="h3" size="lg">
            {title}
          </Heading>
        </Center>
      </Show>

      {/** Frontend Skills */}

      <Show below="sm">
        <Heading marginLeft={2} marginBottom={2} as="h5" size="sm">
          Frontend
        </Heading>
      </Show>
      <Show above="md">
        <Center bg="white" p="4" color="black">
          <Heading marginLeft={6} marginBottom={4} as="h4" size="md">
            Frontend
          </Heading>
        </Center>
      </Show>
      <Box marginBottom={10}>
        <Center bg="white" p="4" color="black">
          {skillsByTypeList(skillsByType("Frontend"))}
        </Center>
      </Box>

      {/** Backend Skills */}
      <Show below="sm">
        <Heading marginLeft={2} marginBottom={2} as="h5" size="sm">
          Backend
        </Heading>
      </Show>
      <Show above="md">
        <Center bg="white" p="4" color="black">
          <Heading marginLeft={6} marginBottom={4} as="h4" size="md">
            Backend
          </Heading>
        </Center>
      </Show>
      <Box marginBottom={10}>
        <Center bg="white" p="4" color="black">
          {skillsByTypeList(skillsByType("Backend"))}
        </Center>
      </Box>

      {/** Backend Skills */}
      <Show below="sm">
        <Heading marginLeft={2} marginBottom={2} as="h5" size="sm">
          Mobile
        </Heading>
      </Show>
      <Show above="md">
        <Center bg="white" p="4" color="black">
          <Heading marginLeft={6} marginBottom={4} as="h4" size="md">
            Mobile
          </Heading>
        </Center>
      </Show>
      <Box marginBottom={10}>
        <Center bg="white" p="4" color="black">
          {skillsByTypeList(skillsByType("Mobile"))}
        </Center>
      </Box>
    </section>
  );
};

export default Skills;
