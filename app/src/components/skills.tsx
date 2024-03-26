"use client";
import {
  Box,
  Center,
  HStack,
  Heading,
  Show,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { PiAngularLogo } from "react-icons/pi";
import { SiVuedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { SiSpring } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { SiJetpackcompose } from "react-icons/si";
import { BsCloudCheckFill } from "react-icons/bs";
import { VscGear } from "react-icons/vsc";

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
      case "React":
        return <FaReact color="#4986e7" size={"60px"} />;
      case "Angular":
        return <PiAngularLogo color="#dd1b16" size={"60px"} />;
      case "Vue":
        return <SiVuedotjs color="#42b883" size={"60px"} />;
      case "Typescript":
        return <SiTypescript color="#007acc" size={"60px"} />;
      case "Javascript":
        return <IoLogoJavascript color="#f7df1e" size={"60px"} />;
      case "Java":
        return <FaJava color="#f89820" size={"60px"} />;
      case "Kotlin":
        return <TbBrandKotlin color="#B125EA" size={"60px"} />;
      case "Spring":
        return <SiSpring color="#9BCF53" size={"60px"} />;
      case "Microservicios":
        return <GrServices color="#344955" size={"60px"} />;
      case "Servicios en la nube":
        return <BsCloudCheckFill color="#40A2E3" size={"60px"} />;
      case "SQL":
        return <FaDatabase color="#1B3C73" size={"60px"} />;
      case "Android":
        return <ImAndroid color="#3DDC84" size={"60px"} />;
      case "API":
        return <VscGear color="#176B87" size={"60px"} />;
      case "Jetpack compose":
        return <SiJetpackcompose color="#070F2B" size={"60px"} />;
      // Add more icons
      default:
        return null;
    }
  };

  return (
    <>
      <Show below="sm">
        <Text fontSize="sm">{name}</Text>
      </Show>
      <Show above="md">
        <Text fontSize="lg">{name}</Text>
      </Show>
      {iconSkill()}
    </>
  );
};

const Skills: React.FC<SkillsProps> = ({ title }) => {
  const skillsMock: Skill[] = [
    { type: "Frontend", image: "", name: "React", knowledgeMeasure: 1 },
    { type: "Frontend", image: "", name: "Angular", knowledgeMeasure: 1 },
    { type: "Frontend", image: "", name: "Vue", knowledgeMeasure: 1 },
    { type: "Frontend", image: "", name: "Typescript", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Java", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Kotlin", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Spring", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "Microservicios", knowledgeMeasure: 1 },
    { type: "Backend", image: "", name: "SQL", knowledgeMeasure: 1 },
    {
      type: "Backend",
      image: "",
      name: "Servicios en la nube",
      knowledgeMeasure: 1,
    },
    { type: "Mobile", image: "", name: "Android", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "API", knowledgeMeasure: 1 },
    { type: "Mobile", image: "", name: "Jetpack compose", knowledgeMeasure: 1 },
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
        <Heading marginLeft={2} marginBottom={6} as="h4" size="md">
          {title}
        </Heading>
      </Show>
      <Show above="md">
        <Center bg="white" p="4" color="black">
          <Heading marginLeft={6} marginBottom={12} as="h3" size="lg">
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
          <Heading marginLeft={0} marginBottom={4} as="h4" size="md">
            Frontend
          </Heading>
        </Center>
      </Show>
      <Box marginBottom={12}>
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
          <Heading marginLeft={0} marginBottom={4} as="h4" size="md">
            Backend
          </Heading>
        </Center>
      </Show>
      <Box marginBottom={12}>
        <Center bg="white" p="4" color="black">
          {skillsByTypeList(skillsByType("Backend"))}
        </Center>
      </Box>

      {/** Mobile Skills */}
      <Show below="sm">
        <Heading marginLeft={2} marginBottom={2} as="h5" size="sm">
          Mobile
        </Heading>
      </Show>
      <Show above="md">
        <Center bg="white" p="4" color="black">
          <Heading marginLeft={0} marginBottom={4} as="h4" size="md">
            Mobile
          </Heading>
        </Center>
      </Show>
      <Box marginBottom={12}>
        <Center bg="white" p="4" color="black">
          {skillsByTypeList(skillsByType("Mobile"))}
        </Center>
      </Box>
    </section>
  );
};

export default Skills;
